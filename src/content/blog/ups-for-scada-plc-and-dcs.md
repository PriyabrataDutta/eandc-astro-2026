---
title: 'UPS for SCADA, PLC and DCS Systems: AC or DC, and How to Size It'
seoTitle: 'UPS for SCADA, PLC and DCS Systems | E&C'
description: 'How to power SCADA, PLC and DCS systems: online UPS, industrial AC UPS or DC systems, redundant feeds, inrush, alarms into the control system and backup time.'
date: '2026-11-18'
tag: 'Industrial UPS'
photo: '/image/product/ups%20battery%20charger.jpg'
coverAlt: 'E&C industrial battery charger for DC power to PLC and DCS systems'
products: ['industrial-inverter', 'industrial-battery-charger-fcbc', 'renatacyclone', 'ip-41-55-online-ups']
faq:
  - q: 'Does a PLC need an online UPS?'
    a: 'An online UPS is the safer choice, because the PLC never sees a transfer gap and the UPS filters spikes and dips. Some small panels use line interactive UPS, but a short break during transfer can still reset sensitive power supplies.'
  - q: 'Is DC power better than an AC UPS for a control system?'
    a: 'Neither is always better. A DC system with a charger and battery is simple and very reliable for loads that accept DC directly, such as 24 VDC PLCs and instruments. An AC UPS suits systems built around AC-powered servers, operator stations and network gear. Many plants use both.'
  - q: 'How do I connect UPS alarms to SCADA?'
    a: 'Use the UPS dry contacts wired to digital inputs, or a MODBUS or SNMP link read by the SCADA or DCS. Typical signals are on battery, low battery, on bypass and UPS fault.'
---

SCADA, PLC and DCS systems need a **UPS** because a controller that resets, even for a moment, loses control of the process. The usual answer is a **double conversion online UPS** or an industrial AC UPS feeding the control system's power supplies, or a DC system with a charger and battery feeding 24 VDC loads directly. Good practice adds redundant feeds, alarms back into the control system and backup time based on what the process needs to reach a safe state.

## What makes up the control system load

A typical **power supply for automation systems** feeds:

- **Controllers and I/O:** PLC racks, DCS controllers, remote I/O and safety controllers.
- **Field power:** 24 VDC supplies for transmitters, solenoid valves and loop-powered instruments.
- **Operator level:** HMIs, operator and engineering stations, SCADA and historian servers.
- **Network:** industrial switches, firewalls, fibre converters and radios.
- **RTUs and telemetry** at remote sites.

Motors, heaters and drive power sections are not on the UPS. The UPS keeps the control system aware and in charge.

## Three ways to power it

| Approach | How it works | Suits |
|---|---|---|
| Online UPS | Rectifier, battery and inverter in one unit, AC out | Small to medium plants, control rooms with servers and stations |
| Industrial AC UPS | Separate charger, battery, inverter, static switch and bypass transformer | Process plants, power plants, project specifications |
| DC system | Charger and battery feeding 24, 48, 110 or 220 VDC directly | PLCs and instruments that accept DC, switchgear control |

### Online UPS for process industries

For many factories and utilities, a compact **online UPS** in the control room feeds the control panels and servers. It has no transfer time, filters disturbances and can be monitored over SNMP or MODBUS. Choose a unit that tolerates DG supply and the plant's harmonics.

### Industrial AC UPS

Large process plants often specify a separate charger, battery and inverter with a static switch. These systems are built for long life and harsh sites and are easier to make redundant. Our post on [UPS for oil, gas and petrochemical plants](/blogs/industrial-ups/ups-for-oil-gas-and-petrochemical-plants) shows the layout.

### DC systems

PLCs and most field devices run on 24 VDC internally. Feeding them from a DC charger and battery removes the inverter and the AC-to-DC power supplies from the chain. A [float cum boost charger](/blogs/batteries/fcbc-battery-charger-explained) keeps the battery charged and supplies the load. Many plants use DC for controllers and instruments and an AC UPS for servers and stations.

## Redundancy

A control system is only as reliable as its power. Common practices:

1. **Dual power supplies** in controllers and servers, each fed from a different source.
2. **Two UPS or two inverters**, in parallel or hot standby, so a single failure does not drop the load.
3. **A static transfer switch** to give single-corded equipment a second source; see [what a static transfer switch is](/blogs/power-quality/what-is-a-static-transfer-switch).
4. **Separate feeds for safety systems** as their designer specifies.
5. **Maintenance bypass** so the UPS can be serviced without a plant shutdown.

## Sizing points that catch people out

- **Inrush current.** Switch-mode power supplies and servers draw a large surge at switch-on. Starting a whole panel at once from a small UPS can trip it to bypass.
- **Non-linear load.** Control system power supplies draw distorted current. Choose a UPS rated for non-linear loads and allow margin.
- **Growth.** Control systems grow as plants add lines. Leave room in the UPS and in the battery.
- **Battery backup time.** Set it by the time the process needs to reach a safe state, the DG start and changeover, and any requirement to keep monitoring through a long outage. See [UPS battery backup time](/guides/ups-battery-backup-time).

Our [UPS sizing in kVA](/guides/ups-sizing-kva) guide walks through the arithmetic.

## Bring the UPS into the control system

Operators watch SCADA, not the UPS display. Wire the UPS into the control system so they see:

- On battery / mains failed
- Low battery or battery fault
- On bypass
- UPS fault or overload

Dry contacts are the simplest; MODBUS or SNMP give more detail. Our post on [SNMP and remote UPS monitoring](/blogs/monitoring/snmp-and-remote-ups-monitoring) covers the network side.

## Earthing and noise

Control systems are sensitive to electrical noise and earth loops. Keep the UPS output for control panels separate from drives, welding sets and other noisy loads, follow the control system maker's earthing guidance, and consider an [isolation transformer](/blogs/power-quality/isolation-transformer-for-ups) where a clean neutral-earth bond is needed close to the panels.

## Environment

Control room UPS units usually sit in clean, cooled rooms. Field panels and remote I/O sites are another matter: heat, dust and humidity call for sealed enclosures, cooled kiosks or DC power. For water utilities, see [UPS for water treatment plants](/blogs/industrial-ups/ups-for-water-treatment-plants).

## E&C power for SCADA, PLC and DCS

E&C builds [industrial UPS](/industrial-ups-manufacturer-in-india) and DC systems for automation. The [industrial inverter](/industrial-inverter), 3 to 100 kVA from 48, 110 or 220 VDC, has a built-in isolation transformer, potential free contacts, an optional static transfer switch and standalone, hot standby or parallel configuration. The [FCBC battery charger](/industrial-battery-charger-fcbc) supplies 48, 110 or 220 VDC with Ethernet and MODBUS/RS-485. The [Renata-DS](/renatacyclone), 10 to 300 kVA, has 12 dry contact outputs and optional MODBUS and SNMP, and the [IP41 to IP55 industrial online UPS](/ip-41-55-online-ups) suits hot, dusty plant rooms. For AMC and service, see [E&C services](/eandcpower-services).
