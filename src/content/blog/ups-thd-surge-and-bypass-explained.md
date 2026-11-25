---
title: 'UPS THD, Surge Protection, Bypass and Eco Mode Explained'
seoTitle: 'UPS THD, Surge, Bypass & Eco Mode Explained | E&C'
description: 'What UPS total harmonic distortion means, static vs maintenance bypass, how an online UPS handles surges, and the trade-off of energy saver (eco) mode.'
date: '2026-11-18'
tag: 'Power quality'
photo: '/image/product/renata-ds.jpg'
coverAlt: 'E&C Renata-DS transformerless three phase online UPS with low input current THD'
products: ['renata', 'renatacyclone', 'renatamodular']
faq:
  - q: 'What is a good THD for a UPS?'
    a: 'For output voltage, a good online UPS typically stays under about 3% THD on linear loads and under about 5 to 8% on non-linear loads. For input current, a UPS with an active power factor correction rectifier is often below 5% at full load, while older 6-pulse thyristor rectifiers can be 25% or more without filters.'
  - q: 'What is a UPS bypass switch?'
    a: 'A static bypass is an automatic electronic switch inside the UPS that moves the load to mains if the inverter is overloaded or faulty. A maintenance bypass is a manual switch that routes mains around the UPS so it can be serviced or replaced without shutting the load down.'
  - q: 'Is eco mode safe on a UPS?'
    a: 'Eco mode saves energy by running the load on filtered mains, with the inverter on standby. It is fine for many loads, but the load sees mains disturbances that the UPS does not correct and a short transfer when mains fails, so sensitive or critical loads usually stay in double conversion.'
---

Four questions come up again and again when comparing online UPS datasheets: what the **THD** figures mean, what the **bypass switch** does, how a UPS **protects against surges**, and whether **energy saver or eco mode** is worth turning on. Here are short, direct answers first, then the detail.

- **THD** (total harmonic distortion) measures how far a waveform is from a clean sine wave. A UPS has two THD figures: input current THD (what the UPS does to your supply) and output voltage THD (what the UPS gives your load).
- A **bypass switch** routes the load around the UPS electronics. The **static bypass** does this automatically on a fault or overload; the **maintenance bypass** does it manually for servicing.
- An **online double conversion UPS** protects against surges by converting AC to DC and back, so the load never connects directly to the mains. Surge protective devices (SPDs) are still needed upstream.
- **Eco mode** feeds the load from mains through the bypass and keeps the inverter on standby, for higher efficiency at the cost of less protection.

## UPS total harmonic distortion (THD)

### Input current THD

A UPS rectifier draws current from the mains. Older 6-pulse thyristor rectifiers draw it in pulses, creating harmonic currents that can reach 25 to 30% THD or more without filters. These harmonics heat transformers and cables, upset DG sets and can disturb other equipment on the same supply. Modern UPS with an **active power factor correction (PFC)** IGBT rectifier draw an almost sinusoidal current, often below 5% THD at full load. Input THD usually rises at light load, so compare figures at the same load level.

Low input current THD matters most when the UPS runs on a diesel generator, or when many non-linear loads share one transformer. IEEE 519 is a widely used reference for harmonic limits at the point of supply.

### Output voltage THD

Output voltage THD measures the quality of the sine wave the UPS gives the load. A good online UPS typically stays under about 3% on a linear load. On non-linear loads, such as computer power supplies, it rises, and datasheets usually quote a separate, higher figure. A low output figure means the inverter holds a clean wave even when the load draws distorted current.

## What is a UPS bypass switch?

