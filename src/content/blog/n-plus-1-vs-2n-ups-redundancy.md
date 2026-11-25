---
title: 'N+1 vs 2N: UPS Redundancy for Colocation Data Centres'
seoTitle: 'N+1 vs 2N UPS Redundancy for Colocation | E&C'
description: 'N+1 vs 2N (N+N) UPS redundancy compared: dual-bus A and B feeds, static transfer switches, concurrent maintenance and what colocation customers expect.'
date: '2026-11-18'
tag: 'Data centre'
photo: '/image/product/Renata%20300%20Series.jpg'
coverAlt: 'E&C Renata-300 three phase online UPS for parallel and dual-bus systems'
products: ['intelligent-transfer-switch', 'renatamodular', 'renata300', 'snmp-adapter']
faq:
  - q: 'What is the difference between N+1 and 2N UPS redundancy?'
    a: 'N+1 adds one spare module or unit to a single UPS system, so one part can fail. 2N builds two complete, independent UPS systems, each able to carry the whole load, feeding separate A and B paths, so an entire system can fail or be shut down.'
  - q: 'Is 2N the same as N+N?'
    a: 'Yes, the terms are used for the same idea: a full second system for every system the load needs. Some designers also write 2(N+1), where each of the two systems has its own spare module.'
  - q: 'How do single-corded servers get 2N protection?'
    a: 'Through a static transfer switch or a transfer-switch PDU, which takes both the A and B feeds and switches the load to the healthy one in a few milliseconds.'
---

**N+1** protects the load against the failure of one module or unit inside a single UPS system. **2N**, also called **N+N**, protects it against the failure of a whole UPS system, by building two independent systems that each carry the full load on separate A and B paths. Colocation data centres often choose 2N for customer racks because it lets any one power path be lost or shut down for maintenance without the customer noticing.

If you are new to N+1, start with [what a modular UPS is and how N+1 works](/blogs/online-ups/modular-ups-n-plus-1-redundancy). This post focuses on what 2N adds.

## What N+1 leaves exposed

In an N+1 system, the power modules are redundant, but several parts are still shared: the output switchgear, the distribution boards, the cables to the racks, often the battery string, and in a modular UPS the frame and its bypass. A fault in any shared part, or planned work on it, can affect the whole load. N+1 is very good value against the most common failure, a module or unit, but it is not a protection against everything.

## How 2N works

A 2N system has two complete power paths:

1. **Two UPS systems**, A and B, each sized for the full critical load (each may itself be N+1).
2. **Separate distribution** from each UPS to the racks, with separate panels, breakers and cables.
3. **Dual-corded IT equipment**, with one power supply on the A feed and one on the B feed.

In normal operation each side carries about half the load. If side A fails or is switched off, side B carries everything. Because each side must be able to take the full load, each UPS normally runs at less than 50% of its rating.

<figure>
<svg viewBox="0 0 680 250" role="img" aria-labelledby="twon-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="twon-t">2N dual-bus design: UPS A and UPS B feed separate A and B distribution to a dual-corded server, with a static transfer switch for a single-corded load</title>
<defs><marker id="a-2n" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<g font-size="14" text-anchor="middle">
<rect x="10" y="30" width="130" height="60" rx="8" fill="#005c9e"/><text x="75" y="57" fill="#fff" font-weight="600">UPS system A</text><text x="75" y="77" fill="#dbe9f6" font-size="12">full load rating</text>
<rect x="10" y="160" width="130" height="60" rx="8" fill="#005c9e"/><text x="75" y="187" fill="#fff" font-weight="600">UPS system B</text><text x="75" y="207" fill="#dbe9f6" font-size="12">full load rating</text>
<line x1="140" y1="60" x2="215" y2="60" stroke="#0b2546" stroke-width="3" marker-end="url(#a-2n)"/>
<line x1="140" y1="190" x2="215" y2="190" stroke="#0b2546" stroke-width="3" marker-end="url(#a-2n)"/>
<rect x="220" y="35" width="110" height="50" rx="8" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="275" y="65" fill="#0b2546">A bus</text>
<rect x="220" y="165" width="110" height="50" rx="8" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="275" y="195" fill="#0b2546">B bus</text>
<line x1="330" y1="60" x2="505" y2="95" stroke="#0b2546" stroke-width="3" marker-end="url(#a-2n)"/>
<line x1="330" y1="190" x2="505" y2="105" stroke="#0b2546" stroke-width="3" marker-end="url(#a-2n)"/>
<rect x="510" y="70" width="160" height="60" rx="8" fill="#0b2546"/><text x="590" y="97" fill="#fff" font-weight="600">Dual-corded</text><text x="590" y="117" fill="#fff" font-size="12">server (PSU A + B)</text>
<line x1="330" y1="70" x2="385" y2="160" stroke="#0b2546" stroke-width="2" stroke-dasharray="6 4"/>
<line x1="330" y1="180" x2="385" y2="180" stroke="#0b2546" stroke-width="2" stroke-dasharray="6 4"/>
<rect x="390" y="155" width="80" height="50" rx="8" fill="#fff" stroke="#ff9900" stroke-width="3"/><text x="430" y="185" fill="#b35f00" font-weight="600">STS</text>
<line x1="470" y1="180" x2="505" y2="180" stroke="#0b2546" stroke-width="3" marker-end="url(#a-2n)"/>
<rect x="510" y="155" width="160" height="50" rx="8" fill="#0b2546"/><text x="590" y="185" fill="#fff" font-weight="600">Single-corded load</text>
</g>
</svg>
<figcaption>In 2N, each UPS can carry the whole load. Dual-corded equipment takes one feed from each bus; single-corded equipment gets both through a static transfer switch.</figcaption>
</figure>

