# Checklists

The Checklists collection contains concise verification tools used by the InfraDev Academy to support repeatable, traceable and reliable processes.

Checklists convert principles, Standards, Frameworks, Guides and review requirements into practical verification steps.

---

## Purpose

This collection exists to reduce omissions, improve consistency and support quality across recurring project activities.

Checklists may support:

- document creation;
- editorial review;
- technical validation;
- repository review;
- release preparation;
- implementation procedures;
- laboratory execution;
- migration activities;
- troubleshooting;
- Governance reviews;
- security verification.

A Checklist helps confirm that important actions and conditions were considered.

It does not replace technical understanding, professional judgment or responsibility.

---

## Scope

The Checklists collection may contain verification documents related to:

- institutional publications;
- technical documentation;
- contributor workflows;
- release readiness;
- repository organization;
- hardware procedures;
- software installation;
- database operations;
- backup and recovery;
- laboratories;
- infrastructure changes;
- project reviews;
- migration procedures;
- security activities.

Each Checklist should address a focused, repeatable and verifiable process.

---

## Checklist Principles

Every Checklist should prioritize the principles described below.

### 1. Practical Use

Checklist items should represent actions or conditions that can be directly verified.

### 2. Clear Scope

The Checklist should state which process, artifact or activity it validates.

### 3. Concise Language

Each item should describe one observable action, result or condition.

### 4. Correct Sequence

When execution order matters, Checklist items should follow the real workflow.

### 5. Traceability

The Checklist should reference related Standards, Guides, Frameworks, procedures or decisions.

### 6. Maintainability

Items should remain understandable and updateable as the related process evolves.

### 7. Risk Awareness

Critical risks, prerequisites, backups and rollback requirements should be visible.

### 8. Proportionality

The level of detail should correspond to the complexity and risk of the activity.

A simple documentation review does not require the same Checklist depth as a production database migration.

---

## Checklist and Framework

Frameworks and Checklists serve complementary purposes.

### Framework

Answers:

> How should this recurring problem or activity be understood and evaluated?

A Framework defines:

- concepts;
- evaluation dimensions;
- relationships;
- stages;
- reasoning structures.

### Checklist

Answers:

> Were the required actions and conditions verified?

A Checklist converts those concepts into observable verification items.

Example:

```text
Foundation Review Framework

Defines the review dimensions.

↓

Foundation Review Checklist

Verifies whether each dimension was evaluated.
```

A Checklist should not reproduce the complete conceptual explanation of a Framework.

It should reference the related Framework.

---

## Checklist and Standard

A Standard defines mandatory requirements.

A Checklist helps verify compliance with those requirements.

Example:

```text
STD-001 — Editorial Standard

Defines the required structure of Official Publications.

↓

Editorial Review Checklist

Confirms whether the required sections, metadata and review conditions are present.
```

The Checklist supports the Standard.

It must not independently create mandatory requirements that have not been established through the appropriate document family.

---

## Checklist and Guide

A Guide explains how to perform or apply a process.

A Checklist confirms whether the important steps and outcomes were completed.

Example:

```text
GUIDE-002 — Editorial Handbook

Explains how to create, review and publish a document.

↓

Publication Checklist

Confirms readiness before changing the document status to Published.
```

A contributor should understand the related Guide or procedure before relying only on its Checklist.

---

## Current Checklist Areas

The InfraDev Academy may maintain Checklists for the following areas.

### Editorial Review

Validates:

- document purpose;
- intended audience;
- metadata;
- structure;
- terminology;
- clarity;
- references;
- Edition Notes;
- publication status;
- institutional alignment.

### Technical Review

Validates:

- technical accuracy;
- environment assumptions;
- commands;
- configurations;
- expected results;
- actual results;
- risks;
- rollback procedures;
- validation evidence;
- known limitations.

### Product Review

Validates:

- learner value;
- project alignment;
- scope;
- priority;
- maintainability;
- release relevance;
- duplication;
- expected outcomes.

### Repository Review

Validates:

- file placement;
- naming;
- relative links;
- duplication;
- collection responsibilities;
- repository rendering;
- source assets;
- architectural consistency.

### Release Review

Validates:

