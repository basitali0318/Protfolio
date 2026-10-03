# Basit Ali Portfolio

Single-page portfolio built with React, Vite and Tailwind CSS v4. Deploys to Vercel with no extra configuration.

## File tree

```
.
├── index.html               # SEO, Open Graph, fonts, theme pre-paint script
├── package.json
├── vite.config.js
├── vercel.json              # Vite preset, SPA rewrite, asset caching
├── .env.example             # optional contact form endpoint
├── public/
│   ├── Basit-Ali-CV.pdf     # linked from "Download CV" (replace with your real CV)
│   ├── basit-ali.jpg        # your photo (add this file; see below)
│   ├── favicon.svg
│   ├── og-image.png         # 1200x630 social preview
│   └── robots.txt
└── src/
    ├── data.js              # ALL site text lives here
    ├── main.jsx
    ├── App.jsx
    ├── index.css            # colour tokens, typography, motion
    ├── hooks/useReveal.js   # fade-up on scroll
    └── components/
        ├── Header.jsx  Hero.jsx  Work.jsx  About.jsx  Portrait.jsx
        ├── Experience.jsx  Education.jsx  Contact.jsx  Footer.jsx
        └── Section.jsx  Container.jsx  Reveal.jsx  Tag.jsx  ThemeToggle.jsx
```

## Editing content

Open `src/data.js`. Everything in `[square brackets]` is a placeholder:

- `[metric]` for project and job outcomes
- `[year]` for project years, `[start]` / `[end]` for job dates
- `[tech]` for project tags you have not confirmed
- `[add one line description]` for AI Search and Rescue
- `[location]` for Dovigo Talent Center

To add a Live or GitHub link to a project, replace `null` in its `links` object with the URL. Buttons only appear when a link exists.

**Photo:** save your portrait as `public/basit-ali.jpg` (portrait crop, about 800x1000, under 200 KB). If the file is missing, the photo block hides itself.

**CV:** replace `public/Basit-Ali-CV.pdf` with your real CV, keeping the same file name.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serves the production build
```

## Deploy on Vercel

1. Push the code to GitHub (`basitali0318/Protfolio`).
2. Go to https://vercel.com/new and choose **Import Git Repository**, then pick the repo.
3. Confirm the settings Vercel detects:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. Click **Deploy**. Every later push to the production branch redeploys automatically; other branches get preview URLs.
5. Custom domain (optional): Project → **Settings → Domains** → add your domain, then set the DNS records Vercel shows (an `A` record to `76.76.21.21` for the apex domain, or a `CNAME` to `cname.vercel-dns.com` for `www`).
6. After the domain is live, replace `https://basitali.vercel.app/` in `index.html` (canonical and Open Graph tags) with your final URL.

## Environment variables

None are required. Without any, the contact form validates the input and opens the visitor's email app with the message filled in (mailto).

| Name | Required | Purpose |
| --- | --- | --- |
| `VITE_FORM_ENDPOINT` | No | URL of a form service that accepts JSON POST (for example a Formspree form URL). When set, the form sends messages directly and falls back to email on failure. |

Add it in Vercel under Project → Settings → Environment Variables, then redeploy.