## Single-corded equipment and STS

Not every device has two power supplies. Older servers, some network and telecom equipment and many appliances have one cord. For these, a [static transfer switch](/blogs/power-quality/what-is-a-static-transfer-switch) takes both the A and B feeds and switches the load to the healthy one in a few milliseconds. Rack-level transfer switches do the same for a single rack. The STS becomes a shared point for the loads behind it, so keep each one serving a limited group of loads.

## Concurrent maintenance

A key reason for 2N is **concurrent maintainability**: any UPS, panel or cable on one path can be isolated and worked on while the other path carries the load. With N+1, a module can be swapped live, but work on shared switchgear or the output board may need a shutdown or a risky bypass operation. Formal data centre tier and rating schemes define these ideas in their own terms; if you are seeking a certification, design to that scheme's current documents with an accredited consultant.

## N+1 vs 2N compared

| | N+1 | 2N (N+N) |
|---|---|---|
| Protects against | One module or unit failing | A whole UPS system or path failing |
| Shared parts | Output switchgear, distribution, often battery | Only the utility and DG supply upstream |
| Maintenance | Modules live; shared parts may need shutdown | Either path can be shut down |
| UPS loading | High, efficient | Each side below 50% |
| Cost and space | Lower | Roughly double the UPS and distribution |

A common middle ground is **2(N+1)**: two systems, each with its own spare module, for sites that cannot accept reduced redundancy during maintenance.

## Which one to choose

Start from what an outage costs. A single-tenant server room supporting one business can often accept N+1 with a good maintenance bypass and planned shutdown windows. A colocation hall serving many customers, each with its own uptime commitment, usually cannot schedule a shutdown that suits everyone, which pushes it towards 2N or 2(N+1). Also look upstream: 2N UPS gains little if both sides share one panel, one DG changeover or one cable route, so separate the paths as far up the supply as the budget allows.

## Power backup for colocation centres

Colocation operators sell space and power to many customers, so the power design is part of the product. Typical practice:

- **A and B feeds to every rack**, each sized to carry the whole rack's contracted load.
- **Customer guidance** that equipment should be dual-corded, with STS options for single-corded devices.
- **Balanced loading**, so the A and B sides stay below 50% and a failover never overloads one side.
- **Per-feed monitoring** and alarms, so operators see a failed power supply or overloaded feed before it matters.

## E&C equipment for redundant designs

E&C's [Intelligent Static Transfer Switch](/intelligent-transfer-switch), 1 to 500 kVA, takes up to three inputs to one output and makes dissimilar UPS work as a redundant pair. The [Renata Modular](/renatamodular) UPS gives N+X within each frame, with up to four frames in parallel, and the [Renata-300](/renata300) parallels up to four units. The [SNMP adapter](/snmp-adapter) sends alerts by email and SMS. Read [how to size a data centre UPS](/blogs/data-centre/how-to-size-ups-for-data-centre), and talk to our [service team](/eandcpower-services) about maintenance for redundant systems.
