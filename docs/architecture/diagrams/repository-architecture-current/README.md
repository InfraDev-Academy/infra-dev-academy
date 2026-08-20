# Repository Architecture — Current State

**Category:** Architecture Diagram

**Status:** Active

**State:** Current

**Version:** 1.0

**Related ADRs:** ADR-0001, ADR-0002

**Source:** `repository-architecture-current.drawio`

**Primary Export:** `repository-architecture-current.svg`

**Last Updated:** 2026-07-24

---

## Purpose

This diagram presents the current high-level architecture of the InfraDev Academy repository.

It helps contributors understand:

- the major repository zones;
- the responsibility of `docs/`;
- the relationship between engineering, documentation and product experience;
- the main documentation groups;
- where new artifacts should be placed.

---

## Scope

The diagram covers the current top-level structure:

- `docs/`;
- `website/`;
- `scripts/`;
- `tools/`;
- `examples/`.

Inside `docs/`, it groups collections by responsibility:

- Institutional Foundation;
- Architecture and Practice;
- Learning and Content;
- Planning and Delivery.

It does not show every file or nested directory.

---

## Architectural Interpretation

### Product and Experience

`website/` and `examples/` support the public or reusable product experience.

### Engineering and Automation

`scripts/` and `tools/` support repeatable engineering activities, validation and automation.

### Documentation and Knowledge

`docs/` is the authoritative home for institutional, architectural, editorial, learning and release documentation.

Its collections are grouped by responsibility rather than creation date.

---

## Source of Truth

The repository structure is governed by:

- ADR-0001 — Foundation Project Structure;
- ADR-0002 — GitHub as Central Collaboration Platform;
- current collection READMEs;
- active Standards and Guides.

This diagram must remain aligned with those artifacts.

---

## Maintenance

Update this diagram when:

- a top-level repository directory is introduced or removed;
- a documentation collection changes responsibility;
- a significant repository restructuring is accepted;
- a related ADR supersedes the current structure.

Significant changes should be documented before the diagram is updated as current architecture.

---

## Files

- `repository-architecture-current.drawio` — editable source;
- `repository-architecture-current.svg` — primary rendered export.

---

## Final Statement

This diagram provides a current architectural map of the InfraDev Academy repository without replacing the decisions and collection documentation that define each responsibility.
