# Templates

The Templates collection contains reusable starting structures for recurring documents, technical procedures and project artifacts within the InfraDev Academy.

Templates help contributors begin with an approved structure without recreating the same document organization from the beginning.

---

## Purpose

This collection exists to improve consistency, reduce omissions and accelerate responsible document creation.

Templates may support:

- Official Publications;
- Architecture Decision Records;
- Standards;
- Guides;
- Product Requirements Documents;
- Frameworks;
- Checklists;
- release documentation;
- technical notes;
- laboratories;
- case studies;
- command documentation;
- migration procedures;
- review reports.

A Template provides a starting structure.

It does not replace understanding of the related document family, Standard, Guide or review process.

---

## Scope

The Templates collection may include reusable structures for:

- metadata;
- required sections;
- optional sections;
- review notes;
- validation fields;
- Edition Notes;
- technical evidence;
- risks;
- rollback procedures;
- references;
- approval records.

Templates should focus on recurring structure.

They should not contain project-specific content that belongs to a single document.

---

## Template Principles

Every Template should prioritize the principles below.

### 1. Purposeful Reuse

A Template should exist because a structure is expected to be reused.

It should not be created for a one-time document.

### 2. Alignment

Templates should remain aligned with the active Standards, Guides and Governance decisions.

### 3. Minimal Completeness

A Template should include enough structure to prevent important omissions without becoming unnecessarily complex.

### 4. Clear Placeholders

Contributors should be able to distinguish instructions, examples and content that must be replaced.

### 5. Maintainability

The number of Templates should remain manageable.

Duplicate or nearly identical Templates should be consolidated.

### 6. Flexibility

Templates should support responsible adaptation when the related document family allows it.

### 7. Traceability

Important Template changes should be connected to the Standard, Guide, decision or release that justified them.

---

## Templates and Standards

Standards and Templates serve different responsibilities.

### Standard

Defines the requirements that an artifact must follow.

### Template

Provides a reusable structure that helps contributors apply those requirements.

Example:

```text
STD-001 — Editorial Standard

Defines the required structure and metadata expectations.

↓

Official Publication Template

Provides the reusable Markdown structure.
```

A Template must not create mandatory requirements that do not exist in the applicable Standard or Governance decision.

When a conflict exists, the active Standard takes precedence.

---

## Templates and Guides

A Guide explains how to create, review or maintain an artifact.

A Template provides the structure used during that process.

Example:

```text
GUIDE-002 — Editorial Handbook

Explains the publication workflow.

↓

Publication Template

Provides the document skeleton.
```

Contributors should read the related Guide instead of relying only on placeholder instructions.

---

## Templates and Examples

Templates and examples are different artifacts.

### Template

Contains reusable structure and placeholders.

### Example

Shows a completed implementation in context.

A Template may reference an example, but it should not copy project-specific content from that example.

Example:

```text
Template

**Status:** [Replace with status]

Example

**Status:** Active
```

---

## Placeholder Conventions

Placeholders should be explicit and easy to search.

Recommended formats include:

```text
[Replace with document title]
[Describe the intended audience]
[Add validation evidence]
[Remove this section when not applicable]
```

Avoid vague placeholders such as:

```text
Text here
Something
TBD
Example
```

When `TBD` is necessary, it should identify what remains undefined.

Example:

```text
TBD: Release date will be defined after final review.
```

---

## Instructional Comments

Templates may contain temporary instructions for contributors.

These instructions should be removed before publication.

Example:

```markdown
<!-- Explain the problem this document addresses. Remove this comment before publication. -->
```

Comments should:

- be concise;
- explain the expected content;
- identify optional sections;
- state when removal is required;
- avoid duplicating entire Guides.

A published document should not retain irrelevant Template instructions.

---

## Required and Optional Sections

Templates should distinguish required and optional sections clearly.

Example:

```text
Required

- Purpose
- Scope
- Main Content
- Related Documents

Optional

- Migration Notes
- Known Limitations
- Appendix
```

Optional sections may include an instruction such as:

```markdown
<!-- Remove this section when it is not applicable. -->
```

A contributor should not keep empty sections only because they existed in the Template.

