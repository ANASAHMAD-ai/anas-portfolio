# Anas Ahmad — Portfolio

A production-ready personal portfolio built with **React + TypeScript + Tailwind CSS + Vite**.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

The build output goes to `dist/`.

## Project structure

```
src/
  data/            ← edit content here (projects, skills, education, social links)
  components/
    Layout/        ← Header, Footer, BackToTop, CustomCursor
    sections/      ← one file per page section (Hero, About, Skills, ...)
    ui/             ← reusable pieces (ProjectCard, ProjectModal, Reveal, NeuralCanvas, SignalRail)
  hooks/            ← useScrollSpy, useRevealOnScroll
```

Everything you're likely to update lives in `src/data/`:

- `data/projects.ts` — add a new project by appending one object to the array; it automatically
  appears in the grid, the GitHub section, and the detail modal.
- `data/skills.ts`, `data/education.ts` — skill cards, education timeline, journey steps, "Currently
  Exploring" topics.
- `data/social.ts` — GitHub/LinkedIn/email URLs and the CV download link. Set `cvUrl` to a real path
  once you've added a CV file to `public/` (e.g. `"/Anas-Ahmad-CV.pdf"`); until then the header button
  shows a "CV coming soon" note.

## Still placeholders — replace before sharing publicly

- `src/data/social.ts` — GitHub, LinkedIn, and email links
- `src/data/projects.ts` — each project's `githubUrl` / `liveDemoUrl`
- `public/og-image.png` — a 1200×630 social-preview image (referenced in `index.html`'s Open Graph
  tags but not included)
- A real CV file, if you want the header's Download CV button to work
- Project screenshots (the modal currently shows a placeholder block per project)

## GitHub section

`src/components/sections/GitHubSection.tsx` currently renders static cards built from the same
project data. To pull real repositories dynamically, fetch
`https://api.github.com/users/<your-username>/repos` in a `useEffect` and map the response into the
same card shape — the component is written so that swap is contained to one file.

## Deploying to get a public HTTPS URL

The simplest option is **Vercel** (or Netlify, which works almost identically):

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click **Add New → Project**.
3. Select the repository. Vercel auto-detects Vite — leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live `https://your-project.vercel.app` URL within a minute or two,
   and every push to `main` redeploys automatically.
5. Optional: add a custom domain under **Project Settings → Domains**.

**Netlify** alternative: drag-and-drop the `dist/` folder (after `npm run build`) onto
https://app.netlify.com/drop for an instant one-off URL, or connect the GitHub repo the same way as
Vercel for continuous deploys.

Either way, the resulting URL is a real HTTPS link safe to share on LinkedIn, in a CV, or on
internship/scholarship applications.

## Notes on content accuracy

Per the brief, no jobs, internships, companies, certifications, awards, GPA, testimonials, or
statistics have been invented anywhere in this codebase. Anything not explicitly provided is marked
as a placeholder (`#` links, "coming soon" CV note, screenshot placeholder in the project modal) so
nothing reads as fabricated once deployed.
