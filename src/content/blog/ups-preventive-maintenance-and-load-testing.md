---
title: 'UPS Preventive Maintenance and Load Testing: What a Proper Service Visit Covers'
seoTitle: 'UPS Preventive Maintenance & Load Testing | E&C'
description: 'What an engineer does in a UPS preventive maintenance visit: load bank testing, thermal imaging, battery discharge tests and capacitor and fan replacement.'
date: '2026-11-18'
tag: 'Service'
photo: '/image/product/Renata-i.jpg'
coverAlt: 'E&C Renata-I online UPS ready for preventive maintenance and load testing'
products: ['renata', 'renata300', 'ups-remote-monitoring', 'battery-bank-remote-monitoring']
faq:
  - q: 'What is a UPS load bank test?'
    a: 'The UPS output is connected to a load bank, a bank of controlled resistive (and sometimes reactive) loads, and stepped up to full rated load. It proves the UPS can carry its rating, switch to battery and back, and hold its output voltage, without risking the real load.'
  - q: 'Is a battery discharge test the same as a load bank test?'
    a: 'No. A discharge test measures how long the battery bank actually supports a known load and finds weak blocks. A load bank test checks the UPS electronics at rated load. Both are often done in the same visit, with the battery test using the load bank as its load.'
  - q: 'Does the load lose power during a UPS load test?'
    a: 'It should not. The critical load is moved to the maintenance bypass, so it runs from mains or DG supply while the UPS is tested on the load bank. That means the load is unprotected for the test window, so plan it for a quiet period with the owner''s agreement.'
---

**UPS preventive maintenance** is a scheduled engineer visit that cleans, inspects, measures and tests the UPS before something fails. A thorough visit goes beyond reading the display: it includes a thermal scan of connections, a battery health test, checks on fans and capacitors against the maker's replacement schedule, and, at least once a year for critical sites, a **load bank test** that proves the UPS can still carry its full rating.

Our [UPS maintenance checklist](/blogs/ups-maintenance-checklist) lists what to check monthly, quarterly and yearly. This post goes into the engineer's side: what the tests are, how they are done safely, and what you should get in the report.

## What a preventive maintenance visit includes

A typical visit to an industrial or online UPS follows this order:

1. **Review the event log.** Transfers to bypass, battery events, overloads and over-temperature alarms since the last visit point to where to look.
2. **Record readings before shutdown.** Input and output voltage, current per phase, load %, battery float voltage and charging current, and cabinet temperature.
3. **Transfer the load to maintenance bypass**, with the owner's agreement, so the UPS can be worked on without dropping the load.
4. **Clean and inspect inside.** Dust on heat sinks, boards and fan blades raises temperatures; industrial sites with fibre, cement or metal dust need this more often than a clean server room.
5. **Check and tighten power terminations** to the torque the maker specifies.
6. **Inspect fans, capacitors, contactors and fuses.**
7. **Calibrate meter readings** against a reference instrument.
8. **Return the UPS to inverter**, then run the tests below.
9. **Write up the report.**

## Load bank testing

A UPS can run for years at 30 to 40% load and never show that a weak power stage, a tired capacitor or a loose busbar would fail at full load. A load bank test finds that out on your schedule, not during an outage.

### How it is done

- The critical load stays on maintenance bypass. The UPS output is connected to a portable **load bank**.
- Load is applied in steps, often 25%, 50%, 75% and 100% of rating, holding each step long enough for temperatures to settle.
- At each step the engineer records output voltage and frequency on every phase, output voltage distortion where an analyser is used, and cabinet and heat sink temperatures.
- **Step load changes** check that the output voltage recovers quickly when load is switched on and off.
- **Mains fail and return** are simulated at load, so the UPS goes to battery and back.

Resistive load banks are the most common. Resistive-reactive banks also test the UPS at a lagging power factor, closer to some real loads. Which one is right depends on the UPS, the load and what the maker recommends.

### When to do it

Annual load bank tests are common for data centres, hospitals and process plants. They are also useful at commissioning, after a major repair or power module replacement, and before a UPS is relied on for a new, larger load.

## Thermal imaging

A thermal camera shows hot spots that a visual check cannot: a loose cable lug, a failing contactor, an overheated fuse holder, a battery link with high resistance. The scan is most useful **under load**, ideally during the load bank test at high load, because a poor joint only heats when current flows through it. Note the temperature of each hot spot so the next scan can show whether it is getting worse.

## Battery discharge testing

The battery is the part most likely to let you down. A controlled discharge at a known load, with each block's voltage logged, shows:

- Whether the bank still gives the backup time you need.
- Which blocks drop faster than the rest. One weak block can cut the runtime of the whole string.

Impedance or internal resistance measurements between discharge tests give an earlier warning without draining the bank. [Battery bank monitoring](/battery-bank-remote-monitoring) records internal resistance, temperature and voltage continuously, so a failing block shows up between visits.

## Capacitor and fan replacement

Electrolytic DC bus capacitors, AC filter capacitors and cooling fans wear out with time and heat, even if the UPS has never failed.

- **Replace them per the maker's schedule,** which is set in years of service and adjusted for operating temperature and load. Do not wait for a failure: a failed fan raises internal temperatures, and a failed capacitor can take other components with it.
- **Signs of early wear:** bulging or leaking capacitors, rising output ripple, fans that are noisy, slow or seized.
- **Keep records** of replacement dates, so the next ones can be budgeted rather than found during a breakdown.

## Industrial UPS maintenance: what changes

Factories, power plants and process industry put more stress on a UPS than an office:

- **Dust and heat** clog filters and heat sinks faster, so cleaning intervals are shorter. Sealed [IP41 to IP55 UPS](/ip-41-55-online-ups) reduce dust entry but still need filter and seal checks.
- **Non-linear and regenerative loads** such as drives raise heating; watch temperatures during load tests.
- **DG operation** is more frequent, so check that the UPS handles the generator's voltage and frequency without repeated transfers to battery.

## What the service report should contain

- Readings before and after, with load per phase.
- Load bank test results at each step.
- Battery test results, with weak blocks named.
- Thermal scan findings and what was corrected.
- Parts replaced, and parts due before the next visit.
- Recommendations, such as load balancing, cooling or battery replacement.

## Online UPS servicing from E&C

E&C provides preventive maintenance and breakdown support during warranty, then comprehensive or non-comprehensive AMC, or per-call service, from service locations across India; see [UPS service and AMC](/eandcpower-services). Transformer-based UPS such as the [Renata-I](/renata) and [Renata-300](/renata300) have inbuilt static bypass, and SNMP or RS-232 communication helps record events between visits. [UPS remote monitoring](/ups-remote-monitoring) adds cloud logging of load, battery voltage and mode with SMS and email alerts. For how bypass works during these tests, see [UPS bypass and eco mode explained](/blogs/ups-thd-surge-and-bypass-explained).
