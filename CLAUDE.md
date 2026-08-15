# CLAUDE.md

This file gives Claude Code the ground truth for this project. Read it fully before making changes. If something here conflicts with what you find in the codebase, the codebase wins for implementation details — but flag the conflict instead of silently picking one.

## Project overview

A personal portfolio site for Jalen, a full-stack engineer, built primarily for job hunting. Tone: balanced — recruiter-friendly but clearly has character. The whole site is styled as a terminal session, and the signature feature is a persistent, live infrastructure status bar that proves the site is running on real infra the owner built and manages — not a static mockup.

Primary goal of every page: make it easy for a recruiter or engineer to understand what Jalen can build, and make the technical/interactive parts feel earned rather than decorative.

## Tech stack

- Next.js 15, App Router, TypeScript
- MDX for case study content (`content/projects/*.mdx`)
- PM2 for process management on the VM
- nginx as reverse proxy, TLS via Let's Encrypt/certbot
- Resend for contact form email delivery
- Deployed to a single AWS EC2 `t3.small` instance (Ubuntu 24.04 LTS), Elastic IP attached
- DNS via Porkbun (existing domain, registrar's own DNS — no proxy/CDN layer in front). nginx/certbot handle TLS directly against the Elastic IP.
- GitHub Actions for CI/CD (SSH deploy on push to `main`)

Do not introduce a database. Content is file-based (MDX + a small JSON deploy-metadata file). Do not add a headless CMS. Do not switch hosting to Vercel/serverless — the site must run on the VM itself, because the status panel's claims (uptime, live deploy info) must reflect the actual host serving the page.

## Design system

Deliberately not the generic "black background + neon green" terminal look. Warm, phosphor-CRT inspired instead.

**Colors**
- `#0B0D0F` — base background (ink black, slight blue undertone)
- `#14171A` — panel/card surface (terminal chrome, cards)
- `#FFB000` — primary accent (amber phosphor) — use for primary CTAs, active states, cursor
- `#4FD1C5` — secondary accent (muted teal) — use for status/live indicators, data highlights
- `#E8E6DF` — primary text (warm off-white, not stark white)
- `#3A3D42` — borders, muted/secondary text

**Type**
- Display + terminal text: JetBrains Mono (headers, nav pills, terminal content, status bar)
- Body copy: IBM Plex Sans (case study prose, about/experience content)
- Data/status labels: JetBrains Mono, smaller weight, used for numbers/timestamps

**Layout principles**
- Hero is a real terminal window: prompt (`jalen@portfolio:~$`), blinking cursor, nav exposed both as clickable command pills and as literal typed commands (`whoami`, `projects`, `resume`, `contact`)
- Content sections are framed as directory listings (`~/projects/`, `~/experience/`, `~/contact/`) — this framing must stay consistent site-wide
- A status bar is fixed to the bottom of the viewport at all times, showing live data: `● gcp-vm online` (green/teal dot + label), last deploy time, current commit hash. This is the signature element — do not let it become just decorative; it must read real data from `/api/status`.
- Keep animation restrained: page-load terminal typing effect on the hero is appropriate; avoid scroll-triggered effects everywhere, that reads as generic AI-site motion.
- Dark mode only — this is not a light/dark toggle site, the terminal aesthetic is dark by design.

## Repo structure

```
portfolio/
├── app/
│   ├── page.tsx                 # terminal hero
│   ├── projects/
│   │   ├── page.tsx             # ~/projects/ listing
│   │   └── [slug]/page.tsx      # case study reader (renders MDX)
│   ├── about/page.tsx           # experience timeline
│   ├── contact/page.tsx
│   └── api/
│       ├── status/route.ts      # infra status — reads lib/status.ts only
│       ├── github/route.ts      # proxied GitHub activity
│       └── contact/route.ts     # Resend send
├── content/
│   └── projects/*.mdx           # case studies, git-versioned, see frontmatter schema below
├── components/
│   ├── Terminal.tsx              # hero terminal UI + command handling
│   ├── StatusBar.tsx             # fixed bottom bar, polls /api/status
│   ├── ProjectCard.tsx
│   └── Nav.tsx
├── lib/
│   ├── status.ts                 # gathers uptime/deploy info safely (server-only)
│   ├── github.ts                 # server-side GitHub API client
│   └── resend.ts
├── scripts/
│   └── deploy.sh                 # pulled by CI, writes deploy.json (commit + timestamp)
├── .github/workflows/deploy.yml
├── CLAUDE.md
└── package.json
```

## MDX frontmatter schema (case studies)

Every file in `content/projects/` must start with frontmatter matching this shape:

```yaml
---
title: "Project name"
slug: "project-name"
summary: "One sentence, shows in the listing card"
role: "What Jalen specifically did"
stack: ["Next.js", "Postgres", "..."]
outcome: "One line on the result/impact"
date: "YYYY-MM"
featured: true
---
```

`featured` projects show first on `~/projects/`. Do not add fields outside this schema without updating this file.

## API route contracts

**`GET /api/status`**
Reads from `lib/status.ts` only — never shells out directly inside the route handler. Returns sanitized data only:
```json
{ "online": true, "uptime": "string, human readable", "lastDeployCommit": "short hash", "lastDeployTime": "ISO string" }
```
Never expose: software versions, internal IPs, open ports, file paths, environment variable names/values, or anything else that fingerprints the box for an attacker. If in doubt, leave it out — this endpoint is public.

**`GET /api/github`**
Server-side call to the GitHub API using `GITHUB_READONLY_TOKEN` (env var, never sent to the client). Cache responses (e.g. revalidate every few minutes) rather than hitting GitHub on every page load.

**`POST /api/contact`**
Validates input server-side (non-empty name/email/message, basic email format check) before calling Resend. Returns a clear error object on failure — do not leak Resend's raw error text to the client.

## Environment variables

Define these in `.env.local` for dev and as GitHub Actions secrets / VM-side env for prod. Never commit real values.

```
RESEND_API_KEY=
GITHUB_READONLY_TOKEN=
CONTACT_EMAIL_TO=
```

`lib/status.ts` reads system state directly (uptime, deploy.json), not env vars — no secret needed there.

## Deploy flow

1. Push to `main`
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) SSHes into the EC2 instance using a repo-secret private key
3. On the box: `git pull`, `npm install`, `npm run build`, `pm2 reload portfolio`
4. `scripts/deploy.sh` writes `deploy.json` with the current commit hash and timestamp — this is what `/api/status` reads for `lastDeployCommit`/`lastDeployTime`
5. nginx already points at the PM2-managed process; no nginx config changes should be needed for a routine deploy

