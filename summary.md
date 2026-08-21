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

## Hero sizing (final)
The source frame is 1280x720 and **has no sky** — a pixel probe of the top row
shows the megastructures already at luminance 66-92 across the middle, i.e.
the towers run off the top edge of the original. No amount of layout work can
reveal a horizon that was never rendered.

What was fixable was the magnification: the frame was being stretched to fill
a 1710px window (1.34x upscale), which turned the city into a wall pressed
against the viewport. The plate is now capped at the source's own 1280x720 and
centred, so on a 15-inch laptop it sits at exactly 1.00x with ~215px of
blurred spill either side and the spec strip visible below. The artwork reads
as a picture in a dark room rather than a magnified backdrop.

If real sky is wanted, it has to come from the source: re-render the frame
with headroom above the skyline.

## Hero sizing (earlier revision)
The first version filled the viewport with `object-fit: cover`, which cropped
roughly 11% off each side on a 15-inch laptop (a 1.6-ratio window against a
1.78 image) — exactly the edges that carry the scale of the skyline. Now the
frame is sized by the artwork instead: full width at its own 16:9, capped at
viewport height. On a 1440×900 window that is 1440×810 — the complete frame,
no crop, no bars, with the spec strip peeking below as a scroll cue. On windows
*wider* than 16:9 the leftover strip is filled with a blurred, dimmed
enlargement of the same frame, so it reads as spill from the city rather than a
letterbox border. The vignette and title were also scaled back so they stop
covering the left quarter of the art.

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
