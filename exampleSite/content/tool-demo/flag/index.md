+++
title      = "flag shortcode"
date       = 2026-03-29
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Flags are similar to hints but with different styling; a `hint` is subtle, where a `flag` demands attention.

## Syntax

```
{{</* flag [option] [tint] */>}}
```

{{< layout >}}
{{< md >}}
### Option
- info → (default)
- note
- warning
- success
- error
- important
{{< /md >}}
{{< md >}}
### Tint
- true
- false → (default)
{{< /md >}}
{{< /layout >}}

## Examples

```
{{%/* flag info */%}}
flags are great for sharing important information. No tint.
{{%/* /flag */%}}
```

{{% flag info %}}
flags are great for sharing important information. No tint.
{{% /flag %}}

```
{{%/* flag info true */%}}
flags are great for sharing important information.
{{%/* /flag */%}}
```

{{% flag info true %}}
flags are great for sharing important information.
{{% /flag %}}

{{< hr fade >}}

```
{{%/* flag note */%}}
flags are great for sharing key takeaways and notes. No tint.
{{%/* /flag */%}}
```

{{% flag note %}}
flags are great for sharing key takeaways and notes. No tint.
{{% /flag %}}

```
{{%/* flag note true */%}}
flags are great for sharing key takeaways and notes.
{{%/* /flag */%}}
```

{{% flag note true %}}
flags are great for sharing key takeaways and notes.
{{% /flag %}}

{{< hr fade >}}

```
{{%/* flag warning */%}}
Be careful with this approach in production environments. No tint.
{{%/* /flag */%}}
```

{{% flag warning %}}
Be careful with this approach in production environments. No tint.
{{% /flag %}}

```
{{%/* flag warning true */%}}
Be careful with this approach in production environments.
{{%/* /flag */%}}
```

{{% flag warning true %}}
Be careful with this approach in production environments.
{{% /flag %}}

{{< hr fade >}}

```
{{%/* flag success true */%}}
Your configuration is working correctly! No tint.
{{%/* /flag */%}}
```

{{% flag success %}}
Your configuration is working correctly! No tint.
{{% /flag %}}

```
{{%/* flag success true */%}}
Your configuration is working correctly!.
{{%/* /flag */%}}
```

{{% flag success true %}}
Your configuration is working correctly!.
{{% /flag %}}

{{< hr fade >}}

```
{{%/* flag error */%}}
This operation cannot be reversed. No tint.
{{%/* /flag */%}}
```

{{% flag error %}}
This operation cannot be reversed. No tint.
{{% /flag %}}

```
{{%/* flag error true */%}}
This operation cannot be reversed.
{{%/* /flag */%}}
```

{{% flag error true %}}
This operation cannot be reversed.
{{% /flag %}}

{{< hr fade >}}

```
{{%/* flag important */%}}
Always backup your data before proceeding. No tint.
{{%/* /flag */%}}
```

{{% flag important %}}
Always backup your data before proceeding. No tint.
{{% /flag %}}

```
{{%/* flag important true */%}}
Always backup your data before proceeding.
{{%/* /flag */%}}
```

{{% flag important true %}}
Always backup your data before proceeding.
{{% /flag %}}
