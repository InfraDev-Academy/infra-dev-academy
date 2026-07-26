# Learning Paths

The Learning Paths collection defines structured educational journeys through the InfraDev Academy knowledge ecosystem.

A Learning Path connects related resources in a logical progression so learners can develop capabilities without losing context between concepts, practice and real-world application.

---

## Purpose

This collection exists to help learners understand:

- where to begin;
- what to study next;
- which prerequisites are required;
- how technical subjects relate;
- which practical activities should be completed;
- what capabilities should be developed;
- how progress may be evaluated.

Learning Paths transform individual resources into coherent learning journeys.

---

## Scope

A Learning Path may organize resources from one or more Knowledge domains.

Examples include:

- Hardware Foundations;
- Networking Fundamentals;
- Linux Administration;
- Programming Foundations;
- Database Fundamentals;
- Docker Foundations;
- Infrastructure Support;
- Software Engineering Foundations;
- Technical Support to Infrastructure;
- Full Stack Foundations.

Learning Paths should be created according to demonstrated learner needs and available content.

---

## Learning Path and Knowledge Domain

Knowledge domains and Learning Paths serve different purposes.

### Knowledge Domain

Organizes resources by technical responsibility.

Example:

```text
knowledge/hardware/
```

It may contain concepts, laboratories, diagrams and case studies related to hardware.

### Learning Path

Defines a recommended progression through selected resources.

Example:

```text
Hardware Foundations

1. Computer Architecture
2. Storage Fundamentals
3. Memory
4. Motherboards
5. Diagnostics
6. Practical Laboratory
7. Case Study
```

Knowledge domains store and organize resources.

Learning Paths define how learners may progress through them.

---

## Learning Path Principles

Every Learning Path should prioritize:

- clear progression;
- explicit prerequisites;
- practical application;
- realistic scope;
- measurable learning outcomes;
- connection between theory and practice;
- maintainability;
- flexibility for different learner profiles.

A Learning Path should guide learning without creating unnecessary rigidity.

---

## Recommended Structure

A Learning Path should normally include:

```text
Title

↓

Purpose

↓

Intended Audience

↓

Prerequisites

↓

Learning Outcomes

↓

Path Structure

↓

Modules or Stages

↓

Practical Activities

↓

Validation

↓

Next Steps
```

Additional sections may be introduced when they provide practical value.

---

## Path Metadata

Future Learning Paths should use standardized metadata.

Example:

```markdown
**ID:** LP-XXX

**Category:** Learning Path

**Status:** Draft

**Version:** 1.0

**Release:** vX.Y.Z

**Level:** Foundation | Intermediate | Advanced

**Estimated Duration:** To be defined

**Language:** English
```

The `LP` identifier should only become mandatory after the Learning Path collection is formally standardized.

---

## Intended Audience

Every Learning Path should identify its primary audience.

Examples include:

- beginners;
- technical support professionals;
- software developers;
- infrastructure professionals;
- students;
- career transition learners;
- contributors;
- educators.

The audience influences:

- vocabulary;
- prerequisites;
- depth;
- practical exercises;
- expected duration;
- assessment methods.

---

## Prerequisites

Prerequisites should state what learners need before beginning the path.

They may include:

- previous knowledge;
- hardware;
- software;
- operating system access;
- administrative permissions;
- command-line familiarity;
- completed Learning Paths;
- required accounts or tools.

Avoid unnecessary prerequisites that create barriers without improving learning.

When no previous knowledge is required, state that clearly.

---

## Learning Outcomes

Learning Outcomes describe what learners should be able to understand or perform after completing the path.

Outcomes should use observable language.

Prefer:

```text
Configure a local PostgreSQL database.
```

Instead of:

```text
Know PostgreSQL.
```

Useful verbs include:

- explain;
- identify;
- configure;
- install;
- compare;
- diagnose;
- implement;
- validate;
- troubleshoot;
- document;
- evaluate.

---

## Path Levels

Learning Paths may use the following levels.

### Foundation

Introduces essential terminology, concepts and basic practical skills.

### Intermediate

Develops applied knowledge, integration and independent troubleshooting.

### Advanced

Addresses architecture, optimization, complex scenarios and deeper engineering decisions.

Level definitions should remain consistent across the ecosystem.

---

## Learning by Engineering

Learning Paths should apply the Learning by Engineering model.

```text
Concept

↓

Practice

↓

Real Case

↓

Engineering Reflection
```

A path may repeat this progression across multiple modules.

Example:

```text
Module 1

Concept → Practice → Reflection

↓

Module 2

Concept → Laboratory → Case Study → Reflection

↓

Final Integration

Real Scenario → Validation → Engineering Review
```

This approach helps learners connect information with professional reasoning.

---

## Modules

A Learning Path may be divided into modules or stages.

Each module should contain:

- purpose;
- learning outcomes;
- required resources;
- practical activity;
- completion criteria;
- related terminology;
- next module.

