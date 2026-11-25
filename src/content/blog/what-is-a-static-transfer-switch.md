---
title: 'What Is a Static Transfer Switch (STS), and When Do You Need One?'
seoTitle: 'What Is a Static Transfer Switch (STS)? | E&C Power'
description: 'How a static transfer switch moves a load between two power sources in milliseconds, how it differs from an ATS, and how to size and buy one in India.'
date: '2026-11-18'
tag: 'Power quality'
photo: '/image/product/Renata%20300%20Series.jpg'
coverAlt: 'E&C Renata-300 online UPS, a typical source feeding a static transfer switch'
products: ['intelligent-transfer-switch', 'renatamodular', 'renata300']
faq:
  - q: 'What is a static transfer switch?'
    a: 'A static transfer switch (STS) is a solid-state switch that connects a load to one of two or more independent power sources and moves it to the other source within a few milliseconds if the first one fails. It uses thyristors (SCRs) instead of moving contacts, so the transfer is fast enough for most IT loads to ride through.'
  - q: 'What is the difference between an STS and an ATS?'
    a: 'An automatic transfer switch (ATS) uses mechanical contacts or a motorised breaker and typically takes from tens of milliseconds to several seconds to transfer, which suits a mains-to-generator changeover. An STS switches electronically in a few milliseconds, so it is used between two UPS or two live sources feeding critical loads.'
  - q: 'How do I size a static transfer switch?'
    a: 'Size it for the full load it will carry, with some margin, because either source may have to carry everything after a transfer. Also check the voltage, phases, number of inputs, overload rating and how the STS will be mounted.'
---

A **static transfer switch (STS)** is a solid-state switch that feeds a load from one of two (or more) independent power sources and, if the preferred source fails or goes out of tolerance, moves the load to the other source in a few milliseconds. "Static" means there are no moving contacts: the switching is done by thyristors, also called SCRs (silicon controlled rectifiers).

The sources are usually two UPS systems, or a UPS and a separate mains feed. The point of an STS is simple: a load with a single power cord can still have two independent supplies behind it.

## How a static transfer switch works

Each input of an STS has a pair of thyristors per phase, connected back to back so they can conduct both halves of the AC cycle. The controller watches the voltage, frequency and phase of every source, many times per cycle.

1. **Normal operation.** The thyristors on the preferred source conduct and the load runs from it. The alternate source is live and checked continuously, but its thyristors are off.
2. **Fault detected.** If the preferred source sags, swells, drops out or drifts outside its window, the controller stops firing that source's thyristors.
3. **Break before make.** A thyristor only turns off when its current falls to zero, so the controller waits for the first source to stop conducting before firing the second. This prevents the two sources ever being connected together, which could cause a large circulating current if they are out of phase.
4. **Transfer complete.** The load is now on the alternate source, typically within about a quarter of a cycle (around 4 to 5 ms at 50 Hz) for a fault transfer between synchronised sources.

### Why synchronisation matters

A clean, fast transfer assumes the two sources are roughly in phase. Most STS designs check the phase angle between sources before a transfer. If they are too far apart, the switch may delay the transfer or allow only a deliberate, slower transfer, because switching a load such as a transformer between out-of-phase sources can cause high inrush current. Where two UPS feed an STS, it is good practice to synchronise them, or at least feed them from the same upstream supply.

