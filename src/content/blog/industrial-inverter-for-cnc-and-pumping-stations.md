---
title: 'Industrial Inverter or Online UPS for CNC Machines and Pumping Stations?'
seoTitle: 'Industrial Inverter for CNC & Pumping Stations | E&C'
description: 'When an industrial inverter (DC battery to AC) suits CNC shops and pumping stations, when an online UPS is better, and which loads really need backup.'
date: '2026-11-18'
tag: 'Industrial UPS'
photo: '/image/home/industrial%20Inverters.jpg'
coverAlt: 'E&C IGBT-based industrial inverter for 48, 110 and 220 VDC systems'
products: ['industrial-inverter', 'renata', 'rack-mount', 'isolation']
faq:
  - q: 'What is the difference between an industrial inverter and an online UPS?'
    a: 'An industrial inverter converts power from an existing DC battery system, typically 48, 110 or 220 V charged by a separate battery charger, into AC. An online UPS contains its own rectifier, charger, battery connection and inverter, and takes AC in and gives AC out.'
  - q: 'Should a CNC spindle be on UPS?'
    a: 'Usually not. Spindle and axis drives draw high power, and most machines are designed to stop safely on power loss. The CNC controller, PLC and control power supplies are the parts usually put on UPS, so the machine keeps its position and program and restarts cleanly.'
  - q: 'Can an inverter run a pump motor at a pumping station?'
    a: 'Main pump motors are normally fed from the grid and a DG set, not from batteries, because of their size and starting current. The inverter or UPS backs up SCADA, PLCs, instruments, telemetry and control circuits.'
---

An **industrial inverter for CNC machines** or **pumping stations** takes power from a DC battery bank, usually 48, 110 or 220 V, and turns it into clean AC for controls and instruments. It suits sites that already have a DC system with its own charger. Where there is no DC system, an online UPS, which has its own rectifier, charger and battery, is usually the simpler choice. In either case, the backup is normally for the **controls**, not the motors.

## Industrial inverter vs online UPS

Both give a sine wave AC output from a battery. The difference is where the battery and charger sit.

- **Industrial inverter:** DC in, AC out. The battery is part of a plant DC system, charged by a float cum boost charger (FCBC). The same battery often also feeds protection relays, breaker tripping and DC controls. The inverter is one more load on that battery.
- **Online UPS:** AC in, AC out. Its rectifier and charger are built in, and its battery bank is dedicated to it. Mains or DG supply runs the load through double conversion all the time.

| | Industrial inverter | Online UPS |
|---|---|---|
| Input | Station DC battery (48 / 110 / 220 VDC) | AC mains or DG |
| Charger | Separate FCBC | Built in |
| Battery | Shared plant DC battery | Dedicated UPS battery |
| Typical sites | Substations, power plants, pumping stations, process plants | Factories, CNC shops, offices, data rooms |
| Mains bypass | Optional static transfer switch | Static bypass built in |

For how FCBCs work, see [FCBC battery charger explained](/blogs/batteries/fcbc-battery-charger-explained), and for the household version of this question, [UPS vs inverter](/guides/ups-vs-inverter).

## Power backup for CNC machines

A CNC machine has two very different kinds of load:

1. **Power section:** spindle drive, axis servo drives, hydraulics, coolant pumps and chip conveyors. These draw most of the power and high starting currents.
2. **Control section:** the CNC controller, PLC, operator panel, encoders, control power supplies, and in many shops a DNC or CAM PC feeding programs.

A power cut stops the power section, and the machine's own design brings the axes and spindle to a safe stop. Some controls also have power-fail features that use stored energy to retract the tool; these depend on the machine maker. The damage in most cases comes from the control section: corrupted programs, lost reference position, a controller that needs re-homing, or a broken tool from an uncontrolled restart.

So an **uninterruptible power supply for CNC** is usually sized for the control section only, often a few kVA per machine. Backing up the full machine is rarely practical and must be agreed with the machine maker if it is ever needed. Check the control supply rating in the electrical drawings rather than the machine's total connected load.

Points for CNC shops:

- **Neutral-to-earth voltage.** Many CNC controls are sensitive to it. A transformer-based UPS, or an [isolation transformer](/blogs/power-quality/isolation-transformer-for-ups) after a transformerless one, helps.
- **Voltage swings.** For the full machine, a servo stabilizer upstream handles slow swings; the UPS covers the controls.
- **One UPS per machine or a central UPS?** Per-machine UPS are simple to install. A central UPS with a dedicated control-power distribution is easier to maintain across many machines.

## Industrial inverter for pumping stations

Water supply and sewage pumping stations usually have medium-voltage switchgear with a DC battery for protection and tripping. That makes an **industrial inverter for pumping stations** a natural fit: the existing battery and FCBC are extended, and the inverter supplies AC to:

- SCADA RTUs, PLCs and HMIs
- Flow, level and pressure instruments
- Telemetry radios and network equipment
- Valve actuator controls and alarm panels
- Control room PCs and emergency lighting where specified

The pump motors themselves stay on the grid and DG supply. Size the station battery for the total DC load, including the inverter's draw, for the required backup time. Remember that the inverter's draw from the battery is its AC output divided by its efficiency, so a 5 kVA inverter running near full load takes noticeably more than 5 kW from the DC system. Size the FCBC to supply the DC loads and recharge the battery at the same time. An optional static transfer switch on the inverter output can move the load to mains if the inverter needs attention.

## Power backup for the automation industry

The same split applies across automation: PLC panels, motion controllers, robots' control cabinets, vision systems and line PCs need clean, uninterrupted power; motors and heaters generally do not. Rack-mounted online UPS sit neatly in cooled PLC panels, and a plant with a DC system can use inverters instead.

## E&C inverters and UPS for industry

E&C's [industrial inverter](/industrial-inverter) is an IGBT-based PWM design from 3 to 100 kVA for 48, 110 or 220 VDC systems, with a built-in isolation transformer, pure sine wave output, an optional static transfer switch, and standalone, hot standby or parallel configurations. For CNC controls without a DC system, the transformer-based [Renata-I](/renata) online UPS (2 to 30 kVA) or the [Accenta Rack](/rack-mount) for PLC panels fit well, with [isolation transformers](/isolation) where needed. See our [industrial UPS](/industrial-ups-manufacturer-in-india) range and [FCBC chargers](/industrial-battery-charger-fcbc).