<figure>
<svg viewBox="0 0 680 250" role="img" aria-labelledby="byp-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="byp-t">Online UPS power path through rectifier and inverter, with a static bypass and a manual maintenance bypass around it</title>
<defs><marker id="a-byp" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<g font-size="14" text-anchor="middle">
<rect x="10" y="95" width="100" height="60" rx="8" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="60" y="130" fill="#0b2546" font-weight="600">Mains</text>
<line x1="110" y1="125" x2="175" y2="125" stroke="#0b2546" stroke-width="3" marker-end="url(#a-byp)"/>
<rect x="180" y="95" width="110" height="60" rx="8" fill="#005c9e"/><text x="235" y="130" fill="#fff" font-weight="600">Rectifier</text>
<line x1="290" y1="125" x2="355" y2="125" stroke="#0b2546" stroke-width="3" marker-end="url(#a-byp)"/>
<text x="322" y="115" fill="#506070" font-size="11">DC</text>
<rect x="360" y="95" width="110" height="60" rx="8" fill="#005c9e"/><text x="415" y="130" fill="#fff" font-weight="600">Inverter</text>
<line x1="470" y1="125" x2="555" y2="125" stroke="#0b2546" stroke-width="3" marker-end="url(#a-byp)"/>
<rect x="560" y="95" width="110" height="60" rx="8" fill="#0b2546"/><text x="615" y="130" fill="#fff" font-weight="600">Load</text>
<path d="M60 95 V50 H615 V90" fill="none" stroke="#ff9900" stroke-width="3" marker-end="url(#a-byp)"/>
<text x="335" y="42" fill="#b35f00" font-size="12" font-weight="600">Static bypass (automatic, electronic)</text>
<path d="M60 155 V205 H615 V160" fill="none" stroke="#0b2546" stroke-width="2.5" stroke-dasharray="6 4" marker-end="url(#a-byp)"/>
<text x="335" y="225" fill="#0b2546" font-size="12" font-weight="600">Maintenance bypass (manual switch)</text>
</g>
</svg>
<figcaption>In double conversion the load runs from the inverter. The static bypass takes over automatically on a fault or overload; the maintenance bypass lets the whole UPS be isolated for service.</figcaption>
</figure>

### Static bypass

The **static bypass** is a thyristor switch inside the UPS that connects the load straight to mains (the bypass supply) in milliseconds. It operates when the inverter is overloaded, for example by a motor start or a short-circuit downstream, or if the inverter develops a fault. When the problem clears, the UPS transfers the load back to the inverter. While on static bypass, the load has no battery backup and no conditioning.

### Maintenance (manual) bypass

The **maintenance bypass** is a manual switch, inside the UPS or in an external panel, that routes mains around the UPS completely. An engineer can then switch off and service the UPS while the load stays powered from mains. It should be operated in the correct sequence, usually after the UPS has first moved to static bypass, so the transfer is made without a break. An external maintenance bypass panel also lets the UPS be removed and replaced without rewiring.

## How a UPS protects from power surges

In an online double conversion UPS, mains is converted to DC, then the inverter builds a new AC output. A spike or surge on the input has to pass through the input filters, the rectifier and the DC link with its capacitors and battery before it can reach the load, and most of it is absorbed along the way. That is why online UPS give the best protection for sensitive equipment.

But a UPS is not a lightning arrester:

- A large surge from lightning or switching can damage the UPS itself.
- When the UPS is on bypass, the load is connected to mains, so surges pass through.
- Surges can enter through data, telephone and earth paths too.

So fit **surge protective devices (SPDs)** at the main and sub-distribution boards, coordinated by type, and make sure the earthing is sound. For noise and neutral-to-earth problems, see [isolation transformers for UPS](/blogs/power-quality/isolation-transformer-for-ups).

## What is energy saver (eco) mode on a UPS?

In **eco mode**, the UPS feeds the load from mains through the bypass, usually with some filtering, and keeps the inverter ready. If the mains goes out of tolerance, the UPS transfers the load to the inverter, typically within a few milliseconds.

- **Benefit:** higher efficiency, because the rectifier and inverter are not converting power full time. On large UPS running all year, the saving in electricity and cooling can be significant.
- **Trade-off:** the load sees mains sags, swells, harmonics and frequency variation that double conversion would remove, plus a short break on transfer.

Eco mode can suit robust IT loads on a stable supply. For medical equipment, process controllers and sites with poor or generator-fed mains, double conversion is the safer default.

UPS eco mode is not the same thing as E&C's [industrial energy saver](/energy-saver), which is a separate product that reduces the energy used by lighting in large facilities.

## E&C online UPS and power quality

E&C's [Renata-I](/renata) is a transformer-based double conversion UPS, 2 to 30 kVA, with IGBT PWM output and an inbuilt static bypass. The [Renata-DS](/renatacyclone), 10 to 300 kVA, has a high input power factor, low input current THD, and both static and maintenance bypass. The [Renata Modular UPS](/renatamodular), 10 to 1200 kVA, uses advanced PFC technology and includes lightning, surge, short circuit and overload protection with an EMI / RFI noise filter. For regular checks of bypass and surge protection, see the [UPS maintenance checklist](/blogs/service/ups-maintenance-checklist).
