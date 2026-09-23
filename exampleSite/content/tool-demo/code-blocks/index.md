+++
title      = "code blocks"
date       = 2026-09-22
draft      = false
tile_bg    = "#1e1e2e"
tile_color = "#6e6e8e"
+++

Shows how code renders — standalone, inline, and inside a tab group —
with enough real code to see the palette working in both light and
dark site themes.

## Standalone blocks

A C ring buffer — comments, preprocessor, a struct, numbers, functions:

```c
// ring_buffer.c — fixed-capacity byte FIFO
#include <stdint.h>

#define RB_CAP 256   // power of two

typedef struct {
    uint8_t  buf[RB_CAP];
    uint16_t head;
    uint16_t tail;
} ring_buffer;

// Push one byte; 0 on success, -1 if full.
int rb_push(ring_buffer *rb, uint8_t value)
{
    uint16_t next = (rb->head + 1) & (RB_CAP - 1);
    if (next == rb->tail) {
        return -1;
    }
    rb->buf[rb->head] = value;
    rb->head = next;
    return 0;
}
```

The same idea in Python — a decorator, a docstring, strings:

```python
from dataclasses import dataclass
from math import hypot


@dataclass
class Vec2:
    x: float = 0.0
    y: float = 0.0

    def length(self) -> float:
        """Euclidean magnitude."""
        return hypot(self.x, self.y)


def normalize(v: Vec2) -> Vec2:
    mag = v.length()
    if mag == 0:
        raise ValueError("cannot normalize a zero vector")
    return Vec2(v.x / mag, v.y / mag)
```

{{< hr fade >}}

## Inline code

Call `rb_push()` to enqueue a byte, and tune capacity with the
`RB_CAP` macro.

{{< hr fade >}}

## In a tab group

The same small `gcd` across languages:

{{< tabgroup >}}
{{< tab title="C" >}}
```c
// greatest common divisor (Euclid)
unsigned gcd(unsigned a, unsigned b)
{
    while (b != 0) {
        unsigned t = b;
        b = a % b;
        a = t;
    }
    return a;
}
```
{{< /tab >}}
{{< tab title="Python" >}}
```python
def gcd(a: int, b: int) -> int:
    """Greatest common divisor (Euclid)."""
    while b:
        a, b = b, a % b
    return a
```
{{< /tab >}}
{{< tab title="Rust" >}}
```rust
/// Greatest common divisor (Euclid)
fn gcd(mut a: u64, mut b: u64) -> u64 {
    while b != 0 {
        let t = b;
        b = a % b;
        a = t;
    }
    a
}
```
{{< /tab >}}
{{< tab title="Go" >}}
```go
// greatest common divisor (Euclid)
func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a%b
    }
    return a
}
```
{{< /tab >}}
{{< /tabgroup >}}