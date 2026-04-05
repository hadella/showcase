+++
title      = "color shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

The `color` shortcode applies color to inline text without breaking
the flow of a sentence — useful when a full hint or flag would be
too heavy.

## Syntax

```
{{</* color "type" />}}text{{</ /color */>}}
```

Colors match the hint/flag type vocabulary:
- `info` → cyan
- `note` → purple
- `warning` → orange
- `success` → green
- `error` → red
- `important` → yellow

{{< hr fade >}}

## Inline Usage

Regular text with {{< color info >}}info colored words{{< /color >}} inline.

Regular text with {{< color note >}}note colored words{{< /color >}} inline.

Regular text with {{< color warning >}}warning colored words{{< /color >}} inline.

Regular text with {{< color success >}}success colored words{{< /color >}} inline.

Regular text with {{< color error >}}error colored words{{< /color >}} inline.

Regular text with {{< color important >}}important colored words{{< /color >}} inline.

{{< hr fade >}}

## Longer Phrase

{{< color warning >}}This entire sentence is colored warning orange without needing a full hint or flag box.{{< /color >}}

{{< color success >}}Color can span as much text as needed — words, sentences, or whole paragraphs.{{< /color >}}

{{< hr fade >}}

## Combined with Other Shortcodes

{{% hint info %}}
Use {{< color warning >}}color{{< /color >}} inside hints for
extra emphasis on specific words.
{{% /hint %}}

{{% flag note %}}
{{< color error >}}Critical values{{< /color >}} stand out clearly
when combined with a flag.
{{% /flag %}}