Do not add a staging environment unless asked — this is a single-environment personal site.

## Monitoring & logging

- PM2 log rotation enabled (`pm2-logrotate` module) so logs don't fill the disk
- A simple uptime check (e.g. a cron hitting `/api/status` or an external free-tier uptime monitor) should alert Jalen if the site goes down — implementation detail is flexible, but it must not require a paid APM tool
- nginx access/error logs rotated via standard `logrotate`, not custom tooling

## Security notes

- SSH key-only access, no password auth
- Security group / `ufw` restricted to 22, 80, 443
- Non-root deploy user on the VM
- fail2ban enabled for SSH
- No Cloudflare or other proxy sits in front of the box — nginx is the first thing traffic hits. This means rate limiting on public API routes (`/api/status`, `/api/github`, `/api/contact`) matters more than it would behind a proxy; add nginx-level rate limiting (`limit_req`) in addition to any application-level checks.
- The `/api/status` and `/api/github` routes are public — treat everything they return as public information; sanitize accordingly (see API contracts above)
- Never log or expose `RESEND_API_KEY` or `GITHUB_READONLY_TOKEN` in responses, error messages, or client-side code

## Conventions

- TypeScript strict mode on
- Components: PascalCase filenames, colocate small component-specific styles inline or via CSS modules (no CSS-in-JS runtime libraries)
- Prefer server components by default; mark `"use client"` only where interactivity requires it (Terminal.tsx, StatusBar.tsx)
- Commit messages: conventional style (`feat:`, `fix:`, `chore:`) since the commit hash shows up in the live status bar — keep the latest commit message reasonably presentable
