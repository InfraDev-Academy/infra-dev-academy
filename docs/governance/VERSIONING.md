---
id: VERSIONING
title: Versioning Policy
version: 0.1.0
status: Stable
owner: InfraDev Academy
category: Governance
language:
  - pt-BR
  - en-US
last_updated: 2026-07-19
related:
  - ROADMAP
  - CHANGELOG
  - LICENSING
  - ADR-0000
---

# Versioning Policy

> A consistent versioning strategy for the entire InfraDev Academy ecosystem.

---

# Purpose

This document defines how versions are assigned across all assets maintained by InfraDev Academy.

The objective is to provide predictability, traceability and compatibility while enabling sustainable growth.

---

# Philosophy

Versioning is not limited to software.

Every asset that evolves over time should have a version.

Examples include:

- Documentation
- Source code
- Learning paths
- Laboratories
- Case studies
- Books
- Templates
- Website
- APIs
- Releases

---

# Semantic Versioning

InfraDev Academy adopts Semantic Versioning (SemVer).

Format:

MAJOR.MINOR.PATCH

Example:

1.4.2

---

# Meaning

## MAJOR

Incremented when incompatible changes are introduced.

Examples:

- Major restructuring
- Breaking API changes
- Significant repository reorganization

---

## MINOR

Incremented when new functionality is added without breaking compatibility.

Examples:

- New Technical Notes
- New Laboratories
- New Learning Paths
- New Features

---

## PATCH

Incremented for corrections and improvements.

Examples:

- Typo fixes
- Documentation improvements
- Diagram corrections
- Metadata updates

---

# Versioning Scope

The following assets are versioned independently when appropriate.

---

## Repository

Example

v0.1.0

Foundation Pack

---

## Documentation

Each document contains:

Version

Status

Last Updated

---

## Website

Example

Website v1.2.0

---

## Books

Example

Hardware Fundamentals

2nd Edition

v2.0.0

---

## Laboratories

LAB-0007

Version

1.1.0

---

## Case Studies

CASE-0005

Version

1.0.2

---

## Templates

Templates evolve independently.

---

## Tools

Every software project follows Semantic Versioning.

---

# Status

Documents may adopt the following lifecycle.

Draft

↓

Review

↓

Approved

↓

Published

↓

Maintained

↓

Deprecated

↓

Archived

---

# Release Types

Development Release

Internal use.

---

Release Candidate (RC)

Feature complete.

Awaiting validation.

---

Stable Release

Official public release.

---

Hotfix Release

Urgent corrections.

---

# Compatibility

Minor releases should preserve compatibility whenever possible.

Breaking changes require a MAJOR version increment.

---

# Changelog

Every release must include a corresponding CHANGELOG entry.

---

# Git Tags

Every stable release should receive a Git tag.

Examples:

v0.1.0

v0.2.0

v1.0.0

---

# Release Naming

Major milestones may receive descriptive names.

Examples:

v0.1.0

Foundation Pack

v0.2.0

Hardware Essentials

v0.3.0

Operating Systems

---

# Documentation Updates

Editorial improvements:

PATCH

New educational content:

MINOR

Structural changes:

MAJOR

---

# Future Evolution

The versioning policy may evolve through new ADRs whenever necessary.

---

# Final Statement

Version numbers represent the evolution of knowledge.

They allow every learner and contributor to understand how the Academy grows over time.

---

## Version

0.1.0

## Status

Stable

## Maintained by

InfraDev Academy