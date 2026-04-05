+++
title      = "columns shortcode"
date       = 2026-04-04
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

The `columns` shortcode flows text continuously across multiple columns
like a newspaper — different from `layout` where each cell is independent.

## Syntax

```
{{</* columns [count] [gap] [align] />}}
...text...
{{</ /columns */>}}
```

{{< layout >}}
{{< md >}}
### Parameters
- `count` → number of columns (default: 2)
- `gap` → space between columns (default: 2rem)
- `align` → text alignment (default: left)
{{< /md >}}
{{< md >}}
### vs layout
- `columns` → one text block flowing across columns
- `layout` → independent content blocks side by side
{{< /md >}}
{{< /layout >}}

{{< hint note >}}
The examples here are just using text, but the **columns** shortcode will also allow other shortcodes, images, etc. within.
{{< /hint >}}

{{< hr fade >}}

## Two Columns (default)

```
{{</* columns align="justify" />}}
Long text flows here...
{{</ /columns */>}}
```

{{< columns align="justify" >}}
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
Quisque faucibus ex sapien vitae pellentesque sem placerat.
{{< /columns >}}

{{< hr fade >}}

## Three Columns

```
{{</* columns count="3" align="justify" */>}}
```

{{< columns count="3" align="justify" >}}
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos
himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit.
Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus
mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna.
{{< /columns >}}

{{< hr fade >}}

## Custom Gap

```
{{</* columns count="2" gap="4rem" */>}}
```

{{< columns count="2" gap="4rem" >}}
Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus
duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar
vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class
aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos.
{{< /columns >}}