- completed scope;
- document statuses;
- required approvals;
- known limitations;
- release metadata;
- publication readiness;
- milestone completion;
- post-publication validation.

### Migration and Infrastructure Procedures

Validates:

- prerequisites;
- backups;
- execution order;
- risk controls;
- maintenance windows;
- post-change testing;
- rollback readiness;
- documentation updates;
- evidence preservation.

---

## Checklist Structure

A Checklist should normally contain:

```text
Title

↓

Purpose

↓

Scope

↓

Prerequisites

↓

Checklist Items

↓

Validation

↓

Exceptions or Notes

↓

Related Documents
```

The exact structure may vary according to the activity.

A Checklist should remain concise enough to use during execution and complete enough to prevent relevant omissions.

---

## Recommended Metadata

Future standardized Checklists may use metadata such as:

```markdown
**ID:** CHK-XXX

**Category:** Checklist

**Status:** Active

**Version:** 1.0

**Release:** vX.Y.Z

**Owner:** InfraDev Academy

**Language:** English

**Created:** YYYY-MM-DD

**Last Updated:** YYYY-MM-DD
```

The `CHK` identifier should only become mandatory after the Checklist document family is formally standardized.

Until then, descriptive filenames may continue to be used according to current repository conventions.

---

## Checklist Item Format

Checklist items should use Markdown task syntax.

Example:

```markdown
- [ ] The document purpose is clear.
- [ ] Metadata is complete.
- [ ] Relative links were tested.
- [ ] Confidential information was removed.
```

When an item requires evidence, include a short note or reference.

Example:

```markdown
- [ ] Backup validation completed.
  - Evidence: restore test performed in the validation environment.
```

Avoid combining multiple unrelated checks into one item.

Incorrect:

```markdown
- [ ] Verify metadata, links, filenames, content, release and approval.
```

Preferred:

```markdown
- [ ] Metadata is complete.
- [ ] Relative links work.
- [ ] The filename follows the Naming Standard.
- [ ] The release field is correct.
- [ ] Approval is traceable.
```

Each item should be independently understandable and verifiable.

---

## Item Language

Checklist items should be:

- direct;
- observable;
- concise;
- written in a consistent grammatical form;
- specific enough to validate;
- free from unnecessary explanation.

Prefer:

```text
The rollback procedure was tested.
```

Instead of:

```text
Remember to think about whether rollback might be necessary.
```

The first item can be verified.

The second item is vague and does not define a completion condition.

---

## Item Perspective

A Checklist should adopt a consistent perspective.

Possible approaches include:

### Condition-based

```markdown
- [ ] Metadata is complete.
- [ ] Approval is recorded.
```

### Action-based

```markdown
- [ ] Validate the document metadata.
- [ ] Record the approval.
```

Both approaches are valid.

Avoid changing between them without reason inside the same Checklist.

---

## Mandatory and Optional Items

When a Checklist contains mandatory and optional items, the distinction should be visible.

Example:

```markdown
## Required

- [ ] Backup completed.
- [ ] Recovery method validated.
- [ ] Required approval recorded.

## Optional

- [ ] Additional screenshots attached.
- [ ] Extended performance test completed.
```

Optional items should not be presented as mandatory requirements.

A Checklist may also identify conditional requirements.

Example:

```markdown
## Conditional

- [ ] Migration Notes created when the release changes filenames or directories.
- [ ] Rollback procedure documented when the activity changes an active environment.
```

---

## Prerequisites

Before execution, the Checklist should identify prerequisites such as:

- required access;
- backup availability;
- administrative privileges;
- test environment;
- approved maintenance window;
- related Standards;
- supporting documentation;
- required tools;
- responsible person;
- recovery method;
- dependency status.

A Checklist should not begin with execution steps when essential prerequisites remain undefined.

---

## Risks

When the related activity contains meaningful risk, the Checklist should identify it before execution.

Possible risks include:

- data loss;
- service interruption;
- incorrect configuration;
- broken links;
- invalid publication status;
- exposure of confidential information;
- incompatible hardware;
- software version conflict;
- incomplete rollback;
- undocumented structural change.

Risk items should be specific enough to support prevention or mitigation.

---

## Backup and Recovery

Technical Checklists should include backup and recovery verification when the activity may alter data, configuration or availability.

