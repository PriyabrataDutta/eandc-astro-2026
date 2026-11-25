---
title: 'What Is an FCBC Battery Charger? Float and Boost Modes Explained'
seoTitle: 'What Is an FCBC Battery Charger? Float vs Boost | E&C'
description: 'What a float cum boost charger (FCBC) does, float vs boost mode, DC voltages, sizing, dual-charger redundancy and pairing with Ni-Cd or lead-acid.'
date: '2026-11-18'
tag: 'Batteries'
photo: '/image/product/ups%20battery%20charger.jpg'
coverAlt: 'E&C industrial float cum boost (FCBC) battery charger'
products: ['industrial-battery-charger-fcbc', 'nickel', 'tubular-batteries-manufacturing']
faq:
  - q: 'What is an FCBC battery charger?'
    a: 'FCBC stands for float cum boost charger. It is an industrial charger that keeps a battery bank fully charged at float voltage while supplying the DC load, and switches to a higher boost voltage to recharge the battery quickly after a discharge.'
  - q: 'What is the difference between float and boost charging?'
    a: 'Float is a steady, lower voltage that holds a charged battery at full charge for long periods. Boost is a higher voltage used for a limited time to recharge a discharged battery or equalise the cells.'
  - q: 'How do you size an FCBC charger?'
    a: 'Add the continuous DC load current to the current needed to recharge the battery in the required time, then add a margin. The battery maker states the recommended charging current, often expressed as a fraction of its Ah capacity.'
---

In a substation, power plant or process plant, the most critical loads often run on DC, not AC. Protection relays, breaker trip coils, control panels and emergency lights all need a supply that never stops. That supply comes from a battery bank, and the battery is kept ready by an **FCBC charger**.

## What is an FCBC battery charger?

An **FCBC** is a **float cum boost charger**. It is an industrial AC-to-DC charger that does two jobs at once:

1. It supplies the **DC load** continuously while the mains is available.
2. It keeps the **battery bank** charged, in either float or boost mode.

When the mains fails, the battery takes over the DC load with no break, because it is already connected in parallel. When the mains returns, the FCBC recharges the battery and takes the load back.

<figure>
<svg viewBox="0 0 680 230" role="img" aria-labelledby="fcbc-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="fcbc-t">AC mains feeds an FCBC charger, whose DC output supplies the DC load and the battery bank in parallel, through a dropper during boost</title>
<defs><marker id="fcbc-a" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<g font-size="14" text-anchor="middle">
<rect x="10" y="60" width="110" height="80" rx="8" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="65" y="96" fill="#0b2546" font-weight="600">AC mains</text><text x="65" y="116" fill="#506070" font-size="12">220 / 415 V</text>
<line x1="120" y1="100" x2="165" y2="100" stroke="#0b2546" stroke-width="3" marker-end="url(#fcbc-a)"/>
<rect x="170" y="50" width="150" height="100" rx="8" fill="#005c9e"/><text x="245" y="92" fill="#fff" font-weight="600">FCBC charger</text><text x="245" y="114" fill="#dbe9f6" font-size="12">float or boost</text>
<line x1="320" y1="100" x2="400" y2="100" stroke="#0b2546" stroke-width="3"/>
<line x1="400" y1="100" x2="400" y2="170" stroke="#0b2546" stroke-width="3"/>
<line x1="400" y1="170" x2="445" y2="170" stroke="#0b2546" stroke-width="3" marker-end="url(#fcbc-a)"/>
<rect x="450" y="135" width="130" height="70" rx="8" fill="#fff" stroke="#ff9900" stroke-width="3"/><text x="515" y="166" fill="#b35f00" font-weight="600">Battery bank</text><text x="515" y="186" fill="#506070" font-size="12">Ni-Cd or lead-acid</text>
<rect x="450" y="25" width="90" height="50" rx="8" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="495" y="55" fill="#0b2546" font-size="12" font-weight="600">Dropper</text>
<line x1="400" y1="100" x2="400" y2="50" stroke="#0b2546" stroke-width="3"/><line x1="400" y1="50" x2="445" y2="50" stroke="#0b2546" stroke-width="3" marker-end="url(#fcbc-a)"/>
<line x1="540" y1="50" x2="585" y2="50" stroke="#0b2546" stroke-width="3" marker-end="url(#fcbc-a)"/>
<rect x="590" y="20" width="80" height="60" rx="8" fill="#0b2546"/><text x="630" y="47" fill="#fff" font-weight="600">DC</text><text x="630" y="66" fill="#fff" font-weight="600">load</text>
<text x="420" y="125" fill="#506070" font-size="12" text-anchor="start">DC bus</text>
</g>
</svg>
<figcaption>The FCBC feeds the DC load and the battery together. During boost, a dropper keeps the load voltage within limits while the battery receives the higher voltage.</figcaption>
</figure>