<figure>
<svg viewBox="0 0 680 230" role="img" aria-labelledby="sts-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="sts-t">Two independent UPS sources feed a static transfer switch, which supplies a single-corded critical load</title>
<defs><marker id="a-sts" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<g font-size="14" text-anchor="middle">
<rect x="10" y="25" width="140" height="70" rx="8" fill="#005c9e"/><text x="80" y="57" fill="#fff" font-weight="600">Source A</text><text x="80" y="77" fill="#dbe9f6" font-size="12">UPS 1 (preferred)</text>
<rect x="10" y="135" width="140" height="70" rx="8" fill="#005c9e"/><text x="80" y="167" fill="#fff" font-weight="600">Source B</text><text x="80" y="187" fill="#dbe9f6" font-size="12">UPS 2 or mains</text>
<line x1="150" y1="60" x2="265" y2="95" stroke="#0b2546" stroke-width="3" marker-end="url(#a-sts)"/>
<line x1="150" y1="170" x2="265" y2="135" stroke="#0b2546" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#a-sts)"/>
<rect x="270" y="65" width="170" height="100" rx="8" fill="#fff" stroke="#ff9900" stroke-width="3"/>
<text x="355" y="100" fill="#0b2546" font-weight="600">Static transfer</text><text x="355" y="120" fill="#0b2546" font-weight="600">switch</text><text x="355" y="145" fill="#b35f00" font-size="12">SCRs, transfer in ms</text>
<line x1="440" y1="115" x2="515" y2="115" stroke="#0b2546" stroke-width="3" marker-end="url(#a-sts)"/>
<rect x="520" y="75" width="150" height="80" rx="8" fill="#0b2546"/><text x="595" y="110" fill="#fff" font-weight="600">Single-corded</text><text x="595" y="130" fill="#fff" font-weight="600">load</text>
</g>
</svg>
<figcaption>The STS feeds the load from Source A. If A fails, it moves the load to Source B in a few milliseconds, with no moving contacts.</figcaption>
</figure>

## STS vs ATS: what is the difference?

Both switch a load between sources, but they are built for different jobs.

| | Static transfer switch (STS) | Automatic transfer switch (ATS) |
|---|---|---|
| Switching element | Thyristors (SCRs) | Mechanical contactors or motorised breakers |
| Typical transfer time | A few milliseconds | Tens of milliseconds to several seconds |
| Typical use | Between two UPS or two live, clean sources | Between mains and a DG set |
| Wear | No contact wear | Contacts and mechanism wear with use |

An ATS between mains and a diesel generator is normal in Indian buildings, because the UPS carries the load while the generator starts. An STS sits downstream of the UPS, closer to the load, where even a short break would reset servers or controllers.

## Where a static transfer switch is used

- **Data centres with single-corded loads.** Servers with dual power supplies can take feeds from two UPS directly. Older servers, network switches, storage and some telecom equipment have only one cord. An STS gives them dual-source protection too.
- **Dual-bus (2N) designs.** In a 2N system, two separate UPS systems feed A and B distribution. An STS lets single-corded loads draw from both buses.
- **Making two dissimilar UPS redundant.** Two UPS of different makes or ratings cannot always run in parallel. An STS lets them act as a redundant pair.
- **Maintenance without shutdown.** One UPS can be taken out for service while the STS keeps the load on the other.
- **Hospitals, process plants and control rooms**, wherever a short break would trip a critical system.

An STS removes the single point of failure upstream, but it becomes one itself. Good STS designs have redundant control electronics and power supplies, and a manual bypass for maintenance.

## How to size and buy a static transfer switch in India

1. **Size for the full load.** After a transfer, one source carries everything, so rate the STS (and each source) for the whole load plus margin. See [how to size a UPS in kVA](/guides/ups-sizing-kva) to work out the load.
2. **Match voltage and phases.** Single phase for a rack or small room, three phase for a larger distribution.
3. **Count the inputs.** Two is common; three gives one more source to fall back on.
4. **Check frequency range and sync limits**, especially if one source is a generator-backed mains feed.
5. **Plan the mounting.** Rack-mounted units sit in the IT rack; wall or floor units suit a plant room.
6. **Ask about alarms and communication**: status LEDs, audible alarms and a serial port for monitoring.

E&C's [Intelligent Static Transfer Switch](/intelligent-transfer-switch) comes from 1 kVA to 500 kVA, with up to three inputs to one output, a 47 – 60 Hz frequency range, overload and over-temperature protection, LED status indicators, audible alarms, an optional RS-232 port, and wall, floor or rack mounting. It makes dissimilar UPS work as a redundant pair. Pair it with a [Renata-300](/renata300) three phase online UPS, which runs up to four units in parallel, or a [Renata Modular UPS](/renatamodular) with N+X redundancy within each frame. For more on redundancy, read [modular UPS and N+1 redundancy explained](/blogs/modular-ups-n-plus-1-redundancy).
