# GUIDE-002 — Editorial Handbook

**ID:** GUIDE-002

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

This Handbook explains how to apply the InfraDev Academy editorial requirements during the planning, writing, review, publication and maintenance of documents.

STD-001 — Editorial Standard defines the official requirements for Official Publications.

This Handbook transforms those requirements into a practical and repeatable editorial workflow.

---

## 2. Intended Audience

This Handbook is intended for:

- authors;
- editors;
- reviewers;
- maintainers;
- contributors;
- translators;
- release coordinators.

Readers should consult the relevant Standards before applying the procedures described in this Handbook.

---

## 3. Relationship with Standards

Standards and Guides serve different purposes.

A Standard defines what must be followed.

A Guide explains how to apply those requirements in practice.

For example:

```text
STD-001 — Editorial Standard

Defines the required structure and editorial principles.

↓

GUIDE-002 — Editorial Handbook

Explains how to plan, write, review and publish a document using that structure.
```

This Handbook must remain compatible with all Active Standards.

It must not introduce mandatory requirements that have not been established by a Standard or Governance document.

---

## 4. Editorial Principles

The editorial workflow should preserve the following principles:

### 4.1 Clarity

Every document should communicate its purpose, scope and central ideas clearly.

### 4.2 Consistency

Documents belonging to the same collection should share recognizable structures, terminology and metadata.

### 4.3 Traceability

Readers and maintainers should be able to understand:

- when the document was created;
- which release introduced it;
- which edition is current;
- what changed;
- which decisions support it.

### 4.4 Maintainability

Documents should be structured so that future revisions can be performed without unnecessary rework.

### 4.5 Institutional Alignment

Official Publications should remain aligned with:

- Project Manifesto;
- Vision;
- Mission;
- Core Values;
- Brand Principles;
- accepted Architecture Decision Records.

### 4.6 Reader Orientation

The document should help readers understand:

- what they are reading;
- why it exists;
- how it should be used;
- where it belongs;
- what related material may be relevant.

---

## 5. Editorial Workflow

The recommended editorial workflow is:

```text
Identify the Need

↓

Define the Document

↓

Research and Collect Evidence

↓

Define the Scope

↓

Create the Structure

↓

Write the Draft

↓

Perform Self-review

↓

Complete Editorial Review

↓

Complete Institutional Review

↓

Approve and Publish

↓

Maintain as a Living Publication
```

Each stage should produce a clear result before the next stage begins.

---

## 6. Identify the Need

Before creating a document, answer:

- What problem does this document solve?
- Who needs it?
- Why does it need to exist now?
- Does another document already address the subject?
- Which collection owns it?
- Can the project maintain it over time?
- Does it belong in the current release or in the backlog?

A good idea does not always require immediate implementation.

Ideas without current priority should remain in the backlog until they provide practical value.

---

## 7. Define the Document

Before drafting, determine:

- document family;
- identifier;
- title;
- purpose;
- intended audience;
- scope;
- status;
- release;
- responsible author or team;
- required review layers;
- related documents.

For Official Publications, reserve the next available `OP-XXX` identifier according to project governance.

The identifier must remain stable throughout the publication lifecycle.

---

## 8. Select the Correct Document Family

The document family should be selected according to the document's purpose.

### ADR — Architecture Decision Record

Use an ADR to record why a significant architectural or governance decision was made.

### OP — Official Publication

Use an Official Publication to communicate institutional identity, direction or principles.

### STD — Standard

Use a Standard to define mandatory rules, conventions or repeatable practices.

### GUIDE — Guide

Use a Guide to explain how people should apply Standards or interact with the ecosystem.

### RFC — Request for Change

Use an RFC, when active, to propose a significant change before a final decision is accepted.

### NT — Technical Note

Use a Technical Note to explain a focused technical subject.

### LAB — Laboratory

Use a Laboratory document to guide a practical learning activity.

### CS — Case Study

Use a Case Study to document a real or realistically modeled scenario, its investigation and the lessons learned.

When the correct family is unclear, open an Issue before creating the document.

