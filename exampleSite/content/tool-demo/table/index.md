+++
title      = "Table Shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Use the table shortcode to add color to your table headers:

### Uncolored table

{{< table >}}

| Language   | Type        | First Release |
|------------|-------------|---------------|
| Python     | Interpreted | 1991          |
| JavaScript | Interpreted | 1995          |
| Go         | Compiled    | 2009          |
| Rust       | Compiled    | 2010          |

{{< /table >}}

### Colored Table

{{< table color="note">}}

| Language   | Type        | First Release |
|------------|-------------|---------------|
| Python     | Interpreted | 1991          |
| JavaScript | Interpreted | 1995          |
| Go         | Compiled    | 2009          |
| Rust       | Compiled    | 2010          |

{{< /table >}}

Available colors:
- accent
- info
- note
- warning
- success
- error
- important
