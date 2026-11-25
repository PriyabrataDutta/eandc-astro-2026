---
title: 'UPS for Oil, Gas and Petrochemical Plants'
seoTitle: 'UPS for Oil, Gas & Petrochemical Plants | E&C'
description: 'How industrial UPS powers control, safety and telecom loads in refineries, gas and chemical plants: layout, DC systems, Ni-Cd batteries and siting.'
date: '2026-11-18'
tag: 'Industrial UPS'
photo: '/image/home/industrial%20Inverters.jpg'
coverAlt: 'E&C industrial inverter for oil, gas and petrochemical plant UPS systems'
products: ['industrial-inverter', 'industrial-battery-charger-fcbc', 'nickel', 'ip-41-55-online-ups']
faq:
  - q: 'Can a UPS be installed in a hazardous area?'
    a: 'Equipment in a hazardous area must suit that area''s classification under the applicable codes. A standard UPS is not built for that, so it is normally installed in a safe-area control room or substation and its output is cabled to the loads.'
  - q: 'Why do refineries use Ni-Cd batteries for UPS?'
    a: 'Nickel cadmium batteries tolerate high and low temperatures, deep discharge and neglect better than most lead acid types and have a long service life. Many oil and gas specifications call for them, though the final choice depends on the project.'
  - q: 'What is the difference between an industrial UPS and a commercial UPS?'
    a: 'An industrial UPS is usually built as a separate charger, battery and inverter with a static switch and bypass transformer, designed for harsh sites, long life and project specifications. A commercial UPS is a compact unit aimed at IT loads in clean rooms.'
---

Oil and gas plants use a **UPS** to keep control, safety and communication systems alive when the grid or the plant's own generation trips. A typical **power backup for oil and gas** sites in India is an industrial AC UPS built from a float cum boost charger, a battery bank (often nickel cadmium), an inverter and a static transfer switch, often duplicated for redundancy, plus DC systems for switchgear. The same approach applies to **petrochemical plants** and much of the **chemical industry**.

## What needs uninterruptible power

In a refinery, gas processing plant, terminal or chemical unit, the UPS typically feeds:

- **Distributed control system (DCS)** controllers, I/O and operator stations.
- **Safety instrumented systems** such as emergency shutdown (ESD), and fire and gas detection panels, in line with what the safety system designer specifies.
- **Field instrumentation** power supplies, analysers and metering systems.
- **Telecom:** radio, PA and telephony, CCTV and the plant network.
- **Critical lighting and control room systems**, where the design calls for them.

Large motors, compressors and pumps are fed from the plant's main power system, not the UPS. The UPS exists so the plant can be controlled, held safe or shut down in an orderly way when that power is disturbed.

## Hazardous areas and where the UPS sits

Process areas in these plants are often classified as hazardous because flammable gas or vapour may be present. **Any equipment installed in a hazardous area must suit that area's classification under the applicable codes**, and the authority having jurisdiction has the final word. A UPS, its charger and its batteries are normally installed in a **safe-area control room, substation or equipment room**, often pressurised, with outputs cabled to the field. Battery rooms need ventilation designed for the battery type and the gases it may release.

## The typical architecture

<figure>
<svg viewBox="0 0 640 220" role="img" aria-labelledby="og-ups-title" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto">
<title id="og-ups-title">Industrial UPS: charger, battery, inverter and static switch with bypass</title>
<defs><marker id="og-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#0b2546"/></marker></defs>
<g font-family="sans-serif" font-size="13" text-anchor="middle">
<rect x="10" y="40" width="90" height="44" rx="6" fill="#0b2546"/><text x="55" y="67" fill="#fff">AC input</text>
<rect x="140" y="40" width="100" height="44" rx="6" fill="#005c9e"/><text x="190" y="60" fill="#fff">Charger</text><text x="190" y="76" fill="#fff">(FCBC)</text>
<rect x="280" y="40" width="100" height="44" rx="6" fill="#005c9e"/><text x="330" y="67" fill="#fff">Inverter</text>
<rect x="420" y="40" width="90" height="44" rx="6" fill="#ff9900"/><text x="465" y="60" fill="#0b2546">Static</text><text x="465" y="76" fill="#0b2546">switch</text>
<rect x="545" y="40" width="85" height="44" rx="6" fill="#0b2546"/><text x="587" y="60" fill="#fff">Critical</text><text x="587" y="76" fill="#fff">AC loads</text>
<rect x="210" y="130" width="100" height="40" rx="6" fill="#fff" stroke="#005c9e" stroke-width="2"/><text x="260" y="155" fill="#0b2546">Battery (DC)</text>
<rect x="280" y="180" width="140" height="34" rx="6" fill="#fff" stroke="#0b2546" stroke-width="2"/><text x="350" y="202" fill="#0b2546">Bypass transformer</text>
</g>
<g stroke="#0b2546" stroke-width="2" fill="none">
<line x1="100" y1="62" x2="138" y2="62" marker-end="url(#og-arrow)"/>
<line x1="240" y1="62" x2="278" y2="62" marker-end="url(#og-arrow)"/>
<line x1="380" y1="62" x2="418" y2="62" marker-end="url(#og-arrow)"/>
<line x1="510" y1="62" x2="543" y2="62" marker-end="url(#og-arrow)"/>
<line x1="260" y1="84" x2="260" y2="128"/>
<polyline points="55,84 55,197 278,197" marker-end="url(#og-arrow)"/>
<polyline points="420,197 465,197 465,86" marker-end="url(#og-arrow)"/>
</g>
</svg>
<figcaption>A common industrial UPS layout. Redundant systems duplicate the charger and inverter.</figcaption>
</figure>