---

## 9. Define the Audience

Every document should identify its intended audience.

Possible audiences include:

- students;
- contributors;
- maintainers;
- developers;
- infrastructure professionals;
- educators;
- reviewers;
- technical leaders;
- external readers.

The intended audience influences:

- terminology;
- level of detail;
- prerequisites;
- examples;
- document length;
- navigation;
- supporting explanations.

A document written for everyone often becomes clear for no one.

---

## 10. Define the Scope

A document should have a clear boundary.

The scope should identify:

- what the document covers;
- what it does not cover;
- which questions it answers;
- which responsibilities belong to other documents;
- which related topics should be referenced instead of duplicated.

Scope prevents:

- duplication;
- uncontrolled expansion;
- overlapping responsibilities;
- unnecessary maintenance;
- confusion between document families.

When a draft begins solving multiple unrelated problems, consider dividing it into separate documents.

---

## 11. Research and Evidence

Before writing:

- review related publications;
- inspect relevant ADRs;
- consult Active Standards;
- review Governance documents;
- verify technical facts;
- collect practical examples;
- identify assumptions;
- record source material;
- identify unresolved questions;
- verify terminology.

Do not write authoritative statements based only on memory when verification is reasonably available.

When information cannot be fully verified, state the limitation clearly.

---

## 12. Create the Structure

Begin with headings before writing complete paragraphs.

For an Official Publication, start with:

```text
Cover

↓

Metadata

↓

Preface

↓

Main Content

↓

Edition Notes

↓

Copyright and Licensing
```

Then divide the Main Content into logical sections.

Each heading should communicate a meaningful idea.

Avoid vague headings such as:

```text
General Information
Other
Miscellaneous
More Details
Additional Content
```

Prefer headings that reveal the subject or purpose of the section.

---

## 13. Write the Cover

The Cover should identify the publication immediately.

Example:

```markdown
# OP-003 — Mission

InfraDev Academy

First Edition<br>
Release v0.2.0
```

The Cover should remain simple.

Its purpose is identification, not explanation.

Do not overload it with extensive metadata, long descriptions or multiple visual elements.

---

## 14. Complete the Metadata

Metadata should be completed early rather than added only at the end.

This helps establish:

- document identity;
- current status;
- release ownership;
- edition;
- version;
- authorship;
- language;
- timeline.

Example:

```markdown
**ID:** OP-003

**Category:** Official Publication

**Status:** Draft

**Version:** 1.0

**Edition:** First Edition

**Release:** v0.2.0

**Authors:** InfraDev Academy

**Language:** English

**Created:** 2026-07-23

**Last Updated:** 2026-07-23
```

During drafting, use:

```markdown
**Status:** Draft
```

During formal review, use:

```markdown
**Status:** In Review
```

After approval, use:

```markdown
**Status:** Published
```

Metadata must reflect the real state of the document.

---

## 15. Write the Preface

The Preface should answer:

- Why does this publication exist?
- What institutional or educational context does it address?
- How should the reader understand its role?
- What will the reader find in the document?
- How does it relate to the Academy?

The Preface should orient the reader without reproducing the complete Main Content.

It should be concise enough to preserve momentum and detailed enough to establish context.

---

## 16. Develop the Main Content

The Main Content should follow a clear progression.

A useful structure is:

```text
Context

↓

Central Idea

↓

Supporting Principles

↓

Practical or Institutional Consequences

↓

Commitment or Final Statement
```

Each section should contribute directly to the document's purpose.

Remove sections that:

- repeat previous ideas;
- exist only to increase length;
- introduce unrelated subjects;
- belong to another document;
- cannot be maintained;
- do not provide reader value.

---

## 17. Paragraph Construction

Prefer paragraphs that develop one central idea.

A useful paragraph often contains:

1. a clear opening statement;
2. explanation or context;
3. consequence, example or connection.

Avoid extremely long paragraphs containing multiple unrelated arguments.

Also avoid excessive fragmentation when several short sentences belong to the same idea.

Good paragraph structure improves:

