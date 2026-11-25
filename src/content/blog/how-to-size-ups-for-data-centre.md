---
title: 'How to Size a UPS for a Data Centre or Server Room'
seoTitle: 'How to Size a UPS for a Data Centre | E&C'
description: 'Size a data centre UPS step by step: IT load in kW, growth, redundancy, rack density, battery runtime against DG start, and where PUE fits in.'
date: '2026-11-18'
tag: 'Data centre'
photo: '/image/product/Renata%20modular%20ups%20online.jpg'
coverAlt: 'E&C Renata Modular online UPS for data centres'
products: ['renatamodular', 'renata300', 'rack-mount', 'lithium-ion']
faq:
  - q: 'How much UPS capacity does a server room need?'
    a: 'Start from the measured or estimated IT load in kW, add network, security and any cooling controls that must stay up, allow for growth, then add redundancy. A UPS is commonly run at no more than about 70 to 80% of its rating on the final load.'
  - q: 'How many minutes of battery does a data centre UPS need?'
    a: 'Where a DG set is installed, the battery only has to carry the load until the DG takes over, with margin for a failed start and battery ageing. Sites without a reliable DG, or that need time for a controlled shutdown, need longer.'
  - q: 'Should cooling be on the UPS?'
    a: 'Cooling compressors are usually on the DG-backed supply, not the UPS. In higher density rooms, fans, pumps and cooling controls are often put on UPS so air keeps moving while the DG starts, because temperature can rise quickly.'
---

To **size a UPS for a data centre**, start from the IT load in kW, add the other loads that must not drop, plan for the load you expect in three to five years, convert to kVA using the UPS output power factor, and then add redundancy. The battery is sized separately, for the time it takes the DG set to take over, plus margin. Getting each step right matters more than picking a brand.

Our [UPS sizing guide](/guides/ups-sizing-kva) covers kW, kVA and power factor in general. This post goes deeper for data centres and server rooms.

## Step 1: Find the real IT load

Nameplate ratings on servers and storage are maximum figures, and the real draw is often well below them. Better sources, in order:

1. **Measured load** from existing UPS displays, rack PDUs or a power meter, over a busy week.
2. **Vendor power calculators** for the server and storage configuration you will buy.
3. **Nameplate ratings**, only as a cautious upper limit.

Add network switches, firewalls, storage, security systems, building management and any monitoring equipment that must stay up.

## Step 2: Think in racks and density

Data centre load is usually planned per rack. A rack of general servers may draw a few kW, while racks of dense compute or GPU servers can draw several times more. Multiply the number of racks by the expected average kW per rack, and note any high-density rows separately, because they affect cooling and distribution as well as UPS size.

Higher density also changes the electrical design: three phase rack PDUs, larger cables and more careful load balancing across phases.

## Step 3: Plan for growth

Data centre load tends to grow as racks fill. Decide two numbers:

- **Day-one load:** what will run when the room opens.
- **Final load:** what the room is designed for, limited by space, cooling and the utility connection.

A conventional UPS must be bought for the final load on day one, and will run lightly loaded for years. A [modular UPS](/blogs/modular-ups-n-plus-1-redundancy) lets you install the frame for the final load and add power modules as the load grows.

## Step 4: kW, kVA and headroom

Divide kW by the UPS output power factor (read from the datasheet; modern UPS are often around 0.9 to 1.0) to get kVA. Keep the final load at about 70 to 80% of the UPS rating, so that load steps, ageing and unplanned additions do not push it into overload.

## Step 5: Add redundancy

Decide how the UPS should behave when one part fails or is serviced. N+1 adds one spare module or unit. 2N duplicates the whole system on separate A and B paths. Our post on [N+1 vs 2N UPS redundancy](/blogs/n-plus-1-vs-2n-ups-redundancy) compares the two.

### Worked example

A server room opens with 18 racks at about 5 kW each, plus 6 kW of network and security: **96 kW**. It is designed for 30 racks: **156 kW**.

1. At an output power factor of 0.9, 156 kW needs about 173 kVA.
2. Using 40 kVA modules, the final load needs five modules (200 kVA, about 87% loaded). Add one for N+1: six modules, 240 kVA installed, so the load stays well below the rating even with one module out.
3. Day one: 96 kW ÷ 0.9 ≈ 107 kVA, so three modules carry it and a fourth gives N+1.
4. Add modules as racks fill.

## Step 6: Battery runtime against the DG

UPS batteries in a data centre usually only bridge the gap until the DG takes over. The backup should cover DG start, transfer and at least one retry, with margin for battery ageing and temperature. Sites with weak DG arrangements, or where servers must shut down cleanly, need more. Use the [backup time guide](/guides/ups-battery-backup-time) to turn this into Ah, and consider lithium where space and weight are tight.

## Where PUE fits

Power usage effectiveness (PUE) is total facility power divided by IT power. UPS losses appear in the non-IT part of that figure, so a more efficient UPS, run at a sensible load, lowers PUE. PUE does not change the UPS size: the UPS is sized on the critical load, not the whole facility. Cooling compressors usually sit on the DG-backed supply; in denser rooms, fans, pumps and controls often go on UPS so air keeps moving while the DG starts.

## Best UPS for data centres in India: what to look for

There is no single best model. Look for double conversion online operation, a high output power factor, efficiency at your actual load, hot-swappable modules or parallel capability, static and maintenance bypass, network monitoring, and local service support. Explain your load profile and ask for a written sizing, then compare what drives cost on our [UPS price](/ups-price-in-india) page.

## E&C UPS for data centres

E&C's [Renata Modular](/renatamodular) UPS runs from 10 to 1200 kVA, with hot-swappable 10 to 40 kVA modules, 10 to 13 modules per frame, N+X redundancy and up to four frames in parallel. The transformer-based [Renata-300](/renata300) (10 to 800 kVA) parallels up to four units, and the [Accenta Rack](/rack-mount) (1 to 60 kVA) suits individual server racks. E&C also supplies [lithium ion batteries](/lithium-ion) and offers [installation and service](/eandcpower-services).
