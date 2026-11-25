---
title: 'Isolation Transformer vs Isolation UPS: Which Does Your Load Need?'
seoTitle: 'Isolation Transformer vs Isolation UPS | E&C'
description: 'Transformer-based UPS, transformerless UPS plus isolation transformer, or a transformer alone: how each isolates, backs up and handles bypass.'
date: '2026-11-18'
tag: 'Power quality'
photo: '/image/product/isolation_transformer.jpg'
coverAlt: 'E&C isolation transformer compared with an online UPS with galvanic isolation'
products: ['renata300', 'renatacyclone', 'isolation', 'rack-mount']
faq:
  - q: 'What is an isolation UPS?'
    a: 'An online UPS whose output is galvanically isolated from its input, usually by a transformer after the inverter. The load gets a separately derived supply with its own neutral-to-earth bond, plus battery backup.'
  - q: 'Is a load isolated when the UPS is on bypass?'
    a: 'Not always. In many designs the static bypass connects the mains straight to the output, so isolation is lost while on bypass. If the load must be isolated at all times, put the isolation transformer where both the inverter and bypass paths pass through it, or check that the UPS has one in its bypass line.'
  - q: 'Can an isolation transformer replace a UPS?'
    a: 'No. It gives isolation, a clean neutral-to-earth bond and some noise rejection, but no backup and no voltage regulation. Use it alone only for loads that can tolerate power cuts.'
---

An **isolation transformer** gives galvanic isolation and a clean neutral-to-earth bond, but no backup. An **isolation UPS**, usually a transformer-based online UPS, gives isolation and backup in one unit. A transformerless online UPS has no isolation of its own, so an external isolation transformer is added when the load needs it. The detail that decides between them is the **bypass path**: when the UPS goes to bypass, the load may lose its isolation unless the transformer sits where both paths pass through it.

For what an isolation transformer does, K-ratings and sizing, see [what is an isolation transformer and does your UPS need one](/blogs/power-quality/isolation-transformer-for-ups). This post compares the three ways of getting isolation.

## The three options

<figure>
<svg viewBox="0 0 680 300" role="img" aria-labelledby="ivu-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="ivu-t">Three arrangements: transformer-based online UPS, transformerless UPS with output isolation transformer, and standalone isolation transformer without backup</title>
<defs><marker id="ivu-a" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<g font-size="13" text-anchor="middle">
<text x="10" y="30" text-anchor="start" fill="#0b2546" font-weight="600">A. Transformer-based online UPS</text>
<rect x="10" y="42" width="90" height="44" rx="6" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="55" y="69" fill="#0b2546">Mains</text>
<line x1="100" y1="64" x2="145" y2="64" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="150" y="42" width="230" height="44" rx="6" fill="#005c9e"/><text x="265" y="69" fill="#fff">Online UPS + output transformer</text>
<line x1="380" y1="64" x2="545" y2="64" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="550" y="42" width="120" height="44" rx="6" fill="#0b2546"/><text x="610" y="69" fill="#fff">Load</text>
<text x="463" y="84" fill="#b35f00" font-size="11">bypass may skip transformer</text>
<text x="10" y="125" text-anchor="start" fill="#0b2546" font-weight="600">B. Transformerless UPS + isolation transformer</text>
<rect x="10" y="137" width="90" height="44" rx="6" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="55" y="164" fill="#0b2546">Mains</text>
<line x1="100" y1="159" x2="145" y2="159" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="150" y="137" width="170" height="44" rx="6" fill="#005c9e"/><text x="235" y="164" fill="#fff">UPS incl. bypass</text>
<line x1="320" y1="159" x2="365" y2="159" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="370" y="137" width="150" height="44" rx="6" fill="#fff" stroke="#ff9900" stroke-width="3"/><text x="445" y="164" fill="#b35f00" font-weight="600">Isolation transformer</text>
<line x1="520" y1="159" x2="545" y2="159" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="550" y="137" width="120" height="44" rx="6" fill="#0b2546"/><text x="610" y="164" fill="#fff">Load</text>
<text x="10" y="220" text-anchor="start" fill="#0b2546" font-weight="600">C. Isolation transformer only (no backup)</text>
<rect x="10" y="232" width="90" height="44" rx="6" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="55" y="259" fill="#0b2546">Mains</text>
<line x1="100" y1="254" x2="365" y2="254" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="370" y="232" width="150" height="44" rx="6" fill="#fff" stroke="#ff9900" stroke-width="3"/><text x="445" y="259" fill="#b35f00" font-weight="600">Isolation transformer</text>
<line x1="520" y1="254" x2="545" y2="254" stroke="#0b2546" stroke-width="3" marker-end="url(#ivu-a)"/>
<rect x="550" y="232" width="120" height="44" rx="6" fill="#0b2546"/><text x="610" y="259" fill="#fff">Load</text>
</g>
</svg>
<figcaption>Where the transformer sits decides whether the load stays isolated on bypass, and whether it has backup at all.</figcaption>
</figure>