- readability;
- logical progression;
- editorial review;
- future maintenance;
- translation.

---

## 18. Lists

Use lists when information is naturally parallel.

Appropriate uses include:

- requirements;
- principles;
- steps;
- examples;
- consequences;
- validation criteria;
- responsibilities.

Do not convert every sentence into a bullet point.

Lists should improve scanning without reducing the document to disconnected fragments.

List items should follow a consistent grammatical structure.

---

## 19. Headings

Headings should:

- describe the section clearly;
- follow a logical hierarchy;
- remain concise;
- avoid unnecessary numbering depth;
- help navigation;
- reflect the document's structure.

Recommended hierarchy:

```markdown
# Document Title

## Main Section

### Subsection

#### Detailed Subsection
```

Avoid skipping heading levels without a structural reason.

For example, do not move directly from `##` to `####`.

---

## 20. Institutional Voice

The InfraDev Academy voice should be:

- clear;
- professional;
- educational;
- confident;
- responsible;
- practical;
- human.

Avoid:

- unsupported superiority claims;
- exaggerated marketing;
- artificial urgency;
- vague corporate language;
- unnecessary informality;
- promises that cannot be verified;
- language designed only to impress.

Prefer evidence and purpose over persuasion.

---

## 21. Clear before Clever

The Academy prioritizes understanding over stylistic performance.

Prefer:

```text
The project uses GitHub as its central collaboration platform.
```

Instead of:

```text
The project orchestrates a revolutionary collaborative paradigm through a unified digital ecosystem.
```

The second sentence may sound more sophisticated, but it communicates less.

Clarity is a form of technical quality.

---

## 22. Active and Passive Voice

Prefer active voice when it makes responsibility clearer.

Example:

```text
The editorial team reviews the publication.
```

Passive voice may be appropriate when:

- the actor is unknown;
- the action is more important than the actor;
- responsibility has already been established;
- technical convention favors it.

Example:

```text
The document is published after approval.
```

The objective is not to eliminate passive voice.

The objective is to use voice intentionally.

---

## 23. Technical Terminology

Use established technical terminology when appropriate.

When a term may be unfamiliar:

- define it;
- provide context;
- connect it to an example;
- link to the Glossary when available.

Do not replace precise technical language with inaccurate simplifications.

Accessibility should preserve correctness.

Terminology should remain consistent across related documents.

---

## 24. English-first Writing

English is the primary institutional language of Official Publications.

Authors should prefer:

- direct sentences;
- familiar words when technically accurate;
- consistent terminology;
- active voice when natural;
- explicit relationships between ideas;
- internationally understandable expressions.

Avoid translating Portuguese expressions literally when the result is unnatural in English.

Example:

Instead of:

```text
We will make the realization of the project.
```

Prefer:

```text
We will implement the project.
```

Language review should preserve technical meaning and author intent.

---

## 25. Multilingual Evolution

Future translations should preserve:

- the original publication identifier;
- institutional meaning;
- edition equivalence;
- version traceability;
- structural consistency;
- terminology;
- related document references.

Translation should not create an independent interpretation of the publication.

When localization requires adaptation, the reason should be documented.

---

## 26. Cross-references

Reference other documents when they provide necessary context.

Use relative links whenever practical.

Example:

```markdown
See [STD-001 — Editorial Standard](../standards/STD-001-Editorial-Standard.md).
```

A reference should help the reader continue the learning or institutional journey.

Do not create excessive links that interrupt reading.

Before publication, validate that every referenced path exists.

---

## 27. Internal Navigation

Documents may use internal links to help readers navigate long content.

Example:

```markdown
- [Purpose](#1-purpose)
- [Editorial Workflow](#5-editorial-workflow)
- [Editorial Review](#35-editorial-review)
```

Internal navigation should be introduced when the document is long enough to justify it.

A short document does not need a complex table of contents.

---

## 28. Examples

Examples should:

- reinforce the concept;
- remain relevant to the intended audience;
- use realistic naming;
- avoid confidential information;
- distinguish recommended and incorrect approaches;
- remain technically valid.

