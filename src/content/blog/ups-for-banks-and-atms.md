---
title: 'UPS for Banks, ATMs and BFSI Branches: A Practical Guide'
seoTitle: 'UPS for Banks, ATMs & BFSI Branches in India | E&C'
description: 'How to choose UPS and power backup for bank branches, ATMs and BFSI offices in India: loads, backup time, redundancy, remote monitoring and service.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/accenta.jpg'
coverAlt: 'E&C Accenta online UPS used for ATMs and bank branch IT loads'
products: ['accenta', 'renata', 'ups-remote-monitoring', 'snmp-adapter']
faq:
  - q: 'What size UPS does an ATM need?'
    a: 'A single ATM with its network router usually needs a small single phase online UPS, often in the 1 to 3 kVA range. The exact rating depends on the ATM model, whether the UPS also feeds the lobby lights and AC, and the backup time the bank specifies.'
  - q: 'Should a bank branch UPS feed the air conditioners?'
    a: 'Usually not. Air conditioners and general lighting are normally kept on the DG supply, because putting them on the UPS greatly increases the UPS and battery size. The UPS is reserved for IT, networking, cash handling and security loads.'
  - q: 'How do banks monitor UPS at hundreds of ATM sites?'
    a: 'Through remote monitoring. A UPS with SNMP or a GPRS-based monitoring unit reports load, battery voltage and mains or battery mode to a central dashboard and sends SMS or email alerts, so the service team can act before the ATM goes down.'
---

A **UPS for the banking sector** has one job above all others: keep transactions, cash handling and security running through every power cut and voltage swing. For most bank branches and ATMs in India, that means a **double conversion online UPS** feeding IT, networking, ATM and security loads, a diesel generator (DG) for longer outages, and remote monitoring so a central team knows the state of every site. Getting the load split right between UPS and DG decides most of the cost.

## Typical loads in a bank branch

A mid-sized branch has a predictable mix of equipment. Split it into three groups before sizing anything.

**Zero-break loads (on online UPS):**

- Teller and officer PCs, passbook printers and thermal receipt printers
- Core banking network: router, switches, firewall and any V-SAT or leased-line modem
- Cash counting machines and note sorters in the cash area
- CCTV recorder (DVR or NVR), cameras on PoE switches and the alarm panel interface
- Biometric attendance and access control at the strong room

**Short-break tolerable loads (on DG, optionally on a small UPS):**

- Token display systems, queue management kiosks and digital signage
- Emergency lighting in the banking hall, where it is not already on its own battery

**DG-only loads:**

- Split or cassette air conditioners, water dispensers and general lighting

Keeping air conditioning off the UPS is the single biggest saving. Compressors draw high starting current, run for long hours and would multiply battery size several times over.

## ATM and off-site kiosk power

**Power backup for ATM machines** is a separate design problem from the branch, because many ATMs sit in rented kiosks, petrol pumps and shopping arcades with no DG at all. A **UPS system for ATM banking in India** has to plan for that:

1. **The ATM, router and lobby camera** form the critical load. The kiosk AC and signage lights normally do not need to be on the UPS.
2. **Backup time is set by the bank's service policy**, not by the UPS. Off-site kiosks with no DG often need longer backup than a branch ATM that has DG support.
3. **Input supply in small towns** can swing widely. An online UPS with a wide input window regulates the output without dropping to battery every time the voltage dips.
4. **Earthing at kiosks is often poor.** A high neutral-to-earth voltage can cause ATM faults and communication errors, so check the earth before blaming the UPS.
5. **Heat in the kiosk** shortens battery life. Battery placement away from the AC exhaust, with some ventilation, helps.

A small single phase online UPS is the usual choice for one ATM.

## Sizing the branch UPS

Use measured or nameplate figures, not guesses. A typical method:

1. List every zero-break load and its running power in watts.
2. Add a margin for future counters, often 20% to 30%.
3. Convert to kVA using the UPS output power factor.
4. Choose backup time based on the DG arrangement: enough to cover DG start and one failed attempt where a DG exists, longer where it does not.

Our guide on [UPS sizing in kVA](/guides/ups-sizing-kva) shows the calculation step by step, and [UPS battery backup time](/guides/ups-battery-backup-time) covers runtime.

## Redundancy for BFSI offices

**Power backup for the BFSI sector** goes beyond branches. Regional offices, processing centres and server rooms run core applications whose failure affects many branches at once. For these, plan for:

- **Hot standby or parallel UPS** so one unit can fail or be serviced without dropping the load.
- **Separate UPS for the server room and the office floor**, so a fault on the floor does not take down the network core.
- **Maintenance bypass** so a technician can work on the UPS while the load stays on mains or DG.

## Monitoring a banking ATM network

A bank with hundreds of ATMs cannot send a technician to check each UPS. **Power backup for a banking ATM network** works only with remote visibility of each site:

- **UPS load, battery voltage and mains or battery mode** for every site on one dashboard.
- **SMS and email alerts** when a site goes on battery, the battery falls low, or the UPS goes into bypass.
- **Trend data** to spot batteries that are losing capacity before they fail during an outage.

Branches with a LAN can use an [SNMP adapter](/snmp-adapter); kiosks without a dependable network can use a GPRS-based [UPS remote monitoring system](/ups-remote-monitoring). Our post on [SNMP and remote UPS monitoring](/blogs/monitoring/snmp-and-remote-ups-monitoring) explains the options.

## Installation and battery care

- **Space:** branches are often in leased premises with no dedicated UPS room. A floor-standing UPS with batteries in a separate rack, placed in the server or strong-room corridor, is common.
- **Ventilation:** batteries last longest at moderate temperatures. A battery rack sealed in a hot cupboard can lose life quickly.
- **Battery replacement cycles:** plan replacement across the network rather than waiting for each site to fail. See our [UPS maintenance checklist](/blogs/service/ups-maintenance-checklist).

## Service across many locations

A bank's UPS fleet is spread across cities and towns, so the service model matters as much as the hardware. Ask the supplier about periodic preventive maintenance, battery health checks and how service is handled in each region where your branches sit.

## E&C UPS for banks and ATMs

E&C's [online UPS](/online-ups) range covers branch and ATM loads. The [Accenta](/accenta) online UPS, 1 to 10 kVA, lists ATMs, V-SAT and telecom equipment among its applications, with SNMP web-based remote management and hot standby or parallel configuration. For larger branches, the transformer-based [Renata-I](/renata), 2 to 30 kVA, adds an inbuilt transformer and static bypass. For fleet visibility, E&C offers an [SNMP adapter](/snmp-adapter) and a cloud-based [UPS remote monitoring system](/ups-remote-monitoring) with SMS and email alerts, backed by [E&C service](/eandcpower-services).
