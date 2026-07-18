# Emotion Atlas

Emotion Atlas is a small, English-only interactive guide for exploring
emotional vocabulary. It includes four static pages:

- Emotion Explorer
- Compare Emotions
- Body Signals
- Emotion Intensity

The site is entirely client-side. It has no backend, API, account system,
database, analytics, or user-data collection.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm test
```

The deployable static site is generated in `out/`.

## GitHub Pages

Push the repository to GitHub and enable **Settings → Pages → Source → GitHub
Actions**. The included workflow builds and publishes the static export. It
automatically supports both repository Pages URLs and `username.github.io`
sites.
