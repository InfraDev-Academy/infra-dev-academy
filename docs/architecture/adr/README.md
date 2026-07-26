# Architecture Decision Records

The Architecture Decision Records collection preserves the significant structural decisions that shape the InfraDev Academy.

Each ADR documents the context of a decision, the alternatives considered, the selected approach and its long-term consequences.

---

## Purpose

This collection exists to ensure that important architectural decisions are not preserved only through informal conversations, individual memory or isolated Git commits.

Architecture Decision Records provide future contributors and maintainers with enough context to understand:

- what was decided;
- why the decision was necessary;
- which alternatives were considered;
- what consequences were accepted;
- how the decision affects the ecosystem.

---

## Scope

An ADR should be created when a decision significantly affects:

- project architecture;
- repository responsibilities;
- collaboration platforms;
- governance structure;
- editorial architecture;
- document families;
- long-term technical direction;
- multiple areas of the ecosystem.

Operational or easily reversible decisions should normally be recorded in the Decision Log instead.

---

## Current Architecture Decisions

### ADR-0001 — Foundation Project Structure

Defines the modular repository structure adopted by the InfraDev Academy.

**Category:** Project<br>
**Status:** Accepted

### ADR-0002 — GitHub as Central Collaboration Platform

Defines GitHub as the central environment for project management, documentation, development and collaboration.

**Category:** Platform<br>
**Status:** Accepted

### ADR-0003 — Editorial Navigation System

Defines the editorial architecture adopted for Official Publications and establishes the foundation of the Living Publications model.

**Category:** Editorial<br>
**Status:** Accepted

---

## ADR Structure

Each ADR should contain:

- title and identifier;
- metadata;
- context;
- decision;
- architectural principles or rationale;
- consequences;
- alternatives considered;
- impact;
- related documents;
- final statement.

The structure may evolve according to future Standards, but every ADR must preserve enough context to explain the decision independently.

---

## Decision Status

Architecture Decision Records may use the following statuses:

### Proposed

The decision is under evaluation.

### Accepted

The decision has been approved and represents the current architectural direction.

### Superseded

A later ADR has replaced the decision.

### Rejected

The proposal was evaluated but not adopted.

### Deprecated

The decision remains part of the historical record but should no longer guide new implementations.

An accepted ADR should not be silently rewritten when its architectural direction changes.

A new ADR should document the replacement decision and reference the previous record.

---

## When to Create an ADR

Create an ADR when the decision:

- introduces a new architectural responsibility;
- affects multiple collections or components;
- changes the project platform;
- alters governance authority;
- defines a long-term editorial model;
- is difficult or expensive to reverse;
- requires future contributors to understand its reasoning.

Do not create an ADR only because a decision is important.

Its architectural scope and long-term consequences determine whether an ADR is appropriate.

---

## When to Use the Decision Log

Use the Decision Log when the decision:

- is operational or tactical;
- is reasonably reversible;
- affects implementation order;
- renames or relocates files;
- postpones a backlog item;
- introduces a minor workflow convention;
- does not significantly change architectural responsibilities.

See `docs/governance/DECISION-LOG.md` for operational decisions.

---

## Naming Convention

ADR filenames follow this format:

`ADR-XXXX-Descriptive-Title.md`

Where:

- `ADR` identifies the document family;
- `XXXX` is a sequential four-digit number;
- the title describes the decision;
- words are separated by hyphens.

Examples:

- `ADR-0001-Foundation-Project-Structure.md`
- `ADR-0002-GitHub-as-Central-Collaboration-Platform.md`
- `ADR-0003-Editorial-Navigation-System.md`

Identifiers must not be reused.

---

## Navigation

Readers should:

1. begin with ADR-0001 to understand the project structure;
2. continue with ADR-0002 to understand the collaboration platform;
3. read ADR-0003 to understand the editorial architecture;
4. consult related Standards, Governance documents and Guides when implementation details are required.

ADRs explain why decisions were made.

They do not replace operational instructions.

---

## Maintenance

The ADR collection should be reviewed when:

- a major architectural change is proposed;
- repository responsibilities change;
- a new platform becomes central to the project;
- governance authority is restructured;
- a recurring exception challenges an existing decision;
- an accepted ADR no longer represents the current architecture.

Historical integrity must always be preserved.

---

## Related Collections

- [Governance](../../governance/)
- [Standards](../../standards/)
- [Guides](../../guides/)
- [Official Publications](../../publications/)
- [Architecture](../)

---

## Final Statement

Architecture Decision Records preserve the reasoning behind the structure of the InfraDev Academy.

They ensure that future evolution is guided by documented knowledge rather than by forgotten context.