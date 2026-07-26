# Sprint 1 Closure Checklist

**Sprint:** Institutional & Editorial Foundation<br>
**Status:** Pending Repository Confirmation<br>
**Date:** 2026-07-24

---

## Repository Integration

- [ ] Copy all approved documents into their final repository paths.
- [ ] Confirm that no file remains only in a local Downloads folder.
- [ ] Confirm that collection READMEs use the expected filenames.
- [ ] Remove obsolete empty `docs/handbook/`.
- [ ] Remove obsolete empty `docs/contributor-guides/`.
- [ ] Confirm that contributor content now lives in `docs/guides/`.
- [ ] Confirm that diagrams live in their own artifact directories.
- [ ] Confirm that no generic `.drawio` file remains loose.

---

## Status Validation

- [ ] Confirm STD-001 as Active.
- [ ] Confirm GUIDE-002 as Active.
- [ ] Decide whether GUIDE-001 is Active or remains In Review.
- [ ] Confirm OP-001 through OP-005 publication status.
- [ ] Confirm ADR-0001 through ADR-0003 as Accepted.
- [ ] Confirm the Hardware Foundations Learning Path as Draft / Proposed.
- [ ] Confirm the Foundation Review Framework as Active / Current.

---

## Link Validation

- [ ] Open each first-level collection README on GitHub.
- [ ] Test relative links.
- [ ] Test links to Architecture Diagrams.
- [ ] Test links to Learning Paths.
- [ ] Test links between Knowledge domains.
- [ ] Check filename capitalization.
- [ ] Check paths after directory consolidation.
- [ ] Correct any broken link before closure.

---

## Diagram Validation

- [ ] Open each `.drawio` source in diagrams.net.
- [ ] Confirm that each `.svg` renders on GitHub.
- [ ] Confirm titles and status labels.
- [ ] Confirm Current versus Proposed state.
- [ ] Confirm that the RFC path remains marked as future.
- [ ] Confirm that no sensitive information appears.

---

## Governance

- [ ] Update the Decision Log with final Sprint decisions.
- [ ] Confirm deferred Relationship Map.
- [ ] Confirm deferred Institutional Roadmap.
- [ ] Confirm RFC remains planned for a later release.
- [ ] Record the Website MVP as the next implementation Sprint.
- [ ] Record any rejected or superseded structure.

---

## Git Closure

Suggested branch name:

```text
docs/sprint-1-finalization
```

Suggested commit sequence:

```text
docs: integrate sprint 1 institutional foundation
docs: add architecture and learning diagrams
docs: complete knowledge domain entry points
docs: close sprint 1 review
```

Suggested final tag only after review:

```text
sprint-1-closed
```

---

## Closure Decision

Mark Sprint 1 as Closed when every blocking item above is complete.

Possible result:

```text
Sprint 1 — Closed
Repository integration — Validated
Documentation links — Validated
Next Sprint — Website MVP Foundation
```
