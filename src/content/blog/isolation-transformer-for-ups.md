---
title: 'What Is an Isolation Transformer, and Does Your UPS Need One?'
seoTitle: 'Isolation Transformer for UPS: When Do You Need One? | E&C'
description: 'What an isolation transformer does, why it lowers neutral-to-earth voltage and noise, what K-rating means, and when a UPS needs one.'
date: '2026-11-17'
tag: 'Power quality'
photo: '/image/product/isolation_transformer.jpg'
coverAlt: 'E&C isolation transformer for UPS and sensitive equipment'
products: ['isolation', 'renata', 'renata300', 'renatacyclone']
faq:
  - q: 'What is the purpose of an isolation transformer?'
    a: 'It separates the load from the mains with no direct electrical connection between input and output. This creates a fresh neutral-to-earth bond at the load, lowers neutral-to-earth voltage and blocks much of the electrical noise coming from the supply.'
  - q: 'Does an online UPS need an isolation transformer?'
    a: 'A transformer-based online UPS already has an output transformer that gives isolation. A transformerless UPS does not, so an isolation transformer is added when the load needs low neutral-to-earth voltage, galvanic isolation or a separately derived supply.'
  - q: 'What is a K-rated transformer?'
    a: 'A transformer built to handle the extra heating caused by harmonic currents from non-linear loads such as computers, drives and LED lighting. Higher K numbers, such as K13 or K20, handle heavier harmonic loads.'
---

An isolation transformer has separate primary and secondary windings, linked only by the magnetic field in the core. There is no direct wire between the mains side and the load side. That simple fact solves several power quality problems that a UPS on its own may not.

## What an isolation transformer does

### Creates a clean neutral-to-earth bond

Many sensitive machines, such as CNC controllers, medical imaging, lab instruments and some IT equipment, specify a low neutral-to-earth voltage, often under a volt or two. In long building wiring, the neutral can sit several volts above earth. Because the transformer's secondary is a new, separately derived supply, its neutral is bonded to earth right at the load, bringing neutral-to-earth voltage close to zero.

### Blocks noise

Common-mode noise, the electrical noise that appears between the conductors and earth, passes poorly through a transformer. An **ultra isolation** transformer adds an electrostatic shield between the windings for even better noise rejection.

### Adds a layer of protection

Galvanic isolation also limits how earth faults and some disturbances on the supply side reach the load, and can match voltages where the input and output differ. It is not a substitute for surge protection: fit surge protective devices (SPDs) at the distribution board as well.

<figure>
<svg viewBox="0 0 680 220" role="img" aria-labelledby="iso-t" style="max-width:100%;height:auto;font-family:Poppins,Arial,sans-serif">
<title id="iso-t">Mains supply feeds a transformerless UPS, then an isolation transformer, with a new neutral to earth bond at the sensitive load</title>
<defs><marker id="a2" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0b2546"/></marker></defs>
<g font-size="14" text-anchor="middle">
<rect x="10" y="60" width="120" height="80" rx="8" fill="#f4f7fb" stroke="#0b2546" stroke-width="2"/><text x="70" y="96" fill="#0b2546" font-weight="600">Mains</text><text x="70" y="116" fill="#506070" font-size="12">noisy, N–E volts</text>
<line x1="130" y1="100" x2="175" y2="100" stroke="#0b2546" stroke-width="3" marker-end="url(#a2)"/>
<rect x="180" y="60" width="130" height="80" rx="8" fill="#005c9e"/><text x="245" y="96" fill="#fff" font-weight="600">Online UPS</text><text x="245" y="116" fill="#dbe9f6" font-size="12">transformerless</text>
<line x1="310" y1="100" x2="355" y2="100" stroke="#0b2546" stroke-width="3" marker-end="url(#a2)"/>
<rect x="360" y="45" width="150" height="110" rx="8" fill="#fff" stroke="#ff9900" stroke-width="3"/>
<circle cx="415" cy="100" r="22" fill="none" stroke="#0b2546" stroke-width="3"/><circle cx="455" cy="100" r="22" fill="none" stroke="#0b2546" stroke-width="3"/>
<text x="435" y="145" fill="#b35f00" font-size="12" font-weight="600">Isolation transformer</text>
<line x1="510" y1="100" x2="555" y2="100" stroke="#0b2546" stroke-width="3" marker-end="url(#a2)"/>
<rect x="560" y="60" width="110" height="80" rx="8" fill="#0b2546"/><text x="615" y="96" fill="#fff" font-weight="600">Sensitive</text><text x="615" y="116" fill="#fff" font-weight="600">load</text>
<line x1="485" y1="160" x2="485" y2="195" stroke="#2e7d32" stroke-width="3"/><line x1="470" y1="195" x2="500" y2="195" stroke="#2e7d32" stroke-width="3"/><line x1="476" y1="201" x2="494" y2="201" stroke="#2e7d32" stroke-width="3"/>
<text x="560" y="200" fill="#2e7d32" font-size="12" text-anchor="start">new N–E bond: ~0 V</text>
</g>
</svg>
<figcaption>With a transformerless UPS, an isolation transformer on the output gives the load its own neutral-to-earth bond and blocks common-mode noise.</figcaption>
</figure>

## Does your UPS need one?

It depends on how the UPS is built.

- **Transformer-based online UPS** have a transformer inside, which isolates the output while the UPS runs on its inverter. E&C's [Renata-I](/renata) and [Renata-300](/renata300) have an inbuilt transformer. Check the datasheet for bypass mode too: if the static bypass feeds the load straight from the mains, the load is not isolated while on bypass, and a load that needs isolation at all times still needs a transformer on the output or the bypass line.
- **Transformerless online UPS** are lighter, smaller and more efficient, but the output is not isolated from the input. E&C's [Renata-DS](/renatacyclone) offers an optional isolation transformer, and the [Accenta Rack](/rack-mount) has one as an option too.

Add an isolation transformer to a transformerless UPS when:

1. The equipment maker specifies a maximum neutral-to-earth voltage that the site cannot meet.
2. The load needs galvanic isolation, as with some medical and laboratory equipment.
3. Electrical noise is causing errors in CNC machines, controllers or communication equipment.
4. The output voltage or configuration needs to differ from the input.

An isolation transformer does not give backup and does not regulate voltage. For outages you still need a UPS, and for slow voltage swings a [servo voltage stabilizer](/air_oil).

## K-rated transformers for harmonic loads

Computers, servers, variable speed drives and LED lighting draw current in pulses rather than smooth sine waves. These harmonic currents heat a transformer more than its kVA rating suggests. A **K-rated** transformer is built to carry them safely: K4 for moderate harmonic loads, K13 for IT-heavy loads, and K20 for very high harmonic content. Choosing the right K-rating avoids overheating and early failure.

## Sizing an isolation transformer

Match the transformer kVA to the UPS output it serves, with some margin. For a 20 kVA UPS, a 25 kVA transformer is a common choice. Also check the input and output voltage and phases, the K-rating for harmonic loads, copper or aluminium winding, and whether it needs an enclosure for the site.

E&C manufactures [isolation transformers](/isolation) from 1 kVA to 500 kVA, including ultra isolation and K-rated (K4, K7, K13, K20) designs with aluminium or copper winding, with or without enclosure.
