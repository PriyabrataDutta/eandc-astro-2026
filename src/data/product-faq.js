// Product page FAQs (rendered by Product.astro, with FAQPage schema). Each answers the keywords mapped to the page.
// E&C facts come from products.js; general engineering points are hedged.
export const productFaq = {
  "renata": [
    {
      "q": "What is the Renata-I online UPS and how does it work?",
      "a": "Renata-I is E&C's transformer-based double conversion online UPS from 2 kVA to 30 kVA. Incoming mains is converted to DC, which charges the battery, and an IGBT-based PWM inverter converts it back to a regulated sine wave. Because the load always runs from the inverter, a mains failure causes no break in supply, and the inbuilt static bypass switch transfers the load to mains if the UPS itself needs attention."
    },
    {
      "q": "Which Renata-I model suits single phase and three phase supplies?",
      "a": "Models from 2 kVA to 10 kVA take a single phase input and give a single phase output. Models from 5 kVA to 30 kVA take a three phase input and give a single phase output, which helps balance the draw on a three phase supply at larger ratings. If your load itself needs a three phase output, look at Renata-300 or Renata-DS instead."
    },
    {
      "q": "How do I choose between a 10 kVA, 20 kVA and 30 kVA online UPS?",
      "a": "Add up the running power of every load the UPS will carry, convert it to kVA using the load power factor, and add headroom, typically 20 to 25 percent, for start-up surges and future additions. Machinery with motors or heaters can draw several times its running current at start-up, so check inrush as well as steady-state load. Backup time is set separately by the battery bank, so the kVA rating and the battery Ah should be chosen together; E&C engineers can size both and quote for the complete system."
    },
    {
      "q": "What is the difference between Renata-I and Renata-300?",
      "a": "Both are transformer-based double conversion online UPS, but they serve different load sizes. Renata-I covers 2 kVA to 30 kVA with a single phase output, while Renata-300 covers 10 kVA to 800 kVA with a three phase input and three phase output, and up to 4 units in parallel. Renata-I suits single phase equipment such as lab instruments, medical devices and V-SAT terminals; Renata-300 suits three phase machinery, server rooms and data centres."
    },
    {
      "q": "Why choose a transformer-based UPS like Renata-I for industrial loads?",
      "a": "An inbuilt transformer adds galvanic isolation between the input and the load and generally copes well with high inrush currents and loads that vary through the day, such as textile machines. Transformer-based units are heavier and larger than transformerless designs of the same rating, but many plant engineers prefer them for ruggedness. Renata-I also supports hot standby, where two units are paired so one can take over if the other fails."
    }
  ],
  "accenta": [
    {
      "q": "What is the Accenta online UPS used for?",
      "a": "Accenta is a lightweight double conversion online UPS for IT and light loads, from 1 kVA to 10 kVA. Typical uses are computers and peripherals, ATMs, V-SAT terminals and telecom equipment. It gives a pure sine wave output with low THD, which suits sensitive electronics."
    },
    {
      "q": "Is Accenta a single phase online UPS?",
      "a": "Yes. Accenta from 1 kVA to 10 kVA is single phase input and single phase output, and the 10 kVA model is also available with a three phase input and single phase output. Its wide input voltage and frequency window lets it ride through poor mains and generator supply without switching to battery as often."
    },
    {
      "q": "Which batteries can the Accenta UPS use, and how long will they last?",
      "a": "Accenta works with SMF (sealed maintenance free) or tubular batteries, and its inbuilt charger handles a range of battery sizes. Backup time depends on the battery Ah, the number of batteries and how heavily the UPS is loaded, so a lightly loaded UPS runs longer on the same bank. Battery service life also depends on temperature and how often the batteries are deep discharged; heat in particular shortens lead-acid battery life."
    },
    {
      "q": "Can two Accenta units be used together for critical loads?",
      "a": "Yes. Accenta supports hot standby, where a second unit takes over if the first fails, and parallel configuration, where units share the load and add redundancy. This is useful for ATMs, network rooms and telecom sites where a single UPS fault should not interrupt the load."
    },
    {
      "q": "What does cold start mean on an online UPS like Accenta?",
      "a": "Cold start lets the UPS be switched on from its battery when there is no mains supply at all. This means equipment can still be started during an extended outage. Accenta also has active input power factor correction, which keeps the current it draws from mains or a generator closer to a clean sine wave and makes it genset compatible."
    }
  ],
  "renata300": [
    {
      "q": "What is the Renata-300 three phase online UPS?",
      "a": "Renata-300 is E&C's transformer-based three phase input, three phase output online UPS, from 10 kVA to 800 kVA. It has an inbuilt isolation transformer, an inbuilt static bypass switch and efficiency of up to 95 percent. It is manufactured to the EC Directive EN62040, the European standard series for UPS systems."
    },
    {
      "q": "Is Renata-300 suitable for server rooms and data centres?",
      "a": "Yes. As a double conversion UPS, it keeps servers on clean, regulated power with no break when mains fails, and its listed applications include data centres, servers, IT and telecom equipment. It performs well with non-linear loads such as server power supplies, and supports RS-232, relay contacts and SNMP, with optional T-Mon software for remote monitoring."
    },
    {
      "q": "How does Renata-300 provide long backup for hospitals and other critical sites?",
      "a": "Renata-300 has a high charger capacity, so it can recharge larger Ah battery banks and support extended runtimes. Actual backup depends on the battery bank size, its condition and the load on the UPS, and runtimes of an hour or more usually call for a substantially larger bank. Larger banks also need more floor space, ventilation and a charger sized to recharge them within a reasonable time."
    },
    {
      "q": "How many Renata-300 units can run in parallel?",
      "a": "Up to 4 Renata-300 units can run in parallel. Paralleling can be used to add capacity or to add redundancy, where the remaining units carry the full load if one unit fails. For redundancy, the units together must be rated so that the load still fits within the capacity left when one unit is out of service."
    },
    {
      "q": "What size three phase UPS do I need, 40 kVA, 100 kVA or 200 kVA?",
      "a": "Start from the total connected load in kW, divide by the load power factor to get kVA, and add headroom for growth and start-up surges, typically 20 to 25 percent. A UPS running at around 60 to 80 percent of its rating usually leaves room for expansion while staying efficient. Renata-300 covers 10 kVA to 800 kVA, so the same family can serve a small ERP server room or a large campus."
    }
  ],
  "renatacyclone": [
    {
      "q": "What is the Renata-DS online UPS?",
      "a": "Renata-DS is a three phase input, three phase output transformerless online UPS from 10 kVA to 300 kVA. Its modular structure is controlled by three DSPs, and it has a high input power factor, low input current THD and efficiency up to 94 percent. Battery voltage ranges from 192 to 720 VDC depending on the model."
    },
    {
      "q": "What is the difference between a transformerless UPS like Renata-DS and a transformer-based UPS like Renata-300?",
      "a": "A transformerless UPS is typically smaller, lighter and draws cleaner input current, because it does not carry a large output transformer. A transformer-based UPS adds built-in galvanic isolation and is often preferred for rugged industrial loads. Renata-DS offers an isolation transformer as an option, so a site can add isolation where it is needed without choosing a different UPS family."
    },
    {
      "q": "Can Renata-DS handle regenerative loads?",
      "a": "Yes, Renata-DS is designed to handle regenerative power. Some loads, such as motor drives on lifts, cranes or hoists, can push energy back towards the supply when braking, which can trip or stress a UPS not designed for it. The exact behaviour depends on the drive and load profile, so the site's regenerative load should be reviewed when sizing the UPS."
    },
    {
      "q": "What monitoring and battery management does Renata-DS offer?",
      "a": "Renata-DS stores up to 192 events and 4500 alarms, runs automatic battery tests and shows the remaining battery time. It uses temperature compensated charging, which adjusts charging voltage with battery temperature to reduce over or under charging. It has 2 RS-232 ports, 12 dry contact outputs and optional SNMP and MODBUS adaptors for building or plant monitoring systems."
    },
    {
      "q": "How many Renata-DS units can be paralleled?",
      "a": "Up to 6 Renata-DS units can run in hot standby or parallel. This lets a data centre or industrial site add capacity in steps, or keep a redundant unit online so the load is still supported if one unit fails. A static and maintenance bypass switch also allows servicing without shutting down the load."
    }
  ],
  "renatamodular": [
    {
      "q": "What is a modular UPS system?",
      "a": "A modular UPS is built from power modules that slide into a common frame and share the load, instead of being one large fixed unit. Capacity is added by inserting modules, and a failed module can be removed without taking the whole system down. In Renata Modular, each hot swappable module is 10 kVA to 40 kVA, each frame holds 10 to 13 modules, and up to four frames can run in parallel, for a total of up to 1200 kVA."
    },
    {
      "q": "What is N+1 UPS redundancy?",
      "a": "N is the number of modules needed to carry the load, and N+1 means one extra module is installed. If any single module fails, the others still carry the full load, so the load stays protected. Renata Modular supports N+X redundancy within each frame, meaning you can choose how many spare modules to install, such as N+1 or N+2."
    },
    {
      "q": "What is the difference between N+1 and N+N redundancy?",
      "a": "N+1 adds one spare module or unit to the capacity required, which protects against a single module failure at modest extra cost. N+N, often called 2N, duplicates the entire capacity, usually as two independent systems, so even a complete system or supply path failure can be tolerated. 2N costs more and takes more space, and is typically chosen where the design calls for fully duplicated power paths, as in the most critical data centres."
    },
    {
      "q": "Modular UPS vs traditional UPS: which suits a data centre?",
      "a": "A modular UPS lets you buy capacity in steps as the IT load grows, keeps modules loaded at an efficient level, and allows hot swapping of a faulty module. A traditional standalone UPS is a single fixed block, so it is often oversized at first and must be fully bypassed for many repairs. Renata Modular's vertical scalability also saves floor space compared with conventional UPS systems, which matters in colocation and server halls."
    },
    {
      "q": "Is Renata Modular available for three phase loads like 200 kVA or 500 kVA?",
      "a": "Yes. Renata Modular comes in single phase in / single phase out, three phase in / single phase out, and three phase in / three phase out configurations. With 10 to 40 kVA modules, 10 to 13 modules per frame and up to four frames in parallel, systems from 10 kVA up to 1200 kVA can be built, covering 200 kVA and 500 kVA sites. The exact module count depends on the load and the redundancy level chosen."
    }
  ],
  "rack-mount": [
    {
      "q": "What is a rack mount UPS?",
      "a": "A rack mount UPS is built to fit a standard 19 inch equipment rack, alongside servers, switches or control equipment. Accenta Rack Mount UPS is a double conversion online UPS from 1 kVA to 60 kVA in this format. Placing the UPS in the rack gives localised power to that rack and keeps cabling short."
    },
    {
      "q": "What do 2U and 4U mean for a rack mount UPS?",
      "a": "U is the standard unit of rack height, 1.75 inches or 44.45 mm, so a 2U unit takes two units of rack space and a 4U unit takes four. Higher capacities and internal batteries generally need more height, and extra battery modules may take further rack space. The rack height for a given Accenta model depends on its rating and battery arrangement, so check the rack space you have when choosing."
    },
    {
      "q": "Can a rack mount UPS be used for PLC panels on a shop floor?",
      "a": "Yes. Accenta Rack UPS is used on shop floors to power PLC controllers, where the UPS can sit in a cooled rack next to the panel. It is genset compatible and has a wide input voltage range of 110 to 300 VAC on select models, which helps on sites with unstable supply. An optional isolation transformer gives full isolation and common mode noise rejection where electrical noise is a problem."
    },
    {
      "q": "Can the Accenta rack mount UPS be expanded or made redundant?",
      "a": "Yes. It supports N+X parallel redundancy and capacity expansion, so units can be added to share the load or to provide spare capacity. It is available as single phase in / single phase out, three phase in / single phase out and three phase in / three phase out, with an output power factor of 0.9 to 1."
    },
    {
      "q": "What should be checked when installing a rack UPS in a server rack?",
      "a": "Check the rack's depth and weight rating, because UPS units with batteries are heavy and usually need rails or a shelf rather than front mounting ears alone. Leave space for front-to-back airflow, as heat shortens battery life, and place heavy units low in the rack. Plan the input supply, output distribution and network connection for SNMP or RS-232 monitoring and shutdown software before installation."
    }
  ],
  "lithium-ups": [
    {
      "q": "What are the benefits of a lithium battery UPS?",
      "a": "A lithium battery recharges faster and lasts more charge cycles than a typical lead-acid battery; E&C's Lithium UPS is rated for more than 2000 cycles. Lithium packs are also lighter and smaller for the same energy and generally tolerate heat better. The upfront cost is usually higher, so the advantage shows over the life of the UPS through fewer battery replacements."
    },
    {
      "q": "What is the E&C Lithium UPS and what capacities are available?",
      "a": "It is a true double conversion online UPS with a built-in lithium battery pack, available from 1 kVA to 5 kVA with an output power factor of 0.9. It gives more than 8 minutes of backup at full load, and longer at lower loads. The battery pack protection circuit is UL 1973 (MH63914) certified, and the pack is UN38.3 certified for transport."
    },
    {
      "q": "Lithium UPS vs VRLA UPS: which should I choose?",
      "a": "VRLA (sealed lead-acid) batteries cost less upfront but typically need replacing every few years, and their life drops faster in hot rooms. Lithium batteries cost more upfront but last more cycles, recharge faster and take up less space. For sites with frequent power cuts, high room temperatures or limited space, lithium usually works out better over the UPS's life; for rarely used backup with a tight budget, VRLA can still make sense."
    },
    {
      "q": "Is a 1 kVA or 3 kVA lithium UPS enough for my equipment?",
      "a": "Add up the power drawn by the equipment you want to protect and leave some headroom, typically 20 to 25 percent. A 1 kVA unit suits a single workstation, network switch or small V-SAT terminal, while 3 kVA or 5 kVA suits a small server rack or several devices. Remember that backup time falls as load rises, so a UPS sized close to its limit gives the shortest runtime."
    },
    {
      "q": "How is the lithium battery maintained or replaced?",
      "a": "Lithium batteries do not need the electrolyte topping up that flooded batteries need, and the built-in protection circuit guards the pack. E&C's Lithium UPS uses an easy battery replacement design, so the pack can be changed when it reaches end of life. Keeping the UPS in a reasonably cool, ventilated place still helps battery life."
    }
  ],
  "mil-grade": [
    {
      "q": "What is a MIL grade UPS?",
      "a": "A MIL grade UPS is built to military standards for shock, vibration, electromagnetic interference and temperature, so it keeps working where a commercial UPS would fail. E&C's MIL Grade UPS is a true online double conversion UPS from 1 kVA to 10 kVA in an aluminium chassis. It runs at full power from -10°C to +55°C, withstands 20g shock and vibration, and is EMI/EMC compliant to MIL 461 E/F/G."
    },
    {
      "q": "Where is a MIL spec UPS used in defence applications?",
      "a": "It is used in military and naval applications where equipment faces shock, vibration, heat, cold and electrical noise, such as on vehicles, ships and field installations. MIL 461 EMI/EMC compliance matters near sensitive systems such as radar and communications, where a noisy power supply could cause interference. The unit is QT compliant and uses MIL grade connectors."
    },
    {
      "q": "How much backup does the MIL Grade UPS give, and which batteries does it use?",
      "a": "It offers long backup options of up to 60 or 120 minutes. It is compatible with lithium batteries, either inbuilt or external, which saves weight and space in vehicles and shipboard installations. It is also diesel generator compatible and can cold start from battery when no mains supply is present."
    },
    {
      "q": "Can the MIL Grade UPS be rack mounted?",
      "a": "Yes. It is available as a floor mount unit or for a 19 inch rack in 3U or 4U heights. Enclosure protection ranges from IP 21 to IP 54 depending on the requirement, and the enclosure colour can be customised. Output options are 220/230/240 VAC at 50 Hz or 115 VAC at 60 Hz."
    },
    {
      "q": "How does a MIL grade UPS differ from an IP55 industrial UPS?",
      "a": "An IP rating only describes protection against dust and water entering the enclosure. A MIL grade UPS is also built for shock, vibration, wide temperatures and electromagnetic compatibility, which matter for mobile and defence equipment. An IP55 industrial UPS suits fixed plant locations with heat and dust, while a MIL grade unit suits harsh, mobile or defence duty."
    }
  ],
  "ip-41-55-online-ups": [
    {
      "q": "What is an IP55 rated UPS?",
      "a": "IP stands for ingress protection. In IP55, the first digit 5 means the enclosure is dust protected, so dust cannot enter in a quantity that harms operation, and the second digit 5 means it is protected against water jets from any direction. An IP55 UPS can therefore work in dusty, wet or washdown areas where a standard UPS, typically IP20, would fail."
    },
    {
      "q": "What is the difference between IP41, IP42 and IP55 UPS enclosures?",
      "a": "IP41 protects against solid objects larger than 1 mm and vertically dripping water, IP42 against dripping water when tilted up to 15 degrees, and IP55 against dust and water jets. Higher protection means a more sealed enclosure, which also makes heat removal harder, so cooling has to be designed in. E&C offers this industrial UPS from IP41 to IP55, so the rating can be matched to the site."
    },
    {
      "q": "Where is an IP55 industrial online UPS used?",
      "a": "It is used in power plants, process industries and manufacturing, where heat and dust would damage a standard UPS. Typical locations include plant floors, control rooms with poor housekeeping and areas exposed to spray or washdown. For outdoor installation, the site conditions such as direct sun, rain and temperature should be checked against the enclosure and cooling design."
    },
    {
      "q": "What capacities and features does the IP41 – IP55 online UPS have?",
      "a": "It is available from 10 kVA to 40 kVA and is a double conversion online UPS using IGBT-based PWM technology. It has an inbuilt transformer, an inbuilt static bypass switch, an LCD display, an RS-232 port and SNMP web-based remote management. Units can run in hot standby or parallel for higher reliability."
    },
    {
      "q": "IP55 UPS vs standard UPS: is the extra protection worth it?",
      "a": "In a clean, air-conditioned room, a standard UPS is usually enough. In dusty or humid plant areas, dust build-up on boards and fans and moisture ingress are common causes of UPS failure, so a sealed enclosure can greatly reduce breakdowns. The choice depends on where the UPS will sit and whether a clean room can be provided for it."
    }
  ],
  "lineups": [
    {
      "q": "What is a line interactive UPS?",
      "a": "A line interactive UPS normally passes mains to the load while correcting voltage with an automatic voltage regulator, and switches to its inverter and battery when mains fails or goes out of range. Cheerups uses boost and buck AVR to raise low voltage and reduce high voltage without draining the battery. It protects against power failures, spikes and surges and suits less critical applications."
    },
    {
      "q": "Line interactive vs online UPS: which should I choose?",
      "a": "A line interactive UPS has a short transfer time when it switches to battery and only partially conditions the mains, but it is simpler, cheaper and more efficient. An online UPS runs the load from its inverter all the time, so there is no transfer and the output is fully regenerated. For PCs, networking gear and small servers on reasonable mains, line interactive is usually enough; for medical, industrial or critical server loads, choose online."
    },
    {
      "q": "Which Cheerups capacity do I need, 600 VA or 5 kVA?",
      "a": "Cheerups is available from 600 VA to 5 kVA. A 600 VA unit typically suits a single PC or a small network switch and router, while larger units suit several workstations, a network rack or a small server. Add up the load in watts, divide by the 0.9 output power factor to get VA, and leave some headroom."
    },
    {
      "q": "Does Cheerups give a pure sine wave output?",
      "a": "Cheerups is available with pure or quasi sine wave output. Pure sine wave is the safer choice for equipment with active PFC power supplies, such as many modern servers, and for motors, while quasi sine wave is adequate for many basic electronic loads. Choose based on what the equipment's manufacturer recommends."
    },
    {
      "q": "What is ECO mode on a line interactive UPS?",
      "a": "ECO mode reduces the UPS's own power consumption when mains is good, lowering running costs. Cheerups also has high efficiency in battery mode, which helps stretch backup time. Optional USB or RS-232 and SNMP connectivity allow the connected computer or server to shut down safely before the battery runs out."
    }
  ],
  "domestic-Inverters": [
    {
      "q": "What is the Voltstar domestic inverter used for?",
      "a": "Voltstar is a DSP-based sine wave inverter from 600 VA to 5 kVA for homes, offices and showrooms. It mostly backs up lights, fans and less critical equipment during power cuts. It suits places where a brief transfer time is acceptable and data loss is not a concern."
    },
    {
      "q": "What is the difference between a home inverter and a UPS?",
      "a": "An inverter switches to battery when it senses a power cut, so there is a brief changeover, while an online UPS powers the load continuously with no break. Inverters are usually built for longer backup of household loads from large batteries, while a UPS is built to protect sensitive electronics. Voltstar's fast switchover is designed to avoid PC reboots, but critical computers and servers are better served by a UPS."
    },
    {
      "q": "How do I choose the right inverter capacity for my home?",
      "a": "List the appliances you want to run during a power cut, such as lights, fans, a TV and a router, and add up their wattage. Divide by the power factor, typically around 0.7 to 0.8 for household loads, to get the VA rating, and leave some headroom. Backup time then depends on battery capacity in Ah, the number of batteries and the actual load."
    },
    {
      "q": "How does 5-step charging help the inverter battery?",
      "a": "Intelligent multi-stage charging charges the battery quickly when it is low and then reduces the charging current and voltage as it fills, so it is not overcharged. This typically reduces water loss and heating in flooded batteries and helps extend battery life. Voltstar combines 5-step charging with microprocessor-based battery management and audio alarms for low battery and overload."
    },
    {
      "q": "What maintenance does a domestic inverter battery need?",
      "a": "Flooded tubular batteries, commonly used with home inverters, need their electrolyte level checked and topped up with distilled water periodically, typically every few months. Keep the terminals clean and tight, and keep the battery in a ventilated place away from heat. Sealed maintenance free batteries do not need topping up but still benefit from clean terminals and a cool location."
    }
  ],
  "industrial-inverter": [
    {
      "q": "What is an industrial inverter?",
      "a": "An industrial inverter converts DC from a station battery bank, such as the 48, 110 or 220 VDC systems found in power plants and substations, into AC for critical loads. E&C's industrial inverter, from 3 kVA to 100 kVA, uses IGBT-based PWM technology with a built-in isolation transformer and gives a pure sine wave output at 220 or 230 VAC. It is available in rack or floor mount, in IP 21 to IP 54 enclosures."
    },
    {
      "q": "Industrial inverter vs domestic inverter: what is the difference?",
      "a": "A domestic inverter has its own charger and battery and switches over when mains fails, mainly for lights and fans. An industrial inverter usually runs from the site's existing DC battery system, has a built-in isolation transformer and low output harmonics, and is designed for continuous duty in plants and substations. Industrial units also offer potential free contacts for alarms and standalone, hot standby or parallel configurations."
    },
    {
      "q": "Can an industrial inverter power automation and control systems?",
      "a": "Yes. In power plants, substations and process industries, industrial inverters commonly supply AC to control panels, instrumentation, SCADA and automation equipment from the station battery, so these systems keep running when AC supply fails. The pure sine wave output and isolation transformer help protect sensitive electronics. The inverter must be matched to the site's DC voltage and the load's inrush current."
    },
    {
      "q": "How do I select between 3 kVA, 25 kVA and 50 kVA industrial inverters?",
      "a": "Start with the DC system voltage available, 48, 110 or 220 VDC, then total the AC load in kVA and add headroom for start-up currents and future additions. Decide whether you need redundancy, as hot standby or parallel units keep the load running if one inverter fails. E&C engineers can size the inverter against your DC system and load list and quote accordingly."
    },
    {
      "q": "What does the optional static transfer switch do on an industrial inverter?",
      "a": "A static transfer switch transfers the load between the inverter output and an alternate AC source, such as mains, electronically and very quickly. If the inverter is overloaded or develops a fault, the load moves to the alternate supply without a noticeable interruption. This adds another layer of protection for critical loads."
    }
  ],
  "air_oil": [
    {
      "q": "What is an air cooled stabilizer?",
      "a": "An air cooled stabilizer is a servo controlled voltage stabilizer whose transformer and regulating parts are cooled by air rather than by oil. It corrects the output continuously as the mains voltage rises and falls, so the load sees a near-constant voltage. E&C's Aries air cooled range covers 2 kVA to 100 kVA."
    },
    {
      "q": "How does a servo voltage stabilizer correct the voltage?",
      "a": "A control circuit compares the output with the set voltage and, when it drifts, drives a motor that turns a variable transformer to add or subtract voltage until the output is back within limits. Because the correction is smooth rather than in steps, the output waveform is not distorted. E&C uses an AC synchronous servo motor and a solid state control circuit designed to correct quickly without overshoot or hunting."
    },
    {
      "q": "Should I choose an air cooled or an oil cooled stabilizer?",
      "a": "Capacity and site conditions usually decide. Air cooled units are lighter, simpler to install and have no oil to check, which suits single machines, air conditioners and medical instruments up to 100 kVA. Above that, transformer heat is easier to remove with oil, so E&C's oil cooled range takes over from 100 kVA to 1000 kVA."
    },
    {
      "q": "What size of stabilizer does a CNC or textile machine need?",
      "a": "Add up the kVA of everything the stabilizer will feed, then allow headroom for motor starting current and future additions; a margin of around 20 to 30 percent is common, though motor-heavy loads may need more. Note whether the load is single phase or three phase and whether the phases are loaded unevenly, since E&C's servo stabilizers suit both balanced and unbalanced loads. An E&C engineer can confirm the rating from the machine nameplates."
    },
    {
      "q": "Does a voltage stabilizer give backup during a power cut?",
      "a": "No. A stabilizer only corrects high or low voltage while mains is present, and its output stops when the supply fails. Equipment that must keep running through an outage needs an online UPS. E&C's stabilizers are generator compatible, so they can stay in circuit when the site runs on a DG set."
    }
  ],
  "oil-cooled": [
    {
      "q": "What is an oil cooled voltage stabilizer?",
      "a": "It is a servo controlled stabilizer whose transformer windings are immersed in insulating oil, which carries heat away far better than air. That makes it the usual design for high ratings, and E&C's Aries oil cooled range runs from 100 kVA to 1000 kVA. A servo motor corrects the output continuously, so the load sees a near-constant voltage even when the mains is erratic."
    },
    {
      "q": "Which loads suit an oil cooled stabilizer for heavy machinery?",
      "a": "At 100 kVA and above, an oil cooled stabilizer typically feeds a whole production line, a machine shop or a building's main incomer rather than a single machine. E&C lists textile machines, printing and packing lines, CNC machines, air conditioning, hospitals, residences and commercial complexes among its uses. Its AC synchronous servo motor and correction without overshoot or hunting suit loads that need a steady supply all day."
    },
    {
      "q": "Why is oil cooling used on stabilizers above 100 kVA?",
      "a": "The heat produced by a stabilizer's transformer grows with its rating. Oil fills the spaces around the windings, conducts heat to the tank walls and keeps hot spots down, so a large unit can run continuously in a warm plant room without overheating its insulation. Air cooling does the job well at lower ratings, which is why E&C's air cooled range stops at 100 kVA."
    },
    {
      "q": "What maintenance does an oil cooled stabilizer need?",
      "a": "Mostly routine checks: inspecting the oil level and looking for leaks, testing the oil periodically for moisture and dielectric strength, and checking the servo drive and brush gear for wear. Intervals depend on the duty and the maker's schedule. Keep the unit in a ventilated area so the tank can shed heat."
    },
    {
      "q": "Can an oil cooled stabilizer handle unbalanced loads and a DG supply?",
      "a": "Yes. E&C's oil cooled stabilizers are designed for both balanced and unbalanced loads, which matters in buildings where single phase loads are spread unevenly across the three phases. They are also generator compatible, so they can stay in circuit when the site changes over to a diesel generator. When sizing, look at the most heavily loaded phase as well as the total kVA."
    }
  ],
  "energy-saver": [
    {
      "q": "What is an industrial lighting energy saver?",
      "a": "It is a unit fitted on the lighting circuits of a large building that supplies the lamps with a regulated voltage instead of raw mains. E&C rates its energy saver at up to 25 percent saving in lighting energy, with 97 percent efficiency in the unit itself. It is meant for sites with many lights burning for long hours, such as hostels, hospitals, schools and textile units."
    },
    {
      "q": "How does a lighting energy saver reduce power consumption?",
      "a": "Many lamps and ballasts draw more power than they need when the mains voltage runs high, and supply voltage in India often sits above nominal or swings through the day. By holding the lighting feeder at a regulated voltage, the energy saver trims that excess consumption while keeping light output acceptable. The actual saving depends on the lamp types installed and the site's usual supply voltage, which is why E&C quotes up to 25 percent rather than a fixed figure."
    },
    {
      "q": "Is this the same as the energy saver mode on a UPS?",
      "a": "No. On many online UPS, energy saver or ECO mode runs the load from mains through the bypass while mains is healthy and switches to the inverter when it fails, which raises UPS efficiency but gives up full double conversion protection during that time. E&C's Industrial Energy Saver is a separate lighting product that reduces the energy drawn by lamps and gives no backup. If you want a UPS with an energy saving mode, E&C's Cheerups line interactive UPS offers an ECO mode."
    },
    {
      "q": "How quickly does an energy saver pay for itself?",
      "a": "Payback depends on the connected lighting load, the hours the lights burn each day, the electricity tariff and the saving achieved on site. A facility with lights on through the night, such as a hospital or hostel, usually recovers the cost sooner than an office lit only in working hours. To estimate it, multiply the lighting kW by daily hours, days per year, tariff and the expected saving fraction, then compare the result with the installed cost."
    },
    {
      "q": "How is an energy saver different from a voltage stabilizer?",
      "a": "A servo voltage stabilizer holds a steady voltage for equipment that needs one, such as machinery, air conditioners and instruments. An energy saver is applied to lighting loads with the aim of cutting energy use, and E&C rates it for up to 25 percent saving. Both give a regulated output, and neither provides backup during a power cut."
    }
  ],
  "isolation": [
    {
      "q": "What is an isolation transformer?",
      "a": "An isolation transformer has separate primary and secondary windings linked only by the magnetic field in the core, so there is no direct electrical connection between the supply and the load. The secondary is a new, separately derived supply whose neutral is bonded to earth at the load, bringing neutral-to-earth voltage close to zero and blocking much of the common-mode noise from the mains. It does not regulate voltage or give backup."
    },
    {
      "q": "What is the difference between a UPS with isolation and one without?",
      "a": "A transformer-based online UPS, such as E&C's Renata-I or Renata-300, has a transformer inside that isolates the output while the UPS runs on its inverter, though the load may not be isolated while the UPS is on static bypass. A transformerless UPS is smaller and more efficient but gives no galvanic isolation between input and output. A separate isolation transformer is added to it when the load needs low neutral-to-earth voltage, noise rejection or isolation from the supply."
    },
    {
      "q": "What does the K-rating on an isolation transformer mean?",
      "a": "Non-linear loads such as computers, servers, variable speed drives and LED lighting draw harmonic currents that heat a transformer more than its kVA rating suggests. A K-rated transformer is built to carry that extra heating safely: K4 for moderate harmonic loads, K13 for IT-heavy loads and K20 for very high harmonic content. E&C builds K4, K7, K13 and K20 units, as well as ultra isolation transformers with an electrostatic shield between the windings for better noise rejection."
    },
    {
      "q": "How do I size a three phase isolation transformer?",
      "a": "Match the transformer kVA to the load or UPS output it will serve, with some margin; for a 20 kVA UPS, a 25 kVA transformer is a common choice. Then specify the input and output voltages and phase configuration, the K-rating if the load is non-linear, and whether the unit needs an enclosure for its location. E&C builds isolation transformers from 1 kVA to 500 kVA, with or without enclosure."
    },
    {
      "q": "Copper or aluminium winding, CRGO or CRNGO core: which should I choose?",
      "a": "Copper has lower resistance, so a copper-wound transformer is usually more compact, while aluminium windings are lighter and cost less but need a larger conductor section for the same rating. CRGO (cold rolled grain oriented) steel generally has lower core loss than CRNGO (cold rolled non-grain oriented) steel, which helps efficiency in a transformer energised round the clock. E&C offers both winding materials and both core types, so the choice can follow budget, space and efficiency targets."
    }
  ],
  "intelligent-transfer-switch": [
    {
      "q": "What is a static transfer switch and how does it work?",
      "a": "A static transfer switch (STS) connects a load to one of two or more independent power sources and moves it to another source within a few milliseconds if the preferred one fails or goes out of tolerance. It switches with thyristors (SCRs) rather than moving contacts, and waits for the first source to stop conducting before switching to the next, so the two sources are never connected together. E&C's Intelligent Static Transfer Switch takes up to three inputs to one output, from 1 kVA to 500 kVA."
    },
    {
      "q": "How is a static transfer switch different from an automatic transfer switch?",
      "a": "An automatic transfer switch (ATS) uses mechanical contactors or motorised breakers and typically takes from tens of milliseconds to several seconds to transfer, which suits a changeover between mains and a diesel generator while the UPS carries the load. A static transfer switch switches electronically in a few milliseconds and has no contacts to wear. It therefore sits downstream of the UPS, close to critical loads that would reset during even a short break."
    },
    {
      "q": "Why do data centres use a static transfer switch?",
      "a": "Servers with dual power supplies can take a feed from two UPS directly, but many network switches, storage units, older servers and telecom devices have only one cord. An STS gives those single-corded loads two independent sources, such as the A and B buses of a 2N design, and lets one UPS be taken out for service without dropping the load. E&C's switch can be rack mounted beside the IT equipment, or wall or floor mounted in a plant room."
    },
    {
      "q": "Can a dual input static transfer switch make two different UPS redundant?",
      "a": "Yes. UPS of different makes or ratings often cannot be paralleled directly, but an STS lets them act as a redundant pair by keeping the load on whichever source is healthy; E&C designs its switch specifically to make dissimilar UPS work as redundant UPS, with up to three inputs. Each source must be able to carry the whole load alone. For the cleanest transfers, the UPS should be synchronised or fed from the same upstream supply."
    },
    {
      "q": "What should I check when choosing an intelligent static transfer switch?",
      "a": "Rate it for the full load plus margin, because after a transfer one source supplies everything. Then match the voltage and phases, decide between two and three inputs, confirm the sources stay within the 47 to 60 Hz frequency range the E&C switch accepts, and choose wall, floor or rack mounting. Overload and over-temperature protection, LED status indicators, audible alarms and an optional RS-232 port cover protection and local or software monitoring."
    }
  ],
  "snmp-adapter": [
    {
      "q": "What is SNMP UPS monitoring?",
      "a": "SNMP UPS monitoring means reading a UPS's status and alarms over a computer network using the Simple Network Management Protocol. An SNMP adapter in the UPS gives it an IP address, so the IT team can see input, output, load and battery readings in a web browser or their network management system. The adapter also sends traps, which are instant alerts for events such as a switch to battery, low battery or overload."
    },
    {
      "q": "What does an SNMP adapter for a UPS do?",
      "a": "E&C's adapter lets you manage and monitor the UPS from a web browser, a network management system, Telnet or SNMP. It sends event alerts by email and SMS, keeps an event and data log, runs scheduled periodic UPS self-tests, and shuts down connected systems gracefully before the battery runs out. Regular self-tests and logged battery readings help reveal weak batteries before a real outage does."
    },
    {
      "q": "How do I keep a UPS network card secure?",
      "a": "Use SNMP v3 rather than v1 or v2c, because the older versions send the community string, which acts as a password, in plain text. E&C's adapter supports SNMP v3 along with HTTPS, SSL and SSH encryption, and centralised authentication so access is controlled from one place. It is also good practice to change default passwords and keep UPS cards on a management network or VLAN rather than the open office LAN."
    },
    {
      "q": "Which E&C UPS can be monitored over SNMP?",
      "a": "Renata-I, Accenta, the Accenta Rack and the IP41 to IP55 industrial UPS list SNMP web-based remote management, and Renata-300 is SNMP compatible. Renata-DS takes an optional SNMP adaptor, Renata Modular has an optional SNMP card slot, and the Cheerups line interactive UPS offers optional SNMP. For a UPS of another make, compatibility depends on its communication slot and protocol, so check before ordering."
    },
    {
      "q": "How is a UPS set up for remote SNMP monitoring?",
      "a": "The adapter is given an IP address on the site network, user accounts and SNMP v3 credentials are created, and the UPS MIB is loaded into the network management system so readings and traps are recognised. Email and SMS alert recipients, the self-test schedule and the shutdown sequence for each server are then configured. Sites without an IT network or monitoring team may find a cloud system simpler, such as E&C's UPS remote monitoring, which sends readings over GPRS with SMS and email alerts."
    }
  ],
  "smf": [
    {
      "q": "What is an SMF battery and why does it need no maintenance?",
      "a": "SMF stands for sealed maintenance free. It is a lead-acid battery in a sealed case with no caps to open, because the gases produced during charging recombine into water inside the battery instead of escaping. You never add distilled water, so it can sit inside a UPS cabinet or rack, in most cases without a separate battery room."
    },
    {
      "q": "What is a VRLA battery, and is it the same as SMF?",
      "a": "VRLA stands for valve regulated lead acid, the technical name for the same sealed design. Oxygen formed at the positive plate recombines at the negative plate, and a one-way valve on each cell opens only if pressure rises too high, for example on overcharge. SMF is the trade name used in India and VRLA the technical one, so an SMF battery for UPS is a VRLA battery, usually of the AGM type."
    },
    {
      "q": "Which 12V SMF battery ratings and brands does E&C supply?",
      "a": "E&C supplies 12V SMF batteries in common ratings of 7, 17, 26, 42, 65, 75, 84, 100, 120, 130, 150, 160 and 200 Ah, from Amara Raja, Exide, HBL, U-Plus and Leoch depending on customer preference and stock. Each battery carries the manufacturer's original warranty and is supported onsite. The number of blocks and the Ah rating follow from the UPS battery voltage and the backup time needed."
    },
    {
      "q": "How long does an SMF battery last, and what shortens its life?",
      "a": "A 12V SMF battery typically lasts 3 to 5 years in a UPS at 25°C. Heat is the main factor: as a rule of thumb, life roughly halves for every 8 to 10°C above 25°C, and water lost from a sealed battery cannot be replaced. Frequent deep discharges and a float voltage set too high or too low also shorten life, so keep the battery area cool and use temperature-compensated charging where available."
    },
    {
      "q": "Should I choose SMF or tubular batteries for my UPS?",
      "a": "Choose SMF for short to medium backup inside a UPS cabinet or rack, where a sealed, clean, maintenance free battery is needed and the room is reasonably cool. Choose flooded tubular when outages are long and frequent and the battery is cycled deeply, provided someone can top up water and the space is ventilated. For warm rooms, frequent outages or limited space, lithium (LiFePO4) is worth comparing too."
    }
  ],
  "tubular-batteries-manufacturing": [
    {
      "q": "How does a tubular battery work, and why does it suit deep discharge?",
      "a": "A tubular battery's positive plate is a row of lead-alloy spines, each inside a porous tube packed with active material. As the battery charges and discharges, the active material expands and contracts; the tube holds it tight against the spine, so far less sheds to the bottom of the cell than in a flat-plate battery. That is why tubular batteries survive repeated deep discharges, the normal duty in inverters and long-backup systems."
    },
    {
      "q": "What maintenance does a flooded tubular battery need?",
      "a": "Top it up with distilled water every few months, following the level indicator, because flooded batteries lose water as gas escapes through the vents during charging. Install it in a ventilated place, since charging gives off small amounts of hydrogen, and keep the terminals clean and tight, with an occasional specific gravity check. Skipping the topping up lets the plates dry out and fail early."
    },
    {
      "q": "How long does a tubular battery last?",
      "a": "Typical design life for a flooded tubular battery is around 5 to 8 years at 25°C, generally longer than a sealed SMF battery in similar duty. Real life depends on temperature, how deeply and how often it is discharged, the charger settings and whether the water level is kept up. Like every lead-acid battery, it loses life faster in a hot room."
    },
    {
      "q": "Is a tubular battery suitable for inverters and solar?",
      "a": "Yes, it is usually the first choice where the battery is cycled every day or through long, frequent power cuts, as in home and shop inverters and solar storage. It tolerates deep cycling and heat well and costs the least per Ah of the common lead-acid types. Where water topping is not practical, such as an unmanned solar or telecom site, a sealed GEL battery is the usual alternative."
    },
    {
      "q": "Does E&C manufacture tubular batteries?",
      "a": "E&C supplies 12V flooded tubular batteries made by Amara Raja, Exide and HBL, chosen by customer preference and stock, rather than manufacturing the cells itself. Common ratings are 28, 40, 50, 60, 66, 75, 100, 120, 130, 150 and 200 Ah. Each battery carries the manufacturer's original warranty and is supported onsite by E&C."
    }
  ],
  "agm-gel": [
    {
      "q": "What is a GEL battery, and how is it different from AGM?",
      "a": "Both are sealed VRLA lead-acid batteries that need no water topping. In an AGM battery the acid is soaked into a glass-fibre mat between the plates; in a GEL battery it is mixed with fumed silica into a thick gel. AGM has low internal resistance and delivers high current well, while GEL usually copes better with deep cycling and higher temperatures but gives less peak current and needs correct charging voltage."
    },
    {
      "q": "Which is better for a UPS, AGM or GEL?",
      "a": "Most online UPS batteries sit on float for months and then deliver high current for a short backup, which suits AGM; most 12V SMF batteries are AGM. GEL makes more sense where a sealed battery is cycled deeply and often, or sits in a warm room. Where backup runs for several hours and outages are frequent, GEL or tubular may outlast AGM."
    },
    {
      "q": "Why are GEL batteries used at solar and telecom sites?",
      "a": "A solar battery charges by day and discharges every night, so it needs deep-cycle ability, and remote or unmanned sites cannot easily be visited for water topping. GEL combines deep cycling with a sealed, maintenance free build, and its better heat tolerance helps in hot telecom shelters. Flooded tubular is the cheaper option where someone can maintain it."
    },
    {
      "q": "How should AGM and GEL batteries be charged?",
      "a": "Use the float and boost voltages on the battery maker's datasheet; for VRLA batteries float is typically around 2.25 to 2.30 V per cell at 25°C, but models differ. GEL is particularly sensitive to overcharging, which can damage the gel, and any sealed battery dries out if the float voltage is set too high. Temperature compensation, which lowers the charge voltage as the battery warms, helps protect both types in hot rooms."
    },
    {
      "q": "Which AGM and GEL batteries does E&C supply?",
      "a": "E&C supplies AGM and GEL batteries from Exide and HBL in common ratings of 30, 45, 80, 105 and 165 Ah, depending on customer preference and stock. Each carries the manufacturer's original warranty and is supported onsite. Typical uses are UPS, solar and telecom systems."
    }
  ],
  "lithium-ion": [
    {
      "q": "What is a LiFePO4 lithium ion battery?",
      "a": "LiFePO4, or lithium iron phosphate, is a lithium ion chemistry that is far more thermally stable than the chemistries used in phones and laptops, which is why it is the common choice for UPS and energy storage. E&C's packs use LiFePO4 in cylindrical or prismatic cells, built to the DC voltage required, such as 36V, 48V or 96V, from 6 Ah to 100 Ah."
    },
    {
      "q": "How does a lithium ion battery for UPS compare with lead-acid?",
      "a": "Typical design life for LiFePO4 is around 8 to 10 years and 2,000 or more cycles at 25°C, against 3 to 5 years for SMF lead-acid, and lithium loses far less life in heat. For the same energy it weighs roughly a third to half as much and recharges faster after an outage. Lead-acid still costs less upfront, so lithium pays off mainly where lead-acid would be replaced two or more times in ten years, such as warm rooms and frequent outages."
    },
    {
      "q": "What does the BMS in a lithium battery do?",
      "a": "The battery management system monitors the cells and protects the pack from overcharging, deep discharge and overheating. It also equalises charge across the cells so they stay balanced over thousands of cycles. Many BMS designs also report state of charge and health, so a weak pack can be spotted before an outage rather than during one."
    },
    {
      "q": "Can I fit a lithium battery to my existing UPS or inverter?",
      "a": "Only if the UPS or inverter supports lithium charging. The charging voltage and profile must suit LiFePO4, and the pack's DC voltage must match the equipment, which is why E&C supplies packs at the DC voltage required. Check with the UPS maker before changing battery chemistry."
    },
    {
      "q": "How is a lithium battery pack sized and mounted?",
      "a": "E&C sizes the pack from the backup time needed, the UPS capacity and the application, then sets the DC voltage and Ah rating to suit. Packs come in 19-inch rack mount form for server and network racks, or floor mount for larger banks, with Anderson or military connectors. They are used with UPS, inverters and solar systems, and carry the manufacturer's original warranty with onsite support."
    }
  ],
  "nickel": [
    {
      "q": "What is a nickel cadmium (Ni-Cd) battery?",
      "a": "A nickel cadmium battery is a rechargeable battery with a nickel hydroxide positive plate, a cadmium negative plate and an alkaline potassium hydroxide electrolyte. Each cell gives a nominal 1.2 V, against 2 V for lead-acid, so a bank needs more cells for the same DC voltage. Industrial Ni-Cd cells are usually vented with pocket plates and are widely used for standby DC in substations, power plants, railways and process plants."
    },
    {
      "q": "Ni-Cd or lead-acid: which should I choose?",
      "a": "Ni-Cd typically costs several times more than lead-acid of the same capacity, but industrial cells often have a design life of 20 years or more and lose far less life in heat. They tolerate deep discharge, irregular charging, shock and vibration, and tend to lose capacity gradually rather than failing suddenly. Lead-acid, such as flooded tubular or VRLA, makes sense where the budget is tight, the room is cool and the battery will be replaced on a regular cycle."
    },
    {
      "q": "How does nickel cadmium compare with lithium ion?",
      "a": "Lithium ion, such as LiFePO4, stores more energy per kilogram, needs no water topping and depends on a battery management system to keep its cells safe. Industrial Ni-Cd tolerates heat, deep discharge and rough handling without such electronics and has a long track record in substation and railway DC systems, though vented cells need occasional topping up and cadmium must be recycled. Ni-Cd remains a common choice for critical DC supplies at hot or remote sites, while lithium suits UPS and solar storage where weight, space and fast recharge matter."
    },
    {
      "q": "Do Ni-Cd batteries need maintenance, and do they suffer from memory effect?",
      "a": "Vented industrial cells need occasional topping up with distilled water, usually less often than flooded lead-acid, along with clean terminals and periodic checks. Memory effect was mainly seen in small sealed cells cycled the same way repeatedly; industrial pocket-plate cells on float are much less affected, and any voltage depression is normally cleared by a periodic boost charge as the maker recommends. Spent cells contain toxic cadmium and must go to an authorised recycler."
    },
    {
      "q": "How are Ni-Cd batteries sized and charged?",
      "a": "E&C sizes Ni-Cd banks from the UPS capacity and the backup time needed, choosing from the wide standard ranges of Saft and HBL. The charger must be set for Ni-Cd float and boost voltages, which differ from lead-acid; float is typically around 1.4 V per cell, but the battery maker's figure takes priority. E&C's industrial FCBC chargers are built for both Ni-Cd and lead-acid batteries."
    }
  ],
  "industrial-battery-charger-fcbc": [
    {
      "q": "What is an FCBC (float cum boost) battery charger?",
      "a": "An FCBC is an industrial AC-to-DC charger that supplies the DC load continuously and keeps the battery bank charged at the same time. Normally it holds the battery at float voltage; after a discharge it switches to a higher boost voltage to recharge quickly, then returns to float. When the mains fails, the battery, already connected in parallel, carries the DC load with no break."
    },
    {
      "q": "What is the difference between float and boost mode, and why is a dropper needed?",
      "a": "Float is a steady, lower voltage that keeps a charged battery full for months or years; boost is a higher voltage used for a limited time to recharge after an outage, commission a new battery or equalise cells. Boost voltage can exceed what relays and trip coils accept, so a silicon dropper, a chain of diodes in the load path, lowers the load voltage while the battery receives the full boost. E&C's chargers change between float and boost automatically and include a silicon dropper."
    },
    {
      "q": "How do I size an industrial battery charger?",
      "a": "Charger current is the continuous DC load current plus the battery charging current, plus a margin for future load, ageing and hot panel rooms. The charging current comes from the battery maker, often around 0.1C to 0.2C, so a 200 Ah bank might need about 20 to 40 A. Also confirm the DC voltage (E&C builds 48 V, 110 V and 220 V), the 220 VAC or 415 VAC input, the battery type and cell count, and the alarms and communication needed."
    },
    {
      "q": "Where are FCBC battery chargers used?",
      "a": "They feed DC systems that must never stop: control, protection and breaker tripping in power plants and substations, 48 V DC equipment in telecom, and signalling and station systems on railways. E&C's chargers work with Ni-Cd and lead-acid batteries and can run in parallel for redundancy, for example two chargers sharing the load so either can carry it alone. Ethernet and MODBUS / RS-485 ports let the charger report to a SCADA or monitoring system."
    },
    {
      "q": "Can an FCBC charge forklift or traction batteries?",
      "a": "An FCBC is designed for standby battery banks that sit on float and support a DC load, not for traction batteries that are discharged through a shift and then fully recharged. Forklift and other traction batteries are normally charged with a dedicated traction charger matched to the battery's charge profile. Check the battery maker's recommended charging method before using any charger not built for traction duty."
    }
  ],
  "solar-off-grid-inverter": [
    {
      "q": "What is an off grid solar system?",
      "a": "An off-grid solar system runs independently of the electricity grid. Solar panels charge a battery bank through a charge controller, and an inverter converts the battery DC into 230 V AC for your appliances. Because there is no grid to fall back on, the panels and batteries are normally sized for the worst season, with mains or a generator used only as a backup charger where available."
    },
    {
      "q": "Is an off-grid solar inverter suitable for homes?",
      "a": "Yes. It suits homes where the grid is absent or power cuts are long and frequent. E&C's off-grid inverter, from 1 kVA to 5 kVA, gives a pure sine wave output and runs refrigerators, pumps, compressors, TVs, PCs and laser printers, so ordinary household appliances can be used without modification."
    },
    {
      "q": "Do I need a separate charge controller with this off-grid inverter?",
      "a": "No. The inverter has a built-in MPPT solar charge controller, so the panels connect straight to it. MPPT draws power from the array at its maximum power point, which harvests more energy than a basic PWM controller, especially in cool weather or when the panel voltage is well above the battery voltage."
    },
    {
      "q": "Can an off-grid inverter also charge from mains or a generator?",
      "a": "Yes. It works with mains or a generator as well as solar, and you set the AC or solar input priority from the LCD. This lets the battery be topped up during a long cloudy spell. The input voltage range and charging current are also selectable, which helps when a small generator or weak supply is the backup source."
    },
    {
      "q": "How do I size an off-grid solar inverter and battery?",
      "a": "Start by listing the loads that must run, their wattage and their daily hours, then pick an inverter rating that covers the total running load with margin for motor starting current. Size the battery from the daily energy in watt-hours, allowing for depth of discharge and the days of autonomy you want, and size the panels to refill the battery from the typical sun hours at your site. Where one unit is not enough, the inverter supports parallel operation."
    }
  ],
  "solar-grid": [
    {
      "q": "What does a grid tie solar inverter do?",
      "a": "A grid-tie inverter converts DC from the solar array into AC that is synchronised with the grid. Your own loads use the solar power first, and any surplus is exported to the grid. The inverter itself decides when to export to the grid and when to draw from it, with no batteries involved."
    },
    {
      "q": "Does a grid-tie solar inverter work during a power cut?",
      "a": "No. A grid-tie inverter is designed to shut down when the grid fails, so it does not feed power into lines that may be under repair. Without batteries it gives no backup, even on a sunny day. If you need supply during outages, a hybrid or off-grid system is the right choice."
    },
    {
      "q": "Grid-tie vs hybrid solar inverter: which should a factory choose?",
      "a": "Where the grid is reliable and the aim is to cut the electricity bill, a grid-tie inverter is usually the lower-cost option with the faster payback, since it needs no batteries. Where power cuts are frequent and some loads must keep running, a hybrid inverter adds battery backup at a higher cost. Many factories use grid-tie solar for bill savings and keep a UPS for critical loads."
    },
    {
      "q": "Why does a grid-tie inverter need several MPPT trackers?",
      "a": "Each MPP tracker optimises one string of panels independently. With three independent trackers, strings facing different directions, at different tilts or with partial shading can each run at their own best operating point instead of dragging the others down. This is useful on rooftops with more than one roof face."
    },
    {
      "q": "Can I export surplus solar power to the grid under net metering?",
      "a": "Usually yes, provided your DISCOM approves the connection. Under net metering or net billing, exported units offset or are credited against the units you draw, but eligibility, capacity limits and tariffs differ by state and DISCOM. Check the current rules for your connection before sizing the plant."
    }
  ],
  "solar-hybrid-inverter": [
    {
      "q": "How does a solar hybrid UPS work?",
      "a": "A solar hybrid UPS combines a solar inverter, a battery charger and a grid connection in one unit. It uses solar power first, stores surplus in the battery, can export to the grid, and supplies the loads from the battery when the mains fails. You set the priority between PV, battery and grid to suit your tariff and how often power cuts occur."
    },
    {
      "q": "What are the off-grid, on-grid and grid-tie with backup modes?",
      "a": "In off-grid mode the inverter runs the loads from solar and battery without relying on the grid. In on-grid mode it works with the grid to maximise self-consumption and can feed surplus to the grid. Grid-tie with backup combines both, exporting surplus while keeping the battery ready to support the loads in a power cut."
    },
    {
      "q": "Is a hybrid solar system suitable for factories and commercial buildings?",
      "a": "Yes, for loads that need both bill savings and backup, such as lighting, office equipment and some process loads. E&C's hybrid inverter runs from 2 kVA to 30 kVA, has a galvanic isolation transformer for clean power, and offers USB, RS-232, Modbus and SNMP so it can report to monitoring software or a building management system. Sensitive servers and process controls that need a zero-break supply should still be on an online UPS."
    },
    {
      "q": "What is the difference between a solar inverter with battery backup and a grid-tie inverter?",
      "a": "A grid-tie inverter has no battery connection and shuts down when the grid fails. A hybrid inverter with battery backup keeps the loads running from the battery during an outage and can still export surplus solar to the grid. The batteries and more capable inverter make a hybrid system cost more, so it is best justified where power cuts are frequent."
    },
    {
      "q": "How do I size a hybrid inverter and its battery?",
      "a": "Size the inverter for the loads you want to run, and size the battery only for the loads that need backup and for how long, not for the whole building. Allow for battery depth of discharge and for the solar energy available at your site in the poorer seasons. Because these figures interact, E&C engineers can size the inverter, battery and array together from your load list and outage pattern."
    }
  ],
  "solar-dc-up": [
    {
      "q": "What is a solar DC UPS and how does it work?",
      "a": "A solar DC UPS is a small off-grid system that charges a battery from solar panels and supplies DC loads such as LED lights, DC fans and phone chargers directly, without converting to 230 V AC. Skipping the inverter avoids its conversion losses, so a small battery lasts longer. It is mainly used for home lighting in places without reliable grid power."
    },
    {
      "q": "Where is a solar DC home lighting system used?",
      "a": "It suits rural homes without grid supply or with long outages, shops and farm sheds that need light after dark, and communication or monitoring equipment at remote sites that runs on DC. The E&C unit has outlets for DC lights and DC fans and a USB charger for mobile phones."
    },
    {
      "q": "Should I choose a solar DC system or an off-grid AC inverter?",
      "a": "Choose a DC system when the loads are mainly lights, fans and phone charging, the energy need is small and simplicity matters. Choose an off-grid AC inverter when you need to run standard appliances such as a refrigerator, TV, computer or pump, or when the total load is more than a few hundred watts."
    },
    {
      "q": "How is the battery kept charged and protected?",
      "a": "A built-in MPPT charger draws the most power from the solar panel to charge the battery while also supplying the loads. Indicators show charging, discharging and low battery, so users know when to cut back on use. Keeping the battery out of deep discharge generally extends its life, especially with lead acid batteries."
    },
    {
      "q": "How long will a solar DC UPS run lights at night?",
      "a": "It depends on the battery capacity, the loads connected and how well the battery was charged that day. As a rough guide, add up the watt-hours of each light and fan for the hours you use them, and size the battery and panel to cover that with margin for cloudy days. Shading, season and battery age will all reduce the actual run time."
    }
  ],
  "solar-street-lighting": [
    {
      "q": "How does a solar street light work?",
      "a": "During the day the integrated solar panel charges the battery. At dusk the light switches on automatically and runs from the battery until dawn. Because the panel, luminaire and battery are in one unit, no trenching or cabling to the grid is needed."
    },
    {
      "q": "How long does a solar street light stay on at night?",
      "a": "It depends on location, season and weather, since these decide how much the battery charges during the day. Long cloudy or rainy spells reduce the stored energy. The proximity sensor helps by lowering consumption when no one is nearby, which stretches the available charge through the night."
    },
    {
      "q": "Where is a solar power system for street lighting most useful?",
      "a": "It suits streets, campuses and sea-front areas, particularly where running cables from the grid is costly or the supply is unreliable. The E&C light is built to resist sea-front conditions and, when installed properly, gives years of trouble-free use in all weather."
    },
    {
      "q": "What colour temperature should I choose for solar street lights?",
      "a": "The light is available from 3000 K to 7000 K. Warmer light, around 3000 K, is softer and often preferred for residential lanes and campuses, while cooler white light towards the upper end gives a brighter, crisper appearance on roads and open areas. Choose to suit the site and any local guidelines."
    },
    {
      "q": "What maintenance does a solar street light need?",
      "a": "Keep the solar panel clean, since dust and bird droppings reduce charging, especially in dry or coastal areas. Check that nothing, such as new tree growth, shades the panel. The battery has a finite life and will eventually need replacement, and checking mountings and fixings periodically is good practice on sea-front sites."
    }
  ],
  "scc": [
    {
      "q": "How does an MPPT solar charge controller work?",
      "a": "An MPPT controller measures the panel voltage and current many times a second and adjusts its operating point to find the maximum power point, where volts times amps is highest. A DC-DC converter then steps that power down to the battery voltage, so extra panel voltage becomes extra charging current. It keeps tracking as sunlight and temperature change through the day."
    },
    {
      "q": "MPPT vs PWM solar charge controller: what is the difference?",
      "a": "A PWM controller connects the panel directly to the battery, so the panel runs at roughly battery voltage and the extra voltage is lost. An MPPT controller lets the panel run at its best voltage and converts the surplus into current. E&C rates the MPPT gain at 25 to 30%, though the real figure depends on panel voltage, temperature and battery state; PWM can still be adequate for small, well-matched systems."
    },
    {
      "q": "Which batteries and system voltages does this controller support?",
      "a": "It works with 12 V, 24 V or 48 V PV systems and with wet (flooded), AGM and GEL lead acid batteries. Set the controller for the battery type, because each type uses different charging voltages. A battery temperature sensor adjusts the charging voltage for hot or cold conditions, which helps in Indian summers."
    },
    {
      "q": "How do I size an MPPT solar charge controller?",
      "a": "Divide the array power by the battery voltage to estimate charging current; for example, a 1,000 W array on a 24 V battery gives about 42 A, which fits within this controller's 60 A rating. Also check that the open-circuit voltage of the panels in series, allowing for the rise in cold weather, stays below the controller's maximum PV input voltage with margin. Do not size the controller below what the array can deliver on a bright, cold day."
    },
    {
      "q": "What is three-stage charging?",
      "a": "In the bulk stage the controller delivers the maximum available current until the battery reaches its absorption voltage. In the absorption stage it holds that voltage while the current tapers, so the battery fills without overcharging. In the float stage it drops to a lower maintenance voltage to keep the battery topped up."
    }
  ],
  "ev-chargers": [
    {
      "q": "AC EV charger vs DC EV charger: which do I need?",
      "a": "AC chargers send alternating current to the vehicle, and the car's onboard charger converts it, so charging speed is limited by that onboard charger. DC chargers convert power inside the charger and feed the battery directly, which is much faster but needs a larger electrical supply. Use AC where vehicles stay parked for several hours, and DC fast chargers for fleet depots, highways and public hubs."
    },
    {
      "q": "How to choose an EV charger in India?",
      "a": "Start with how long vehicles stay parked, which decides AC or DC and the kW rating. Match the connectors to the vehicles you expect, then check the total charger load against your sanctioned load and transformer capacity. Finally decide how you will control access and billing, for example through RFID cards or a charging app."
    },
    {
      "q": "Which connectors do E&C DC chargers support, including CCS2?",
      "a": "E&C DC chargers are available with CHAdeMO, CCS2 and GB/T connectors. CCS2 is the common DC fast charging connector on new electric cars in India, CHAdeMO appears on some older models, and GB/T-based connectors are used on some light and commercial EVs. A station can have one or two guns, with the same or different connectors, to serve a mixed fleet."
    },
    {
      "q": "What EV charger suits commercial parking?",
      "a": "For staff or visitor parking where cars stay several hours, AC chargers in the lower part of the 3 to 22 kW range are usually enough. Malls, hotels and hospitals with shorter stays may use higher-rated AC or a small DC charger, while fleet depots generally need DC units. E&C engineers can survey the site, check the electrical capacity and install the chargers."
    },
    {
      "q": "Does an EV charging station need power backup?",
      "a": "Charging itself is usually not backed up, because the power drawn by DC chargers is very large. However, the station's controllers, network link and payment or RFID systems are often put on a small UPS so that sessions, billing records and remote monitoring are not lost in a brief outage. Size any backup for these control loads, not for the charging power."
    }
  ],
  "ups-remote-monitoring": [
    {
      "q": "What are the benefits of remote UPS monitoring?",
      "a": "Remote monitoring gives early warning of battery problems and faults, so they are found before a real outage exposes them. Alerts reach the right person within moments instead of days later during a site visit. One screen shows every UPS across many sites, and the stored history helps plan battery replacement and capacity upgrades."
    },
    {
      "q": "Which UPS parameters does the system monitor?",
      "a": "It reads common UPS parameters including UPS load, battery voltage, whether the UPS is on mains or battery, and its on or off status. The readings are sent over GPRS and stored in the cloud, or optionally on a local server, and shown as charts and graphs."
    },
    {
      "q": "How are UPS alerts sent?",
      "a": "When a reading goes outside its normal range, the system sends SMS and email warnings to the people responsible. This means a switch to battery, a high load or a UPS turning off is known about straight away, even at an unmanned branch or remote site."
    },
    {
      "q": "Remote monitoring UPS vs traditional UPS: what is the difference?",
      "a": "A traditional UPS shows its status and alarms only on its own panel, so problems are noticed only when someone is on site. With remote monitoring, the same UPS reports its readings to a cloud or local server and raises SMS and email alerts. The UPS itself does the same job; monitoring adds visibility and faster response."
    },
    {
      "q": "Is GPRS cloud monitoring different from SNMP monitoring?",
      "a": "SNMP reads the UPS over the site's own computer network and suits locations with an IT team and network management software. GPRS cloud monitoring sends data over a mobile link to a server, so it works at branches, ATMs, telecom shelters or factories without opening the customer's network to outside access. Some sites use both."
    }
  ],
  "battery-bank-remote-monitoring": [
    {
      "q": "What does a battery bank monitoring system measure?",
      "a": "It records battery and bank voltage, battery lead temperature, charging or discharging status, charging and discharging voltage and current, the number of charge and discharge cycles, and battery internal resistance. The data is sent over GPRS to the cloud, or optionally a local server, and shown as charts and graphs."
    },
    {
      "q": "Why monitor battery internal resistance?",
      "a": "Internal resistance tends to rise as a battery ages or develops a fault, and a steady rise is one of the clearer early signs of a weak battery. Tracking it over time, together with voltage and temperature, helps you replace failing batteries before an outage reveals them, rather than replacing whole banks on a fixed schedule."
    },
    {
      "q": "Where is battery bank remote monitoring used?",
      "a": "It is used on UPS battery banks, telecom sites and substations, where batteries are critical and often at unmanned locations. Batteries are a common reason a backup system fails to support the load, so remote visibility is valuable wherever a failure would be costly."
    },
    {
      "q": "Does the battery bank monitoring service send alerts?",
      "a": "Yes. Users get SMS and email warnings of any abnormality, such as unusual voltage, temperature or charging behaviour. This lets maintenance teams respond quickly without waiting for a routine site visit."
    },
    {
      "q": "How does monitoring help plan battery maintenance?",
      "a": "The stored history of cycle count, charge and discharge behaviour, temperature and internal resistance shows how each bank is being used and how it is ageing. This helps decide when to service or replace batteries, and highlights problems such as high temperature or undercharging that shorten battery life. It complements, rather than replaces, regular physical inspection."
    }
  ],
  "dg-monitoring": [
    {
      "q": "What is DG remote monitoring?",
      "a": "DG remote monitoring tracks a diesel generator from a distance. A device at the generator sends key parameters over GPRS to the cloud, or optionally a local server, where users see them as charts and graphs and receive SMS and email alerts of any abnormality."
    },
    {
      "q": "Which generator parameters are monitored?",
      "a": "The system monitors fuel level, generator on or off status, running hours and generator load. Together these show when the generator ran, for how long, how heavily it was loaded and how much fuel remains."
    },
    {
      "q": "How does a DG set remote monitoring system help control diesel costs?",
      "a": "Fuel level readings, compared with running hours and load, make unusual fuel consumption easier to spot, such as a level drop when the generator was not running. Running hours and load also show whether the generator is oversized or underused for the site. These records support better fuel planning and refuelling schedules."
    },
    {
      "q": "Where is a DG remote monitoring solution useful in India?",
      "a": "It suits factories, telecom sites and commercial buildings, particularly where generators run often or sit at unmanned locations. Telecom towers and multi-site businesses benefit most, because one screen shows every generator instead of relying on site visits and manual logbooks."
    },
    {
      "q": "Can DG monitoring help with generator maintenance?",
      "a": "Yes. Generator servicing is usually scheduled by running hours, so an accurate hour count shows when each set is due for service. Alerts for abnormal conditions let the team respond quickly, and the stored history helps diagnose recurring issues."
    }
  ],
  "facility-monitoring": [
    {
      "q": "What is a facility monitoring system?",
      "a": "A facility monitoring system watches a site remotely using sensors and cameras. E&C's system combines CCTV with central recording storage, temperature sensors, shutter or door sensors, smoke sensors and proximity sensors for movement. The sensors report over GPRS to the cloud, or optionally a local server, and alerts go out by SMS and email."
    },
    {
      "q": "Where is a facility remote monitoring system used?",
      "a": "It is used at remote sites, warehouses and branch offices, particularly locations that are unmanned for long periods. A central team can watch many sites from one screen and respond to alerts without travelling to each location."
    },
    {
      "q": "What alerts can the facility monitoring system send?",
      "a": "It sends SMS and email warnings for abnormal conditions, such as high temperature, smoke, a shutter or door being opened, or movement detected by a proximity sensor. The facility can be armed or disarmed, so door and movement alerts can be enabled only when the site is closed."
    },
    {
      "q": "Can facility monitoring be combined with UPS monitoring?",
      "a": "Yes. For sites in India that rely on a UPS, facility monitoring can run alongside UPS, battery bank and DG monitoring, so one team can watch power status, room temperature, smoke and security. This is especially useful for server rooms, telecom shelters and branches where a power fault and a temperature rise often go together."
    },
    {
      "q": "Why monitor temperature at an unmanned site?",
      "a": "High room temperature can shorten battery life and cause electronic equipment to overheat or shut down, often after an air conditioning fault goes unnoticed. A temperature sensor with alerts lets someone act before damage occurs. Smoke sensors give a further early warning of fire."
    }
  ]
};
