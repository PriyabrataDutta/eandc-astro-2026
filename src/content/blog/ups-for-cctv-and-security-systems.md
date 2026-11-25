---
title: 'UPS for CCTV, Access Control and Security Rooms'
seoTitle: 'UPS for CCTV & Security Systems in India | E&C'
description: 'How to back up CCTV cameras, NVRs, PoE switches, access control and security rooms with UPS: sizing, backup time, outdoor cameras and monitoring.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/lithium-ups.jpg'
coverAlt: 'E&C lithium online UPS for CCTV recorders and security systems'
products: ['accenta', 'lithium-ups', 'rack-mount', 'lineups']
faq:
  - q: 'How long should a UPS run CCTV cameras?'
    a: 'It depends on the site and whether a DG is available. Sites with a DG often need enough backup to bridge DG start, while sites without DG may want an hour or more so recording continues through common outages. Many security policies set a minimum, so check yours first.'
  - q: 'Can one UPS power all CCTV cameras through a PoE switch?'
    a: 'Yes, if the cameras are powered over Ethernet. The UPS feeds the PoE switch and NVR, and the switch powers the cameras. Size the UPS for the total PoE budget actually used plus the switch and recorder.'
  - q: 'Does an access control system need UPS if the door controllers have batteries?'
    a: 'Door controllers and electric locks often have their own small battery backup. A UPS is still useful for the access control server, network switches and the security room workstations, so events are logged and doors can be managed during an outage.'
---

A **UPS for CCTV systems** keeps cameras recording and recorders writing to disk when the power fails, which is often exactly when an incident happens. For most sites, the right setup is an online UPS feeding the NVR or DVR, the PoE switches that power IP cameras, and the security room workstations. Sizing depends on the number of cameras and the backup time your security policy requires, not on the building's other loads.

## What a security system draws

A modern IP surveillance system has these parts:

- **IP cameras**, powered over Ethernet from PoE switches. Fixed cameras draw little; PTZ cameras and those with IR illuminators or heaters draw more, especially at night.
- **PoE switches** in network cabinets around the site, each with its own PoE budget.
- **NVR or video management server** with hard disks recording continuously.
- **Security room workstations** and video wall displays.
- **Access control**: controllers, readers, electric locks, boom barriers and turnstiles, plus the access control server.
- **Intrusion alarm panels** and communicators, which usually have their own batteries.

Older analogue systems have cameras on a central 12 V power supply and a DVR. The same principle applies: back up the power supply and recorder together.

## Sizing: work from the PoE budget

1. **List every camera** and its maximum PoE draw from the datasheet. Night-time IR and heater operation can increase it.
2. **Add switch overheads.** A PoE switch uses some power itself as well as what it delivers to cameras.
3. **Add NVRs, servers and workstations** at their measured or typical draw.
4. **Convert to kVA** and add margin for more cameras later. Camera counts grow on almost every site.

Video walls and large monitors in a control room can draw more than the cameras. Decide whether all screens must stay on, or only the operator's main workstation.

## Backup time is the real decision

CCTV loads are small, so backup time drives cost. Ask:

- **Is there a DG?** If yes, the UPS needs to bridge DG start with margin. If no, the UPS battery is the only backup.
- **What does the security policy or insurer require?** Some sites need recording to continue for a set period after a power failure.
- **Which cameras matter most?** Perimeter, cash and entry cameras may need longer backup than internal corridor cameras. Putting them on separate switches lets you shed the less important ones.

The [UPS battery backup time](/guides/ups-battery-backup-time) guide shows how to estimate runtime from battery Ah and load.

## Centralised vs distributed UPS

**Centralised:** one UPS in the security room or server room feeds the NVR, core switch and workstations, with UPS-backed cabling to remote network cabinets. Simple to monitor, but long cable runs and a single point of failure.

**Distributed:** a small UPS in each network cabinet, plus a larger UPS in the security room. Each cabinet keeps its cameras running even if a cable is cut, which helps security. More batteries to maintain.

Large campuses usually choose distributed UPS, with all units reporting to one monitoring screen.

## Outdoor and remote cameras

Cameras on poles, gates and boundary walls bring extra issues:

- **Heat:** outdoor cabinets in Indian summers get very hot. Lead-acid batteries lose life quickly at high temperatures. Lithium battery UPS units tolerate cycling better and are compact; see [lithium vs lead-acid UPS battery](/blogs/batteries/lithium-vs-lead-acid-ups-battery).
- **Surges:** long outdoor cables pick up lightning-induced surges. Surge protection on power and data lines is as important as the UPS.
- **Weatherproof enclosures** for any UPS or battery mounted outside.

## Choosing the UPS type

- **Online UPS** for NVRs, servers and core switches. Recorders write to disk continuously, and an online UPS removes the transfer gap and filters voltage swings.
- **Line interactive UPS** can suit small edge cabinets with a few cameras and a less critical role, where cost and size matter more.
- **Rack mount UPS** for network cabinets with 19-inch rails. See [what is a rack mount UPS](/blogs/online-ups/what-is-rack-mount-ups).

## Monitoring the monitoring system

A security system that silently loses power is worse than one with a known gap. Connect UPS units to the network so the security team gets an alert when a cabinet goes on battery, when a battery is weak, or when a UPS fails. Most VMS and NMS platforms can receive SNMP traps. See [SNMP and remote UPS monitoring](/blogs/monitoring/snmp-and-remote-ups-monitoring).

## Installation and service tips

- **Lock UPS units in cabinets** so they cannot be switched off by someone trying to disable cameras.
- **Label UPS outlets** so cleaning and maintenance staff do not plug in other equipment.
- **Test periodically** by simulating a power cut and checking that recording continues.
- **Replace batteries on schedule**, especially in hot outdoor cabinets.

## E&C UPS for CCTV and security

E&C's [online UPS](/online-ups) range covers security rooms and network cabinets. The [Accenta](/accenta), 1 to 10 kVA, is a double conversion UPS with SNMP web-based remote management for NVRs and security rooms. The [Lithium UPS](/lithium-ups), 1 to 5 kVA, has a long-life lithium battery pack with more than 2000 cycles, suited to warm cabinets. The [Accenta Rack Mount](/rack-mount) fits 19-inch network racks, and [Cheerups line interactive UPS](/lineups), 600 VA to 5 kVA, suits small, less critical edge cabinets. [E&C service](/eandcpower-services) handles maintenance and battery replacement.
