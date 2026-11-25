---
title: 'Designing Solar Street Lighting: Lux, Pole Spacing, Battery and Panel Sizing'
seoTitle: 'Designing Solar Street Lighting: Sizing Guide | E&C'
description: 'How to design a solar street lighting system: light levels, pole spacing, autonomy days, battery and panel sizing, and dusk-to-dawn and motion sensing.'
date: '2026-11-18'
tag: 'Solar'
photo: '/image/product/solar-street-lighting.jpg'
coverAlt: 'E&C all-in-one solar LED street light with integrated panel and battery'
products: ['solar-street-lighting', 'scc', 'lithium-ion']
faq:
  - q: 'How many days of autonomy does a solar street light need?'
    a: 'Commonly two to three nights without useful sun, more in areas with long cloudy monsoons. More autonomy means a larger battery and panel, so it is a balance between reliability and cost.'
  - q: 'How far apart should solar street light poles be?'
    a: 'It depends on mounting height, the light distribution of the luminaire, road width and the light level required. A lighting layout for the actual luminaire, rather than a rule of thumb, gives spacing that meets the required average level and uniformity.'
  - q: 'Why does a solar street light go off before dawn?'
    a: 'Usually because the battery was not fully charged, from cloudy days, a dirty or shaded panel, a panel too small for the season, or an ageing battery. Dimming profiles and motion sensing reduce the energy needed each night.'
---

A **solar power system for street lighting** is designed backwards from the light needed on the ground: choose the light level for the road, set the pole height and spacing to achieve it, work out the energy each light uses per night, then size the battery for that energy plus enough reserve for cloudy days, and the solar panel to refill the battery in the worst month. Dusk-to-dawn control and motion sensing cut the energy needed, which makes the battery and panel smaller.

## 1. Decide the light level

The applicable road lighting standards, or the client's specification, set the target **average illuminance (lux)** and **uniformity** for each type of area. As a general guide:

- **Main roads and junctions** need the highest levels and good uniformity.
- **Residential streets, campus roads and parking areas** need less.
- **Pathways, gardens and perimeter roads** need the least, with the emphasis on visibility and safety.

Uniformity matters as much as the average: bright pools of light with dark gaps between poles feel less safe and can be less safe than an evenly lit road at a lower average.

Colour temperature affects how the light looks. Warmer light (around 3000 K) is often chosen for residential and ecologically sensitive areas, cooler white for roads and security lighting.

## 2. Pole height and spacing

Spacing depends on:

- **Mounting height.** Higher poles spread the light further, allowing wider spacing but needing more light output.
- **Luminaire distribution.** Street light optics throw light along the road; the spacing a given luminaire can achieve depends on its distribution pattern.
- **Road width and layout.** Single-sided, staggered or opposite arrangements suit different widths.
- **Required uniformity.** Tighter uniformity means closer poles.

Spacing is often expressed as a ratio of mounting height, but the right figure comes from a lighting calculation using the actual luminaire's data. For solar lights, also check that the panel on every pole faces the sun without shade from trees or buildings, which can change the layout.

## 3. Energy per night

Night length in India varies through the year, roughly 11 to 13 hours. Few sites need full brightness all night, so most designs use a **dimming profile**:

| Period | Example output |
|---|---|
| Dusk to about 11 pm | 100% |
| 11 pm to 5 am | 30 to 50%, or motion-triggered |
| 5 am to dawn | 100% |

Example: a 30 W LED at 100% for 5 hours and 50% for 7 hours uses 30 × 5 + 15 × 7 = 255 Wh per night.

### Dusk-to-dawn and motion sensing

- **Dusk-to-dawn** control usually senses the panel voltage: when the panel goes dark the light switches on, and off again at sunrise. No separate timer is needed.
- **Motion sensing** keeps the light dim until someone approaches, then raises it to full output. On quiet roads and campuses this can cut the night's energy substantially.

## 4. Battery sizing

Battery capacity = energy per night × autonomy days ÷ (usable depth of discharge × efficiency)

Using the example above with 2 days of autonomy, a LiFePO4 battery used to 80% depth of discharge, and 90% efficiency:

255 × 2 ÷ (0.8 × 0.9) ≈ 710 Wh. At 12.8 V, that is about 55 Ah, so a 60 Ah battery would be a reasonable choice.

Points to remember:

- **Lead-acid batteries** need a shallower depth of discharge for a reasonable life, so they need a larger capacity for the same energy.
- **Heat shortens battery life.** A battery in a pole-top box can get very hot in summer; placement and ventilation matter.
- **Allow for ageing**, so the battery still covers the autonomy after a few years.

## 5. Panel sizing

Panel watts = energy per night ÷ (peak sun hours × system losses factor)

Use **peak sun hours for the worst month**, often during the monsoon, not the annual average. With 4 peak sun hours and a losses factor of 0.7 for temperature, dust, wiring and charging:

255 ÷ (4 × 0.7) ≈ 91 W, so a 100 W panel or more.

After a run of cloudy days the panel must also recharge the battery while still supplying each night's load, so many designers add margin above this figure. An [MPPT charge controller](/blogs/how-mppt-solar-charge-controller-works) gets more energy from the panel than a basic PWM controller, especially in cool weather and at partial charge.

## 6. All-in-one or split design?

- **All-in-one lights** put the panel, battery, controller and LED in one unit on the pole. They are quick to install, with no cabling between parts, and suit campuses, streets and remote sites.
- **Split systems** mount the panel and battery separately. They allow a larger panel angled for the best sun and a battery box that is easier to service, and suit higher-wattage lights.

## Maintenance

Clean panels regularly, since dust can cut output noticeably in dry seasons. Check the battery and connections at planned intervals, and replace the battery when it no longer covers the night. Keep a record of any lights that go off early; it usually points to a shaded or dirty panel, or an ageing battery.

## E&C solar street lights

E&C's [solar street light](/solar-street-lighting) is an all-in-one design with an integrated solar panel, luminaire and battery, dusk-to-dawn operation, a proximity sensor to save power, and AC and DC LED options from 3000 to 7000 K. It is built to resist sea-front conditions and is listed for streets, campuses and sea-front areas; how long it stays on depends on location, season and weather. For split systems, the E&C [MPPT solar charge controller](/scc) works with 12, 24 or 48 V systems up to 60 A, and E&C supplies [LiFePO4 lithium ion batteries](/lithium-ion) with a built-in BMS. See all [solar solutions](/solar-solutions), and our comparison of [lithium vs lead-acid batteries](/blogs/lithium-vs-lead-acid-ups-battery).
