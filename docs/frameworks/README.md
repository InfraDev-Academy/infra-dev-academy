# Frameworks

The Frameworks collection contains conceptual models used by the InfraDev Academy to organize reasoning, reviews, learning processes and project evolution.

Frameworks describe how the Academy thinks about recurring problems.

They provide reusable structures that can be applied across different documents, releases and technical domains.

---

## Purpose

This collection exists to transform recurring reasoning processes into understandable and reusable models.

Frameworks support:

- project reviews;
- engineering decisions;
- knowledge development;
- educational design;
- content validation;
- release preparation;
- architectural analysis;
- continuous improvement.

A Framework should help contributors apply a consistent way of thinking without replacing professional judgment.

---

## Scope

The Frameworks collection may contain models related to:

- project foundation;
- review processes;
- learning design;
- engineering knowledge;
- decision evaluation;
- documentation quality;
- release readiness;
- educational progression;
- continuous improvement.

Frameworks should not define mandatory execution rules.

Mandatory requirements belong to Standards.

---

## Frameworks and Standards

Frameworks and Standards serve different purposes.

### Framework

Answers:

> How should we think about this recurring problem?

A Framework provides:

- concepts;
- stages;
- relationships;
- evaluation perspectives;
- reusable reasoning structures.

### Standard

Answers:

> How must this work be performed?

A Standard provides:

- requirements;
- conventions;
- mandatory structures;
- accepted values;
- compliance criteria.

Example:

```text
Foundation Review Framework

Defines how the Foundation should be evaluated.

↓

Review Standards and Checklists

Define the concrete requirements used during execution.
```

A Framework may influence the creation of a Standard, but it does not replace one.

---

## Current Frameworks

### Foundation Review Framework

The Foundation Review Framework, or FRF, supports the evaluation of the foundational stage of the InfraDev Academy.

It helps review:

- project purpose;
- architecture;
- Governance;
- documentation;
- roadmap;
- readiness;
- risks;
- future evolution.

The FRF contributed to the Sprint 0 Review and the certification of the Foundation phase.

---

## Future Frameworks

Future project maturity may justify Frameworks such as:

### Engineering Knowledge Framework

A model for transforming technical subjects into structured and maintainable learning resources.

Possible components may include:

- Concept;
- Practice;
- Real Case;
- Engineering Reflection;
- Validation;
- Maintenance.

### Engineering Decision Filter

A model for evaluating whether an idea should be implemented, postponed, revised or rejected.

Possible evaluation questions may include:

- Does it solve a real problem?
- Does it create learner or project value?
- Is it aligned with the architecture?
- Can it be maintained?
- Does it prevent future rework?
- Is the current release the correct time?

### Knowledge Package Framework

A model for organizing educational resources into reusable Knowledge Packages.

Possible components may include:

- Technical Note;
- Laboratory;
- Case Study;
- Checklist;
- Diagram;
- Cheatsheet;
- Engineering Reflection.

Future Frameworks must remain in the backlog until their practical need and responsibilities are clearly demonstrated.

---

## Framework Structure

A Framework should normally contain:

- title;
- purpose;
- context;
- problem addressed;
- conceptual model;
- components;
- relationships;
- application guidance;
- limitations;
- examples;
- review considerations;
- related documents.

The exact structure may vary according to the model.

Every Framework must explain how and when it should be used.

---

## Creating a Framework

Before creating a new Framework, confirm that:

- the problem is recurring;
- a reusable reasoning model would provide value;
- the responsibility does not belong to a Standard;
- the Framework does not duplicate an existing model;
- its components can be explained clearly;
- contributors can apply it in different contexts;
- the project can maintain it;
- practical evidence supports its creation.

A Framework should not be created only to give a formal name to a single process.

---

## Framework Validation

A Framework should be validated through practical use.

Validation may include:

- applying it during a Sprint;
- using it in a review;
- testing it with multiple document types;
- comparing expected and actual results;
- identifying ambiguity;
- collecting contributor feedback;
- refining stages and responsibilities.

A conceptual model becomes more valuable when it has been tested against real project work.

---

## Framework Evolution

Frameworks may evolve as the Academy gains practical experience.

Changes should preserve:

- original purpose;
- conceptual clarity;
- historical traceability;
- compatibility with related Standards;
- practical usefulness.

Minor refinements may be recorded through Git history or the Decision Log.

Changes that significantly alter the model may require:

- formal review;
- updated documentation;
- a new version;
- an Architecture Decision Record when structural consequences exist.

---

## Relationship with Guides

Guides may explain how to apply a Framework during a real workflow.

Example:

```text
Framework

Defines the reasoning model.

↓

Guide

Explains how contributors apply the model step by step.
```

A Guide should reference the relevant Framework instead of reproducing its complete conceptual definition.

---

## Relationship with Checklists

Frameworks define evaluation perspectives.

Checklists convert those perspectives into verifiable actions.

Example:

```text
Foundation Review Framework

Defines the review dimensions.

↓

Foundation Checklist

Confirms whether each requirement was evaluated.
```

A checklist should remain practical and concise.

The Framework preserves the reasoning behind it.

---

## Navigation

Readers should:

1. identify the problem they need to evaluate;
2. select the relevant Framework;
3. understand its components and relationships;
4. consult related Guides and Checklists;
5. apply the model to the current context;
6. record limitations and lessons learned.

Frameworks should guide reasoning rather than produce automatic decisions.

---

## Maintenance

This collection should be reviewed when:

- a Framework is repeatedly misunderstood;
- recurring exceptions appear;
- project maturity changes its application;
- related Standards evolve;
- practical use reveals missing components;
- a Framework stops solving its intended problem;
- multiple Frameworks begin overlapping.

Obsolete Frameworks should remain traceable even when they are superseded.

---

## Related Collections

- [Standards](../standards/)
- [Guides](../guides/)
- [Checklists](../checklists/)
- [Architecture](../architecture/)
- [Governance](../governance/)
- [Releases](../releases/)
- [Knowledge](../knowledge/)

---

## Final Statement

Frameworks transform experience into reusable reasoning.

They help the InfraDev Academy evaluate problems consistently while preserving the flexibility required for responsible engineering judgment.