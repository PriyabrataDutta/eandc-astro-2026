---
title: 'What Is a Modular UPS? N+1 Redundancy Explained'
seoTitle: 'Modular UPS & N+1 Redundancy Explained | E&C Power'
description: 'How a modular UPS works, what N+1 redundancy means, how to size the modules, and when a modular UPS beats a standalone or parallel UPS.'
date: '2026-11-17'
tag: 'Online UPS'
photo: '/image/product/Renata%20modular%20ups%20online.jpg'
coverAlt: 'Renata Modular online UPS frame with hot-swappable power modules'
products: ['renatamodular', 'renata300', 'renatacyclone']
faq:
  - q: 'What does N+1 mean in a UPS?'
    a: 'N is the number of UPS modules needed to carry the load. N+1 means one extra module is installed, so any single module can fail or be removed for service while the rest still carry the full load.'
  - q: 'Is a modular UPS more expensive?'
    a: 'At small capacities the frame and modules usually cost more per kVA than a standalone UPS. The saving comes later: you buy only the modules you need today, add more as the load grows, and get redundancy without buying a second full UPS.'
  - q: 'Can I add modules to a modular UPS later?'
    a: 'Yes, up to the capacity of the frame. Modules are added while the system runs, and the frame wiring, bypass and breakers are sized for the full frame from day one.'
---

A modular UPS is an online UPS built from a frame and a set of identical, plug-in power modules. Each module is a complete small UPS: rectifier, inverter and control. The frame holds the modules, shares the static bypass, the battery connection and the display, and splits the load between all the modules that are running.

Because the modules share the load, you can install more modules than the load strictly needs. That spare capacity is what **N+1 redundancy** means, and it is the main reason data centres, banks and hospitals choose modular UPS systems.

## How N+1 redundancy works

**N** is the number of modules the load needs. **+1** is one extra module. With N+1, any single module can fail, or be pulled out for service, and the remaining modules still carry the full load without a break.

<figure>
<svg viewBox="0 0 640 260" role="img" aria-labelledby="nplus1-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="nplus1-t">A modular UPS frame with three active 20 kVA modules and one redundant module carrying a 55 kVA load</title>
<rect x="20" y="20" width="360" height="220" rx="10" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/>
<text x="200" y="45" text-anchor="middle" font-size="15" font-weight="600" fill="#0b2546">UPS frame (shared bypass, battery, display)</text>
<g font-size="14" text-anchor="middle">
<rect x="40" y="65" width="70" height="150" rx="6" fill="#005c9e"/><text x="75" y="135" fill="#fff">20 kVA</text><text x="75" y="155" fill="#fff" font-size="12">active</text>
<rect x="125" y="65" width="70" height="150" rx="6" fill="#005c9e"/><text x="160" y="135" fill="#fff">20 kVA</text><text x="160" y="155" fill="#fff" font-size="12">active</text>
<rect x="210" y="65" width="70" height="150" rx="6" fill="#005c9e"/><text x="245" y="135" fill="#fff">20 kVA</text><text x="245" y="155" fill="#fff" font-size="12">active</text>
<rect x="295" y="65" width="70" height="150" rx="6" fill="#fff" stroke="#ff9900" stroke-width="3" stroke-dasharray="6 4"/><text x="330" y="135" fill="#0b2546">20 kVA</text><text x="330" y="155" fill="#b35f00" font-size="12">+1 spare</text>
</g>
<line x1="380" y1="130" x2="470" y2="130" stroke="#0b2546" stroke-width="3" marker-end="url(#a1)"/>
<defs><marker id="a1" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<rect x="480" y="85" width="140" height="90" rx="8" fill="#0b2546"/>
<text x="550" y="122" text-anchor="middle" fill="#fff" font-size="15" font-weight="600">Load</text>
<text x="550" y="145" text-anchor="middle" fill="#ffcc80" font-size="14">55 kVA</text>
</svg>
<figcaption>N+1 in practice: a 55 kVA load needs three 20 kVA modules (N = 3). A fourth module makes it N+1, so any one module can fail without dropping the load.</figcaption>
</figure>

### Sizing example

Say your critical load is 55 kVA and the UPS uses 20 kVA modules.

1. **Find N.** 55 ÷ 20 = 2.75, so you need 3 modules to carry the load.
2. **Add redundancy.** N+1 = 4 modules, giving 80 kVA installed.
3. **Check the margin.** With one module out, 3 × 20 = 60 kVA still covers 55 kVA.
4. **Plan growth.** If the frame takes 10 modules, you can add six more as the load grows, without replacing the UPS.

For critical sites some owners go further, to N+2, or run two separate frames fed from different sources (2N). Each step adds cost, so match the redundancy to how much an outage would cost you. To work out the load in kVA first, see [how to size a UPS](/guides/ups-sizing-kva).

## Modular vs standalone vs parallel UPS

| | Standalone UPS | Two UPS in parallel | Modular UPS |
|---|---|---|---|
| Redundancy | None: one UPS fault drops to bypass | N+1 with a second full UPS | N+1 with one extra module |
| Growing the capacity | Replace the UPS, or add a second one | Add another full UPS | Add a module to the frame |
| Repair time | Engineer repairs on site | Engineer repairs on site | Swap the faulty module, often in minutes |
| Floor space | Smallest for a fixed load | Two full footprints | One frame, capacity grows vertically |
| Cost at small sizes | Lowest | Highest | In between |

## Benefits of a modular UPS

- **Pay as you grow.** Buy the modules you need now and add more later, instead of oversizing on day one.
- **Redundancy without a second UPS.** One spare module gives N+1 power-module redundancy for much less than a second full UPS. The shared frame parts are not duplicated; see below.
- **Fast repairs.** A failed module is swapped while the others carry the load, so the system is back to full redundancy quickly.
- **Better efficiency.** A UPS runs most efficiently near its rated load. With modules, installed capacity stays closer to the real load than one oversized UPS.
- **Less floor space.** Capacity grows inside the same frame.

## When a modular UPS is not the right choice

- **Small, stable loads.** For a few kVA that will not grow, a single online UPS such as [Accenta](/accenta) or [Renata-I](/renata) costs less.
- **Harsh sites.** Dusty, hot plant rooms may suit a rugged transformer-based UPS like [Renata-300](/renata300) or an [IP-rated industrial UPS](/ip-41-55-online-ups) better.
- **When the frame itself is the risk.** The modules are redundant, but the frame's backplane, static bypass, controls and usually the battery string are shared. For loads that cannot tolerate any single point of failure, use two separate frames or UPS systems on separate feeds (2N).
- **When you need galvanic isolation.** Most modular UPS are transformerless. If your load needs isolation, add an [isolation transformer](/blogs/power-quality/isolation-transformer-for-ups).

## The Renata Modular UPS

E&C's [Renata Modular UPS](/renatamodular) is a high frequency, double conversion online UPS. Its hot-swappable modules range from 10 kVA to 40 kVA, each frame holds 10 to 13 modules with N+X redundancy inside the frame, and up to four frames can run in parallel, for systems from 10 kVA to 1200 kVA.