---

## Recommended Template Areas

The InfraDev Academy may maintain Templates for the following areas.

### Institutional Publications

Possible Templates:

- Official Publication;
- Living Publication;
- Edition Notes;
- institutional review.

### Architecture and Governance

Possible Templates:

- ADR;
- Decision Log entry;
- future RFC;
- Governance proposal.

### Standards and Guides

Possible Templates:

- Standard;
- Guide;
- collection README;
- contributor procedure.

### Product and Planning

Possible Templates:

- PRD;
- Roadmap item;
- release scope;
- Sprint Review;
- retrospective.

### Knowledge and Learning

Possible Templates:

- technical note;
- laboratory;
- case study;
- Learning Path;
- Knowledge Package;
- engineering reflection.

### Technical Operations

Possible Templates:

- command documentation;
- migration procedure;
- backup procedure;
- troubleshooting record;
- infrastructure checklist;
- validation report.

---

## Template Directory Structure

A future structure may organize Templates by responsibility.

Example:

```text
templates/
├── architecture/
├── editorial/
├── governance/
├── knowledge/
├── learning/
├── product/
├── releases/
└── technical/
```

This structure should only be introduced when the number of Templates creates a real navigation problem.

Until then, a simpler collection may be easier to maintain.

---

## Template Naming

Template filenames should describe the artifact they create.

Recommended patterns include:

```text
ADR-TEMPLATE.md
GUIDE-TEMPLATE.md
STANDARD-TEMPLATE.md
PRD-TEMPLATE.md
CHECKLIST-TEMPLATE.md
TECHNICAL-NOTE-TEMPLATE.md
LABORATORY-TEMPLATE.md
CASE-STUDY-TEMPLATE.md
COMMAND-DOCUMENTATION-TEMPLATE.md
```

Avoid filenames such as:

```text
template1.md
new-template.md
generic.md
final-template.md
latest-template.md
```

Detailed naming requirements may be defined by STD-004 — Naming Standard.

---

## Template Metadata

A Template may include metadata when it improves traceability.

Example:

```markdown
**Template:** PRD Template

**Status:** Active

**Version:** 1.0

**Applies to:** Product Requirements Documents

**Maintained by:** InfraDev Academy

**Last Updated:** YYYY-MM-DD
```

Metadata should remain proportional to the importance and maintenance requirements of the Template.

---

## Document-family Templates

A document-family Template should reflect the responsibilities of that family.

### ADR Template

Should help document:

- context;
- decision;
- alternatives;
- consequences;
- implementation;
- related decisions.

### Standard Template

Should help define:

- purpose;
- scope;
- requirements;
- exceptions;
- compliance;
- maintenance.

### Guide Template

Should help explain:

- intended audience;
- prerequisites;
- workflow;
- examples;
- validation;
- related documents.

### PRD Template

Should help define:

- problem;
- users;
- goals;
- requirements;
- exclusions;
- acceptance criteria;
- risks;
- dependencies;
- release relationship.

A single generic Template should not replace meaningful differences between document families.

---

## Technical Templates

Technical Templates should support reproducibility and risk awareness.

A command documentation Template may include:

- command name;
- objective;
- context;
- environment;
- required privileges;
- syntax;
- parameters;
- risks;
- expected output;
- rollback;
- real example;
- validation.

A migration Template may include:

- current state;
- target state;
- prerequisites;
- backup;
- execution plan;
- validation;
- risks;
- rollback;
- evidence;
- completion record.

Technical Templates should not encourage commands or procedures without context.

---

## Template Creation Criteria

Before creating a new Template, confirm that:

- the artifact type will recur;
- the structure is sufficiently stable;
- an existing Template cannot be adapted;
- the related document family is understood;
- applicable Standards and Guides exist or are being developed;
- the Template reduces meaningful omissions;
- the Academy can maintain it;
- its intended users are known.

A Template should not be created only because a directory exists.

---

## Template Review

A Template should be reviewed for:

### Structural Accuracy

- required sections;
- optional sections;
- correct ordering;
- document-family responsibility.

### Editorial Clarity

- understandable instructions;
- clear placeholders;
- consistent terminology;
- concise comments.

