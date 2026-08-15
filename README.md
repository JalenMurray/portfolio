# portfolio

Terminal-styled personal portfolio. See `CLAUDE.md` for full architecture, conventions, and design tokens before making changes.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in RESEND_API_KEY, GITHUB_READONLY_TOKEN, CONTACT_EMAIL_TO
npm run dev
```

## Before this is real

A few TODOs left deliberately for you to fill in — search the codebase for `TODO`:
- `app/about/page.tsx` — replace placeholder experience entries
- `content/projects/example-project.mdx` — replace with a real case study (add more files here for more projects)
- `public/resume.pdf` — add your actual resume (referenced by the About page download link)

## Deploy

Push to `main` — GitHub Actions SSHes into the EC2 box and runs `scripts/deploy.sh`. Requires these repo secrets: `SSH_HOST`, `SSH_USER`, `SSH_PRIVATE_KEY`.
