---
title: '100 to 1200 kVA UPS: Planning a Large Installation'
seoTitle: 'Planning a 100–1200 kVA UPS Installation | E&C'
description: 'How to plan a 100 to 1200 kVA UPS: single, parallel or modular, plus cabling, switchgear, battery room, cooling, DG sizing and floor loading.'
date: '2026-11-18'
tag: 'Data centre'
photo: '/image/product/Renata%20modular%20ups%20online.jpg'
coverAlt: 'E&C Renata Modular UPS frame for large data centre and industrial loads'
products: ['renatamodular', 'renata300', 'renatacyclone', 'battery-bank-remote-monitoring']
faq:
  - q: 'Is one large UPS or several parallel UPS better above 200 kVA?'
    a: 'It depends on how critical the load is and how it will grow. A single UPS is simplest but is a single point of failure; parallel units or a modular UPS give N+1 redundancy and let you service one unit or module while the rest carry the load.'
  - q: 'What size DG set do I need for a 500 kVA UPS?'
    a: 'There is no fixed ratio. The DG has to carry the UPS input at full load plus battery recharge, cope with the UPS rectifier as a non-linear load, and supply any other loads on the same DG. Agree the figure with both the UPS and DG suppliers.'
  - q: 'How much space does a 1200 kVA UPS system need?'
    a: 'The UPS cabinets are often the smaller part. Battery racks or cabinets, input and output switchgear, bypass panels, cable routes and service clearances usually take more floor area, so plan the whole room, not just the UPS footprint.'
---

A 100 to 1200 kVA UPS is a building project as much as a product purchase. Above about 100 kVA, the choice between one large UPS, parallel units and a modular system sets the redundancy, and the cabling, switchgear, battery room, cooling, generator and floor all have to be designed around it. Start with the load and its growth, then plan the room.

## Step 1: Pin down the load and its growth

Before talking to any **100 kVA online UPS manufacturer in India** or comparing **800 kVA UPS systems**, write down:

- **Present load in kW and kVA**, measured where possible, not taken from nameplates.
- **Growth over five to ten years.** A data centre that starts at 200 kVA and may reach 600 kVA needs a very different plan from a fixed process load.
- **Criticality.** Can the load tolerate a short outage while a single UPS is repaired, or does it need redundancy?
- **Backup time**, which is usually set by how long the diesel generator (DG) takes to start and take load, or by how long servers need to shut down.

Our guide to [UPS sizing in kVA](/guides/ups-sizing-kva) covers the kW, kVA and power factor arithmetic.

## Step 2: Single, parallel or modular

| Approach | How it works | Good for | Watch out for |
|---|---|---|---|
| Single large UPS | One unit sized for the full load | Fixed loads, lowest complexity | Single point of failure; repairs may need bypass to raw mains |
| Parallel UPS | Two or more identical units share the load | N+1 redundancy, large fixed loads | Each unit is a big step; parallel cabling and controls must be designed well |
| Modular UPS | Hot-swappable power modules in one or more frames | Growing loads, N+X redundancy | Capacity is capped by the frame; plan the frame size for the final load |

A **500 kVA modular UPS** might start with only the modules needed for today's load plus one spare, and add modules as racks fill. A fixed **high capacity UPS of 500 kVA** in an N+1 pair means two full-size units from day one. Our post on [modular UPS and N+1 redundancy](/blogs/online-ups/modular-ups-n-plus-1-redundancy) explains the arithmetic.

