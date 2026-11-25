---
title: 'Long Backup UPS: How to Design Extended Runtime'
seoTitle: 'Long Backup UPS: Designing Extended Runtime | E&C'
description: 'Designing a long backup UPS: battery energy, charger capacity and recharge time, battery room space and ventilation, and when a DG beats more batteries.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/smf.jpg'
coverAlt: 'SMF batteries for extended runtime UPS battery banks'
products: ['renata300', 'renatacyclone', 'smf', 'lithium-ion']
faq:
  - q: 'Can any UPS give long backup if I add more batteries?'
    a: 'Only within limits. The UPS charger must be able to recharge the larger bank in a reasonable time, the battery voltage must match the UPS, and the DC cabling and breakers must suit the current. Long backup UPS are designed with a higher capacity charger for this reason.'
  - q: 'How long does it take to recharge a large UPS battery bank?'
    a: 'It depends on the charger current and the battery size. With charging current limited to a small fraction of the Ah rating, a deeply discharged lead-acid bank commonly takes many hours, often more than ten, to return to full charge.'
  - q: 'Is it better to have more batteries or a DG set?'
    a: 'Batteries suit minutes to a few hours of backup. For longer or repeated outages, a DG set usually costs less and takes less space for the same energy, with the UPS battery covering the time until the DG takes over.'
---

An **extended runtime UPS** is a UPS whose battery bank and charger are designed together for backup measured in hours rather than minutes. Adding batteries is only part of the job: the charger must recharge the larger bank before the next outage, the battery room must hold the weight and heat, and beyond a few hours a DG set is usually the better way to supply the energy. A good long backup design balances all three.

Use our [battery backup time guide](/guides/ups-battery-backup-time) for the basic formula. This post covers what changes when the runtime gets long.

## Step 1: Work out the energy

Backup energy is load multiplied by time. Take a **20 kW** critical load that must run for **4 hours**:

1. Energy delivered = 20 kW × 4 h = 80 kWh
2. Allow for UPS inverter efficiency (about 0.9): 80 ÷ 0.9 ≈ 89 kWh drawn from the battery
3. Allow for ageing, sizing for about 80% capacity at end of life: 89 ÷ 0.8 ≈ 111 kWh of rated battery energy

On a 384 V bank (thirty-two 12 V blocks), that is about 111,000 ÷ 384 ≈ 290 Ah, for example three parallel strings of 100 Ah blocks. Check the result against the battery maker's discharge table: at long discharge times a lead-acid battery delivers closer to its rated Ah than at short ones, so the exact figure can differ.

Ninety-six large batteries is a serious installation, which is why the next steps matter.

## Step 2: Check the charger

This is where long backup designs most often fail. A standard UPS charger is sized to recharge a modest battery. Connect a much larger bank and it may take a day or more to recover, leaving you exposed if mains fails again.

- **Charging current.** Battery makers specify a limit, commonly around a tenth to a fifth of the Ah rating for lead-acid; follow the maker. For 300 Ah, 10% is 30 A.
- **Charging power.** 30 A at the bank's charging voltage of roughly 430 V is about 13 kW, on top of the load. That adds to the UPS input current and to the DG load.
- **Recharge time.** Even at that current, returning a deeply discharged bank to full charge commonly takes well over ten hours, because the final stage of charging is slow.
- **Temperature compensation**, so the charge voltage tracks battery temperature.

Ask the supplier for the charger capacity in amps and the expected recharge time to about 90% for your bank.

## Step 3: Plan the battery room

- **Space and floor loading.** Large lead-acid banks are heavy. Check the structural loading of the floor and use proper racks.
- **Temperature.** Lead-acid life is rated at about 25°C and falls in hotter rooms, so plan cooling.
- **Ventilation.** Batteries can release hydrogen during charging, flooded tubular batteries more than sealed ones. Ventilate as the battery maker and the applicable codes require.
- **DC cabling and protection.** Long runs at high current need large cables to limit voltage drop, with DC breakers or fuses near the bank.
- **Access** for inspection, testing and replacement.

Lithium (LiFePO4) batteries take much less space and weight for the same energy and tolerate heat better, but need a compatible UPS and a battery management system. See [lithium vs lead-acid UPS batteries](/blogs/lithium-vs-lead-acid-ups-battery).

## Step 4: Battery or DG?

| | More battery | DG set |
|---|---|---|
| Best for | Minutes to a few hours | Hours to days |
| Start-up | Instant | Several seconds to start and take load |
| Space and weight | Grows with every hour of runtime | Fixed, plus fuel storage |
| Running cost | Replacement every few years | Fuel and maintenance |
| Noise and emissions | None at site | Yes; subject to local rules |

As runtime grows, the battery grows with it, while a DG's size depends on the load, not the hours. For most sites with a DG, the UPS battery only needs to cover the DG start plus margin. Long battery backup makes sense where a DG is not allowed or practical, where outages are long but infrequent, or where silent operation matters.

## Long backup UPS for hospitals

Hospitals usually rely on DG sets for long outages, with UPS batteries bridging the gap. Longer battery backup is often chosen for specific areas: data and PACS rooms that must shut down cleanly, and critical areas where the hospital wants extra time if the DG fails to start. Requirements vary, so follow the applicable codes and the authority having jurisdiction. Our post on [UPS for hospitals](/blogs/ups-for-hospitals-and-fire-alarm-systems) covers DG coordination.

## E&C UPS for long backup

E&C's [Renata-300](/renata300) three phase online UPS (10 to 800 kVA) has a high charger capacity that supports larger Ah batteries for longer backup. The [Renata-DS](/renatacyclone) (10 to 300 kVA) works with battery voltages from 192 to 720 VDC and has temperature compensated charging and a remaining battery time indicator. E&C supplies [SMF batteries](/smf) from 7 to 200 Ah and [lithium ion batteries](/lithium-ion), and our [service team](/eandcpower-services) supports installation and maintenance. See the full [online UPS](/online-ups) range.
