+++
title      = "Details Shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#220000"
tile_color = "#ff0000"
+++

Use details for optional information that readers can expand:

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
{{< /details >}}
