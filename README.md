# Public site

The public-facing site for the new center. It is a sketch: the name, logo, colours and most of the copy are placeholders until the design guide and final content arrive.

One page, plain HTML and CSS, with a small script to keep anchor links clear of the sticky header. No build step or dependencies.

## Preview it

```
node scripts/serve.mjs
```

Then open http://localhost:8788. Stop the server with Ctrl+C.

If `node` is not found, use the full path: `C:\Users\mcreed\tools\nodejs\node.exe scripts\serve.mjs`.

## Where things are

| File | What it holds |
|---|---|
| `index.html` | All of the page content |
| `css/tokens.css` | Every colour, font, size and radius |
| `css/site.css` | Layout and components |
| `css/fonts.css` | Font declarations |
| `scripts/header.js` | Keeps anchor scroll spacing aligned with the header height |
| `fonts/` | Self-hosted font files |
| `icons/favicon.svg` | Placeholder browser-tab icon |
| `_headers` | Headers Cloudflare Pages will send |

## Placeholders

Anything waiting on the team or the design firm is wrapped in `<span data-todo>` and shows a dotted underline in the browser. Search `index.html` for `data-todo` to find them all:

1. The center name, shown as `[Center name]` (also in the `<title>`)
2. The contact email address

When one is filled in, replace the text and remove the `data-todo` attribute.

### Set the name

Find and replace `[Center name]` across `index.html`. It appears three times.

### Apply the design guide

Change the values in `css/tokens.css`. Also keep the `theme-color` line near the top of `index.html` and the placeholder favicon colors in sync. If the font changes, put the new font files in `fonts/`, update `css/fonts.css`, and update the preload links near the top of `index.html`. The current typeface is self-hosted Source Sans 3 at weights 400, 600 and 700.

The palette uses warm cream (`#faf5eb`) for the main background, ink (`#172d35`) for text and the Get involved section, and clear blue (`#c8dde5`) for the training band. The sample lesson uses a stronger blue (`#a9d1e0`), with a cream frame and ink header. Deep green (`#176b57`) marks the primary action; mint (`#bceacb`) highlights Practice, dark-section arrows and interaction states. Text links use blue (`#285f85`) on light backgrounds and mint in the ink footer. The primary button turns ink on hover while retaining its light text.

The compact header uses ink with cream navigation, blue supporting text, and mint hover and keyboard focus accents. The browser theme color matches the header. The cream opening uses the larger invitation "Build skills. Strengthen legal aid." The Get involved section pairs a large headline with linked audience rows; hover and keyboard focus switch each row to mint with ink text. The layout is designed to work without photography.

Check any new text colour against its background for a contrast ratio of at least 4.5 to 1.

### Update the roadmap

In `index.html`, the "What we're building" section has four steps: Done, In progress, Next, Later. Each item is one `<li>` line. Move the line to another step, or edit its text.

### Update the Get involved rows

In `index.html`, each audience is one `<li>` line: the name in `<b>`, the sentence in `<span>`. Every row links to the Contact section for now. When a row has its own page, change its `href`.

### The workday example

The "A day in legal aid" table is an example, not a real schedule. Keep the "Illustrative workday" line with it.

## Writing rules for the page

- Short and direct. No em dashes.
- No launch dates, statistics or course counts until the team confirms them.
- Do not mention the LMS vendor, security work, or CLE credit.
- Massachusetts is the focus. Say so plainly. Do not mention any plans beyond Massachusetts; those are private for now.

## Launch checklist

1. Replace `[Center name]` everywhere.
2. Fill in or remove every `data-todo` item.
3. Delete the `[data-todo]` rule at the bottom of `css/site.css`.
4. Remove the `noindex` meta tag from `index.html`.
5. Remove the `X-Robots-Tag: noindex` line from `_headers`.
6. Replace `icons/favicon.svg` with the real mark.
7. Confirm the footer copyright line.

## Deploy (later)

Nothing is deployed yet. When ready, on Cloudflare Pages: connect this GitHub repo, Framework preset **None**, build command empty, build output directory `/`.