Avoid examples that introduce more complexity than the concept being explained.

When an example contains commands, include:

- context;
- execution environment;
- expected result;
- risk;
- rollback when necessary.

---

## 29. Diagrams and Visual Elements

Diagrams should be used when they improve understanding.

A diagram should:

- have a clear purpose;
- use readable labels;
- follow repository conventions;
- remain editable when possible;
- include source files when applicable;
- avoid decorative complexity;
- remain understandable without relying only on color.

Visual elements must support the content.

They should not exist only to make the document appear more elaborate.

---

## 30. Edition Notes

Edition Notes must exist from the First Edition.

For the initial publication:

```markdown
## Edition Notes

**Edition:** First Edition

**Document Version:** 1.0

**Release:** v0.2.0

**Published:** YYYY-MM-DD

### Changes

- Initial publication.
```

For future editions, record meaningful changes.

Example:

```markdown
## Edition Notes

**Edition:** Second Edition

**Document Version:** 2.0

**Release:** v1.3.0

**Published:** YYYY-MM-DD

### Changes

- Expanded the international strategy.
- Updated multilingual publication principles.
- Added community development commitments.
```

Edition Notes should not become a complete commit log.

Minor formatting corrections may remain in Git history or the Decision Log.

---

## 31. Living Publication Maintenance

After publication, the document remains subject to controlled evolution.

Maintenance may include:

- correcting errors;
- improving clarity;
- updating terminology;
- adding missing context;
- revising outdated strategy;
- aligning with new institutional decisions;
- repairing references;
- preparing a new edition.

A Living Publication should evolve without losing its institutional purpose.

---

## 32. Minor Revisions

Minor revisions may include:

- typo correction;
- broken link repair;
- formatting improvement;
- small clarification;
- metadata correction;
- terminology consistency improvement.

Minor revisions may increment the minor version.

Example:

```text
Version 1.0

↓

Version 1.1
```

A minor revision does not normally create a new Edition.

---

## 33. Major Revisions

Major revisions may include:

- changed institutional direction;
- expanded publication purpose;
- restructured central argument;
- significant new commitments;
- removal of major sections;
- substantial changes to meaning.

A major revision may require:

- a new Edition;
- major version increment;
- institutional review;
- updated Edition Notes;
- release association.

Example:

```text
First Edition — Version 1.1

↓

Second Edition — Version 2.0
```

---

## 34. Editorial Self-review

Before formal review, the author should confirm:

- Is the purpose clear?
- Does every section support the purpose?
- Is the intended audience identifiable?
- Is terminology consistent?
- Are claims accurate?
- Are assumptions visible?
- Is repetition controlled?
- Does the document belong to the correct collection?
- Is metadata complete?
- Are links functional?
- Are Edition Notes present?
- Is confidential information absent?
- Does the document align with related publications?
- Does the document create unnecessary maintenance?

The author should resolve obvious problems before requesting review.

---

## 35. Editorial Review

Editorial review evaluates:

- structure;
- clarity;
- readability;
- consistency;
- terminology;
- tone;
- metadata;
- references;
- compliance with Active Standards;
- alignment with the intended audience.

The editor should explain significant recommendations rather than only rewriting the author's work.

Review should improve both:

- the document;
- the contributor's editorial understanding.

---

## 36. Institutional Review

Institutional review evaluates:

- alignment with the Project Manifesto;
- alignment with the Vision;
- alignment with the Mission;
- compatibility with Core Values;
- compatibility with Brand Principles;
- long-term consequences;
- public interpretation;
- consistency with accepted decisions.

A document may be editorially correct but institutionally misaligned.

Both dimensions must be considered.

---

## 37. Technical Review

Technical review is required when a document contains:

- commands;
- configurations;
- architecture;
- source code;
- infrastructure procedures;
- security recommendations;
- troubleshooting steps;
- technical claims.

Technical review should validate:

- correctness;
- reproducibility;
- environment assumptions;
- risks;
- limitations;
- expected results;
- rollback procedures;
- official references.

---

