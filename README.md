# Public site

The public-facing site for the new center. It is a sketch: the name, logo, colours and most of the copy are placeholders until the design guide and final content arrive.

One page, plain HTML and CSS. No build step, no JavaScript, no dependencies.

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

Change the values in `css/tokens.css`. Nothing else should need colour or font edits, except the `theme-color` line near the top of `index.html`, which repeats the page background colour. If the font changes, put the new `.woff2` files in `fonts/`, update `css/fonts.css`, and update the `preload` line near the top of `index.html`.

Yellow is used in four places only: the highlight behind "Massachusetts" in the headline, the main button, the midday row of the workday example, and the roadmap step that is in progress.

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
