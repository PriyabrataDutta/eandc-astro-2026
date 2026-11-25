---
title: 'UPS for Diagnostic Centres: Imaging, Lab Analysers and PACS'
seoTitle: 'UPS for Diagnostic Centres in India | E&C'
description: 'Which diagnostic centre loads need an online UPS: CT, MRI and X-ray consoles, lab analysers and PACS, the split with the DG, and managing many sites.'
date: '2026-11-18'
tag: 'Online UPS'
photo: '/image/product/Renata-i.jpg'
coverAlt: 'E&C Renata-I online UPS for diagnostic centre lab and imaging equipment'
products: ['renata', 'renata300', 'isolation', 'ups-remote-monitoring']
faq:
  - q: 'Does a CT or MRI scanner run fully on UPS?'
    a: 'Usually not. The high-power X-ray generator or gradient system is normally fed from mains and DG, while the console, reconstruction computers and control electronics go on UPS. The scanner maker''s site planning guide says exactly which parts need UPS and at what rating.'
  - q: 'What size UPS does a pathology lab analyser need?'
    a: 'Add up the analyser, its PC, printer and any water purification unit it depends on, using the nameplate or maker''s data, then add margin for start-up current and future instruments. Backup time should at least cover the run in progress or the DG changeover, whichever is longer.'
  - q: 'Why do diagnostic centres need low neutral-to-earth voltage?'
    a: 'Many imaging and lab instruments specify a low neutral-to-earth voltage, often a volt or two, and raise errors or noisy results when it is higher. A transformer-based UPS or an isolation transformer close to the equipment creates a fresh neutral-earth bond and brings it down.'
---

A diagnostic centre needs a **UPS** wherever an interruption would cost a scan, a sample or a report: imaging consoles and reconstruction computers, laboratory analysers, PACS and reporting workstations, and the network that links them. The heavy power stages of CT, MRI and X-ray machines usually run from mains and the diesel generator (DG), not the UPS. Getting that split right, with an online UPS and clean neutral-to-earth conditions, is most of the job.

Our post on [UPS for hospitals](/blogs/online-ups/ups-for-hospitals-and-fire-alarm-systems) covers wards, theatres and ICUs. This one looks at standalone diagnostic centres and imaging chains, where the loads and the business problem are different.

## Imaging: what goes on UPS and what goes on DG

Imaging equipment has two very different kinds of load:

- **Power stages.** The X-ray generator in a CT or radiography system and the gradient amplifiers in an MRI draw large, short bursts of power. Putting them on a UPS needs a very large unit, so in most centres they run from mains with DG backup.
- **Control and computing.** The operator console, image reconstruction computers, gantry or table control electronics and the workstation where images are reviewed. A power cut here can lose a scan in progress, corrupt data or force a long restart.

The **imaging maker's site planning guide** decides the split. It typically states which sub-systems need an uninterruptible supply, the kVA rating, the acceptable voltage and frequency range and any requirement for low neutral-to-earth voltage. Some makers allow, or recommend, a larger UPS that carries the whole system long enough to finish the scan. Always follow their document rather than a rule of thumb.

### MRI cooling

MRI magnets depend on continuous cooling. The cold head compressor and chiller are usually fed from DG-backed supply, while their controllers and monitoring may need UPS. Ask the MRI vendor how long cooling can be off and design the DG and UPS around that answer.

### X-ray and digital radiography

Digital radiography detectors, their workstations and the CR reader are small, sensitive loads that suit a single phase online UPS. The X-ray generator itself is normally on mains or DG.

## Laboratory analysers

Pathology and biochemistry analysers are often the loads that justify the UPS in a diagnostic centre:

1. **Runs in progress.** A power drop mid-run can lose samples, reagents and calibration, and the patient may need to be called back.
2. **Water purification.** Many analysers depend on a reverse osmosis or deionised water unit. If the analyser is on UPS but the water unit is not, the run can still stop.
3. **Refrigerated reagent and sample storage.** Controllers and temperature alarms should stay powered; the compressors can usually ride on DG.
4. **LIS link.** The PC or interface that sends results to the laboratory information system needs the same backup as the analyser.

A transformer-based online UPS of a few kVA per analyser group is common, with backup time set by the longest run or the DG changeover.

## PACS, RIS and reporting

Images are worthless if they cannot be stored, sent and reported. Put these on UPS:

- PACS and RIS servers, storage and backup devices.
- Network switches, firewall and internet router, including the link used for teleradiology.
- Radiologist reporting workstations and their diagnostic displays.
- Front-desk billing and appointment PCs, so patients are not left waiting.

Servers should be set to **shut down cleanly** if the DG does not come on. The UPS's SNMP or shutdown software can trigger this. Our post on [SNMP and remote UPS monitoring](/blogs/monitoring/snmp-and-remote-ups-monitoring) explains how.

## Clean power: isolation and neutral-to-earth voltage

Imaging and lab equipment is sensitive to electrical noise and often specifies a low neutral-to-earth voltage. In older buildings and shopping-complex units, where many diagnostic centres operate, the neutral can sit several volts above earth. A **transformer-based UPS**, or an [isolation transformer](/blogs/power-quality/isolation-transformer-for-ups) close to the equipment, creates a new neutral-earth bond and blocks much common-mode noise.

## Diagnostic chains: many small sites

Chains with collection centres and imaging branches across a city or state face a different problem: dozens of small UPS units, most with no engineer on site. Practical steps:

- **Standardise** on a few UPS ratings and battery types, so spares and training are simpler.
- **Monitor remotely.** A UPS left on battery overnight, or a battery bank near the end of its life, is easy to miss without alerts.
- **Plan service.** Battery checks and preventive maintenance on a fixed calendar, for example with an [AMC](/eandcpower-services).

## Quick sizing checklist

| Load group | Typical UPS | Backup driven by |
|---|---|---|
| CT/MRI console and computers | Per imaging maker's guide | Finishing the scan and safe shutdown |
| Lab analysers and water unit | Single or three phase online | Longest run or DG changeover |
| PACS, RIS, network | Online, with shutdown software | Clean server shutdown |
| Front desk and billing | Small online UPS | DG changeover |

See our guides to [UPS sizing in kVA](/guides/ups-sizing-kva) and [UPS battery backup time](/guides/ups-battery-backup-time), and [what affects UPS price](/ups-price-in-india).

## E&C UPS for diagnostic centres

E&C's [online UPS](/online-ups) range suits both single-site centres and chains. The [Renata-I](/renata) is a transformer-based double conversion UPS from 2 to 30 kVA, with medical and lab equipment among its listed applications and SNMP web management. For larger imaging or central loads, the [Renata-300](/renata300) covers 10 to 800 kVA with an inbuilt isolation transformer. E&C also makes [isolation transformers](/isolation) from 1 to 500 kVA, and the [UPS remote monitoring system](/ups-remote-monitoring) sends UPS load, battery voltage and mains/battery status to the cloud with SMS and email alerts, which helps chains watch many sites.