## 38. Product Review

Product review evaluates whether the document:

- solves a real problem;
- provides learner value;
- belongs to the current release;
- supports the project strategy;
- avoids unnecessary overlap;
- can be maintained;
- serves the intended audience;
- contributes to the knowledge ecosystem.

A technically correct document may still be rejected or postponed if it does not provide sufficient project value.

---

## 39. Repository Review

Repository review validates:

- file placement;
- filename;
- identifier;
- directory responsibilities;
- relative links;
- metadata consistency;
- duplication;
- source assets;
- repository rendering;
- structural alignment with ADR-0001.

The document should be reviewed as part of the ecosystem, not only as isolated content.

---

## 40. Approval and Publication

Before changing the status to `Published`, confirm:

- required reviews are complete;
- approval is recorded;
- metadata is current;
- release is correct;
- publication date is defined;
- Edition Notes are finalized;
- related links work;
- the document is included in the appropriate release scope;
- rendering was validated.

After approval:

```markdown
**Status:** Published
```

The `Published` field in Edition Notes should receive the official date.

---

## 41. Post-publication Review

After publication, verify:

- repository rendering;
- relative links;
- heading navigation;
- metadata presentation;
- release association;
- collection README references;
- absence of accidental draft notes;
- final file location;
- correct publication status.

Publication is complete only after the delivered artifact is validated in its real environment.

---

## 42. Exceptions

When editorial needs conflict with an Active Standard:

1. identify the requirement;
2. explain the conflict;
3. evaluate alternatives;
4. document the proposed exception;
5. request appropriate review;
6. record the decision;
7. monitor whether the exception becomes recurrent.

An exception should solve a real problem.

It should not exist only because following the Standard requires additional effort.

Repeated exceptions may indicate that the Standard needs revision.

---

## 43. Editorial Checklist

### Planning

- [ ] The need is clear.
- [ ] The audience is identified.
- [ ] The correct collection was selected.
- [ ] The scope is defined.
- [ ] Related documents were reviewed.
- [ ] Maintenance responsibility is understood.
- [ ] The document belongs to the current release or backlog.

### Drafting

- [ ] The required structure is present.
- [ ] Metadata is complete.
- [ ] The Preface explains the context.
- [ ] The Main Content follows a logical progression.
- [ ] Terminology is consistent.
- [ ] Claims are supported.
- [ ] Examples are valid.
- [ ] Confidential information is absent.
- [ ] Cross-references are relevant.

### Review

- [ ] Self-review is complete.
- [ ] Editorial review is complete.
- [ ] Institutional review is complete when applicable.
- [ ] Technical review is complete when applicable.
- [ ] Product review is complete when applicable.
- [ ] Repository review is complete.
- [ ] Links and references were tested.
- [ ] Edition Notes are accurate.
- [ ] Exceptions are documented.

### Publication

- [ ] Status is Published.
- [ ] Publication date is recorded.
- [ ] Release is correct.
- [ ] Repository rendering was validated.
- [ ] Collection navigation was updated.
- [ ] Approval is traceable.
- [ ] Draft notes were removed.
- [ ] Final artifact integrity was confirmed.

---

## 44. Related Documents

- OP-001 — Project Manifesto
- OP-002 — Vision
- OP-003 — Mission
- OP-004 — Core Values
- OP-005 — Brand Principles
- ADR-0001 — Foundation Project Structure
- ADR-0003 — Editorial Navigation System
- STD-001 — Editorial Standard
- GUIDE-001 — Contributor Guide
- EDITORIAL-REVIEW.md
- PRODUCT-REVIEW.md
- REPOSITORY-REVIEW.md
- TECHNICAL-REVIEW.md
- RELEASE-CHECKLIST.md
- DECISION-LOG.md

Some related documents may remain planned or under development until their official activation.

---

## 45. Final Statement

Editorial quality does not begin during the final review.

It begins when the purpose, audience, scope, structure and responsibilities of a document are first defined.

The Editorial Handbook transforms institutional intent into a clear, consistent and maintainable publication workflow.