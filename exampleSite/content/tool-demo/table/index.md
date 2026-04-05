+++
title      = "table shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Use the `table` shortcode to add color accents and captions to tables.
The color affects only the header bottom border — a subtle accent line
between headers and data rows.

## Syntax

```
{{</* table [color] [caption] */>}}
| Col 1 | Col 2 |
|-------|-------|
| a     | b     |
{{</* /table */>}}
```

{{< layout >}}
{{< md >}}
### Color
- (none) → default
- info
- note
- warning
- success
- error
- important
{{< /md >}}
{{< md >}}
### Caption
- any text string
- shown above the table
- optional
{{< /md >}}
{{< /layout >}}

{{< hr fade >}}

## No Color

```
{{</* table */>}}
```

{{< table >}}
| Language   | Type        | First Release |
|------------|-------------|---------------|
| Python     | Interpreted | 1991          |
| JavaScript | Interpreted | 1995          |
| Go         | Compiled    | 2009          |
| Rust       | Compiled    | 2010          |
{{< /table >}}

{{< hr fade >}}

## With Color

```
{{</* table note */>}}
```

{{< table note >}}

| Language   | Type        | First Release |
|------------|-------------|---------------|
| Python     | Interpreted | 1991          |
| JavaScript | Interpreted | 1995          |
| Go         | Compiled    | 2009          |
| Rust       | Compiled    | 2010          |

{{< /table >}}

{{< hr fade >}}

```
{{</* table success "Programming languages by release year" */>}}
```

{{< table success "Programming languages by release year" >}}
| Language   | Type        | First Release |
|------------|-------------|---------------|
| Python     | Interpreted | 1991          |
| JavaScript | Interpreted | 1995          |
| Go         | Compiled    | 2009          |
| Rust       | Compiled    | 2010          |
{{< /table >}}
