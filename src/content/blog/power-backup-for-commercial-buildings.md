---
title: 'Power Backup for Commercial Buildings and Real Estate Projects'
seoTitle: 'Power Backup for Commercial Buildings in India | E&C'
description: 'How developers and facility teams plan UPS and power backup for offices, IT parks and corporate campuses: landlord vs tenant loads, sizing and space.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/Renata%20modular%20ups%20online.jpg'
coverAlt: 'E&C Renata Modular online UPS for commercial buildings and campuses'
products: ['renatamodular', 'renata300', 'isolation', 'ups-remote-monitoring']
faq:
  - q: 'Who provides the UPS in a commercial office building, landlord or tenant?'
    a: 'Usually both. The landlord backs up common building systems such as BMS, fire control room, CCTV, access control and lift communication. Tenants usually install their own UPS for their IT, workstations and server rooms, fed from the DG-backed supply the building provides.'
  - q: 'What should a developer plan for UPS at the design stage?'
    a: 'Space for UPS and battery rooms, ventilation and cooling, floor loading for batteries, cable risers for UPS distribution, and a DG sized to carry the UPS input. These are much harder to add after the building is complete.'
  - q: 'Is one large UPS or several smaller UPS better for a corporate campus?'
    a: 'Most campuses use a mix: a redundant UPS for the data centre, one UPS per building or floor for workstations, and small units at network cabinets. Separating them limits how far a single fault spreads and makes maintenance easier.'
---

A **UPS for commercial buildings** protects the systems that keep a building working and its tenants productive: building management, security, lifts' controls, network and the IT of each occupier. In India this sits alongside a DG plant that backs up most of the building. The practical questions for developers and facility managers are which loads the landlord backs up with UPS, what tenants are expected to provide themselves, and how much space and infrastructure to reserve at the design stage.

## Landlord loads vs tenant loads

Most commercial buildings split responsibility like this:

| Owner | Typical UPS-backed loads | Usually DG-only |
|---|---|---|
| Landlord / facility | BMS controllers and server, fire control room PCs, CCTV and NVRs, access control, lift communication and monitoring, parking management, common-area Wi-Fi | Common-area lighting, chillers, pumps, lifts' main drives |
| Tenant | Workstations, server room, meeting room AV, network, telephony, biometric access to their floor | Tenant AC, pantry, general lighting |

Clear documents about this split avoid disputes later. Many leases state that the building provides a DG-backed supply and the tenant provides UPS for anything that needs zero break.

## Power solutions for real estate projects at design stage

**Power solutions for real estate in India** are cheapest when planned early. Retrofitting a UPS room into a finished building is expensive and often impossible. At design stage, reserve:

1. **A UPS room and a separate battery room** near the main LT panel, with ventilation and cooling.
2. **Floor loading** suitable for battery racks. Lead-acid battery banks are heavy.
3. **Riser space** for UPS distribution cables to each floor, separate from raw mains and DG cables.
4. **DG capacity** that includes the UPS input load and battery recharge, with margin for non-linear loads.
5. **Space on tenant floors** for their own UPS and batteries, or a designated tenant UPS area in the basement.

**Power backup for real estate projects** that are sold or leased floor by floor should give each tenant a predictable way to add UPS without structural work.

## Sizing building-level UPS

Building services UPS loads are modest but critical. For a typical office tower:

- **BMS and fire control room:** a few kVA.
- **CCTV and access control:** depends on camera count and PoE switches; often a few kVA to tens of kVA.
- **Common network and Wi-Fi:** small, but spread across floors.

These can be fed from one central UPS through a dedicated distribution, or from smaller units per system. A central UPS is easier to monitor; distributed units avoid long UPS cable runs. Either way, keep fire panel standby batteries as required by the applicable fire codes and the panel maker; the UPS supports the systems around the panel, not instead of its batteries.

## Power solutions for corporate campuses

**Power solutions for corporate campuses** add scale and redundancy:

- **Campus data centre:** N+1 redundant UPS, either parallel units or a modular UPS with spare modules. See [modular UPS and N+1 redundancy](/blogs/online-ups/modular-ups-n-plus-1-redundancy).
- **Each office block:** a UPS for workstations, labs and floor network, sized for that block.
- **Network cabinets on each floor:** small online or rack mount UPS units.
- **Security and campus control room:** its own UPS so security systems never depend on an office block's UPS.

Separate systems per building keep a fault local, and let one block be serviced during a weekend shutdown without affecting the others.

## Harmonics and neutral current

Office loads are mostly switch-mode power supplies: PCs, monitors, LED lighting drivers and chargers. These draw non-linear current that raises harmonics and can overload neutrals in three phase systems. Ways to manage it:

- A UPS with good input power factor correction, so it does not add to the problem on the DG.
- An **isolation transformer** on the UPS output, which gives a fresh neutral-earth bond and can be K-rated for non-linear loads. See [isolation transformer for UPS](/blogs/power-quality/isolation-transformer-for-ups).
- Neutral conductors sized for the harmonic content, as advised by the electrical designer.

Our post on [UPS THD, surge and bypass](/blogs/power-quality/ups-thd-surge-and-bypass-explained) explains these terms.

## Monitoring for facility teams

A facility manager running several buildings needs one view of every UPS. Remote monitoring shows load, battery voltage and mains or battery status, with SMS and email alerts when something changes. This catches a weak battery bank or an overloaded UPS before tenants notice.

## Installation constraints

- **Noise and heat:** UPS rooms near lobbies or offices need acoustic treatment and ventilation.
- **Basement flooding:** in many Indian cities, basements flood in monsoon. Place UPS and batteries above flood level where possible.
- **Fire safety:** battery room design should follow the applicable codes and the authority having jurisdiction.
- **Access for replacement:** large batteries and UPS cabinets must be able to move in and out through doors and lifts.

## Service and lifecycle

Commercial buildings run for decades, while UPS batteries need replacing every few years. Build battery replacement, preventive maintenance and an AMC into the facility budget. Our [UPS maintenance checklist](/blogs/service/ups-maintenance-checklist) lists what to check.

## E&C power backup for commercial buildings

E&C's [online UPS](/online-ups) range covers building services and campus loads. The [Renata Modular](/renatamodular) UPS, 10 to 1200 kVA, scales in hot-swappable modules with N+X redundancy and saves floor space. The [Renata-300](/renata300), 10 to 800 kVA, has an inbuilt isolation transformer and parallel operation of up to four units. E&C makes [isolation transformers](/isolation), including K-rated types, and a [UPS remote monitoring system](/ups-remote-monitoring) with cloud storage and alerts. [E&C service](/eandcpower-services) supports maintenance, and [UPS price in India](/ups-price-in-india) explains what drives cost.
