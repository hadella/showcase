+++
title     = "gallery shortcode"
date      = 2026-03-28
draft     = false
tile_bg    = "#151541"
tile_color = "#5c5cfb"
+++

The `gallery` shortcode creates an image cycler with left/right
navigation. Images are driven by natural dimensions — no fixed
aspect ratio.

## Syntax

```
{{</* gallery [width] />}}
image-path-1.jpg
image-path-2.jpg
{{</ /gallery */>}}
```

{{< layout >}}
{{< md >}}
### Parameters
- `width` → max width in px, centered (default: full width)
{{< /md >}}
{{< md >}}
### Navigation
- on-screen ← → arrows
- keyboard arrow keys while hovering
- counter shows `1/N`
{{< /md >}}
{{< /layout >}}

{{< hr fade >}}

## Full Width

{{< gallery >}}
images/frame-1.jpg
images/frame-2.jpg
images/frame-3.jpg
images/frame-4.jpg
images/frame-5.jpg
{{< /gallery >}}

## Custom Width

{{< gallery width="600" >}}
images/frame-1.jpg
images/frame-2.jpg
images/frame-3.jpg
images/frame-4.jpg
images/frame-5.jpg
{{< /gallery >}}

Both galleries operate independently — keyboard input only affects
the gallery currently under the mouse cursor.
