---
title: 'UPS Battery Replacement: When and How to Replace a Battery Bank'
seoTitle: 'UPS Battery Replacement: When and How | E&C Power'
description: 'Signs a UPS battery bank needs replacing, how impedance and discharge tests work, whole string vs single block replacement, and safe recycling of old batteries.'
date: '2026-11-18'
tag: 'Service'
photo: '/image/product/Tubular.jpg'
coverAlt: 'Lead-acid battery blocks ready for a UPS battery bank replacement'
products: ['smf', 'tubular-batteries-manufacturing', 'lithium-ion', 'battery-bank-remote-monitoring']
faq:
  - q: 'When should a UPS battery bank be replaced?'
    a: 'When a discharge test shows capacity has fallen to about 80% of rated, which is the common end-of-life point, or when blocks show swelling, leakage or rapidly rising internal resistance. Age alone is a prompt to test, not proof of failure.'
  - q: 'Can I replace just one bad battery in a UPS string?'
    a: 'Sometimes, if the string is fairly new and the replacement matches the make, model and rating. In an older string, a new block is mismatched against aged ones and the weakest blocks soon fail, so replacing the whole string is usually better.'
  - q: 'What should be done with old UPS batteries?'
    a: 'Hand them to an authorised lead-acid battery recycler or take-back channel and keep the paperwork. Do not sell them to informal scrap dealers, where lead and acid are often handled unsafely.'
---

Replace a UPS battery bank when testing shows its capacity has fallen to around **80% of rated**, or when blocks swell, leak or show sharply rising internal resistance. The safest way to find out is a combination of block-by-block impedance or conductance readings and a controlled discharge test. In most ageing banks the whole string should be replaced together, and the old batteries must go to an authorised recycler.

## Signs your UPS batteries need attention

- **Backup time is shorter** than it used to be, or the UPS shuts down early during an outage.
- **Battery alarms** or failed self-tests on the UPS.
- **Swollen, cracked or leaking** cases, or white or green corrosion at the terminals.
- **Hot blocks** or a smell of acid near the bank.
- **One or more blocks** reading noticeably lower voltage on float than the rest.
- **Age**: a VRLA bank near 3 to 5 years, or a flooded tubular bank near 5 to 8 years, is due for a proper test even if nothing seems wrong.

## How batteries are tested

### Voltage check

Measuring each block's float voltage is quick, but it tells you little on its own. A battery can show a normal float voltage and still have lost much of its capacity.

### Impedance, resistance or conductance

A **battery health check service** usually measures each block's internal impedance, resistance or conductance with a hand-held tester. As a lead-acid battery ages, internal resistance rises and conductance falls. The useful information is the **trend** and the **spread**: a block that reads well outside the average of its string, or has changed sharply since the last test, is suspect. This is a fast, online test, done without taking the UPS off line.

### Discharge (capacity) test

The definitive test is a controlled discharge, either at the actual UPS load or with a dummy load bank, while logging block voltages. It shows real capacity and finds the weak blocks that fall away first. It should be done with the load protected, for example by a DG or a second UPS, in case the bank fails during the test.

Together, these make up a sound **battery testing and replacement** programme: conductance readings every few months, a discharge test once or twice a year, and replacement when the results say so. [Battery bank monitoring](/battery-bank-remote-monitoring) can log voltage, temperature and internal resistance continuously between visits.

## Whole string or single blocks?

| Situation | Usual approach |
|---|---|
| String under a year or two old, one block failed early | Replace the single block with an identical make, model and rating |
| String past mid-life, several blocks weak | Replace the whole string |
| Capacity test below about 80% of rated | Replace the whole string |
| Parallel strings of different ages | Replace strings so that each string is uniform |

Batteries in a series string all carry the same current. A new block next to old ones gets over-charged or under-charged relative to its neighbours, and the old blocks still limit capacity, so piecemeal replacement in an ageing bank tends to lead to repeated failures.

## How a replacement is carried out

1. **Confirm the specification**: chemistry, voltage, Ah rating, terminal type and physical size, plus any change in backup time required. This is a chance to resize the bank using our guide to [UPS battery backup time](/guides/ups-battery-backup-time).
2. **Plan the outage**: put the UPS on maintenance bypass or arrange for the load to run from another source while the bank is disconnected.
3. **Isolate and remove** the old bank using insulated tools, with the DC breaker open, working one string at a time.
4. **Install the new bank**, in the correct series and parallel arrangement, with terminals torqued to the maker's value.
5. **Check polarity and total voltage** before closing the DC breaker.
6. **Charge fully**, set float voltage and temperature compensation, then run a short backup test.
7. **Record** installation date and initial conductance readings as a baseline for future tests.

A **UPS battery bank installation** of this kind involves high DC voltage and energy, so it should be done by trained engineers following the applicable electrical safety rules.

## Disposal and recycling

Lead-acid batteries contain lead and sulphuric acid. Under Indian rules, used batteries must go to authorised recyclers or through take-back channels, not to informal scrap dealers or landfill. Ask your supplier how old batteries will be collected and keep the receipt or handover record. Lithium and nickel cadmium batteries also need specialist recyclers; follow the applicable rules and the battery maker's instructions.

## To make the new batteries last

Most early failures come from heat, wrong float voltage and deep cycling. Our post on [how to extend UPS battery life](/blogs/how-to-extend-ups-battery-life) covers the habits that matter, and [lithium vs lead-acid UPS batteries](/blogs/lithium-vs-lead-acid-ups-battery) helps if you are considering a change of chemistry.

## Battery bank replacement services from E&C

E&C provides **battery bank replacement services**, sizing and installation through its [UPS service and AMC](/eandcpower-services) team. E&C supplies 12V [SMF batteries](/smf) from 7 to 200 Ah and 12V flooded [tubular batteries](/tubular-batteries-manufacturing) from 28 to 200 Ah from Amara Raja, Exide, HBL and other leading brands, and LiFePO4 [lithium ion batteries](/lithium-ion) with a BMS, each with the manufacturer's original warranty and onsite support. The [battery bank monitoring system](/battery-bank-remote-monitoring) tracks the new bank's health with SMS and email alerts.
