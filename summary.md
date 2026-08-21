# Summary — Neon City Loop

## What was built
A static one-page site showcasing the animated cyberpunk cityscape
(`neon_city_polished_animated.webp`, the version with the rooftop hologram and
the billboards). Published to GitHub and deployed on Vercel.

## Design decisions
- **Single dark theme, on purpose.** The subject is a night scene; a light
  variant would fight every colour in the artwork. Every surface is painted
  explicitly so the page holds regardless of the host background.
- **Palette sampled from the frame itself** — plum-black ground `#0A0710`,
  sodium tower glow `#E8873A`, searchlight blue `#9DBEF2`, billboard magenta
  `#D96BA8`, lavender-grey text `#DCD2E6`.
- **Type:** condensed uppercase display for the title, system sans for reading,
  monospace for the HUD-style spec readout. No webfont — nothing to fail to
  load, nothing extra to download alongside a 10.6 MB loop.
- **"What moves in the frame"** labels five depth planes (Sky / Far / Mid /
  Signage / Near). The labels encode the real compositing order of the artwork,
  rather than being decorative numbering.

## Performance
The loop is 10.6 MB. A 179 KB first-frame poster paints immediately and the
loop cross-fades in on `load`; `assets/*` is served with a one-year immutable
cache header via `vercel.json`.

## Verified
- No console errors; layout checked at 375 px, 560 px, and 1440 px wide.
- Grid resolves to 1 / 2 / 5 columns without leaving an empty cell.
- Reduced-motion path holds the still frame.

## Open items
- Domain: running on the default `*.vercel.app` URL — no custom domain attached.
- The loop is served as a single WebP. If load time on mobile data matters, an
  MP4/WebM version would cut it to roughly a tenth of the size.
