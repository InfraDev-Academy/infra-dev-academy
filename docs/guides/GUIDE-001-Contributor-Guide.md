# GUIDE-001 — Contributor Guide

**ID:** GUIDE-001

**Category:** Guide

**Status:** In Review

**Version:** 1.0

**Release:** v0.2.0

**Authors:** InfraDev Academy

**Language:** English

**Created:** 2026-07-23

**Last Updated:** 2026-07-23

---

## 1. Purpose

This Guide explains how people can contribute to the InfraDev Academy in a structured, respectful and traceable manner.

Its purpose is to help contributors understand:

- where different types of work belong;
- how changes should be proposed;
- which documents should be consulted;
- how contributions are reviewed;
- how project quality is preserved.

Contributing to the Academy should be both a collaborative activity and a learning experience.

---

## 2. Who Can Contribute

The InfraDev Academy welcomes contributions from:

- students;
- developers;
- infrastructure professionals;
- technical support professionals;
- educators;
- technical writers;
- reviewers;
- designers;
- maintainers;
- people beginning their technology journey.

A contributor does not need to be an expert in every area.

Contributions should be honest about their scope, evidence and limitations.

---

## 3. Contribution Principles

Every contribution should follow these principles.

### 3.1 Understand before Changing

Before modifying a document or structure, understand:

- why it exists;
- which collection owns it;
- which Standards apply;
- whether related decisions have already been recorded.

### 3.2 Preserve Traceability

Changes should be connected to an Issue, Pull Request, Decision Log entry, release item or other appropriate project record.

### 3.3 Prefer Clarity

Contributions should make the ecosystem easier to understand, use or maintain.

Complexity should only be introduced when it solves a real problem.

### 3.4 Respect Existing Architecture

New files and directories must follow the repository architecture.

A contribution should not create overlapping collections or responsibilities without prior architectural review.

### 3.5 Document Evidence and Assumptions

Technical claims should distinguish between:

- verified behavior;
- documented information;
- practical observation;
- assumptions;
- recommendations;
- unresolved questions.

### 3.6 Protect Confidential Information

Real cases must not expose:

- client identities without authorization;
- credentials;
- private infrastructure details;
- personal data;
- confidential company information;
- production secrets.

Cases should be anonymized when necessary.

---

## 4. Before Contributing

Before starting work:

1. Read the root `README.md`.
2. Read the `README.md` of the relevant collection.
3. Review applicable Standards.
4. Search existing Issues and documents.
5. Confirm that the contribution does not already exist.
6. Identify the correct document family.
7. Understand whether the change requires prior discussion.

---

## 5. Choosing the Correct Document Family

Before creating a document, determine its purpose.

### ADR — Architecture Decision Record

Use an ADR when recording a significant decision that changes:

- project architecture;
- platform;
- governance;
- editorial model;
- major repository responsibilities.

An ADR explains why a decision was made.

### OP — Official Publication

Use an Official Publication to communicate institutional identity, direction or principles.

Examples include:

- Manifesto;
- Vision;
- Mission;
- Core Values;
- Brand Principles.

### STD — Standard

Use a Standard to define mandatory conventions, requirements or repeatable practices.

A Standard explains how work must be performed.

### GUIDE — Guide

Use a Guide to explain how a contributor should apply Standards or interact with the ecosystem.

A Guide is instructional rather than architectural.

### RFC — Request for Change

Use an RFC, when the collection becomes active, to propose a significant change before a final decision is accepted.

### NT — Technical Note

Use a Technical Note, when available, to explain a focused technical subject.

### LAB — Laboratory

Use a Laboratory document for guided practical activities.

### CS — Case Study

Use a Case Study to document a real or realistically modeled scenario, its investigation and the lessons learned.

When uncertain, open an Issue before creating the document.

---

## 6. Contribution Workflow

The recommended workflow is:

```text
Identify a Need

↓