### A. Transformer-based online UPS (output isolation)

The inverter feeds the load through a transformer inside the UPS. While the UPS runs on its inverter, from mains or battery, the output is a separately derived supply, galvanically isolated from the input.

- **Pros:** isolation and backup in one cabinet; rugged; handles difficult loads well.
- **Cons:** heavier and larger than a transformerless UPS of the same rating, and the transformer adds some losses.
- **Watch:** the static and maintenance bypass. In many designs the bypass connects mains straight to the output, so the load loses isolation, and its neutral-to-earth bond may shift, whenever the UPS is on bypass.

### B. Transformerless online UPS plus an isolation transformer

A transformerless UPS is lighter and often more efficient, but its output neutral is usually the input neutral, so the load is not isolated. Adding an isolation transformer fixes this, and where you put it matters:

- **On the UPS output**, after the bypass joins: the load stays isolated whether the UPS is on inverter or on bypass. This is the usual choice when isolation must be continuous.
- **On the UPS input**: isolates the UPS and load from the mains on the inverter path, but a separately fed bypass input is not isolated unless it also comes through a transformer.

The external transformer adds floor space, weight and losses, which can cancel some of the transformerless UPS's advantage.

### C. Standalone isolation transformer (no backup)

For loads that need a clean neutral-to-earth bond or noise rejection but can tolerate power cuts, such as some CNC machines or workshop instruments, an isolation transformer on its own may be enough. It does not give backup or regulate voltage; for slow voltage swings, pair it with a [servo voltage stabilizer](/stabilizer).

## UPS with isolation vs UPS without isolation

| | A. Transformer-based UPS | B. Transformerless UPS + output transformer | Transformerless UPS alone | C. Isolation transformer only |
|---|---|---|---|---|
| Isolation on inverter | Yes | Yes | No | n/a |
| Isolation on bypass | Depends on design | Yes | No | Yes |
| Backup | Yes | Yes | Yes | No |
| New neutral-to-earth bond at load | Yes, on inverter | Yes | No | Yes |
| Size and weight | Larger | Largest | Smallest | Small |

## Typical situations

- **CNC machines and controllers** that list a maximum neutral-to-earth voltage: a transformer-based UPS, or a transformerless UPS with an output transformer. If the machine only misbehaves with noise and is not critical through outages, option C may do.
- **Medical and laboratory equipment** that specifies galvanic isolation: isolation must usually hold on bypass too, so check the bypass path carefully or use option B. Follow the equipment maker and the applicable codes for medical locations.
- **Server rooms with good earthing**: a transformerless UPS without isolation is often fine and saves space and losses.
- **Large three phase UPS feeding mixed loads**: isolation can be provided only for the feeders that need it, with a smaller transformer on those circuits rather than one sized for the whole UPS.

## Bypass in practice

Bypass is not rare. A UPS transfers to static bypass on overload, on an internal fault, and during maintenance through the maintenance bypass. If those are exactly the moments when a sensitive load would see high neutral-to-earth voltage or noise, ask the UPS supplier for a drawing showing where the transformer sits relative to the bypass, and where the neutral-to-earth bond is made in each mode.

## How to choose

1. **Does the load need isolation at all?** Check the equipment maker's limit on neutral-to-earth voltage and any isolation requirement. Many IT loads with good earthing work well on a transformerless UPS without isolation.
2. **Does it need isolation continuously, even on bypass?** If yes, use option B with the transformer on the output, or confirm how option A handles its bypass path.
3. **Does it need backup?** If not, option C may be enough.
4. **Are space and efficiency tight?** Compare the full system losses and footprint, not just the UPS datasheet.

Whichever you choose, the neutral-to-earth bond for the separately derived supply must be made correctly, following the applicable codes and the authority having jurisdiction.

## E&C options

The [Renata-300](/renata300), 10 to 800 kVA three phase, has an inbuilt isolation transformer, and the [Renata-I](/renata), 2 to 30 kVA, is transformer-based. The transformerless [Renata-DS](/renatacyclone), 10 to 300 kVA, and the [Accenta Rack](/rack-mount), 1 to 60 kVA, both offer an optional isolation transformer. E&C [isolation transformers](/isolation) run from 1 to 500 kVA, including ultra isolation and K-rated designs. Our [online UPS](/online-ups) page lists the full range, and the [online vs offline UPS guide](/guides/online-vs-offline-ups) explains double conversion.