### Technical Adequacy

- validation fields;
- risk sections;
- rollback expectations;
- environment information when applicable.

### Repository Consistency

- filename;
- location;
- links;
- duplication;
- rendering.

### Practical Use

- contributor usability;
- unnecessary complexity;
- missing fields;
- repeated confusion.

Templates should be validated through real document creation whenever practical.

---

## Template Lifecycle

A Template may use the following statuses.

### Draft

The Template is being created or tested.

### In Review

The Template is undergoing validation.

### Active

The Template is approved for current use.

### Superseded

A newer Template replaced it.

### Retired

The Template remains preserved but should no longer be used for new artifacts.

Historical Templates may remain available when they are required to understand previous releases.

---

## Versioning

Template changes should be evaluated according to their impact.

### Minor Change

Examples:

- clearer instructions;
- corrected links;
- improved placeholder wording;
- optional example adjustment.

### Significant Change

Examples:

- new required section;
- removed required section;
- metadata model change;
- changed document-family responsibility;
- new review requirement.

Significant changes may require:

- Standard update;
- Guide update;
- Decision Log entry;
- migration note;
- release documentation.

---

## Template Drift

Template drift occurs when a Template no longer reflects current Standards, Guides or real practice.

Signs include:

- contributors repeatedly remove the same section;
- published documents use a different structure;
- placeholders reference obsolete fields;
- metadata differs from active Standards;
- instructions conflict with current workflow;
- duplicate Templates evolve independently.

Template drift should be corrected intentionally.

---

## Applying a Template

A contributor should:

1. identify the correct document family;
2. read the applicable Standard;
3. consult the related Guide;
4. copy the appropriate Template;
5. replace placeholders;
6. remove instructional comments;
7. remove inapplicable optional sections;
8. complete required validation;
9. request the appropriate reviews;
10. confirm repository rendering.

A copied Template becomes a new project artifact.

It should not remain dependent on the original file at runtime.

---

## Exceptions and Adaptation

A contributor may adapt a Template when:

- the document family permits flexibility;
- the change improves clarity;
- required sections remain present;
- the reason is documented when significant;
- the adaptation does not violate an active Standard.

Recurring adaptations should trigger a Template review.

An exception used repeatedly may indicate that the Template needs improvement.

---

## Automation

Templates may eventually support automation such as:

- document generation;
- metadata insertion;
- filename validation;
- required-section validation;
- release-field validation;
- link checks;
- linting;
- contributor prompts.

Automation should use Templates as controlled sources.

It should not make Template maintenance invisible.

---

## Security and Confidentiality

Templates must not contain real:

- passwords;
- tokens;
- private keys;
- customer names;
- private infrastructure details;
- personal data;
- production connection strings;
- proprietary information.

Examples should use safe placeholders.

Example:

```text
DB_HOST=<database-host>
DB_PORT=<database-port>
DB_NAME=<database-name>
```

Never use active credentials as Template examples.

---

## Navigation

Contributors should:

1. identify the artifact they need to create;
2. locate the related Template;
3. read the applicable Standard and Guide;
4. review available examples;
5. create the new artifact;
6. complete and remove placeholders;
7. validate the result;
8. submit it through the correct workflow.

Readers generally consume completed artifacts rather than Templates.

---

## Maintenance

This collection should be reviewed when:

- a Standard changes;
- a Guide changes;
- document families evolve;
- contributors report repeated confusion;
- duplicated Templates appear;
- automation is introduced;
- placeholders become outdated;
- release reviews identify recurring omissions;
- repository architecture changes.

A Template should remain a reliable starting point, not an archive of outdated expectations.

---

## Related Collections

- [Standards](../standards/)
- [Guides](../guides/)
- [Governance](../governance/)
- [Architecture](../architecture/)
- [Checklists](../checklists/)
- [Product Requirements Documents](../prd/)
- [Releases](../releases/)
- [Knowledge](../knowledge/)

---

## Final Statement

Templates transform recurring structure into reusable project capability.

They help contributors begin consistently while preserving the reasoning, flexibility and review required to create high-quality InfraDev Academy artifacts.
