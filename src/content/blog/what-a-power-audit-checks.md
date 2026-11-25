---
title: 'What a Power Audit Checks, and When You Need One'
seoTitle: 'What a Power Audit Checks, and When You Need One | E&C'
description: 'What an electrical power audit measures: voltage, harmonics, power factor, earthing and UPS loading, how the logging is done, and what the report gives you.'
date: '2026-11-18'
tag: 'Power quality'
photo: '/image/product/renata-ds.jpg'
coverAlt: 'E&C Renata-DS three phase transformerless online UPS with low input current THD'
products: ['renatacyclone', 'isolation', 'ups-remote-monitoring', 'dg-monitoring']
faq:
  - q: 'How long does a power quality audit take?'
    a: 'The site visit itself may take a day, but the analyser is usually left logging for several days, often a full working week, so that every shift, weekend and DG run is captured. Analysis and the report follow.'
  - q: 'What is the difference between an energy audit and a power audit?'
    a: 'An energy audit looks at how much energy each process uses and where it can be saved. A power quality audit looks at how good the supply is: voltage, harmonics, power factor, earthing and how well UPS and DG systems cope. The two often overlap.'
  - q: 'Can a UPS fix poor power quality?'
    a: 'A double conversion online UPS cleans up the supply for the loads connected to it. It does not fix harmonics drawn by other loads, a poor earth or a low power factor in the rest of the plant, which is why an audit looks at the whole system.'
---

A **power audit** (often called a power quality audit) measures how good your electrical supply really is: voltage levels and dips, harmonics, power factor, earthing, and how heavily your UPS, transformers and DG sets are loaded. It is done by logging the supply with a power quality analyser over several days, then turning the readings into a list of specific fixes. You need one when equipment trips or fails without an obvious cause, when you are paying power factor penalties, or before you add a large UPS, solar plant or EV chargers.

## Signs you need a power audit

- **Nuisance tripping** of breakers or drives, often at the same time of day.
- **Equipment failures** that the makers blame on "supply problems": burnt power supplies, failed drives, PLC resets.
- **UPS alarms**: frequent transfers to battery or bypass, overload warnings, unbalanced phases.
- **Hot neutrals, transformers or cables**, which often point to harmonic current.
- **Power factor penalties or high demand charges** on the electricity bill.
- **DG problems**: hunting, voltage swings or trips when UPS or drive loads are on the generator.
- **Planned changes**: a new UPS, a capacity upgrade, rooftop solar or EV charging. Measuring first avoids sizing on guesswork.

## What a power audit checks

### Voltage profile

The analyser records RMS voltage on each phase continuously, with events captured in detail. It shows:

- Long-term high or low voltage, common at the end of long feeders.
- **Sags and swells**: short dips from motor starts, faults nearby or DISCOM switching.
- **Phase unbalance**, which heats motors and stresses three phase UPS.
- Interruptions and their length, which helps decide battery backup time.

### Harmonics

Drives, UPS rectifiers, computers and LED lighting draw current in pulses. The audit measures:

- **Current harmonics (THDi)** at each main feeder and large load, to find where they come from.
- **Voltage harmonics (THDv)** at the main bus, which is what other equipment actually sees.
- **Neutral current**, because triplen harmonics (3rd, 9th and so on) from single phase loads add up in the neutral instead of cancelling.

Limits depend on your connection and your DISCOM's terms; standards such as IEEE 519 are commonly used as a reference.

### Power factor

The audit separates **displacement power factor**, caused by motors and other inductive loads, from **distortion power factor**, caused by harmonics. Capacitor banks fix the first but can make the second worse, and can even resonate with harmonic currents. Knowing which one you have decides the fix.

### Earthing

- **Neutral-to-earth voltage** at sensitive loads. Many controllers, medical and IT devices want this low, often a volt or two.
- **Earth electrode resistance** and continuity of earth conductors, tested with the right instrument.
- **Bonding** between UPS, transformer, panels and equipment.

### UPS, transformer and DG loading

- Load per phase on each UPS, as a % of rating, and how it changes through the day.
- Transformer loading and temperature.
- How the DG copes with the UPS rectifier and other non-linear loads.

## How the logging is done

1. **Single-line diagram review.** The engineer marks where to measure: the main incomer, key feeders, UPS input and output, and problem loads.
2. **Spot measurements** with a clamp meter and analyser at many points.
3. **Long-term logging** at the main points, usually for several days, covering every shift, a weekend and a DG run.
4. **Earthing tests** with an earth tester.
5. **Thermal scan** of panels under load, to catch hot joints.

Analysers must be connected by qualified staff following the site's safety rules, because the measurements are taken on live panels.

## What you get from the audit

| Finding | What it usually leads to |
|---|---|
| High current harmonics | Harmonic filters, low-THD UPS rectifiers, K-rated transformers |
| Hot neutral | Larger neutral conductors, isolation or K-rated transformer |
| Low displacement power factor | Capacitor bank or APFC panel, checked for harmonic resonance |
| Sags and swells | Online UPS for sensitive loads, stabilizer for slow swings |
| High neutral-to-earth voltage | Earthing repairs, isolation transformer near the load |
| UPS above about 80% load | Load balancing, upgrade or redundant UPS |
| DG instability with UPS load | DG resizing or UPS input settings review |

A good report ranks these by risk and cost, so you fix the problems that cause downtime first.

## Keep measuring after the audit

An audit is a snapshot. [UPS remote monitoring](/ups-remote-monitoring) keeps logging UPS load, battery voltage and mode with SMS and email alerts, and [DG monitoring](/dg-monitoring) records generator load, running hours and fuel level, so you can see whether the fixes worked.

## Power audit services and E&C

E&C's service engineers carry out sizing and load assessment, measuring the load before recommending a UPS and battery configuration; tell us what you need measured through [UPS service and AMC](/eandcpower-services). Where harmonics are the issue, the [Renata-DS](/renatacyclone) online UPS has a high input power factor and low input current THD. E&C [isolation transformers](/isolation) from 1 to 500 kVA include K-rated designs for harmonic loads. For how harmonics and bypass affect a UPS, see [UPS THD, surge and bypass explained](/blogs/power-quality/ups-thd-surge-and-bypass-explained) and [isolation transformers for UPS](/blogs/power-quality/isolation-transformer-for-ups).
