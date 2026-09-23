+++
title      = "mark"
date       = 2026-09-22
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

The `mark` shortcode is an inline highlighter — a translucent color
wash in light mode, and a bright underline in dark mode (a wash goes
muddy on a dark page). The text keeps its normal color either way.

## Syntax

```
{{</* mark [color] */>}}highlighted text{{</* /mark */>}}
```

Colors match the `hint` / `flag` vocabulary; omit for the default yellow.

{{< hr fade >}}

## The colors

Here is {{< mark >}}the default yellow{{< /mark >}}, plus
{{< mark info >}}info{{< /mark >}},
{{< mark note >}}note{{< /mark >}},
{{< mark warning >}}warning{{< /mark >}},
{{< mark success >}}success{{< /mark >}},
{{< mark error >}}error{{< /mark >}}, and
{{< mark important >}}important{{< /mark >}} — all inline, mid-sentence.

{{< hr fade >}}

## In real text

The `rb_push()` call returns {{< mark success >}}0 on success{{< /mark >}}
and {{< mark error >}}-1 when the buffer is full{{< /mark >}}. Note that
`RB_CAP` {{< mark warning >}}must be a power of two{{< /mark >}} or the
mask math breaks.

{{< hr fade >}}

## Spanning several lines

A highlight can {{< mark >}}run across a long stretch of text and wrap
onto the next line, where each line keeps its own strip instead of
stretching into one lopsided box{{< /mark >}} — box-decoration-break at work in light mode.

{{< hr fade >}}

## Inside a callout

{{% hint info %}}
Drop a {{< mark success >}}highlight{{< /mark >}} inside a hint or flag
to pull the eye to one phrase.
{{% /hint %}}
