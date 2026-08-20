# Glossary

The Glossary collection defines the terminology used throughout the InfraDev Academy ecosystem.

It provides consistent meanings for institutional, editorial, educational and technical terms used across documents, releases and project workflows.

---

## Purpose

This collection exists to reduce ambiguity and preserve terminology consistency.

The Glossary helps readers and contributors understand:

- how important terms are defined;
- how similar concepts differ;
- which abbreviations are officially adopted;
- how project-specific language should be interpreted;
- where a term belongs within the Academy architecture.

A shared vocabulary improves communication, documentation quality and contributor onboarding.

---

## Scope

The Glossary collection may contain definitions related to:

- institutional identity;
- repository architecture;
- document families;
- editorial processes;
- Governance;
- learning models;
- engineering practices;
- technical domains;
- project abbreviations;
- release terminology.

The Glossary should define terms.

It should not replace complete technical explanations, Standards, Guides or educational content.

---

## Glossary Organization

As the collection grows, terminology may be divided into focused documents.

A future structure may include:

```text
glossary/
├── README.md
├── ACADEMY-TERMS.md
├── DOCUMENTATION-TERMS.md
├── ENGINEERING-TERMS.md
├── LEARNING-TERMS.md
└── TECHNOLOGY-TERMS.md
```

This structure should only be introduced when the number of terms makes a single glossary difficult to maintain.

Until then, terminology may remain consolidated in the existing Glossary document.

---

## Term Categories

### Academy Terms

Institutional concepts specific to the InfraDev Academy.

Examples:

- InfraDev Academy;
- Learning by Engineering;
- Knowledge Engineering;
- Living Publication;
- Official Publication.

### Documentation Terms

Terms related to document architecture and editorial processes.

Examples:

- ADR;
- Standard;
- Guide;
- Edition;
- Version;
- Metadata;
- Edition Notes.

### Governance Terms

Terms related to project authority and decision-making.

Examples:

- Decision Log;
- Architecture Decision Record;
- Request for Change;
- Accepted;
- Active;
- Deferred;
- Superseded.

### Learning Terms

Terms related to educational structure.

Examples:

- Learning Path;
- Knowledge Package;
- Laboratory;
- Technical Note;
- Case Study;
- Engineering Reflection.

### Technical Terms

Terms used across infrastructure, software engineering and other technology domains.

Technical definitions should remain compatible with accepted industry usage.

---

## Definition Structure

Each glossary entry should normally contain:

```markdown
## Term

**Category:** Academy | Documentation | Governance | Learning | Technical

**Abbreviation:** Optional

Definition written in clear and direct language.

### Context

Explain how the term is used within the InfraDev Academy.

### Related Terms

- Related Term
- Related Term
```

Not every entry requires every field.

The definition should remain concise enough for quick reference.

---

## Writing Definitions

Definitions should:

- begin with the essential meaning;
- use clear language;
- avoid circular explanations;
- distinguish related concepts;
- preserve technical accuracy;
- state when a meaning is specific to the Academy;
- avoid introducing unnecessary marketing language;
- reference authoritative documents when appropriate.

Avoid definitions such as:

```text
A Standard is a document that contains Standards.
```

Prefer:

```text
A Standard is a prescriptive document that defines mandatory conventions, requirements or repeatable practices adopted by the InfraDev Academy.
```

---

## Project-specific Terminology

Some terms may have a meaning specific to the InfraDev Academy.

When this occurs, the entry should state that clearly.

Example:

```markdown
## Living Publication

**Category:** Documentation

A formally published institutional document designed to evolve through controlled editions while preserving its permanent identity and historical continuity.

### Context

Within the InfraDev Academy, Official Publications are treated as Living Publications and maintain traceability through metadata, Edition Notes, releases and Git history.
```

Project-specific definitions should remain compatible with broader industry terminology whenever practical.

---

## Abbreviations

Abbreviations should be introduced only when they improve communication.

Current or planned abbreviations include:

```text
ADR — Architecture Decision Record
OP — Official Publication
STD — Standard
GUIDE — Guide
RFC — Request for Change
NT — Technical Note
LAB — Laboratory
CS — Case Study
FRF — Foundation Review Framework
EKF — Engineering Knowledge Framework
```

Planned abbreviations should not be treated as active document families until they are formally adopted.

---

## Terminology Consistency

Contributors should consult the Glossary when:

- creating a new document;
- introducing a new document family;
- writing institutional content;
- defining a Framework;
- translating publications;
- reviewing terminology;
- resolving ambiguity;
- naming architectural components.

When two documents use different terms for the same concept, the preferred term should be defined and applied consistently.

---

## Adding a New Term

Before adding a term:

1. search the existing Glossary;
2. verify whether the term already has an accepted industry definition;
3. identify its category;
4. define its meaning clearly;
5. explain project-specific context when necessary;
6. add related terms;
7. review its use across existing documents.

A term should be added when its definition improves understanding or prevents recurring ambiguity.

---

## Updating a Definition

Definitions may evolve when:

- project architecture changes;
- terminology becomes more precise;
- an abbreviation is formally adopted;
- a recurring misunderstanding appears;
- an industry definition changes;
- a new document family becomes active.

Meaningful changes should preserve traceability through Git history or the Decision Log.

A definition that affects institutional or architectural interpretation may require broader review.

---

## Multilingual Terminology

Future multilingual documentation should preserve equivalent terminology across languages.

Translations should consider:

- technical accuracy;
- institutional meaning;
- regional usage;
- consistency across documents;
- abbreviations;
- terms that should remain in English.

Some technical terms may remain untranslated when translation would reduce clarity or conflict with common industry usage.

A multilingual terminology strategy should be introduced before large-scale translation begins.

---

## Relationship with Other Collections

### Official Publications

Provide institutional context for Academy-specific terminology.

### Standards

Define mandatory use of terminology when consistency is required.

### Guides

Explain terminology within practical workflows.

### Architecture Decision Records

Preserve decisions that establish or change architectural terms.

### Knowledge

Provides complete educational explanations beyond short glossary definitions.

---

## Navigation

Readers may use the Glossary to:

- confirm the meaning of a term;
- understand an abbreviation;
- compare related document families;
- identify project-specific usage;
- navigate to more complete references.

The Glossary should function as a quick entry point rather than a substitute for full documentation.

---

## Maintenance

The Glossary should be reviewed when:

- new collections are introduced;
- Standards activate new terminology;
- Official Publications adopt new institutional language;
- translations are prepared;
- contributors repeatedly ask about the same term;
- duplicate or conflicting definitions appear;
- outdated technical terminology is identified.

Terminology consistency should be evaluated during editorial and repository reviews.

---

## Related Collections

- [Academy](../academy/)
- [Official Publications](../publications/)
- [Standards](../standards/)
- [Guides](../guides/)
- [Architecture](../architecture/)
- [Governance](../governance/)
- [Knowledge](../knowledge/)

---

## Final Statement

A shared vocabulary creates shared understanding.

The Glossary ensures that the InfraDev Academy can grow across disciplines, contributors and languages without losing conceptual clarity.