Example:

```markdown
## Backup and Recovery

- [ ] A current backup exists.
- [ ] The backup location was confirmed.
- [ ] Backup integrity was validated.
- [ ] The recovery procedure is documented.
- [ ] Required recovery tools are available.
- [ ] Rollback responsibility is assigned.
```

A backup should not be considered valid only because a file exists.

Its integrity and usability should be evaluated according to the activity risk.

---

## Validation Evidence

When appropriate, completed items should be supported by evidence.

Evidence may include:

- screenshots;
- logs;
- command output;
- test results;
- Pull Requests;
- Issues;
- approval records;
- backup files;
- diagrams;
- release reports;
- database restore tests;
- exported configuration;
- verification notes.

Evidence requirements should match the risk and impact of the process.

Low-risk activities may require only a confirmation.

High-risk activities may require complete technical evidence.

---

## Evidence References

Evidence should be referenced without exposing confidential or sensitive data.

Example:

```markdown
- [x] Restore test completed.
  - Evidence: Issue #123, validation log attached.
```

Avoid embedding:

- passwords;
- access tokens;
- personal information;
- private keys;
- production secrets;
- confidential customer details.

Sensitive evidence should remain in an appropriately restricted location.

---

## Exceptions

A Checklist item may be marked as not applicable when the reason is documented.

Example:

```markdown
- [x] Rollback test completed.
  - Not applicable: the activity only created a new draft document and did not alter an active artifact.
```

An item should not be ignored silently.

Recurring exceptions may indicate that:

- the Checklist is outdated;
- the process changed;
- the item is too broad;
- the related Standard requires review;
- separate Checklists are required for different scenarios.

---

## Completion Criteria

A Checklist should define when the related activity is considered complete.

Possible completion criteria include:

- all mandatory items completed;
- conditional items evaluated;
- exceptions documented;
- required evidence attached;
- approval recorded;
- post-execution validation completed;
- related documents updated;
- rollback readiness confirmed;
- responsible person identified.

Completion should be based on verified outcomes rather than effort.

---

## Partial Completion

A partially completed Checklist should not be presented as complete.

When work must stop:

- record the current state;
- identify incomplete items;
- document blockers;
- record risks;
- assign the next action;
- preserve available evidence.

Example:

```markdown
**Status:** Blocked

**Reason:** Required database access was unavailable.

**Next Action:** Request access from the environment administrator.
```

This prevents unfinished work from being interpreted as validated.

---

## Creating a New Checklist

Before creating a Checklist, confirm that:

- the process is recurring;
- omissions create meaningful risk;
- the steps can be verified;
- an equivalent Checklist does not already exist;
- the Checklist supports an active Standard, Guide, Framework or procedure;
- the project can maintain it;
- the intended audience is known;
- the correct collection has been selected.

A Checklist should not be created only to repeat a one-time task list.

One-time execution plans may belong to an Issue, Sprint item or migration document.

---

## Checklist Review

A Checklist should be reviewed through real use.

Review questions include:

- Did the Checklist prevent omissions?
- Were any items unclear?
- Was the sequence correct?
- Were important risks missing?
- Were unnecessary items included?
- Could contributors complete it without additional explanation?
- Did recurring exceptions appear?
- Does it remain aligned with current Standards and Guides?
- Did the evidence requirements match the activity risk?
- Did the Checklist help validate outcomes?

Practical use is the primary validation method.

---

## Checklist Testing

Before an important Checklist becomes Active, it should be tested in at least one realistic execution when practical.

Testing may identify:

- missing prerequisites;
- incorrect sequence;
- ambiguous language;
- duplicated items;
- unrealistic evidence requirements;
- absent rollback steps;
- incomplete validation criteria.

A Checklist should be improved based on observed use rather than only theoretical review.

---

## Checklist Lifecycle

A Checklist may use the following statuses.

### Draft

The Checklist is being created or tested.

### In Review

The Checklist is undergoing technical, editorial or operational validation.

### Active

The Checklist is approved for current use.

### Superseded

A newer Checklist replaced it.

### Retired

The Checklist remains preserved but should no longer guide current work.

Historical versions should remain traceable when they supported past releases or technical activities.

---

## Technical Procedure Checklists