<figure>
<svg viewBox="0 0 680 200" role="img" aria-labelledby="lg-ups-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="lg-ups-t">Three ways to build a large UPS: one single unit, two parallel units sharing the load, or a modular frame with spare modules</title>
<g font-size="13" text-anchor="middle">
<text x="110" y="22" fill="#0b2546" font-weight="600">Single</text>
<rect x="60" y="40" width="100" height="120" rx="8" fill="#0b2546"/><text x="110" y="105" fill="#fff">1 × full load</text>
<text x="340" y="22" fill="#0b2546" font-weight="600">Parallel N+1</text>
<rect x="260" y="40" width="70" height="120" rx="8" fill="#005c9e"/><text x="295" y="105" fill="#fff">UPS 1</text>
<rect x="350" y="40" width="70" height="120" rx="8" fill="#005c9e"/><text x="385" y="105" fill="#fff">UPS 2</text>
<text x="570" y="22" fill="#0b2546" font-weight="600">Modular N+X</text>
<rect x="510" y="40" width="120" height="120" rx="8" fill="#fff" stroke="#0b2546" stroke-width="2"/>
<rect x="520" y="50" width="100" height="18" fill="#005c9e"/><rect x="520" y="74" width="100" height="18" fill="#005c9e"/><rect x="520" y="98" width="100" height="18" fill="#005c9e"/><rect x="520" y="122" width="100" height="18" fill="#ff9900"/>
<text x="570" y="185" fill="#b35f00" font-size="12">orange = spare module</text>
<text x="340" y="185" fill="#506070" font-size="12">either unit can carry the load</text>
<text x="110" y="185" fill="#506070" font-size="12">no redundancy</text>
</g>
</svg>
<figcaption>A single UPS is simplest; parallel units and modular frames add redundancy so one unit or module can fail or be serviced.</figcaption>
</figure>

## Step 3: Cabling and switchgear

Large UPS currents mean heavy cables and busbars. Plan for:

- **Input, bypass and output breakers** rated for the UPS, coordinated so that a downstream fault trips the nearest breaker, not the UPS input.
- **A separate bypass feed** where the design calls for one, and an external **maintenance bypass** panel so the UPS can be fully isolated for service while the load runs on mains.
- **Battery cables and DC breakers** rated for the full discharge current, kept short to limit voltage drop.
- **Cable routes** through trenches, trays or raised floors with space for future parallel units or frames.

Follow the applicable electrical codes and the authority having jurisdiction for protection and earthing design.

## Step 4: Battery room

At these ratings the battery bank is often heavier and larger than the UPS. Decide early whether batteries sit in racks in a separate room or in cabinets beside the UPS. VRLA batteries last longest near 25°C, so the battery room usually needs its own air-conditioning and ventilation. Leave aisles for testing and replacing blocks, and consider [battery bank monitoring](/battery-bank-remote-monitoring) to track each block's voltage, temperature and internal resistance. The [UPS battery backup time guide](/guides/ups-battery-backup-time) shows how runtime drives Ah rating.

## Step 5: Cooling

A UPS running at, say, 95% efficiency still turns the remaining few percent of its throughput into heat, and at several hundred kVA that is a substantial cooling load. Ask for heat output at your expected load, not only at full load, and size the room air-conditioning with redundancy matching the UPS. Keep UPS air paths clear of dust.

## Step 6: DG sizing

The DG must carry the UPS input at full load, the battery recharge current after an outage, and any other loads it feeds. A UPS rectifier is a non-linear load, and DG sets typically need margin to handle it, especially if the UPS has high input current THD. Check that the UPS accepts the DG's voltage and frequency swings without dropping to battery, and agree the sizing with both suppliers.

## Step 7: Transport and floor loading

- **Access route:** door widths, lift capacity, ramps and turning space from the truck to the UPS room.
- **Floor loading:** battery racks concentrate heavy weight on a small area. A structural engineer should confirm the floor, especially on upper floors or raised floors.
- **Lifting:** plan cranes or pallet movers, and stage delivery so cabinets are not left in corridors.

Budget is driven by capacity, redundancy, backup time, battery type and site works; see [UPS price in India](/ups-price-in-india) for what moves the cost.

## E&C large UPS systems

E&C's [Renata Modular UPS](/renatamodular) covers 10 to 1200 kVA, so it can be specified as a **1200 kVA modular UPS system**. Its hot-swappable modules are 10 to 40 kVA each, each frame holds 10 to 13 modules with N+X redundancy, and up to four frames run in parallel. The [Renata-300](/renata300) is a transformer-based three phase UPS from 10 to 800 kVA, with an inbuilt isolation transformer, up to 95% efficiency and parallel operation of up to four units. The transformerless [Renata-DS](/renatacyclone) runs from 10 to 300 kVA, with up to six units in parallel. See the full [online UPS range](/online-ups), or ask our engineers for a site study through [UPS service and AMC](/eandcpower-services).
