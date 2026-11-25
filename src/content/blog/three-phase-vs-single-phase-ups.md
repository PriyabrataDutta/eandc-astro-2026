---
title: 'Three Phase vs Single Phase UPS: Which Do You Need?'
seoTitle: 'Three Phase vs Single Phase UPS: Which to Choose | E&C'
description: 'Single phase, 3 phase in / 1 phase out, or 3 phase in / 3 phase out UPS? How load size, supply, motors, phase balance and growth decide it.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/accenta.jpg'
coverAlt: 'E&C Accenta single phase online UPS for IT and light loads'
products: ['accenta', 'renata', 'renatacyclone', 'renatamodular']
faq:
  - q: 'When do I need a three phase UPS?'
    a: 'When the load is larger than a single phase UPS can sensibly supply, typically above about 10 to 20 kVA, or when the equipment itself needs three phase power, such as motors, three phase machines or three phase rack PDUs.'
  - q: 'What is a 3 phase in / 1 phase out UPS?'
    a: 'A UPS that draws its input from a three phase supply, spreading the input current across three phases, but gives a single phase output. It suits medium loads that are all single phase equipment.'
  - q: 'Can a single phase UPS run on a three phase supply?'
    a: 'Yes, from one phase and neutral of the three phase supply. Large single phase UPS can unbalance the supply, so loads should be spread across phases, or a 3 phase input UPS used instead.'
---

Choose a **single phase UPS** for loads up to about 10 kVA where all equipment is single phase. Choose **3 phase in / 1 phase out** for medium loads of single phase equipment, typically around 10 to 30 kVA, so the UPS draws evenly from a three phase supply. Choose **3 phase in / 3 phase out** for larger loads, for three phase machines, and wherever the load will keep growing. The exact crossover points vary by supplier and site, but these three configurations cover almost every case.

## The three configurations

### Single phase in / single phase out (1/1)

The UPS takes one phase and neutral and gives a single phase output. This is the normal choice for offices, shops, clinics, small server rooms, ATMs and telecom equipment. It is simple to install and wire.

### Three phase in / single phase out (3/1)

The UPS draws from all three phases, which keeps the building supply balanced, and gives a single phase output. It suits medium loads such as a floor of PCs, a lab or a control room, where the equipment is single phase but too large in total to load onto one phase of the supply.

### Three phase in / three phase out (3/3)

Both input and output are three phase. This is the standard for data centres, factories, hospitals and large buildings. The output can feed three phase machines directly and single phase loads spread across the three phases.

## How to decide

| Question | Points to 1/1 | Points to 3/1 | Points to 3/3 |
|---|---|---|---|
| Total load | Up to about 10 kVA | About 10 to 30 kVA | Above about 20 to 30 kVA |
| Equipment | All single phase | All single phase | Some three phase, or mixed |
| Supply at site | Single or three phase | Three phase | Three phase |
| Growth | Little | Moderate | Significant |

Then check these points.

1. **Your supply connection.** Larger premises in India usually have a three phase connection from the distribution utility. If you only have single phase, the UPS choice is limited to 1/1, and a larger load means first upgrading the connection.
2. **Phase balance.** A large single phase UPS on one phase of a three phase supply loads that phase heavily. Utilities and DG sets both prefer a balanced load, and a heavily unbalanced DG may struggle with voltage regulation.
3. **Neutral current.** On a 3/1 UPS output, all the current returns in one neutral, so output cables are sized for that. On 3/3 systems feeding many single phase IT loads, harmonic currents can add up in the shared neutral; many designs size the neutral larger for this.
4. **Motors and machines.** Three phase motors, compressors and machines need a 3/3 UPS. Allow for their starting current, which is often several times the running current.
5. **Cables and distribution.** For the same power, three phase carries less current per conductor, so cables and breakers are smaller.
6. **Future load.** If the load may double, a three phase or modular UPS avoids replacing the unit later.

Also think about the DG set. A generator is a three phase machine, and a large single phase load on one of its phases leaves the other two lightly loaded while one winding works hard. A three phase input UPS spreads its demand evenly, which helps the DG hold voltage and frequency.

Work out the load first with [how to size a UPS in kVA](/guides/ups-sizing-kva).

## Three phase UPS for industries in India

Industrial loads are usually three phase: machine tools, process lines, compressors and conveyors. Even where only controls are backed up, a three phase UPS feeding a control-power distribution board keeps the plant supply balanced. Rugged, transformer-based three phase UPS cope with demanding plant loads, while transformerless designs are lighter, smaller and often more efficient. For harsh areas, see [MIL grade vs IP55 industrial UPS](/blogs/mil-grade-vs-ip55-industrial-ups).

## Online UPS: 3 phase vs single phase in practice

Both are double conversion online UPS and protect the load the same way. The differences are capacity, input balance, wiring and cost. A single phase UPS is cheaper and simpler for small loads, while a three phase UPS costs more at small sizes but becomes the only practical choice as the load grows. Our [UPS price](/ups-price-in-india) page explains what drives cost.

## 3 phase modular UPS

A three phase modular UPS has a frame with plug-in power modules. You install the frame for the final load and add modules as the load grows, with one spare module for N+1 redundancy. It suits server rooms and data centres that start small and grow. See [modular UPS and N+1 redundancy](/blogs/modular-ups-n-plus-1-redundancy).

## E&C single and three phase online UPS

E&C's [Accenta](/accenta) online UPS is 1/1 from 1 to 10 kVA, with a 3/1 version at 10 kVA. The transformer-based [Renata-I](/renata) is 1/1 from 2 to 10 kVA and 3/1 from 5 to 30 kVA. For 3/3, the transformerless [Renata-DS](/renatacyclone) runs from 10 to 300 kVA, and the [Renata Modular](/renatamodular) UPS, from 10 to 1200 kVA, comes in 1/1, 3/1 and 3/3 configurations. See the full [online UPS](/online-ups) range.
