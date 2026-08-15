const TEAM_PATH = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/dal";

type EspnCompetitor = {
  homeAway: "home" | "away";
  winner?: boolean;
  team: { abbreviation: string; displayName: string };
  score?: { value: number };
};

type EspnEvent = {
  date: string;
  competitions: Array<{
    competitors: EspnCompetitor[];
    status: { type: { completed: boolean } };
  }>;
};

export type CowboysGame = {
  opponent: string;
  date: string;
  home: boolean;
};

export type CowboysResult = CowboysGame & {
  result: "W" | "L" | "T";
  teamScore: number;
  opponentScore: number;
};

export type CowboysStatusData =
  | { record: string; mode: "upcoming"; upcoming: CowboysGame }
  | { record: string; mode: "previous"; previous: CowboysResult }
  | { record: string; mode: "none" };

type ParsedEvent = {
  opponent: string;
  date: string;
  home: boolean;
  completed: boolean;
  us: EspnCompetitor;
  them: EspnCompetitor;
};

async function fetchJson(url: string): Promise<any> {
  try {
    const res = await fetch(url, { next: { revalidate: 900 } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchSchedule(season?: number): Promise<EspnEvent[]> {
  const url = season ? `${TEAM_PATH}/schedule?season=${season}` : `${TEAM_PATH}/schedule`;
  const data = await fetchJson(url);
  return data?.events ?? [];
}

async function fetchRecord(): Promise<string> {
  const data = await fetchJson(TEAM_PATH);
  return data?.team?.record?.items?.[0]?.summary ?? "—";
}

function parseEvent(event: EspnEvent): ParsedEvent | null {
  const comp = event.competitions?.[0];
  if (!comp) return null;
  const us = comp.competitors.find((c) => c.team.abbreviation === "DAL");
  const them = comp.competitors.find((c) => c.team.abbreviation !== "DAL");
  if (!us || !them) return null;
  return {
    opponent: them.team.displayName,
    date: event.date,
    home: us.homeAway === "home",
    completed: comp.status?.type?.completed ?? false,
    us,
    them,
  };
}

function toGame(e: ParsedEvent): CowboysGame {
  return { opponent: e.opponent, date: e.date, home: e.home };
}

function toResult(e: ParsedEvent): CowboysResult {
  const result: CowboysResult["result"] = e.us.winner === true ? "W" : e.us.winner === false ? "L" : "T";
  return {
    ...toGame(e),
    result,
    teamScore: e.us.score?.value ?? 0,
    opponentScore: e.them.score?.value ?? 0,
  };
}

export async function getCowboysStatus(): Promise<CowboysStatusData> {
  const [record, currentSchedule] = await Promise.all([fetchRecord(), fetchSchedule()]);
  const parsed = currentSchedule.map(parseEvent).filter((e): e is ParsedEvent => e !== null);

  const upcoming = parsed
    .filter((e) => !e.completed)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

  let previous = parsed
    .filter((e) => e.completed)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  // Preseason / new league year: this season has no completed games yet — fall back to last season's finale.
  if (!previous) {
    const lastSeasonSchedule = await fetchSchedule(new Date().getFullYear() - 1);
    const parsedPrev = lastSeasonSchedule.map(parseEvent).filter((e): e is ParsedEvent => e !== null);
    previous = parsedPrev
      .filter((e) => e.completed)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  }

  if (!upcoming && !previous) return { record, mode: "none" };
  if (upcoming && !previous) return { record, mode: "upcoming", upcoming: toGame(upcoming) };
  if (!upcoming && previous) return { record, mode: "previous", previous: toResult(previous) };

  const timeToUpcoming = new Date(upcoming!.date).getTime() - Date.now();
  const timeSincePrevious = Date.now() - new Date(previous!.date).getTime();

  return timeToUpcoming <= timeSincePrevious
    ? { record, mode: "upcoming", upcoming: toGame(upcoming!) }
    : { record, mode: "previous", previous: toResult(previous!) };
}
