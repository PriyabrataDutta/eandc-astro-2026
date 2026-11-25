---
title: 'Solar Hybrid Systems for Factories: Self-Consumption, Backup and DG Integration'
seoTitle: 'Solar Hybrid Systems for Factories in India | E&C'
description: 'Designing a solar hybrid system for a factory: matching solar to daytime load, backing up critical loads, working with the DG, and sizing.'
date: '2026-11-18'
tag: 'Solar'
photo: '/image/home/solar%20soltuion.jpg'
coverAlt: 'Rooftop solar array supplying a factory through E&C solar inverters'
products: ['solar-hybrid-inverter', 'solar-grid', 'lithium-ion', 'dg-monitoring']
faq:
  - q: 'Should a factory put its whole load on a hybrid solar inverter?'
    a: 'Usually not. It is common to cover the bulk daytime load with grid-tie inverters and put only the critical loads, such as controls, offices and IT, on a hybrid inverter with batteries. Backing up heavy machinery from batteries is rarely economic.'
  - q: 'Can solar inverters run with a diesel generator?'
    a: 'They can, but grid-tie solar must not push power back into the generator or drop its load too low. A controller that limits solar output while the DG runs, set up with the DG and inverter suppliers, is the usual answer.'
  - q: 'Is a solar hybrid UPS the same as an online UPS?'
    a: 'Not usually. Most hybrid inverters switch to battery in a few milliseconds, which is fine for lights, fans and many office loads. Servers, PLCs and process controls that cannot tolerate any break still need a double conversion online UPS.'
---

A **hybrid solar system for a factory** combines rooftop solar, batteries and the grid so that the plant uses as much of its own solar power as possible during the day and keeps critical loads running in a power cut. In most factories the best design splits the job: grid-tie inverters feed the main daytime load, while a smaller hybrid inverter with batteries backs up the loads that must not stop. The system also has to work safely with the DG set, and any export to the grid depends on your state and DISCOM rules.

Our post on [on-grid vs off-grid vs hybrid solar inverters](/blogs/on-grid-vs-off-grid-vs-hybrid-solar-inverter) explains the three inverter types. This one is about putting them together for an industrial site.

## Start with self-consumption

Factories have one big advantage for solar: most of the load runs in daylight. The more of the solar output you use on site, the better the return, because every unit used directly replaces a unit you would have bought at your tariff.

1. **Get a load profile.** Use 30-minute or hourly meter data, or log the main incomer for a week. Note the base load on working days, Sundays and holidays.
2. **Size the main array to the daytime base load.** If the array is larger than the lowest daytime load, the surplus must be exported, stored or curtailed.
3. **Check holidays and shutdowns.** A plant that stops on Sundays will have surplus that day. Whether that is useful depends on export rules.

## Net metering, gross metering and export

Rules for rooftop solar differ by state and DISCOM, and change from time to time. Points to check before you size the plant:

- Whether **net metering, net billing or gross metering** applies to your category of connection.
- **Capacity limits**, often linked to your sanctioned load or contract demand.
- Whether **export is allowed at all**, or whether you need a zero-export controller.
- Approval, metering and inspection steps.

Ask your DISCOM or a local solar consultant for the current rules; do not rely on another state's experience.

## Back up the critical loads, not the whole plant

Storing enough energy to run machinery through a long outage takes a very large battery bank. Most factories instead create a **critical load bus**:

- Control panels and PLCs that must shut down safely.
- Office computers, servers and network equipment.
- Emergency lighting, security, CCTV and access control.
- Small process loads that spoil if they stop, such as cold rooms or dosing pumps.

A hybrid inverter supplies this bus from solar, battery and grid, with programmable priority. The heavy machinery stays on the grid-tie system and the DG.

For loads such as servers and process controllers, which cannot tolerate even a short break, keep a double conversion [online UPS](/online-ups) on the critical bus. Most hybrid inverters take a few milliseconds to transfer.

## Working with the DG set

This is where many factory solar plants go wrong.

- **No reverse power into the DG.** A DG cannot absorb power. If solar output exceeds the load while on DG, the generator can trip on reverse power, or worse.
- **Keep a minimum DG load.** Diesel engines run poorly at very light load for long periods. When solar carries most of the load, the DG may be pushed below the minimum its maker recommends.
- **The usual fix** is a controller that reads the DG output and limits the solar inverters to keep the DG above its minimum load. Set it up with the DG supplier and the inverter supplier together.
- **Watch the DG.** [DG monitoring](/dg-monitoring) records running hours, load and fuel level, so you can see how much the solar is saving on diesel.

## Sizing the hybrid part

1. **List the critical loads** in watts and how many hours each must run without the grid.
2. **Size the hybrid inverter** for the combined critical load plus starting surges of any motors, with margin.
3. **Size the battery** for energy needed in an outage, allowing for depth of discharge, inverter efficiency and battery ageing. Our guide to [UPS battery backup time](/guides/ups-battery-backup-time) uses the same logic.
4. **Size the array on the hybrid side** to recharge the battery and carry the critical load on a typical day, using worst-month sunshine rather than the annual average.

### Battery choice

LiFePO4 lithium batteries suit daily cycling: they tolerate deeper discharge and more cycles than lead-acid, but cost more up front. Lead-acid can suit backup-only duty where the battery is rarely cycled. See [lithium vs lead-acid batteries](/blogs/lithium-vs-lead-acid-ups-battery).

## Choosing a solar UPS for commercial use

There is no single best product; compare on:

- Operating modes: off-grid, on-grid and grid-tie with backup.
- Galvanic isolation between the inverter output and the supply.
- Programmable priority between PV, battery and grid.
- Communication, such as Modbus or SNMP, for your building management system.
- Service support near your site.

## E&C solar for factories

E&C's [solar hybrid inverter](/solar-hybrid-inverter), 2 to 30 kVA, has a true galvanic isolation transformer, runs in off-grid, on-grid and grid-tie-with-backup modes with programmable PV, battery or grid priority, and communicates over USB, RS-232, Modbus and SNMP. The [grid-tie solar inverter](/solar-grid), 2 to 60 kVA, is a transformerless three phase design with three MPP trackers and IP65 protection, listed for factories and commercial buildings. E&C also supplies [LiFePO4 lithium ion batteries](/lithium-ion) with a built-in BMS. See all [solar solutions](/solar-solutions).
