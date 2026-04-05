+++
title      = "details shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#220000"
tile_color = "#ff0000"
+++

Use the `details` shortcode for optional information that readers can expand.

## Syntax

```
{{</* details [user text] [tint] */>}}
{{</* /details */>}}
```

{{< layout >}}
{{< md >}}
### Option
- (empty) → "Click to expand"
- user text
{{< /md >}}
{{< md >}}
### Tint
- true
- false → (default)
{{< /md >}}
{{< /layout >}}

## Basic Example

```
{{</* details */>}}
Without any user params, this just shows ...
{{</* /details */>}}
```

{{< details >}}
Without any user params, this just shows the default "Click to expand" string and whatever is inside with no tinting. The background color is just the default page background.
{{< /details >}}

{{< flag info >}}
The internals of details can contain markdown, other shortcodes, etc. It's pretty useful!
{{< /flag >}}

## More Examples

{{< details "Click to see technical details" true >}}
Here's some detailed technical information that most readers might not need. By hiding it in a collapsible section, you keep the main content focused while still providing depth for interested readers.

You can include any Markdown content here:
- Lists
- Code blocks
- **Formatted text**
{{< /details >}}

{{< details "Configuration example" true >}}
```yaml
theme: showcase
params:
  author: Your Name
  description: Your site description
```
{{< flag note >}}
You can even embed other shortcodes
{{< /flag >}}
{{< /details >}}
