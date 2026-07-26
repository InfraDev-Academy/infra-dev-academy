# Knowledge

The Knowledge collection contains the technical and educational domains developed by the InfraDev Academy.

It organizes technology knowledge by area of responsibility, allowing subjects to evolve independently while remaining connected within a broader engineering ecosystem.

---

## Purpose

This collection exists to transform technical knowledge into structured, practical and maintainable learning resources.

It supports:

- foundational concepts;
- technical explanations;
- practical laboratories;
- real and anonymized case studies;
- diagrams;
- checklists;
- troubleshooting procedures;
- engineering reflections;
- reusable learning resources.

The Knowledge collection represents what the InfraDev Academy teaches and develops.

---

## Scope

The collection covers multiple technology domains, including:

- hardware;
- networking;
- operating systems;
- programming;
- databases;
- containers;
- virtualization;
- cloud computing;
- DevOps;
- security;
- software engineering;
- technical careers.

Additional domains may be introduced when they have:

- a clear responsibility;
- sufficient educational value;
- maintainable scope;
- alignment with the Academy architecture.

---

## Current Knowledge Domains

### Hardware

Covers computer components, diagnostics, installation, maintenance, compatibility, storage, peripherals and workstation organization.

### Networking

Covers network fundamentals, protocols, addressing, routing, switching, connectivity, diagnostics and infrastructure communication.

### Operating Systems

Covers system installation, configuration, administration, troubleshooting and operating system fundamentals.

### Programming

Covers programming logic, languages, paradigms, software construction and practical development.

### Databases

Covers data modeling, SQL, relational databases, administration, backup, recovery and database troubleshooting.

### Containers

Covers container concepts, Docker, images, volumes, networking, orchestration foundations and practical environments.

### Virtualization

Covers virtual machines, hypervisors, virtual networking, laboratories and infrastructure simulation.

### Cloud

Covers cloud computing concepts, services, deployment models, architecture and operational practices.

### DevOps

Covers collaboration between development and operations, automation, continuous integration, delivery and infrastructure workflows.

### Security

Covers foundational security concepts, access control, data protection, risk awareness and secure operational practices.

### Career

Covers professional development, technical roles, learning strategies, portfolios and career progression.

---

## Knowledge Organization

Each domain should organize knowledge according to responsibility and learning progression.

A possible structure is:

```text
knowledge/
└── domain/
    ├── README.md
    ├── fundamentals/
    ├── concepts/
    ├── laboratories/
    ├── case-studies/
    ├── diagrams/
    ├── checklists/
    └── references/
```

This structure is optional until a domain contains enough material to justify it.

Directories should not be created only to anticipate hypothetical future content.

---

## Knowledge Resources

A Knowledge domain may contain different resource types.

### Technical Note

A focused explanation of a technical subject.

Examples:

- SSD interfaces;
- IPv4 addressing;
- PostgreSQL backup concepts;
- Docker volumes.

### Laboratory

A guided practical activity that helps learners apply a concept.

Examples:

- installing a second storage device;
- creating a local network laboratory;
- configuring a PostgreSQL backup;
- building a Docker environment.

### Case Study

A real or realistically modeled scenario containing:

- context;
- evidence;
- investigation;
- decision;
- implementation;
- result;
- lessons learned.

Real cases must be anonymized when necessary.

### Checklist

A concise verification tool for recurring technical processes.

### Diagram

A visual representation that improves understanding of systems, relationships or workflows.

### Cheatsheet

A quick-reference resource for commands, syntax, parameters or procedures.

### Engineering Reflection

A section or document that examines:

- why a solution worked;
- what alternatives existed;
- which risks were involved;
- what could be improved;
- how the learning can be reused.

---

## Learning by Engineering

Knowledge resources should follow the Learning by Engineering approach whenever appropriate.

```text
Concept

↓

Practice

↓

Real Case

↓

Engineering Reflection
```

### Concept

Explains the foundation and terminology.

### Practice

Allows the learner to apply the concept.

### Real Case

Shows how the concept behaves in a realistic situation.

### Engineering Reflection

Encourages analysis of decisions, risks, limitations and improvements.

Not every resource must contain all four stages individually.

A complete Knowledge Package may combine multiple documents to provide the full progression.

---

