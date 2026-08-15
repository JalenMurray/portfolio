"use client";

import { useEffect, useRef, useState } from "react";
import experience from "@/content/experience.json";
import type { ProjectMeta } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ExperienceEntryCard, { type ExperienceEntry } from "@/components/ExperienceEntry";

export type CommandTarget = "projects" | "about" | "contact";

const EXPERIENCE = experience as ExperienceEntry[];

type TextKind = "prompt" | "output" | "heading" | "subheading" | "path";
type Line =
  | { id: number; kind: TextKind; text: string }
  | { id: number; kind: "project"; project: ProjectMeta }
  | { id: number; kind: "experience"; entry: ExperienceEntry }
  | { id: number; kind: "image"; src: string; alt: string };

// Content appended to the scrollback, before an id is assigned.
type DistributiveOmit<T, K extends keyof any> = T extends unknown ? Omit<T, K> : never;
type Appendable = DistributiveOmit<Line, "id">;

const TYPED_COMMAND = "whoami";

const TARGET_LABEL: Record<CommandTarget, string> = {
  projects: "projects",
  about: "resume",
  contact: "contact",
};

const HELP_LINES = [
  "available commands:",
  "  whoami          show identity",
  "  whoami --image  show identity with headshot",
  "  projects        open the projects window",
  "  resume          open the resume window",
  "  contact         open the contact window",
  "  --help          show this message",
];

const BIO_TEXT =
  "Full-stack software engineer with a background spanning consulting and university research. Over 4 years, I've built everything from internal tooling and RESTful APIs to enterprise SaaS platforms and AI-assisted data pipelines — leveraging cloud platforms like AWS and GCP to ship reliable, scalable software.";

function out(text: string): Appendable {
  return { kind: "output", text };
}

type CommandResult = { kind: "output"; lines: Appendable[] } | { kind: "confirm"; target: CommandTarget };

function getResponse(cmd: string): CommandResult {
  const [base, ...args] = cmd.split(/\s+/).filter(Boolean);

  switch (base) {
    case "whoami": {
      const lines: Appendable[] = [];
      if (args.includes("--image")) {
        lines.push({ kind: "image", src: "/headshot.jpg", alt: "Jalen Murray" });
      }
      lines.push(
        { kind: "heading", text: "Jalen — Full-stack engineer" },
        { kind: "subheading", text: BIO_TEXT }
      );
      return { kind: "output", lines };
    }
    case "projects":
      return { kind: "confirm", target: "projects" };
    case "resume":
      return { kind: "confirm", target: "about" };
    case "contact":
      return { kind: "confirm", target: "contact" };
    case "help":
    case "--help":
      return { kind: "output", lines: HELP_LINES.map(out) };
    default:
      return { kind: "output", lines: [out(`command not found: ${cmd}`), out("type --help to see options")] };
  }
}

function printInline(target: CommandTarget, projects: ProjectMeta[]): Appendable[] {
  if (target === "projects") {
    if (projects.length === 0) return [out("no projects found.")];
    return [
      { kind: "path", text: "~/projects/" },
      ...projects.map((p): Appendable => ({ kind: "project", project: p })),
    ];
  }
  if (target === "about") {
    return [
      { kind: "path", text: "~/experience/" },
      ...EXPERIENCE.map((job): Appendable => ({ kind: "experience", entry: job })),
    ];
  }
  return [out("no problem — type contact again anytime to open the form.")];
}

function renderLine(line: Line) {
  switch (line.kind) {
    case "prompt":
      return (
        <p
          key={line.id}
          className="mono"
          style={{ fontSize: "13px", color: "var(--accent-teal)", margin: "0 0 4px" }}
        >
          {line.text}
        </p>
      );
    case "path":
      return (
        <p
          key={line.id}
          className="mono"
          style={{ fontSize: "13px", color: "var(--accent-teal)", margin: "8px 0 8px" }}
        >
          {line.text}
        </p>
      );
    case "heading":
      return (
        <h1 key={line.id} style={{ fontSize: "26px", fontWeight: 500, margin: "4px 0 4px" }}>
          {line.text}
        </h1>
      );
    case "subheading":
      return (
        <p key={line.id} style={{ fontSize: "14px", color: "#9A9D9F", margin: "0 0 12px" }}>
          {line.text}
        </p>
      );
    case "project":
      return <ProjectCard key={line.id} {...line.project} />;
    case "experience":
      return <ExperienceEntryCard key={line.id} job={line.entry} />;
    case "image":
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <img
          key={line.id}
          src={line.src}
          alt={line.alt}
          style={{
            width: "112px",
            height: "112px",
            objectFit: "cover",
            borderRadius: "8px",
            border: "0.5px solid var(--text-muted)",
            margin: "4px 0 12px",
            display: "block",
          }}
        />
      );
    default:
      return (
        <p
          key={line.id}
          className="mono"
          style={{ fontSize: "13px", color: "var(--text-primary)", margin: "0 0 4px", whiteSpace: "pre-wrap" }}
        >
          {line.text}
        </p>
      );
  }
}

