# ADR-0002 — GitHub as Central Collaboration Platform

**Status:** Accepted

**Date:** 2026-07-18

**Version:** 1.0

**Category:** Platform

**Authors:** InfraDev Academy

---

# Context

As the InfraDev Academy evolved during the Foundation phase, project management was initially performed using ClickUp.

Although ClickUp provided a user-friendly interface and planning capabilities, practical limitations of the Free plan introduced unnecessary constraints for a long-term engineering project.

At the same time, GitHub already hosted the source code and offered native features for project management, issue tracking, release planning and collaboration.

Maintaining two independent platforms would fragment the project's history and increase operational overhead.

---

# Decision

The InfraDev Academy adopts GitHub as its official collaboration platform.

GitHub becomes the single source of truth for project management, software development, documentation and future community collaboration.

The Academy officially adopts the following GitHub services:

- Git Repository
- GitHub Projects
- GitHub Issues
- Pull Requests
- Milestones
- Releases

Future services may also be incorporated, including:

- GitHub Discussions
- GitHub Pages
- GitHub Actions

---

# Motivation

The decision seeks to centralize every engineering activity within a single ecosystem.

Benefits include:

- traceability;
- integrated version control;
- reduced operational complexity;
- improved contributor experience;
- simplified governance.

---

# Consequences

## Positive

- Unified project history.
- Native integration between documentation and development.
- Easier release management.
- Lower maintenance cost.
- Better scalability.
- Open-source ready workflow.

## Negative

- Contributors need basic GitHub knowledge.
- Some advanced project management features available in dedicated platforms are unavailable.

These trade-offs are acceptable considering the Academy's objectives.

---

# Alternatives Considered

## ClickUp

Rejected.

Reason:

Excellent planning capabilities but external to the development ecosystem and limited by the Free plan.

---

## Trello

Rejected.

Reason:

Suitable for simple task management but insufficient for engineering governance.

---

## Jira

Rejected.

Reason:

Powerful enterprise solution but unnecessarily complex for the current maturity of the Academy.

---

# Impact

This decision directly affects:

- Project Management
- Development Workflow
- Governance
- Releases
- Documentation
- Community Contribution

---

# Related ADRs

- ADR-0001 — Foundation Project Structure

---

# Related Documents

- FOUNDATION-CHARTER.md
- ROADMAP.md
- GOVERNANCE.md

---

# Final Statement

GitHub is more than the repository of the InfraDev Academy.

It is the collaborative platform where engineering, documentation and knowledge evolve together.