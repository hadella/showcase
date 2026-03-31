# Showcase

A launcher-style Hugo theme for showcasing projects. Inspired loosely by
the Wii interface — a grid of image tiles on a clean background, each
linking to a project page. Supports nested sections so a tile can link
to another grid rather than a single post.

Check out the [demo](https://hadella.github.io/showcase/) to see it in action

## Features

- Configurable grid (num cols) via `hugo.toml`; grid grows downward
  as content is added, last row padded to stay clean
- Tile size driven by thumbnail image dimensions
- Nested sections — a tile can link to another grid (brand, category,
  collection) rather than a single post
- Text-only tiles driven by front matter — no image required
- Optional title/banner per page and section via `show_title`
- Single-column mobile fallback
- Built-in `alert` shortcode for callout boxes
- Built-in `center` shortcode for centering markdown content
- Built-in `details` shortcode for collapsible sections
- Built-in `gallery` shortcode for image cycling with keyboard navigation
- Built-in `highlight` shortcode for bordered content blocks with icons
- Built-in `img` shortcode for images with captions and width control
- Built-in `p5` shortcode for embedding p5.js sketches
- Built-in `tab`/`tabgroup` shortcodes for tabbed content
- Built-in `table` shortcode for styled tables with color variants
- Built-in `youtube` shortcode with styled wrapper
- Syntax highlighting via Hugo chroma with CSS class mode
- 100% CSS variable driven — retheme without touching HTML
- Default single post layout; fully overridable per project

## Directory Structure
```
themes/showcase/
  static/
    p5loader.html      ← iframe host for p5 sketches
    js/
      p5.min.js
      p5.sound.min.js
    css/
      showcase.css     ← all visual styling; CSS vars at top
      syntax.css       ← syntax highlighting for code blocks
  layouts/
    index.html         ← launcher home page
    _default/
      baseof.html      ← base HTML shell
      single.html      ← default project post layout
      list.html        ← section grid layout
    partials/
      grid.html        ← reusable grid partial
      footer.html      ← site footer
    shortcodes/
      alert.html       ← alert/callout shortcode
      center.html      ← center content shortcode
      details.html     ← collapsible section shortcode
      gallery.html     ← image cycler shortcode
      highlight.html   ← bordered highlight block shortcode
      img.html         ← image with caption shortcode
      p5.html          ← p5.js embed shortcode
      tab.html         ← tab pane shortcode
      tabgroup.html    ← tab group container shortcode
      table.html       ← styled table shortcode
      youtube.html     ← YouTube embed shortcode
  archetypes/
    sections.md        ← template for new section _index.md
```

## Setup

1. Copy theme to `themes/showcase/`
1. Configure `hugo.toml` (see `exampleSite/hugo.toml`)
1. Create your site banner image and place it in `static/images/`
1. Create content as page bundles under `content/`

## Content Organization

### Site banner

The wide banner shown at the top of the launcher lives in your site's
own `static/` directory, not the theme's. Create it and place it here:
```
static/images/banner.png
```

Reference it in `hugo.toml`:
```toml
[params]
    banner_image = "images/banner.png"
```

There is no default—if `banner_image` is not set the banner is
simply omitted and the site title is shown instead.

### Content structure

Content can be flat or nested to any depth. A tile on the grid links
to whatever is behind it — a single post or another grid.

**Flat structure** — all posts at the top level:
```
content/
  bouncing-ball/
    index.md
    sketch.js
  starfield/
    index.md
    sketch.js
    star.js
```

**Nested structure** — sections containing posts:
```
content/
  brand_x/
    _index.md       ← branch bundle, renders as a grid
    item_1/
      index.md      ← leaf bundle, renders as a post
    item_2/
      index.md
  brand_y/
    _index.md
    widget_1/
      index.md
```

Sections use `_index.md` (branch bundle). Posts use `index.md`
(leaf bundle). Hugo picks the right layout automatically.

Sections can be nested to any depth — a section can contain both
posts and other sections.

### Project images

Each post or section has two optional images — a thumbnail shown in
the grid and a banner shown at the top of the page. These live in
your site's `static/` directory:
```
static/images/
  banner.png                  ← site-wide banner
  my-section-thumb.png        ← section thumbnail
  projects/
    my-project-thumb.png      ← 4:3 ratio recommended
    my-project-banner.png     ← wide, any ratio
```

Reference them in front matter:
```toml
thumbnail = "images/projects/my-thumb.png"
banner    = "images/projects/my-banner.png"  # optional
```

`banner` is optional — if omitted the page shows the title as text.
`thumbnail` is optional but a tile with no image renders as an empty box.

Note: images are intentionally separate from the page bundle. If you
rename or delete content, remember to clean up the corresponding
images in `static/images/`.

### Page bundle assets

Sketch files and other per-project assets live alongside `index.md`:
```
content/my-sketch/
  index.md
  sketch.js
  helper.js
  assets/
    image.png
    sound.mp3
```

## hugo.toml
```toml
baseURL      = "https://yourusername.github.io/your-repo/"
languageCode = "en-us"
title        = "My Showcase"
theme        = "showcase"

[params]
    banner_image = "images/banner.png"   # optional
    grid_cols    = 4
    show_title   = true                  # optional

[markup.goldmark.renderer]
    unsafe = true              # required for script blocks in markdown

[markup.highlight]
    codeFences = true
    noClasses  = false         # use CSS classes not inline styles
```

## Front matter

### Post (`index.md`)
```toml
+++
title      = "My Project"
date       = 2025-01-01
draft      = false
thumbnail  = "images/my-thumb.png"   # 4:3 recommended
banner     = "images/my-banner.png"  # optional
show_title = true                    # optional

# Image tile color overrides:
# p5_border_color = "#e94560"
# p5_bg_color     = "#000000"

# Text tile params (use instead of thumbnail for tool/utility posts):
# tile_bg    = "#1e1e2e"
# tile_color = "#6e6e8e"
+++
```

### Section (`_index.md`)
```toml
+++
title      = "Brand-X"
thumbnail  = "images/brand-x-thumb.png"   # 4:3 recommended
# banner     = "images/brand-x-banner.png"  # optional
show_title = true                         # optional

# Override site-wide grid dimensions for this section:
# grid_cols = 4
+++
```

## Development

### Local development

The `baseURL` in `hugo.toml` should be set to your deployment URL.
Override it on the command line for local development:
```bash
hugo server --source exampleSite --themesDir ../.. \
    --baseURL "http://localhost:1313/"
```

### Deploying to GitHub Pages

Set `baseURL` in `exampleSite/hugo.toml` to your GitHub Pages URL:
```toml
baseURL = "https://yourusername.github.io/showcase/"
```

Run the publish script from the theme root:
```bash
./publish.sh
```

This builds the example site, switches to the `gh-pages` branch,
copies the built files, commits, and pushes. Make sure the `gh-pages`
branch exists before first run:
```bash
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages"
git push origin gh-pages
git checkout main
```

Then on GitHub go to Settings → Pages and set the source to the
`gh-pages` branch, root directory.

## Shortcodes

### alert
```
{{% alert info %}}
Your message here.
{{% /alert %}}

{{% alert warning true %}}
With tinted background.
{{% /alert %}}
```

Types: `info`, `note`, `warning`, `success`, `error`, `important`, or
empty for an unlabeled callout. Second positional param `true` adds a
tinted background.

---

### center
```
{{% center %}}
Your **markdown** content here.
{{% /center %}}
```

---

### details
```
{{% details "Click to expand" %}}
Hidden content revealed on click.
{{% /details %}}

{{% details "With background" true %}}
Tinted background variant.
{{% /details %}}
```

Parameters: summary text (positional 0), optional tinted background
(positional 1, default false).

---

### gallery
```
{{< gallery >}}
https://r2.yourdomain.com/cars/frog/shot1.jpg
https://r2.yourdomain.com/cars/frog/shot2.jpg
/images/local-image.jpg
{{< /gallery >}}
```

One URL per line in the shortcode body. Paths can be absolute URLs
(e.g. Cloudflare R2) or relative to the page bundle or `static/`.

Navigation via on-screen left/right arrows or keyboard arrow keys.
Counter shown as `1/N` centered between arrows.

Aspect ratio is driven by the image dimensions. The gallery stage
will match whatever ratio your images are.

---

### highlight
```
{{% highlight info %}}
Key takeaway or important point.
{{% /highlight %}}

{{% highlight warning true %}}
With tinted background.
{{% /highlight %}}
```

Types: `info`, `note`, `warning`, `success`, `error`, `important`.
Second positional param `true` adds a tinted background. Similar to
`alert` but uses a full border and an icon prefix.

---

### img
```
{{< img src="photo.jpg" >}}
{{< img src="photo.jpg" width="600" caption="My caption" >}}
{{< img src="photo.jpg" width="400" alt="Alt text" caption="Caption" >}}
```

Parameters:
- `src` — image path (bundle-relative or absolute)
- `width` — max width in px (default 800)
- `caption` — caption shown below image
- `alt` — alt text (defaults to caption if set)

---

### p5
```
{{< p5 sketch="sketch.js" files="ball.js,paddle.js"
        width="600" height="400" sound=false
        caption="Arrow keys to move" >}}
```

Parameters:
- `sketch` — main sketch filename (in page bundle)
- `files` — comma-separated supporting JS files, loaded in order
             before sketch
- `width` — canvas width in px (default 400)
- `height` — canvas height in px (default 400)
- `sound` — load p5.sound library (default false)
- `caption` — text shown below the frame

p5.js is served from the theme's `static/js/` — no CDN dependency,
no copies per sketch. The sketch runs in an iframe via `p5loader.html`
so p5 global mode works exactly as it does in a standalone HTML file.
No changes needed to existing sketches.

#### p5 border

No border is drawn around the canvas by default. To add one, set
`p5_border_color` in the post's front matter:
```toml
p5_border_color = "#4da6ff"
```

#### Known limitations

**`setInterval` is blocked in iframe contexts.** Use recursive
`setTimeout` instead:
```javascript
function schedule_next() {
    setTimeout(function() {
        your_function();
        schedule_next();
    }, 5000);
}
schedule_next();  // call once from setup()
```

**Asset loading** — if `preload()` gives trouble, use `loadImage()`
directly in `setup()` with a callback and a loaded flag:
```javascript
let img;
let img_loaded = false;

function setup() {
    createCanvas(960, 484);
    loadImage("assets/myimage.png",
        function(loaded) {
            img = loaded;
            img_loaded = true;
        }
    );
}

function draw() {
    if (img_loaded) image(img, 0, 0);
}
```

**Communicating data from sketch to post page** — p5 DOM elements
created with `createP()` etc. are confined inside the iframe. Use
`postMessage` to surface dynamic data on the post page:

In `sketch.js`:
```javascript
window.parent.postMessage(your_data, "*");
```

In `index.md` (requires `unsafe = true` in `hugo.toml`):
```html
<div id="my-data"></div>
<script>
window.addEventListener("message", function(e) {
    document.getElementById("my-data").textContent = e.data;
});
</script>
```

### tab / tabgroup
```
{{< tabgroup id="my-tabs" >}}
{{% tab title="First" %}}
Content for first tab.
{{% /tab %}}
{{% tab title="Second" %}}
Content for second tab.
{{% /tab %}}
{{< /tabgroup >}}
```

`tab` must be nested inside `tabgroup`. The `id` param on `tabgroup`
is optional but useful if you have multiple tab groups on one page.

---

### table
```
{{< table >}}
| Col 1 | Col 2 |
|-------|-------|
| a     | b     |
{{< /table >}}

{{< table color="success" caption="Optional caption" >}}
| Col 1 | Col 2 |
|-------|-------|
| a     | b     |
{{< /table >}}
```

Color variants: `info`, `note`, `warning`, `success`, `error`,
`important`. Color affects only the header bottom border — the accent
line between headers and data rows. Grid lines and alternating row
shading use the neutral `--table-border-color` var.

---

### youtube
```
{{< youtube id="VIDEO_ID" caption="Demo video" >}}
```

---

## Footer

The footer displays a copyright line and theme credit. Override it
in your site by creating `layouts/partials/footer.html` — Hugo will
prefer your version over the theme's.

## Retheme via CSS variables

All variables are in a single `:root` block at the top of
`static/css/showcase.css`. Override any of them in your site's own
CSS loaded after the theme.

Key variables:
```css
:root {
    /* ── Site-wide ──────────────────────────────────────── */
    --bg-color: #000000;
    --accent-color: #00ffff;
    --text-color: #e0e0e0;

    /* ── Grid ───────────────────────────────────────────── */
    --grid-gap: 12px;
    --tile-transition: 0.18s ease;
    --tile-overlay-bg: rgba(0, 0, 0, 0);
    --tile-overlay-hover: rgba(0, 0, 0, 0.25);

    /* ── Text tiles ─────────────────────────────────────── */
    --tile-text-bg: #1e1e2e;
    --tile-text-color: #888888;
    --tile-text-size: 1rem;
    --tile-text-weight: 600;
    --tile-text-pad: 0.6rem 1rem;

    /* ── Banner ─────────────────────────────────────────── */
    --banner-radius: 4px;
    --banner-mb: 24px;

    /* ── Post ───────────────────────────────────────────── */
    --post-bg: #000;
    --post-text: #e0e0e0;
    --post-heading: #ffffff;
    --post-link: var(--accent-color);
    --post-max-width: 900px;
    --post-padding: 2rem;

    /* ── Code ───────────────────────────────────────────── */
    --code-bg: #2a2a3e;
    --code-bright: #ffffff;

    /* ── p5 embed ───────────────────────────────────────── */
    --p5-border: none;
    --p5-border-radius: 0;
    --p5-bg: transparent;
    --p5-shadow: none;

    /* ── YouTube embed ──────────────────────────────────── */
    --yt-border: 2px solid var(--accent-color);
    --yt-border-radius: 4px;
    --yt-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);

    /* ── Gallery ────────────────────────────────────────── */
    --gallery-bg: #000;
    --gallery-btn-color: var(--text-color);
    --gallery-btn-hover: var(--accent-color);
    --gallery-counter-color: var(--text-color);
    --gallery-ratio: 4 / 3;

    /* ── Alert ──────────────────────────────────────────── */
    --alert-info-color: #4da6ff;
    --alert-warning-color: #ff8f40;
    --alert-error-color: #e94560;
    --alert-note-color: #a78bfa;
    --alert-important-color: #ffbf00;
    --alert-success-color: #26a98b;
    --alert-label-size: 0.7rem;
    --alert-radius: 4px;
    --alert-padding: 0.75rem 1rem;

    /* ── Details ────────────────────────────────────────── */
    --details-color: #7a8aaa;
    --details-bg: color-mix(in srgb, var(--details-color) 12%, transparent);

    /* ── Img shortcode ──────────────────────────────────── */
    --figcaption-color: var(--text-color);

    /* ── Tabs ───────────────────────────────────────────── */
    --tab-active-color: var(--accent-color);
    --tab-border-color: #3a3a5a;
    --tab-btn-bg: #1e1e2e;
    --tab-btn-hover: #2a2a3e;
    --tab-content-bg: #1e1e2e;

    /* --- Table ------------------------------------------- */
    --table-border-color: #3a3a5a;
}
```