export default function Terminal({
  onCommand,
  projects,
}: {
  onCommand: (target: CommandTarget) => void;
  projects: ProjectMeta[];
}) {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [typed, setTyped] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [pending, setPending] = useState<CommandTarget | null>(null);
  const draftRef = useRef("");
  const idCounter = useRef(0);
  const hasRun = useRef(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function nextId() {
    idCounter.current += 1;
    return idCounter.current;
  }

  function toLines(items: Appendable[]): Line[] {
    return items.map((l) => ({ ...l, id: nextId() }) as Line);
  }

  function runCommand(rawCmd: string) {
    const cmd = rawCmd.trim();
    const promptLine: Line = { id: nextId(), kind: "prompt", text: `jalen@portfolio:~$ ${cmd}` };

    if (cmd === "") {
      setLines((prev) => [...prev, promptLine]);
      return;
    }

    const result = getResponse(cmd.toLowerCase());
    if (result.kind === "confirm") {
      const askLine: Line = { id: nextId(), kind: "output", text: "Open new window? (y/N)" };
      setLines((prev) => [...prev, promptLine, askLine]);
      setPending(result.target);
    } else {
      setLines((prev) => [...prev, promptLine, ...toLines(result.lines)]);
    }

    setHistory((prev) => (prev[prev.length - 1] === cmd ? prev : [...prev, cmd]));
    setHistoryIndex(-1);
    draftRef.current = "";
  }

  function runConfirmation(rawAnswer: string) {
    const answer = rawAnswer.trim();
    const echoLine: Line = { id: nextId(), kind: "prompt", text: `? ${answer}` };
    const isYes = answer.toLowerCase() === "y" || answer.toLowerCase() === "yes";
    const target = pending as CommandTarget;

    const responseLines: Appendable[] = isYes
      ? [out(`Opening ${TARGET_LABEL[target]} window...`)]
      : printInline(target, projects);

    setLines((prev) => [...prev, echoLine, ...toLines(responseLines)]);
    setPending(null);

    if (isYes) onCommand(target);
  }

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      runCommand(TYPED_COMMAND);
      setIntroDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(TYPED_COMMAND.slice(0, i));
      if (i >= TYPED_COMMAND.length) {
        clearInterval(interval);
        setTimeout(() => {
          runCommand(TYPED_COMMAND);
          setIntroDone(true);
        }, 200);
      }
    }, 90);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [lines]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pending) {
      runConfirmation(input);
    } else {
      runCommand(input);
    }
    setInput("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      if (historyIndex === -1) {
        draftRef.current = input;
        const idx = history.length - 1;
        setHistoryIndex(idx);
        setInput(history[idx]);
      } else if (historyIndex > 0) {
        const idx = historyIndex - 1;
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < history.length - 1) {
        const idx = historyIndex + 1;
        setHistoryIndex(idx);
        setInput(history[idx]);
      } else {
        setHistoryIndex(-1);
        setInput(draftRef.current);
      }
    }
  }

  return (
    <div onClick={() => inputRef.current?.focus()}>
      {!introDone ? (
        <p className="mono" style={{ fontSize: "13px", color: "var(--accent-teal)", margin: "0 0 6px" }}>
          jalen@portfolio:~$ {typed}
          <span
            aria-hidden
            className="cursor"
            style={{
              display: "inline-block",
              width: "7px",
              height: "13px",
              marginLeft: "2px",
              background: "var(--accent-teal)",
              verticalAlign: "text-bottom",
            }}
          />
        </p>
      ) : (
        <>
          {lines.map(renderLine)}
          <form onSubmit={handleSubmit} className="mono" style={{ display: "flex", gap: "6px", fontSize: "13px" }}>
            <span style={{ color: "var(--accent-teal)" }}>{pending ? "?" : "$"}</span>
            <input
              ref={inputRef}
              aria-label="Terminal command input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={pending ? "y/N" : "type --help to see options"}
              autoFocus
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              spellCheck={false}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--text-primary)",
                fontFamily: "inherit",
                fontSize: "inherit",
                flex: 1,
              }}
            />
          </form>
          <div ref={bottomRef} />
        </>
      )}
    </div>
  );
}
