# Governance

The Governance collection defines how the InfraDev Academy makes decisions, assigns responsibilities, manages changes and preserves institutional accountability.

Governance ensures that the ecosystem can evolve through transparent, traceable and repeatable processes.

---

## Purpose

This collection exists to establish the rules and mechanisms used to coordinate the InfraDev Academy.

It supports:

- decision-making;
- responsibility assignment;
- project oversight;
- change management;
- release governance;
- contributor coordination;
- institutional traceability;
- conflict resolution;
- long-term continuity.

Governance documents define how authority and accountability operate within the ecosystem.

---

## Scope

The Governance collection contains documents related to:

- project rules;
- decision authority;
- roles and responsibilities;
- operational decisions;
- change approval;
- release coordination;
- contribution policies;
- conduct expectations;
- institutional oversight.

Governance documents should not replace Standards, Guides or Architecture Decision Records.

Each document family has a distinct responsibility.

---

## Governance Documents

### Governance Framework

`GOVERNANCE.md` defines the primary governance model of the InfraDev Academy.

It describes:

- decision responsibilities;
- project authority;
- contribution oversight;
- approval processes;
- escalation mechanisms;
- governance evolution.

### Decision Log

`DECISION-LOG.md` records operational and tactical decisions that affect the project but do not require an Architecture Decision Record.

Examples include:

- renaming documents;
- moving files;
- postponing backlog items;
- adopting minor workflow conventions;
- consolidating directories;
- changing implementation order;
- approving temporary exceptions.

### Code of Conduct

`CODE-OF-CONDUCT.md` defines the behavioral expectations for contributors and community participants.

### Contribution Governance

`[GUIDE-001 — Contributor Guide](../guides/GUIDE-001-Contributor-Guide.md)` explains the official contribution process and the governance requirements associated with project changes.

---

## Decision Hierarchy

The InfraDev Academy uses different mechanisms according to the impact of a decision.

```text
Operational Decision

↓

Decision Log
```

```text
Mandatory Working Rule

↓

Standard
```

```text
Significant Architectural Decision

↓

Architecture Decision Record
```

```text
Proposed Structural Change

↓

Request for Change
```

The chosen mechanism should match the scope, reversibility and long-term impact of the decision.

---

## When to Use the Decision Log

Use the Decision Log when a decision:

- affects project organization or workflow;
- should remain visible to future maintainers;
- does not significantly change the architecture;
- is reasonably reversible;
- does not establish a complete mandatory Standard;
- requires context beyond a Git commit message.

Examples:

- moving `contributor-guides/` into `guides/`;
- reserving `GUIDE-001` for the Contributor Guide;
- postponing Relationship Map implementation;
- adopting README files as collection entry points;
- deciding the order of Sprint deliverables.

---

## When to Create an ADR

Create an Architecture Decision Record when a decision:

- significantly changes the repository architecture;
- changes the central project platform;
- modifies the governance model;
- establishes a new editorial architecture;
- affects multiple document families;
- creates long-term structural consequences;
- would be expensive or difficult to reverse.

The Decision Log must not be used to avoid documenting an architectural decision through an ADR.

---

## Relationship with Standards

Governance determines how decisions are made and approved.

Standards define how work must be performed after those decisions are accepted.

A Decision Log entry may record the intention to create or revise a Standard, but it does not replace the Standard itself.

---

## Relationship with Guides

Guides explain how contributors apply Governance documents and Standards in practical workflows.

A Guide may reference Governance requirements but must not independently redefine decision authority.

---

## Collection Navigation

Readers should begin with:

1. `GOVERNANCE.md`
2. `DECISION-LOG.md`
3. `[GUIDE-001 — Contributor Guide](../guides/GUIDE-001-Contributor-Guide.md)`
4. `CODE-OF-CONDUCT.md`
5. applicable Architecture Decision Records
6. applicable active Standards

---

## Maintenance

Governance documents should be reviewed when:

- project responsibilities change;
- new contributor roles are introduced;
- approval workflows become inadequate;
- recurring exceptions appear;
- new document families are activated;
- the project enters a new maturity stage;
- governance decisions become difficult to interpret.

Changes must preserve traceability.

Significant governance changes may require an Architecture Decision Record.

---

## Related Collections

- [Architecture Decision Records](../architecture/adr/)
- [Standards](../standards/)
- [Guides](../guides/)
- [Official Publications](../publications/)
- [Roadmap](../roadmap/)
- [Releases](../releases/)

---

## Final Statement

Governance transforms individual decisions into institutional continuity.

It ensures that the InfraDev Academy can evolve transparently without depending only on informal conversations or individual memory.