Modules should have a logical dependency.

Avoid dividing content into modules only to create an appearance of volume.

---

## Practical Activities

Practical activities should reinforce the learning outcomes.

They may include:

- laboratories;
- configuration exercises;
- diagnostics;
- code implementation;
- environment setup;
- troubleshooting;
- architecture analysis;
- documentation tasks;
- controlled simulations.

Every activity should explain:

- objective;
- environment;
- prerequisites;
- steps;
- expected result;
- validation;
- risks;
- rollback when applicable.

---

## Validation

A Learning Path should define how learners can validate their progress.

Validation may include:

- practical task completion;
- self-assessment questions;
- checklists;
- laboratory evidence;
- troubleshooting scenarios;
- small projects;
- diagrams;
- technical explanations;
- case study analysis.

Validation should measure capability rather than only content consumption.

Finishing a document does not automatically mean mastering a subject.

---

## Flexible Progression

A recommended sequence should not prevent responsible adaptation.

Learners may:

- review prerequisite modules;
- skip content they have already validated;
- repeat laboratories;
- follow optional extensions;
- combine related paths;
- adjust the pace.

The path should make dependencies visible so adaptations can be made intentionally.

---

## Cross-domain Paths

Some Learning Paths may combine multiple Knowledge domains.

Example:

```text
Infrastructure Support Foundations

├── Hardware
├── Networking
├── Operating Systems
├── Databases
├── Security
└── Documentation
```

Cross-domain paths should explain why each domain is included and how the subjects connect.

They should avoid duplicating the complete content of the original Knowledge domains.

---

## Career-oriented Paths

Future Learning Paths may support professional objectives.

Examples:

- Technical Support Foundations;
- Junior Backend Developer;
- Infrastructure Analyst Foundations;
- QA and Software Implementation;
- DevOps Foundations;
- Database Support Foundations;
- Full Stack Foundations.

Career-oriented paths should remain based on real capabilities rather than job-title marketing.

They should identify:

- technical foundations;
- practical capabilities;
- portfolio evidence;
- professional behaviors;
- recommended next steps.

---

## Relationship with Schools

Future Schools may group related Learning Paths.

Example:

```text
School of Infrastructure

├── Hardware Foundations
├── Networking Fundamentals
├── Linux Administration
├── Virtualization Foundations
└── Infrastructure Support
```

The Schools model remains in the backlog until the Academy has enough validated content and Learning Paths to support it responsibly.

---

## Creating a Learning Path

Before creating a new Learning Path, confirm that:

- a clear learner profile exists;
- the path solves a real navigation problem;
- required knowledge resources are available or planned;
- prerequisites can be defined;
- learning outcomes are measurable;
- practical validation is possible;
- the path does not duplicate an existing journey;
- the Academy can maintain it;
- its scope belongs to the current maturity stage.

A Learning Path should not be created only because a technical domain exists.

---

## Review Requirements

A Learning Path may require:

### Educational Review

Validates learning progression, prerequisites and outcomes.

### Technical Review

Validates the accuracy of referenced resources and practical activities.

### Editorial Review

Validates clarity, terminology and navigation.

### Product Review

Validates learner value, scope and strategic alignment.

### Repository Review

Validates file placement, links and architecture.

### Release Review

Validates readiness for inclusion in the planned release.

---

## Path Status

Future Learning Paths may use the following statuses:

### Planned

The path has been identified but is not yet under development.

### Draft

The structure or content is being developed.

### In Review

The path is undergoing validation.

### Active

The path is approved and maintained.

### Superseded

A newer Learning Path has replaced it.

### Retired

The path remains preserved but is no longer actively recommended.

---

## Navigation

Learners should:

1. identify their objective;
2. review the intended audience;
3. confirm prerequisites;
4. understand the learning outcomes;
5. follow the recommended modules;
6. complete practical activities;
7. validate their capabilities;
8. review recommended next steps.

Contributors should consult:

- Knowledge domain READMEs;
- applicable Standards;
- editorial Guides;
- project Roadmap;
- current release scope.

---

## Maintenance

Learning Paths should be reviewed when:

- referenced resources move;
- prerequisites change;
- technical content becomes outdated;
- learner feedback reveals gaps;
- learning outcomes become unclear;
- new Knowledge Packages are introduced;
- Schools become active;
- career requirements evolve;
- path completion becomes impractical.

A Learning Path should never point learners toward abandoned or unvalidated resources without clearly identifying their status.

---

## Related Collections

- [Knowledge](../knowledge/)
- [Frameworks](../frameworks/)
- [Guides](../guides/)
- [Standards](../standards/)
- [Glossary](../glossary/)
- [Checklists](../checklists/)
- [Roadmap](../roadmap/)
- [Releases](../releases/)

---

## Final Statement

Knowledge becomes a learning journey when its progression is intentional.

The Learning Paths collection helps learners move from foundational understanding to practical capability through structured, flexible and engineering-oriented experiences.