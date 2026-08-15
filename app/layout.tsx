import type { Metadata } from "next";
import StatusBar from "@/components/StatusBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalen — Full-stack engineer",
  description: "Portfolio and case studies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ paddingBottom: "40px" }}>
        {children}
        <StatusBar />
      </body>
    </html>
  );
}
