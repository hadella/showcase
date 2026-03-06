# Showcase

A launcher-style Hugo theme for showcasing projects. Inspired loosely by
the Wii interface — a grid of image tiles on a clean background, each
linking to a project page.

## Features

- 16:9 constrained stage — uses full screen on 16:9 displays, centered
  with empty margins on ultrawides
- Configurable grid (rows × cols) via `hugo.toml`; grid grows downward
  as projects are added, last row padded to stay clean
- 4:3 aspect ratio tiles; empty slots hold grid shape
- Single-column mobile fallback
- Built-in `p5` shortcode for embedding p5.js sketches
- Built-in `youtube` shortcode with styled wrapper
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
  layouts/
    index.html         ← launcher home page
    _default/
      baseof.html      ← base HTML shell
      single.html      ← default project post layout
    shortcodes/
      p5.html          ← p5.js embed shortcode
      youtube.html     ← YouTube embed shortcode
  archetypes/
    projects.md        ← template for new project posts
```

## Setup

1. Copy theme to `themes/showcase/`
2. Configure `hugo.toml` (see `exampleSite/hugo.toml`)
3. Create your site banner image and place it in `static/images/`
4. Create project content as page bundles under `content/projects/`

## Content Organization

### Site banner

The wide banner shown at the top of the launcher lives in your site's
own `static/` directory, not the theme's. Create it and place it here:
```
static/images/banner.jpg
```

Reference it in `hugo.toml`:
```toml
[params]
    banner_image = "images/banner.jpg"
```

There is no default — if `banner_image` is not set the banner is
simply omitted.

### Project images

Each project has two optional images — a thumbnail shown in the
launcher grid and a banner shown at the top of the project page.
These also live in your site's `static/` directory:
```
static/images/projects/
  my-project-thumb.jpg    ← 4:3 ratio recommended for grid tiles
  my-project-banner.jpg   ← wide, any ratio
```

Reference them in the project's front matter:
```toml
thumbnail = "images/projects/my-project-thumb.jpg"
banner    = "images/projects/my-project-banner.jpg"
```

`banner` is optional — if omitted the project page shows the title
as text instead. `thumbnail` is optional too but a tile with no image
will render as an empty box.

Note: project images are intentionally separate from the page bundle.
If you rename or delete a project, remember to clean up the
corresponding images in `static/images/projects/`.

### Project page bundles

Sketch files and other per-project assets live alongside `index.md`
in a page bundle:
```
content/projects/
  my-project/
    index.md      ← front matter + content
    sketch.js     ← p5 entry point
    ball.js       ← supporting class files
    paddle.js
```

## hugo.toml params

```toml
[params]
    banner_image = "images/banner.jpg"   # wide banner, in static/
    grid_cols    = 4
    grid_rows    = 3                     # initial row count;
                                         # grid grows down as
                                         # projects are added
```

## Project front matter

TOML format (`+++` delimiters):
```toml
+++
title      = "My Project"
date       = 2025-01-01
thumbnail = "images/projects/my-thumb.jpg"   # 4:3 recommended
banner    = "images/projects/my-banner.jpg"  # wide, optional
                                             # falls back to title text
# Optional per-post overrides:
# bg_color        = "#0d0d1a"
# text_color      = "#f0f0f0"
# p5_border_color = "#e94560"   # adds border around p5 canvas
# p5_bg_color     = "#000000"   # background behind p5 canvas
+++
```

## p5 shortcode

Page bundles — place your sketch files alongside `index.md`:

```
content/projects/breakout/
  index.md
  sketch.js
  ball.js
  paddle.js
```

In `index.md`:

```
{{< p5 sketch="sketch.js" files="ball.js,paddle.js"
        width="600" height="400" sound=false
        caption="Arrow keys to move" >}}
```

`files` are loaded in order before `sketch.js`. p5.js itself is served
from the theme's `static/js/` — no CDN dependency, no copies per sketch.
The sketch runs in an iframe via `p5loader.html` so p5 global mode works
exactly as it does in a standalone HTML file. No changes needed to
existing sketches.

### p5 border

By default no border is drawn around the canvas. To add one, set
`p5_border_color` in the post's front matter:
```toml
p5_border_color = "#4da6ff"
```

To explicitly suppress any border:
```toml
p5_border_color = "transparent"
```

### Known limitations

**`setInterval` is blocked in iframe contexts.** Use recursive `setTimeout`
instead for any sketch that needs a repeating timer:
```javascript
function schedule_next() {
    setTimeout(function() {
        your_function();
        schedule_next();
    }, 5000);
}
// call once from setup() to start the loop
schedule_next();
```

**`preload()` and async asset loading** — if you have trouble with assets
not loading via `preload()`, use `loadImage()` (or `loadSound()` etc.)
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
    if (img_loaded) {
        image(img, 0, 0);
    }
}
```

## YouTube shortcode

```
{{< youtube id="VIDEO_ID" caption="Demo video" >}}
```

## Footer

The footer displays a copyright line and theme credit. To customize
the name or year, edit `layouts/partials/footer.html` directly — or
override it in your site by creating your own
`layouts/partials/footer.html` which Hugo will prefer over the
theme's version.

## Retheme via CSS variables

All variables are at the top of `static/css/showcase.css`. Override
any of them in your project's own CSS loaded after the theme, or via
a layout override. Key variables:
```css
:root {
    /* Site-wide */
    --bg-color:     #1a1a2e;
    --accent-color: #e94560;
    --text-color:   #e0e0e0;

    /* Grid */
    --grid-gap:     12px;

    /* Post */
    --post-bg:      #12121f;
    --post-text:    #e0e0e0;
    --post-heading: #ffffff;
    --post-max-width: 900px;

    /* p5 embed — all default to none/transparent */
    --p5-border:        none;
    --p5-border-radius: 0;
    --p5-bg:            transparent;
    --p5-shadow:        none;
}
```

All variables are documented at the top of `static/css/showcase.css`.
