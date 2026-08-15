"use client";

import { useEffect, useState } from "react";
import Window, { type Position, type Size } from "./Window";
import Terminal, { type CommandTarget } from "./Terminal";
import ActivityFeed from "./ActivityFeed";
import ProjectsPanel from "./panels/ProjectsPanel";
import AboutPanel from "./panels/AboutPanel";
import ContactPanel from "./panels/ContactPanel";
import type { ProjectMeta } from "@/lib/projects";

type Activity = { type: string; repo: string; date: string };

type PermanentWindowId = "terminal" | "activity";
type WindowId = PermanentWindowId | CommandTarget;

const PERMANENT_WINDOWS: PermanentWindowId[] = ["terminal", "activity"];

// Positioned below both permanent windows (terminal bottom ~396, activity bottom ~400) so opening
// one doesn't bury the terminal you just clicked a command in.
const DYNAMIC_WINDOW_CONFIG: Record<
  CommandTarget,
  { title: string; defaultPosition: Position; defaultSize: Size; minWidth: number; minHeight: number }
> = {
  projects: {
    title: "jalen@portfolio — projects",
    defaultPosition: { x: 100, y: 400 },
    defaultSize: { width: 460, height: 320 },
    minWidth: 320,
    minHeight: 220,
  },
  about: {
    title: "jalen@portfolio — resume",
    defaultPosition: { x: 150, y: 400 },
    defaultSize: { width: 460, height: 320 },
    minWidth: 320,
    minHeight: 220,
  },
  contact: {
    title: "jalen@portfolio — contact",
    defaultPosition: { x: 200, y: 400 },
    defaultSize: { width: 420, height: 340 },
    minWidth: 320,
    minHeight: 280,
  },
};

// Below this width, dragging windows around does more harm than good — fall back to a stacked, static layout.
const DESKTOP_BREAKPOINT = 860;

export default function Desktop({ activity, projects }: { activity: Activity[]; projects: ProjectMeta[] }) {
  const [order, setOrder] = useState<WindowId[]>([...PERMANENT_WINDOWS]);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    function checkWidth() {
      setInteractive(window.innerWidth >= DESKTOP_BREAKPOINT);
    }
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  function focus(id: WindowId) {
    setOrder((o) => (o[o.length - 1] === id ? o : [...o.filter((x) => x !== id), id]));
  }

  function openWindow(id: CommandTarget) {
    setOrder((o) => (o.includes(id) ? [...o.filter((x) => x !== id), id] : [...o, id]));
  }

  function closeWindow(id: CommandTarget) {
    setOrder((o) => o.filter((x) => x !== id));
  }

  return (
    <div
      style={{
        position: "relative",
        minHeight: interactive ? "calc(100vh - 40px)" : "auto",
        padding: interactive ? 0 : "40px 20px",
      }}
    >
      <Window
        title="jalen@portfolio — zsh"
        defaultPosition={{ x: 56, y: 56 }}
        defaultSize={{ width: 560, height: 340 }}
        minWidth={340}
        minHeight={220}
        zIndex={10 + order.indexOf("terminal")}
        interactive={interactive}
        onFocus={() => focus("terminal")}
      >
        <Terminal onCommand={openWindow} />
      </Window>

      <Window
        title="git — recent activity"
        defaultPosition={{ x: 660, y: 140 }}
        defaultSize={{ width: 380, height: 260 }}
        minWidth={280}
        minHeight={160}
        zIndex={10 + order.indexOf("activity")}
        interactive={interactive}
        onFocus={() => focus("activity")}
      >
        <ActivityFeed activity={activity} />
      </Window>

      {(Object.keys(DYNAMIC_WINDOW_CONFIG) as CommandTarget[]).map((id) => {
        if (!order.includes(id)) return null;
        const config = DYNAMIC_WINDOW_CONFIG[id];
        return (
          <Window
            key={id}
            title={config.title}
            defaultPosition={config.defaultPosition}
            defaultSize={config.defaultSize}
            minWidth={config.minWidth}
            minHeight={config.minHeight}
            zIndex={10 + order.indexOf(id)}
            interactive={interactive}
            onFocus={() => focus(id)}
            onClose={() => closeWindow(id)}
          >
            {id === "projects" && <ProjectsPanel projects={projects} />}
            {id === "about" && <AboutPanel />}
            {id === "contact" && <ContactPanel />}
          </Window>
        );
      })}
    </div>
  );
}
