# Releases

The Releases collection preserves the validated and published evolution of the InfraDev Academy.

Each release represents a controlled milestone containing institutional, architectural, editorial, technical or educational deliverables.

---

## Purpose

This collection exists to document what the InfraDev Academy actually delivered at each stage of its evolution.

Releases support:

- version history;
- delivery traceability;
- milestone validation;
- scope communication;
- review evidence;
- retrospectives;
- contributor recognition;
- institutional continuity;
- future maintenance.

A release transforms completed work into an identifiable project state.

---

## Scope

A release may contain:

- institutional publications;
- Architecture Decision Records;
- Standards;
- Guides;
- Governance documents;
- technical content;
- Learning Paths;
- Knowledge Packages;
- diagrams;
- checklists;
- Frameworks;
- release reports;
- Sprint Reviews;
- retrospectives;
- migration notes;
- known limitations.

Not every release must contain every document type.

Its scope should reflect a coherent and validated objective.

---

## Release Principles

### 1. Defined Purpose

Every release should have a clear objective.

### 2. Controlled Scope

The release should distinguish between:

- committed work;
- optional work;
- deferred work;
- rejected work;
- future backlog.

### 3. Traceability

Deliverables should connect to Issues, Pull Requests, reviews and decisions.

### 4. Validation

A release should not be considered complete only because files were created.

Its deliverables must be reviewed according to their impact.

### 5. Historical Integrity

Past release records should not be silently rewritten to match current expectations.

Corrections should preserve the original release context.

### 6. Maintainability

A release should introduce content and structures that the Academy can continue maintaining.

---

## Versioning

The InfraDev Academy uses semantic-style release identifiers:

```text
vMAJOR.MINOR.PATCH
```

Example:

```text
v0.2.0
```

### Major

Represents a significant maturity transition, compatibility change or major product evolution.

Example:

```text
v1.0.0
```

### Minor

Represents a meaningful release containing new capabilities, document families, technical domains or institutional evolution.

Example:

```text
v0.2.0
```

### Patch

Represents corrections, maintenance or small compatible improvements.

Example:

```text
v0.2.1
```

The complete versioning policy may be refined through a future Standard.

---

## Pre-1.0 Releases

Versions beginning with `v0` represent the development and validation stages before the first stable major release.

During this period:

- architecture may evolve;
- document families may be introduced;
- Standards may be refined;
- workflows may change;
- content models may be validated;
- compatibility may not yet be guaranteed.

Pre-1.0 does not mean unstructured.

It means the ecosystem is still proving and consolidating its foundations.

---

## Current Releases

## v0.1.0 — Foundation

The Foundation release established the initial structure, Governance and engineering direction of the InfraDev Academy.

Major outcomes included:

- Foundation Charter;
- Project Manifesto;
- repository structure;
- Architecture Decision Records;
- Governance;
- Foundation Review Framework;
- Roadmap;
- review layers;
- release process;
- Sprint 0 Review;
- Foundation certification.

**Status:** Completed

---

## v0.2.0 — Hardware Essentials

This release introduces the first technical knowledge domain and consolidates the institutional and editorial architecture.

Major planned or delivered areas include:

### Institutional Identity

- OP-003 — Mission;
- OP-004 — Core Values;
- OP-005 — Brand Principles.

### Editorial and Documentation Architecture

- STD-001 — Editorial Standard;
- GUIDE-001 — Contributor Guide;
- GUIDE-002 — Editorial Handbook;
- Decision Log;
- collection README files;
- document-family prefixes;
- Living Publications;
- Edition Notes.

### Hardware Essentials

- hardware concepts;
- component identification;
- storage;
- memory;
- motherboard fundamentals;
- diagnostics;
- maintenance;
- practical laboratories;
- checklists;
- diagrams;
- anonymized case studies.

**Status:** In Progress

---

## Release Directory Structure

A release directory may follow this model:

```text
releases/
└── vX.Y.Z/
    ├── README.md
    ├── RELEASE-NOTES.md
    ├── RELEASE-REPORT.md
    ├── SCOPE.md
    ├── KNOWN-LIMITATIONS.md
    ├── MIGRATION-NOTES.md
    └── reviews/
```

This complete structure should only be used when the release complexity requires it.

Smaller releases may use fewer files.

---

## Release Metadata

Release documentation should identify:

```markdown
**Release:** vX.Y.Z

**Title:** Release Title

**Status:** Planned | In Progress | In Review | Released | Superseded

**Start Date:** YYYY-MM-DD

**Release Date:** YYYY-MM-DD

**Maintained by:** InfraDev Academy
```

Dates that are not yet known should not be invented.

Use `Pending` or omit the field until the date is defined.

---

## Release Status

### Planned

The release objective and preliminary scope have been identified.

### In Progress

Implementation is underway.

### In Review

The release is undergoing final validation.

### Released

The approved scope has been published.

### Superseded

A newer release has replaced it as the current project state.

### Cancelled

The release was intentionally discontinued.

A cancelled release should preserve its historical context and reason.

---

## Release Scope

Every release should define:

- objective;
- committed deliverables;
- optional deliverables;
- dependencies;
- exclusions;
- acceptance criteria;
- known risks;
- review requirements;
- expected outcomes.

The scope may evolve.

Significant changes should be recorded through the appropriate planning or decision mechanism.

