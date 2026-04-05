+++
title      = "shortcode basics"
date       = 2026-03-28
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Hugo shortcodes are reusable content snippets embedded in markdown.
Two delimiter styles control how inner content is processed.

## Delimiters

{{< layout cols="1 1" gap="1rem" >}}

{{< md >}}
### `[angle brackets]` — raw
Inner content passed through as-is. Use when the cell contains:
- Other shortcodes
- Raw HTML
- No markdown needed
{{< /md >}}

{{< md >}}
### `[percent signs]` — markdown
Inner content processed as markdown first. Use when the cell contains:
- Bold, italic text
- Bullet lists
- Headings
- Inline code
{{< /md >}}

{{< /layout >}}

{{< hr fade >}}

## Examples

### Shortcode inside a shortcode → use `{{</* */>}}`

```
{{</* layout cols="1 1" */>}}
{{</* cell */>}}
{{</* img src="photo.jpg" */>}}
{{</* /cell */>}}
{{</* /layout */>}}
```

### Markdown content → use `{{%/* */%}}`

```
{{%/* hint info */%}}
This text uses bold and a link.
{{%/* /hint */%}}
```

{{% hint info %}}
This text uses **bold** and a [link](https://example.com).
{{% /hint %}}

### Markdown list in a layout cell → use `md` shortcode

```
{{</* layout cols="1 1" */>}}
{{</* md */>}}
- Item one
- Item two
- Item three
{{</* /md */>}}
{{</* cell */>}}
{{</* img src="photo.jpg" */>}}
{{</* /cell */>}}
{{</* /layout */>}}
```

{{< hr fade >}}

## Quick Reference

- **angle** → `{{</* */>}}`
- **percent** → `{{%/* */%}}`

{{< table info "When to use each delimiter" >}}
| Situation                        | Use       |
|----------------------------------|-----------|
| Shortcode inside shortcode       | angle     |
| Raw HTML inside shortcode        | angle     |
| Bold, italic, lists inside       | percent   |
| hint, flag, details content      | percent   |
| layout, cell, tabgroup container | angle     |
| md shortcode content             | angle     |
{{< /table >}}

{{< hr fade >}}

## The `md` shortcode

The `md` shortcode exists specifically to allow markdown inside
`{{</* */>}}` contexts like `layout`. It applies `markdownify` internally
so you get markdown processing without switching delimiter styles.

```
{{</* layout cols="1 1" */>}}
{{</* md */>}}
- markdown list works here
- bold works too
{{</* /md */>}}
{{</* cell */>}}
{{</* img src="photo.jpg" */>}}
{{</* /cell */>}}
{{</* /layout */>}}
```

{{< layout cols="1 1" gap="1rem" >}}
{{< md >}}
- markdown list works here
- **bold works too**
- and nested lists
  - like this
{{< /md >}}
{{< cell >}}
{{< img src="../img/images/rubber-duck.png" >}}
{{< /cell >}}
{{< /layout >}}