## Knowledge Packages

A Knowledge Package is a coordinated set of learning resources organized around a specific subject.

A future package may contain:

```text
Knowledge Package

├── Technical Note
├── Laboratory
├── Case Study
├── Checklist
├── Diagram
├── Cheatsheet
└── Engineering Reflection
```

Knowledge Packages should be introduced when the related document families and Standards become active.

Until then, content may evolve incrementally within the appropriate domain.

---

## Content Principles

Knowledge resources should prioritize:

- technical accuracy;
- practical relevance;
- clear explanations;
- reproducibility;
- maintainability;
- responsible use of real cases;
- explicit assumptions;
- documented risks;
- validated procedures;
- learner progression.

Content should explain both:

- what to do;
- why it should be done.

Commands without context should be avoided.

---

## Technical Validation

Technical content should identify, when applicable:

- environment;
- operating system;
- software version;
- hardware assumptions;
- required permissions;
- commands used;
- expected results;
- actual results;
- risks;
- rollback procedures;
- known limitations.

A procedure validated only in a specific environment must state that limitation.

---

## Real Cases and Confidentiality

Real professional experiences may provide valuable educational material.

Before publishing a real case:

- remove customer and company names when authorization is absent;
- remove credentials;
- remove private addresses;
- anonymize infrastructure details when necessary;
- separate evidence from assumptions;
- avoid exposing proprietary information;
- preserve only the technical value required for learning.

The Academy should transform experience into knowledge without exposing the people or organizations involved.

---

## Relationship with Learning Paths

The Knowledge collection organizes content by technical domain.

The Learning Path collection organizes the sequence in which learners may study that content.

Example:

```text
Knowledge

Contains resources about hardware, networking and operating systems.

↓

Learning Path

Defines which resources a learner should study and in what order.
```

Knowledge answers:

> What knowledge exists?

Learning Paths answer:

> How should someone progress through that knowledge?

---

## Relationship with Schools

Future maturity may introduce Schools as higher-level educational structures.

Examples may include:

- School of Infrastructure;
- School of Networking;
- School of Software Engineering;
- School of Data;
- School of Cloud;
- School of Cybersecurity.

Schools may group related Knowledge domains and Learning Paths.

This model remains in the strategic backlog until sufficient content exists to justify its implementation.

---

## Creating New Knowledge Content

Before creating a new resource, confirm that:

- the subject belongs to an existing domain;
- the resource solves a defined learning problem;
- similar content does not already exist;
- the correct document family was selected;
- the intended audience is identifiable;
- prerequisites are understood;
- technical validation is possible;
- the Academy can maintain the resource.

New content should not be created only to increase publication volume.

---

## Review Requirements

Knowledge resources may require:

### Technical Review

Validates accuracy, reproducibility and technical safety.

### Editorial Review

Validates clarity, structure and terminology.

### Product Review

Validates learner value, scope and release alignment.

### Repository Review

Validates placement, naming, links and architectural consistency.

### Release Review

Validates readiness for publication within a release.

The review level should match the risk and complexity of the resource.

---

## Navigation

Readers may navigate the Knowledge collection by:

1. selecting a technical domain;
2. reading the domain README;
3. identifying prerequisites;
4. studying foundational content;
5. completing practical resources;
6. exploring case studies;
7. following a related Learning Path.

Contributors should consult the relevant Standards, Guides and collection README before adding content.

---

## Maintenance

The Knowledge collection should be reviewed when:

- technical information becomes outdated;
- software versions change;
- procedures stop working;
- terminology becomes inconsistent;
- resources overlap;
- new Learning Paths require clearer organization;
- recurring learner questions reveal missing content;
- real cases need additional anonymization;
- new technical domains are proposed.

Outdated content should be updated, superseded or retired intentionally.

---

## Related Collections

- [Learning Paths](../learning-path/)
- [Frameworks](../frameworks/)
- [Guides](../guides/)
- [Standards](../standards/)
- [Checklists](../checklists/)
- [Diagrams](../diagrams/)
- [Glossary](../glossary/)
- [Releases](../releases/)

---

## Final Statement

Knowledge becomes valuable when it can be understood, applied, validated and maintained.

The Knowledge collection transforms technical experience into structured learning resources that can evolve with the InfraDev Academy.