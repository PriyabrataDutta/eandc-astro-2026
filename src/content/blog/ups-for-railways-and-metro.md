---
title: 'UPS and Battery Backup for Railways and Metro Signalling'
seoTitle: 'UPS for Railways and Metro Signalling | E&C Power'
description: 'Which railway and metro loads need backup, how DC battery systems, chargers, inverters and online UPS fit together, and what to check in the specification.'
date: '2026-11-18'
tag: 'Industrial UPS'
photo: '/image/home/industrial%20Inverters.jpg'
coverAlt: 'E&C industrial inverter for railway and metro DC battery systems'
products: ['industrial-battery-charger-fcbc', 'industrial-inverter', 'ip-41-55-online-ups', 'nickel']
faq:
  - q: 'Why does railway signalling need battery backup?'
    a: 'Signalling equipment decides when a train may move. If it loses power it fails safe, which stops or slows trains, so a battery-backed supply keeps signals, interlockings and train detection running through a supply failure.'
  - q: 'Is a DC battery system or an online UPS better for railway loads?'
    a: 'Often both are used. DC equipment and switchgear controls run from a battery and float cum boost charger, while AC loads such as signalling equipment, servers and passenger systems run from an inverter or online UPS fed by that battery or its own.'
  - q: 'What approvals does railway power backup equipment need?'
    a: 'Each railway or metro project specifies its own approvals, type tests and vendor qualification. Read the tender specification carefully and confirm with the supplier which requirements their equipment meets before ordering.'
---

**Power backup for railways in India** keeps signalling, train detection, telecom and station systems running when the supply fails. Signalling fails safe, so an outage does not cause a collision, but it does stop or slow trains. Most railway and metro sites therefore use a battery-backed DC system with float cum boost chargers, plus inverters or online UPS for the AC loads, often in duplicate.

## Railway and metro loads that need backup

### Signalling and train control

- Electronic and relay interlockings, which set routes and lock points.
- Train detection: track circuits or axle counters.
- Signal lamps or LED signals, point machines and level crossing controls.
- On metro lines, communication-based train control (CBTC) equipment in equipment rooms and along the track.

### Telecom and control

- Optical fibre and radio communication, control centre servers and SCADA for traction power.
- Data loggers and event recorders.

### Stations

**Battery backup for railway stations** typically covers public address, passenger information displays, CCTV, ticketing, access control and emergency lighting. On metro stations, add platform screen doors, fare gates and station control rooms. Large mechanical loads such as tunnel ventilation fans and escalators are usually served from separate supplies and generators rather than UPS.

## How railway power backup is usually arranged

1. **Two incoming feeds** where available, from different sources, with automatic changeover.
2. **A DC battery system**, commonly 110 V, with float cum boost chargers (FCBC). The charger keeps the battery on float and supplies DC loads; the battery takes over instantly if AC fails. Our post on [FCBC battery chargers](/blogs/batteries/fcbc-battery-charger-explained) explains float and boost modes.
3. **Inverters** that turn the battery's DC into clean AC for signalling equipment that needs it, often with a static transfer switch to a standby supply.
4. **Online UPS** for servers, telecom racks and station systems, sometimes in an integrated power supply panel that brings chargers, inverters and UPS together.
5. **Redundancy**: duplicated chargers, inverters or UPS, so one can fail or be serviced without losing the load.

## Battery choice

Railway sites are hot, dusty and often unattended, and batteries may sit in relay huts or location boxes with little temperature control.

- **Nickel cadmium** batteries tolerate heat, cold and deep discharges and have a long service life, which is why they appear in many railway DC systems. See [what a nickel cadmium battery is](/blogs/batteries/nickel-cadmium-battery-explained).
- **VRLA and tubular lead-acid** cost less upfront but age faster in heat.
- **Lithium iron phosphate** is used in some newer installations where weight and space matter, with a battery management system.

Size the battery for the backup time the specification asks for, at the lowest expected temperature and end-of-life capacity. Our guide to [UPS battery backup time](/guides/ups-battery-backup-time) shows the basic arithmetic.

## UPS for metro rail infrastructure

Metro systems differ from mainline railways in a few ways:

- **Dense equipment rooms** at every station and depot, with servers, CBTC and telecom racks, where a three phase online UPS with N+1 redundancy is common.
- **Tunnel and elevated sections**, where equipment must cope with dust, vibration and limited access for maintenance.
- **Central monitoring**, so the operations control centre can see the state of every UPS and battery bank.

Remote monitoring of battery voltage, temperature and internal resistance helps find weak blocks before an outage does.

## What to check in a railway specification

Railway and metro projects specify their own approvals, type tests and vendor qualification. These vary by railway zone, metro corporation and project, so read the tender documents carefully. Typical points include:

- **DC voltage** (for example 24, 48 or 110 V) and allowed voltage window.
- **Input range** and behaviour on generator or traction-substation auxiliary supply.
- **Environmental conditions**: temperature, humidity, dust, vibration near the track.
- **EMC**, since equipment sits near traction systems and sensitive signalling electronics.
- **Earthing and isolation**, including whether the DC system is floating with earth leakage monitoring.
- **Redundancy, alarms and remote monitoring** interfaces, such as potential free contacts or MODBUS.
- **Required approvals and test certificates**, as stated by the project.

## E&C power for railway and metro sites

E&C's [industrial battery chargers (FCBC)](/industrial-battery-charger-fcbc) give 48, 110 or 220 V DC for Ni-Cd or lead-acid batteries, with automatic float and boost, battery temperature compensation, parallel capability and MODBUS / RS-485 communication; railways are among their listed applications. The [industrial inverter](/industrial-inverter), from 3 to 100 kVA on 48, 110 or 220 VDC, has a built-in isolation transformer and an optional static transfer switch. For dusty AC locations, the [IP41 – IP55 industrial online UPS](/ip-41-55-online-ups) covers 10 to 40 kVA, and E&C supplies [nickel cadmium batteries](/nickel) from Saft and HBL. Because each railway or metro project sets its own approvals, share your project specification and our engineers can discuss how it can be met. For harsher, mobile or high-EMC duty, see the [MIL grade UPS](/mil-grade).
