---
title: 'UPS Maintenance Checklist: Monthly, Quarterly and Yearly Checks'
seoTitle: 'UPS Maintenance Checklist: What to Check and When | E&C'
description: 'A practical UPS maintenance checklist: what to check every month, quarter and year, which parts wear out, and when an AMC makes sense.'
date: '2026-11-17'
tag: 'Service'
photo: '/image/product/Renata%20300%20Series.jpg'
coverAlt: 'Renata-300 three phase online UPS in a plant room'
products: ['renata300', 'ups-remote-monitoring', 'battery-bank-remote-monitoring']
faq:
  - q: 'How often should a UPS be serviced?'
    a: 'Have an engineer do a full preventive maintenance visit at least once a year, and twice a year for critical or heavily loaded UPS. In between, staff can do simple monthly checks of alarms, load and battery readings.'
  - q: 'What usually fails in a UPS?'
    a: 'Batteries are the most common cause of UPS failure. After batteries come cooling fans and capacitors, which wear out with age and heat and are normally replaced on a schedule during preventive maintenance.'
  - q: 'Is a UPS AMC worth it?'
    a: 'For any UPS protecting critical loads, usually yes. An AMC covers scheduled preventive maintenance and priority breakdown response, and keeps a service history that helps plan battery and part replacements.'
---

A UPS only proves its worth during a power cut, which is the worst time to discover a weak battery or a failed fan. Most UPS failures are preventable with simple, regular checks. This checklist covers what your own staff can check, what needs a trained engineer, and how often.

<p class="note"><strong>Safety first:</strong> a UPS holds dangerous voltages even when switched off, from its batteries and capacitors. Staff checks should stay on the outside of the cabinet. Opening the UPS or working on the battery bank is a job for a trained engineer.</p>

## Monthly checks (your staff)

- **Alarms and event log.** Read the display. Note any alarms, transfers to bypass or battery events since the last check.
- **Load level.** Note the load in % or kW on each phase. A UPS running above about 80% has little headroom; an unbalanced three phase load should be corrected.
- **Room temperature.** Keep the UPS and battery area near 20 to 25°C. Heat is the biggest single cause of short battery life.
- **Airflow.** Make sure vents are not blocked, and dust filters are clean.
- **Visual check.** Look for battery swelling, leaks, corrosion on terminals, unusual smells or noises.
- **Log the readings.** A simple monthly log of load, battery voltage and temperature shows trends long before a failure.

## Quarterly checks

- **Battery voltages.** Measure each battery block on float. One block reading well off the others is an early sign of failure. (Engineer or trained staff.)
- **Terminal condition.** Check for corrosion and loose connections, which cause heat at the terminals.
- **Tubular batteries:** check electrolyte levels and top up with distilled water as the maker specifies.

## Yearly preventive maintenance (engineer)

- **Internal cleaning** of dust from boards, heat sinks and fans.
- **Fans and capacitors** checked, and replaced on schedule.
- **Calibration** of input, output and battery readings.
- **Battery health test:** a controlled discharge or impedance test to find weak blocks.
- **Bypass transfer test,** done at a planned time with the load owner's agreement.
- **Firmware** and settings review.
- **Tightening** of power connections, often with a thermal scan to find hot joints.

## When parts wear out

| Part | Typical replacement | What shortens its life |
|---|---|---|
| SMF / VRLA batteries | 3 to 5 years | Heat, deep and frequent discharges |
| Tubular batteries | 5 to 8 years | Low electrolyte, undercharging |
| Lithium (LiFePO4) batteries | 8 to 10 years | Very high temperatures |
| Cooling fans | Around 5 to 7 years | Dust, continuous high load |
| Capacitors | Around 5 to 10 years | Heat, high load |

These are typical values; the UPS maker's manual gives the figures for your model. For battery types and backup time, see [UPS battery backup time](/guides/ups-battery-backup-time) and [lithium vs lead-acid batteries](/blogs/batteries/lithium-vs-lead-acid-ups-battery).

## Watch it remotely

Monthly walk-round checks miss what happens between visits. [UPS remote monitoring](/ups-remote-monitoring) sends UPS load, battery voltage and mode to the cloud, with SMS and email alerts, and [battery bank monitoring](/battery-bank-remote-monitoring) tracks each battery's voltage, temperature and internal resistance, so a failing block shows up early. An [SNMP adapter](/snmp-adapter) can also shut servers down gracefully if the battery runs low.

## When to get an AMC

If the UPS protects anything you cannot afford to lose, such as servers, production lines or medical equipment, an annual maintenance contract is the simplest way to make sure the yearly checks happen. E&C provides installation, AMC, battery replacement and breakdown service for UPS: see [UPS service and AMC](/eandcpower-services).
