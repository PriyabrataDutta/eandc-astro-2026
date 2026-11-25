---
title: 'UPS Installation and Commissioning Checklist'
seoTitle: 'UPS Installation and Commissioning Checklist | E&C'
description: 'UPS installation and commissioning checklist: site readiness, cable sizing, earthing, breakers, batteries, commissioning tests and handover documents.'
date: '2026-11-18'
tag: 'Service'
photo: '/image/product/Rack%20Mount.jpg'
coverAlt: 'E&C Accenta rack mount online UPS for installation in a 19 inch rack'
products: ['rack-mount', 'renatamodular', 'renata300', 'isolation']
faq:
  - q: 'What is the difference between UPS installation and commissioning?'
    a: 'Installation is the physical work: placing the UPS and batteries, running cables and connecting breakers and earthing. Commissioning is the testing that follows: powering up, setting parameters and proving every operating mode before the real load is connected.'
  - q: 'How should UPS battery cables be sized?'
    a: 'For the highest current the battery delivers, which is near the end of discharge when the battery voltage is lowest, and for low voltage drop over the run. Keep the battery close to the UPS and fit the protective device the UPS maker specifies.'
  - q: 'What documents should I get when a UPS is handed over?'
    a: 'A commissioning test report with the readings, the settings, an updated single-line diagram, operating and maintenance manuals, warranty details, battery records and a preventive maintenance schedule.'
---

Good UPS installation starts before the UPS arrives: the site, cables, earthing, breakers and battery area must be ready and checked against the maker's requirements. Commissioning then proves the system works in every mode (on mains, on battery, on bypass and back) before the real load is connected, and ends with a handover pack of test results and documents. This checklist covers both, for single UPS, rack UPS and modular UPS.

## 1. Site readiness

Check these before delivery, ideally in a site survey with the supplier:

- **Access and floor loading.** Doors, lifts and corridors must take the UPS and battery racks, and the floor must carry their weight. Battery racks are often the heaviest item in the room.
- **Space and clearance.** Leave the front, rear and top clearances the maker specifies for airflow and service access.
- **Cooling.** The UPS gives off heat equal to its losses, and batteries last longest at around 20 to 25°C. Size air conditioning for both, with some margin.
- **Battery area ventilation.** Vented (flooded) lead-acid batteries release hydrogen when charging and need ventilation as set out by the applicable codes. VRLA batteries release far less, but still need airflow.
- **Environment.** Keep the UPS away from water pipes, dust and corrosive fumes. For dusty plant floors, consider a sealed industrial UPS.

## 2. Electrical design

### Cable sizing

Size every cable for its current, installation method, grouping and ambient temperature, then check voltage drop:

- **Rectifier input** for the UPS's maximum input current, which includes battery recharge.
- **Bypass input**, if separate, for the full output current.
- **Output** for the rated output current, including neutral current from single phase non-linear loads.
- **Battery cables** for the highest discharge current, at the lowest battery voltage near end of discharge. Keep the run short.

### Breakers and protection

- Input, bypass, output and battery protective devices rated as the UPS maker specifies.
- **Discrimination** between the UPS output breaker and downstream breakers, so a fault on one circuit does not trip the whole UPS output.
- A **maintenance bypass** arrangement, so the UPS can later be serviced without shutting the load down.
- Emergency power off (EPO) wiring where the site requires it.

### Earthing

- A clear earth connection to the UPS, battery racks and any isolation transformer, sized as the codes require.
- A defined neutral-to-earth bonding point. With a transformer-based UPS or an output [isolation transformer](/blogs/power-quality/isolation-transformer-for-ups), the output is a separately derived supply and needs its own bond.

All design and installation must follow the applicable codes and the authority having jurisdiction.

## 3. Battery installation

- Place racks or cabinets level and stable.
- Check each block's voltage before connecting; set aside any block well below the rest.
- Connect with the correct polarity and tighten links to the maker's torque.
- Fit the battery breaker or fuse and the battery temperature sensor, if the UPS has one.
- Label the strings and record serial numbers and installation date.

## 4. Rack UPS installation

A **rack UPS** shares its rack with servers or PLC equipment, so add:

- Mount the UPS and battery packs **low in the rack** on rated rails; they are the heaviest items.
- Check rack depth and front-to-back airflow.
- Plan output connections and rack PDUs so loads are spread across circuits.
- Leave space and cable slack to slide units out for service.

See [what is a rack mount UPS](/blogs/online-ups/what-is-rack-mount-ups) for choosing one.

## 5. Modular UPS installation

For a **modular UPS**, also check the frame's busbar and module slots, install modules in the order the maker gives, and set the redundancy level (N+1 or more). If frames run in parallel, check the parallel communication cabling and that every frame is set up the same way.

## 6. Commissioning tests

Commissioning is done by trained engineers with the load still off, or on bypass:

1. **Visual and mechanical check** of every connection, label and torque mark.
2. **Insulation and continuity checks** as appropriate before energising.
3. **Phase rotation** on the input and bypass supplies.
4. **Power up the rectifier**, check DC bus and battery charging.
5. **Set parameters**: output voltage and frequency, battery type and number of blocks, charging current, alarm thresholds.
6. **Start the inverter** and check output voltage and frequency on every phase.
7. **Mains fail test:** open the input and confirm the UPS runs on battery without a break; restore and confirm it returns.
8. **Bypass transfer test:** transfer to static bypass and back; operate the maintenance bypass.
9. **Load test**, ideally with a load bank, then on the real load, with load per phase recorded.
10. **Short battery backup test**, recording battery voltage against time.
11. **Parallel or module tests:** load sharing and removing one unit or module without dropping the load.
12. **Alarms and communication:** dry contacts, RS-232, SNMP or Modbus, email and SMS alerts, and server shutdown software.

## 7. Handover documents

- Commissioning test report with all readings.
- Final settings record.
- Updated single-line diagram.
- Operating and maintenance manuals.
- Battery records: make, model, serial numbers, date installed.
- Warranty details and service contacts.
- A preventive maintenance schedule; see [UPS preventive maintenance and load testing](/blogs/service/ups-preventive-maintenance-and-load-testing).
- Short training for the site team on alarms and bypass operation.

## Power backup system installation with E&C

E&C service engineers visit the site to set out what it needs before installation, and once it is ready, E&C engineers install the product and support it through warranty and AMC; see [UPS service and AMC](/eandcpower-services). The [Accenta Rack](/rack-mount) UPS (1 to 60 kVA) mounts in standard 19" racks and has an optional isolation transformer. The [Renata Modular](/renatamodular) UPS (10 to 1200 kVA) has hot-swappable modules with N+X redundancy, and the [Renata-300](/renata300) (10 to 800 kVA) has an inbuilt isolation transformer. E&C also makes [isolation transformers](/isolation) from 1 to 500 kVA. To size the system first, see [UPS sizing in kVA](/guides/ups-sizing-kva).