Technical Checklists should consider, when applicable:

- objective;
- environment;
- software or hardware versions;
- required access;
- backup;
- execution steps;
- expected results;
- actual results;
- risks;
- rollback;
- validation;
- post-change monitoring;
- documentation updates.

Examples include:

- storage device migration;
- system installation;
- PostgreSQL backup;
- driver replacement;
- printer configuration;
- network troubleshooting;
- release deployment;
- application configuration;
- database migration.

---

## Command-related Checklists

When a process uses commands, the related Checklist should verify that the documentation includes:

- command name;
- objective;
- execution environment;
- required privileges;
- syntax;
- parameter explanation;
- risks;
- expected output;
- rollback;
- real example;
- validation result.

Example:

```markdown
- [ ] The command objective is documented.
- [ ] Required privileges are identified.
- [ ] Every parameter is explained.
- [ ] Risks are documented.
- [ ] A rollback procedure is available.
- [ ] Expected output is described.
- [ ] The command was validated in the stated environment.
```

Commands should not be treated as isolated instructions without context.

---

## Migration Checklists

Migration Checklists should normally include the following stages.

### Preparation

```markdown
- [ ] Current environment documented.
- [ ] Dependencies identified.
- [ ] Required tools available.
- [ ] Backup completed.
- [ ] Recovery method validated.
```

### Execution

```markdown
- [ ] Migration steps followed in the approved order.
- [ ] Unexpected behavior recorded.
- [ ] Sensitive information protected.
```

### Validation

```markdown
- [ ] The target environment starts correctly.
- [ ] Required applications work.
- [ ] Data integrity was checked.
- [ ] Performance was evaluated.
- [ ] Logs were reviewed.
```

### Completion

```markdown
- [ ] Documentation updated.
- [ ] Evidence preserved.
- [ ] Old environment handled according to the plan.
- [ ] Final approval recorded.
```

The exact items should reflect the real migration scope.

---

## Review Checklists

Review Checklists should distinguish between review layers.

Possible layers include:

- Technical Review;
- Editorial Review;
- Product Review;
- Repository Review;
- Governance Review;
- Release Review.

Not every document or activity requires every layer.

The Checklist should explain which layers are applicable and why.

---

## Security and Confidentiality

Checklists must not expose:

- passwords;
- tokens;
- private keys;
- customer credentials;
- sensitive IP addresses;
- confidential company information;
- personal data;
- production secrets;
- private database connection details.

When evidence contains sensitive information, use:

- anonymization;
- redaction;
- secure storage;
- restricted references;
- sanitized examples.

Confidentiality verification should be included when real professional cases or technical environments are involved.

---

## Automation

Some Checklist items may eventually be automated.

Examples include:

- broken-link validation;
- metadata validation;
- filename validation;
- Markdown linting;
- directory structure checks;
- required-section validation;
- release-field consistency.

Automation should support human review.

It should not replace contextual evaluation, technical judgment or institutional approval.

Automated results should be understandable and traceable.

---

## Checklist Navigation

Readers should:

1. identify the process being executed;
2. read the related Guide or procedure;
3. confirm prerequisites;
4. review risks;
5. complete Checklist items in sequence;
6. attach evidence when required;
7. document exceptions;
8. validate completion;
9. preserve the final record when traceability is required.

A Checklist should support execution.

It should not replace understanding.

---

## Maintenance

This collection should be reviewed when:

- related Standards change;
- Guides evolve;
- processes are automated;
- recurring errors appear;
- technical environments change;
- Checklist items become ambiguous;
- contributors repeatedly mark items as not applicable;
- release reviews identify missing verification;
- new risks become visible;
- duplicated Checklists appear.

Inactive or obsolete Checklists should be superseded or retired intentionally.

---

## Related Collections

- [Frameworks](../frameworks/)
- [Standards](../standards/)
- [Guides](../guides/)
- [Governance](../governance/)
- [Releases](../releases/)
- [Knowledge](../knowledge/)
- [Diagrams](../diagrams/)
- [Templates](../templates/)

---

## Final Statement

Checklists transform important expectations into visible verification.

They help the InfraDev Academy execute recurring processes consistently without replacing the reasoning, responsibility and judgment required by engineering work.
