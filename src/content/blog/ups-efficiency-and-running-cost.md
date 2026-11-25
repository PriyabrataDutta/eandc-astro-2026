---
title: 'UPS Efficiency and Running Cost: What a Few Percent Is Worth'
seoTitle: 'UPS Efficiency & Running Cost Explained | E&C'
description: 'How UPS efficiency turns into kWh lost and heat to remove, with a worked example, part-load efficiency, eco mode trade-offs and what to ask for.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/renata-ds.jpg'
coverAlt: 'E&C Renata-DS transformerless online UPS with efficiency up to 94%'
products: ['renatacyclone', 'renata300', 'renatamodular']
faq:
  - q: 'What is a good efficiency for an online UPS?'
    a: 'Modern double conversion online UPS commonly reach the low to mid 90s in percent near their rated load. What matters for running cost is the efficiency at your actual load, so ask for the efficiency curve, not only the peak figure.'
  - q: 'Why is a UPS less efficient at low load?'
    a: 'Part of a UPS''s losses are fixed: control electronics, fans, transformer magnetising losses and switching losses that do not fall in step with the load. At low load these fixed losses are a larger share of the power going through.'
  - q: 'How do I calculate the cost of UPS losses?'
    a: 'Loss in kW equals load in kW divided by efficiency, minus the load. Multiply by the hours the UPS runs in a year to get kWh, add an allowance for the cooling needed to remove the heat, then multiply by your electricity tariff.'
---

A UPS's efficiency is the share of the input power that reaches the load; the rest becomes heat. Because an online UPS runs every hour of the year, a few percentage points of efficiency add up to thousands of kWh, plus the extra cooling to remove that heat. To compare two **high efficiency online UPS** options in India, work out the losses at your real load and multiply by your tariff.

## Where the losses come from

A double conversion UPS converts AC to DC and back to AC all the time. Each stage loses a little:

- **Rectifier and power factor correction** on the input
- **Inverter** switching and conduction losses
- **Transformer** losses, in transformer-based designs
- **Battery charging**, including keeping the battery on float
- **Fans, controls and display**

Some of these losses are fixed and some rise with the load. That is why efficiency is lower at light load.

## The worked example

Take a constant critical load of **60 kW**, running all year (8,760 hours). Compare two UPS: one at 95% efficiency at this load, one at 90%.

**UPS at 95%**

1. Input power = 60 ÷ 0.95 = 63.16 kW
2. Loss = 63.16 − 60 = 3.16 kW
3. Yearly loss = 3.16 × 8,760 ≈ 27,700 kWh

**UPS at 90%**

1. Input power = 60 ÷ 0.90 = 66.67 kW
2. Loss = 66.67 − 60 = 6.67 kW
3. Yearly loss = 6.67 × 8,760 ≈ 58,400 kWh

**Difference: about 30,700 kWh a year.**

That heat must usually be removed by air conditioning. If the cooling system moves about 3 units of heat for every unit of electricity (a coefficient of performance of 3; real figures vary with the system and climate), removing 30,700 kWh of heat needs roughly another 10,200 kWh. The total difference is then around **41,000 kWh a year**.

Multiply that by your tariff per kWh to get the yearly saving, and by the expected service life of the UPS to compare against any difference in purchase price.

### Running the same numbers for your site

1. Find your average load in kW, not the UPS rating.
2. Read the efficiency at that load from each supplier's efficiency curve.
3. Loss (kW) = load ÷ efficiency − load.
4. Yearly kWh = loss × hours per year.
5. Add cooling: kWh × (1 + 1 ÷ COP of your cooling system).
6. Multiply by your tariff.

## Part load: the number most people miss

UPS datasheets usually quote the best efficiency, often at or near full load. Real UPS often run at 30 to 50% load, and in redundant designs even lower: each side of a 2N system stays below 50%, and an N+1 system shares the load across an extra unit. At these loads efficiency can be noticeably lower than the headline figure.

Ways to keep efficiency up:

- **Right-size.** Do not buy far more capacity than the load needs. Our [UPS sizing guide](/guides/ups-sizing-kva) explains how.
- **Use a modular UPS.** Installed capacity can track the load, so modules run nearer their efficient range. Some modular systems can also put spare modules to sleep at light load; check the datasheet.
- **Ask for the curve.** Request efficiency at 25%, 50%, 75% and 100% load, at your input voltage.

## Transformer-based or transformerless?

Transformerless UPS avoid the losses of a large output transformer and are often lighter and more efficient, especially at part load. Transformer-based UPS have extra losses in the transformer but give built-in galvanic isolation and are very robust with demanding loads. If a transformerless UPS needs an external [isolation transformer](/isolation) to meet your load's needs, include that transformer's losses in the comparison, because the two options are then no longer like for like.

## Eco mode

Many UPS offer an energy saver or eco mode, which feeds the load from filtered mains and keeps the inverter on standby, giving higher efficiency. The trade-off is less protection: the load sees mains disturbances and a short transfer if mains fails. See [UPS THD, bypass and eco mode explained](/blogs/power-quality/ups-thd-surge-and-bypass-explained) before deciding.

## Other running costs

Efficiency is not the only running cost. Also compare:

- **Battery replacement**, which depends on battery type and temperature. See [lithium vs lead-acid UPS batteries](/blogs/batteries/lithium-vs-lead-acid-ups-battery).
- **Cooling for the UPS and battery room.**
- **Maintenance and AMC**, and the cost of downtime if service is slow.
- **Input power factor and harmonics**, which affect cable, transformer and DG sizing.

A UPS that is cheaper to buy but less efficient can cost more over its life, so compare on the total of purchase, energy, batteries and service across the years you expect to keep it. For what drives purchase cost, see [UPS price in India](/ups-price-in-india).

## E&C online UPS efficiency

E&C's transformer-based [Renata-300](/renata300) three phase UPS (10 to 800 kVA) has efficiency up to 95%. The transformerless [Renata-DS](/renatacyclone) (10 to 300 kVA) reaches up to 94%, with high input power factor and low input current THD. The [Renata Modular](/renatamodular) UPS lets capacity grow in 10 to 40 kVA modules so the system stays closer to the real load. See the full [online UPS](/online-ups) range.