---

## Acceptance Criteria

A release should define observable completion criteria.

Examples:

- required documents exist;
- required reviews are complete;
- document statuses are correct;
- links were validated;
- metadata is consistent;
- technical procedures were tested;
- confidential information was removed;
- release report was completed;
- known limitations were documented;
- GitHub Milestone items were reviewed.

Acceptance criteria should measure delivery rather than effort.

---

## Review Layers

A release may include:

### Technical Review

Validates technical accuracy and reproducibility.

### Editorial Review

Validates structure, clarity and terminology.

### Product Review

Validates value, scope and alignment.

### Repository Review

Validates architecture, filenames, links and file placement.

### Governance Review

Validates approvals, responsibilities and decision records.

### Release Review

Confirms final readiness.

The required review layers depend on the release scope.

---

## Release Checklist

Before publishing a release, confirm:

### Scope

- [ ] The release objective is clear.
- [ ] Committed deliverables are complete.
- [ ] Deferred items are documented.
- [ ] Exclusions are visible.
- [ ] Dependencies were evaluated.

### Documentation

- [ ] Metadata is complete.
- [ ] Document statuses are accurate.
- [ ] Relative links work.
- [ ] Collection READMEs are current.
- [ ] Edition Notes are complete.
- [ ] Draft notes were removed.

### Validation

- [ ] Required reviews are complete.
- [ ] Technical procedures were tested.
- [ ] Known limitations are documented.
- [ ] Confidential information is absent.
- [ ] Repository rendering was checked.

### Governance

- [ ] Decisions are traceable.
- [ ] Required ADRs exist.
- [ ] Decision Log entries are current.
- [ ] Approval is recorded.
- [ ] Milestone items were reviewed.

### Publication

- [ ] Release version is correct.
- [ ] Release date is recorded.
- [ ] Release Notes are complete.
- [ ] Release Report is complete when required.
- [ ] GitHub Release is prepared.
- [ ] Post-publication validation is planned.

---

## Release Notes

Release Notes provide a concise reader-facing summary.

They should explain:

- what was introduced;
- what changed;
- what was fixed;
- what remains limited;
- what readers should explore next.

Release Notes should not reproduce every commit.

---

## Release Report

A Release Report provides a more complete internal and institutional record.

It may include:

- objective;
- delivered scope;
- deferred scope;
- review results;
- decisions;
- risks;
- known limitations;
- lessons learned;
- metrics;
- contributor acknowledgments;
- next steps.

The Release Report connects execution with future improvement.

---

## Sprint Reviews

Sprint Reviews may be stored inside or referenced by the related release.

A Sprint Review should evaluate:

- completed work;
- incomplete work;
- decisions;
- blockers;
- quality;
- lessons learned;
- backlog updates;
- release impact.

Multiple Sprints may contribute to one release.

---

## Retrospectives

A Retrospective examines how the work was performed.

It should identify:

- what worked;
- what created difficulty;
- what should change;
- what should be preserved;
- which experiments should be attempted;
- which process improvements should enter the backlog.

Release success and process quality are related but distinct evaluations.

---

## Known Limitations

A release may be published with known limitations when:

- the limitation is understood;
- risk is acceptable;
- the limitation is documented;
- users are not misled;
- future treatment is planned or intentionally rejected.

Known limitations improve trust when they are communicated clearly.

---

## Migration Notes

Migration Notes are required when a release changes:

- directory structure;
- filenames;
- document identifiers;
- workflows;
- configuration;
- technical environments;
- contributor procedures;
- compatibility expectations.

Migration Notes should explain:

- previous state;
- new state;
- required actions;
- risks;
- validation;
- rollback when applicable.

---

## Relationship with Milestones

GitHub Milestones may represent release scope and progress.

A Milestone should connect:

- Issues;
- Pull Requests;
- completion status;
- release version;
- planned date;
- final review.

The release documentation preserves the institutional result after the Milestone is completed.

---

## Relationship with the Roadmap

The Roadmap describes intended evolution.

The Releases collection records validated outcomes.

A release may differ from the original Roadmap because of:

- new evidence;
- technical constraints;
- capacity;
- changed priority;
- dependency problems;
- quality concerns.

These differences should be explained rather than hidden.

---

## Release Maintenance

Release records should be reviewed when:

- broken links are found;
- a factual correction is required;
- a migration instruction becomes unclear;
- archived assets move;
- a newer release supersedes guidance;
- historical context is missing.

Corrections must preserve the original meaning of the release.

Do not rewrite past scope as though later decisions had already existed.

---

## Navigation

Readers should:

1. identify the release version;
2. read its Release Notes;
3. review major deliverables;
4. consult Known Limitations;
5. read Migration Notes when upgrading;
6. explore related Sprint Reviews and reports;
7. continue to the next release when appropriate.

Contributors should consult the current GitHub Milestone and Project board for active execution details.

---

## Related Collections

- [Roadmap](../roadmap/)
- [Governance](../governance/)
- [Architecture](../architecture/)
- [Standards](../standards/)
- [Guides](../guides/)
- [Official Publications](../publications/)
- [Knowledge](../knowledge/)

---

## Final Statement

A release is more than a version number.

It is a validated record of how the InfraDev Academy transformed plans, decisions and work into a maintainable project milestone.