1. **Float cum boost charger (FCBC)** converts AC to DC, keeps the battery on float and recharges it after an outage. See [what an FCBC charger is](/blogs/batteries/fcbc-battery-charger-explained).
2. **Battery bank** on the DC bus, sized for the backup time in the project specification.
3. **Inverter** converts DC back to clean sine wave AC.
4. **Static transfer switch** moves the load to a bypass supply, usually through a bypass or regulating transformer, if the inverter is overloaded or faulty.
5. **Maintenance bypass** lets the system be worked on without shutting down the loads.

For higher availability, plants often use **dual chargers and dual inverters**, in parallel or hot standby, so a single failure does not drop the load.

## DC systems for switchgear

Alongside the AC UPS, substations in these plants use **110 V or 220 V DC systems**, chargers with batteries, to power circuit breaker trip and close coils, protection relays and emergency lighting. The same charger and battery skills apply.

## Batteries: why Ni-Cd is common

Many oil and gas specifications call for [nickel cadmium batteries](/blogs/batteries/nickel-cadmium-battery-explained). They handle wide temperature ranges, tolerate deep discharge and have a long service life. Valve regulated lead acid batteries are also used, usually in air-conditioned rooms. Backup times are set by the project and are often much longer than in commercial buildings, because the control system may need to keep running through a long outage.

## Backup time and redundancy choices

Backup time in these plants is usually written into the project specification by the end user or engineering contractor. It reflects how long control, safety and telecom systems must keep running if all AC power is lost, which may be far longer than a DG changeover. Longer backup means a larger battery, a larger charger to recharge it in a sensible time and a larger battery room, so it is worth confirming the figure early.

Redundancy is a similar trade-off. Common options are:

- **Single system with static bypass:** simplest, but the load falls back to the bypass supply if the inverter fails.
- **Hot standby:** a second inverter or UPS takes over if the first fails.
- **Parallel redundant:** two or more units share the load, and any one can carry it alone.
- **Dual independent systems:** two separate UPS feeding equipment with dual power supplies, often used for DCS and safety systems.

## Specification points

- **Input:** wide voltage and frequency range, since supply may come from the grid or captive generation.
- **Output:** low harmonic distortion and good handling of non-linear loads such as instrument power supplies.
- **Environment:** heat, dust and humidity in coastal or desert sites. For units outside air-conditioned rooms, consider sealed enclosures; see [MIL grade vs IP55 UPS](/blogs/online-ups/mil-grade-vs-ip55-industrial-ups).
- **Communication:** alarms and status to the DCS, often by potential free contacts or MODBUS.
- **Documentation and testing:** factory and site tests as required by the end user or engineering contractor.
- **Service:** spares and trained engineers for a long plant life; see [E&C services](/eandcpower-services).

## E&C industrial UPS for oil, gas and chemical plants

E&C builds [industrial UPS](/industrial-ups-manufacturer-in-india) systems to project needs. The [industrial inverter](/industrial-inverter), 3 to 100 kVA, works from 48, 110 or 220 VDC with a built-in isolation transformer, an optional static transfer switch and standalone, hot standby or parallel configuration, and lists process industry among its applications. The [FCBC industrial battery charger](/industrial-battery-charger-fcbc) handles Ni-Cd and lead acid batteries with MODBUS/RS-485 communication. E&C supplies [Ni-Cd batteries](/nickel) from Saft and HBL, and the [IP41 to IP55 industrial online UPS](/ip-41-55-online-ups), 10 to 40 kVA, suits dusty and hot plant rooms.
