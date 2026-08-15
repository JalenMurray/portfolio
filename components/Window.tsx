"use client";

import { useEffect, useRef, useState } from "react";

export type Position = { x: number; y: number };
export type Size = { width: number; height: number };

type WindowProps = {
  title: string;
  defaultPosition: Position;
  defaultSize: Size;
  minWidth?: number;
  minHeight?: number;
  zIndex: number;
  interactive: boolean;
  onFocus: () => void;
  onClose?: () => void;
  children: React.ReactNode;
};

const STATUS_BAR_HEIGHT = 40;

function dotStyle(color: string): React.CSSProperties {
  return {
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    background: color,
    display: "inline-block",
  };
}

export default function Window({
  title,
  defaultPosition,
  defaultSize,
  minWidth = 260,
  minHeight = 160,
  zIndex,
  interactive,
  onFocus,
  onClose,
  children,
}: WindowProps) {
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef<{ startX: number; startY: number; origin: Position } | null>(null);
  const resizeState = useRef<{ startX: number; startY: number; origin: Size } | null>(null);

  // Keep windows on-screen when they mount on a viewport smaller than their designed defaults.
  useEffect(() => {
    if (!interactive) return;
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight - STATUS_BAR_HEIGHT;
    const clampedSize = {
      width: Math.min(size.width, maxWidth),
      height: Math.min(size.height, maxHeight),
    };
    setSize(clampedSize);
    setPosition((p) => clampPosition(p, clampedSize));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interactive]);

  // Guard against a stuck grabbing cursor if the window closes mid-drag.
  useEffect(() => {
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  function clampPosition(pos: Position, currentSize: Size): Position {
    const maxX = Math.max(0, window.innerWidth - currentSize.width);
    const maxY = Math.max(0, window.innerHeight - STATUS_BAR_HEIGHT - currentSize.height);
    return {
      x: Math.min(Math.max(pos.x, 0), maxX),
      y: Math.min(Math.max(pos.y, 0), maxY),
    };
  }

  function handleDragStart(e: React.PointerEvent) {
    if (!interactive) return;
    e.preventDefault();
    onFocus();
    setIsDragging(true);
    document.body.style.cursor = "grabbing";
    dragState.current = { startX: e.clientX, startY: e.clientY, origin: position };
    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handleDragEnd);
  }

  function handleDragMove(e: PointerEvent) {
    if (!dragState.current) return;
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setPosition(
      clampPosition({ x: dragState.current.origin.x + dx, y: dragState.current.origin.y + dy }, size)
    );
  }

  function handleDragEnd() {
    dragState.current = null;
    setIsDragging(false);
    document.body.style.cursor = "";
    window.removeEventListener("pointermove", handleDragMove);
    window.removeEventListener("pointerup", handleDragEnd);
  }

  function handleResizeStart(e: React.PointerEvent) {
    if (!interactive) return;
    e.preventDefault();
    e.stopPropagation();
    onFocus();
    resizeState.current = { startX: e.clientX, startY: e.clientY, origin: size };
    window.addEventListener("pointermove", handleResizeMove);
    window.addEventListener("pointerup", handleResizeEnd);
  }

  function handleResizeMove(e: PointerEvent) {
    if (!resizeState.current) return;
    const dx = e.clientX - resizeState.current.startX;
    const dy = e.clientY - resizeState.current.startY;
    const maxWidth = window.innerWidth - position.x;
    const maxHeight = window.innerHeight - STATUS_BAR_HEIGHT - position.y;
    setSize({
      width: Math.min(Math.max(resizeState.current.origin.width + dx, minWidth), maxWidth),
      height: Math.min(Math.max(resizeState.current.origin.height + dy, minHeight), maxHeight),
    });
  }

  function handleResizeEnd() {
    resizeState.current = null;
    window.removeEventListener("pointermove", handleResizeMove);
    window.removeEventListener("pointerup", handleResizeEnd);
  }

  return (
    <div
      onPointerDown={() => interactive && onFocus()}
      style={{
        position: interactive ? "absolute" : "relative",
        left: interactive ? position.x : undefined,
        top: interactive ? position.y : undefined,
        width: interactive ? size.width : "100%",
        height: interactive ? size.height : "auto",
        marginBottom: interactive ? 0 : "16px",
        zIndex,
        background: "var(--bg-panel)",
        border: "0.5px solid var(--text-muted)",
        borderRadius: "8px",
        boxShadow: interactive ? "0 16px 40px rgba(0,0,0,0.5)" : "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        onPointerDown={handleDragStart}
        className="mono"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "9px 12px",
          borderBottom: "0.5px solid var(--text-muted)",
          cursor: interactive ? (isDragging ? "grabbing" : "grab") : "default",
          userSelect: "none",
          touchAction: "none",
          flexShrink: 0,
        }}
      >
        <span style={{ display: "flex", gap: "5px", alignItems: "center" }}>
          {onClose ? (
            <button
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={onClose}
              aria-label={`Close ${title}`}
              style={{
                ...dotStyle("var(--accent-amber)"),
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ) : (
            <i style={dotStyle("var(--accent-amber)")} />
          )}
          <i style={dotStyle("var(--accent-teal)")} />
          <i style={dotStyle("var(--text-muted)")} />
        </span>
        <span style={{ fontSize: "12px", color: "#8A8D92" }}>{title}</span>
      </div>
      <div style={{ flex: 1, overflow: "auto", padding: "20px" }}>{children}</div>
      {interactive && (
        <div
          onPointerDown={handleResizeStart}
          aria-hidden
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: "16px",
            height: "16px",
            cursor: "nwse-resize",
            touchAction: "none",
          }}
        >
          <svg width="16" height="16" style={{ display: "block" }}>
            <path
              d="M15 1 L1 15 M15 7 L7 15 M15 13 L13 15"
              stroke="var(--text-muted)"
              strokeWidth="1"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
