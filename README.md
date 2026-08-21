# Neon City Loop

A one-page site built around a single animated cyberpunk cityscape — sweeping
searchlights, flickering windows, and billboards that never sleep.

**Live:** deployed on Vercel (see the repo's Deployments).

## What's here

| File | Purpose |
| --- | --- |
| `index.html` | The whole page — hero, spec strip, "what moves in the frame" |
| `style.css` | Palette sampled from the artwork; deliberately single-theme (dark) |
| `app.js` | Poster→loop swap, fullscreen toggle, reduced-motion handling |
| `assets/neon-city.webp` | The animated loop, 1280×720, ~10.6 MB |
| `assets/poster.jpg` | First frame, shown instantly while the loop decodes |
| `assets/og.jpg` | Social preview image |

## How it behaves

- **Fast first paint.** The 179 KB poster renders immediately; the animated
  WebP fades in only once it has fully decoded, so the loop is never seen
  half-drawn.
- **Reduced motion.** With `prefers-reduced-motion: reduce`, the animation is
  never shown at all — the still frame stays.
- **Narrow screens.** Below 760px (or in portrait) the loop keeps its 16:9
  ratio at the top instead of being cropped into a tall viewport, and the
  title moves onto solid ground below it.

## Running locally

```bash
python3 -m http.server 8107
```

Then open http://localhost:8107.

## Stack

Static HTML, CSS, and ~30 lines of vanilla JS. No build step, no dependencies.