## Float mode vs boost mode

### Float mode

Float is the normal, everyday state. The charger holds the battery at a steady **float voltage**, just high enough to make up for the battery's self-discharge and keep it at full charge, while supplying the full DC load. A battery can sit on float for months or years. Typical float values are around 2.25 V per cell for VRLA lead-acid and around 1.4 V per cell for Ni-Cd, but the battery maker's figure always takes priority.

### Boost mode

Boost is a higher voltage used for a limited time to:

- recharge the battery quickly after a power cut or discharge test
- give the first charge when a new battery is commissioned
- equalise cells that have drifted apart, especially in Ni-Cd and flooded banks

Most FCBCs switch automatically: when the battery current rises after a discharge, the charger moves to boost, and when the current drops back the battery is charged, it returns to float. Many also allow manual boost with a timer.

### Why a dropper is needed

Boost voltage can be higher than the DC load can safely accept. A **silicon dropper** (a chain of diodes in the load path) drops the voltage reaching the load in steps, so the battery gets boost voltage while relays and trip coils see a safe voltage.

## Typical DC system voltages

| DC voltage | Typical use |
|---|---|
| 24 V | Instrumentation, control panels, small automation |
| 48 V | Telecom, PLCC and communication equipment |
| 110 V | Substation and switchgear protection, tripping and control |
| 220 V | Large substations, power plants and heavy switchgear |

## Where FCBCs are used

- **Substations and switchyards:** the DC supply that trips breakers on a fault. If it fails, a fault may not be cleared.
- **Power plants:** control, protection and emergency DC loads.
- **Telecom:** 48 V DC power for exchanges and network equipment.
- **Railways:** signalling and station systems.
- **Process plants, refineries and steel:** DCS, PLC and emergency lighting.

## How to size an FCBC

The charger has to carry the load and recharge the battery at the same time, so:

**Charger current = continuous DC load current + battery charging current, plus a margin.**

1. **DC load current:** add up the standing load, such as relays, indication lamps, controls and communication equipment.
2. **Battery charging current:** take the battery maker's recommended charging rate. It is often quoted as a fraction of the Ah capacity, commonly around 0.1C to 0.2C, so a 200 Ah bank might need about 20 to 40 A.
3. **Margin:** add headroom for future loads, ageing and high ambient temperature in Indian panel rooms.

Also confirm the AC input (single phase or three phase), the number of cells and battery type, the alarms and communication needed, and the cable run to the battery.

## Dual FCBC redundancy

At critical sites, a single charger is a single point of failure. Common arrangements are:

- **Two FCBCs in parallel**, sharing the load, so either can carry it alone if the other fails.
- **One float charger plus one float cum boost charger (FC + FCBC)**, where the float charger feeds the load while the FCBC boosts the battery.
- **Two chargers and two battery banks**, one for each DC bus, for the highest availability in large substations.

## Pairing with Ni-Cd or lead-acid

An FCBC must be set for the battery it charges. Ni-Cd and lead-acid have different cell voltages, float and boost levels and temperature behaviour. **Ni-Cd** is often chosen for long life in hot or remote sites; read [what a nickel cadmium battery is](/blogs/nickel-cadmium-battery-explained). **Flooded tubular** and VRLA lead-acid cost less upfront and suit many plant and telecom systems. Battery temperature compensation helps protect either type in hot rooms.

## FCBC chargers from E&C

E&C's [industrial FCBC chargers](/industrial-battery-charger-fcbc) give 48 V, 110 V and 220 V DC from 220 V or 415 V AC input, with automatic float / boost, a silicon dropper, low ripple, an input isolation transformer, battery temperature compensation, parallel capability, and Ethernet and MODBUS / RS-485 communication. They work with Ni-Cd and lead-acid batteries, and E&C also supplies [nickel cadmium](/nickel) and [tubular batteries](/tubular-batteries-manufacturing) to match.
