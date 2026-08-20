# Assets

The Assets collection contains supporting media and reusable non-document resources used across the InfraDev Academy.

Assets may include images, icons, screenshots, exports, visual references and other files that support publications, technical content, diagrams, releases and the website.

---

## Purpose

This collection exists to organize reusable supporting files without mixing them with primary Markdown documentation.

It supports:

- visual communication;
- publication design;
- technical evidence;
- repository rendering;
- website content;
- diagrams;
- release materials;
- contributor reuse;
- consistent branding.

An Asset should support a document, interface or learning experience.

It should not exist without a clear use or ownership context.

---

## Scope

The Assets collection may contain:

- images;
- icons;
- logos;
- screenshots;
- exported diagrams;
- illustrations;
- thumbnails;
- publication covers;
- badges;
- visual references;
- downloadable examples;
- sanitized technical evidence;
- media used by the website.

Source files that require specialized editing may also be stored when they are needed for maintenance.

---

## Asset Principles

Every Asset should follow the principles below.

### 1. Purpose

The Asset should support a defined document, collection, page or release.

### 2. Clear Ownership

It should be possible to identify which artifact or feature uses the Asset.

### 3. Maintainability

Editable source files should be preserved when future updates are expected.

### 4. Accessibility

Visual content should include appropriate alternative text or written explanation when used in documentation or the website.

### 5. Confidentiality

Assets must not expose sensitive information.

### 6. Licensing

The project must understand whether the Asset can be stored, modified and published.

### 7. Repository Efficiency

Large files should be evaluated carefully before being committed.

### 8. Consistency

File naming, format and directory placement should remain predictable.

---

## Assets and Documents

Assets support documents.

They should not replace essential written explanation.

Example:

```text
Technical Guide

Explains the procedure and context.

↓

Screenshot

Shows the relevant interface state.
```

A screenshot should be referenced from the related document and accompanied by enough text for readers to understand its purpose.

---

## Assets and Diagrams

The Diagrams collection and Assets collection have different responsibilities.

### Diagrams Collection

Organizes visual models, architecture diagrams, flows and their editable sources.

### Assets Collection

Organizes reusable exports and supporting media used by documents or the website.

Example:

```text
docs/architecture/diagrams/

Editable architecture source and primary diagram documentation.

↓

docs/assets/

Exported SVG or PNG reused in publications or website pages.
```

A project may keep diagram source and export together when that structure is easier to maintain.

The important requirement is that the source of truth remains identifiable.

---

## Assets and Screenshots

Screenshots may be used as:

- technical evidence;
- interface guidance;
- troubleshooting examples;
- release validation;
- learning support.

Before adding a screenshot, confirm that:

- it communicates necessary information;
- sensitive details were removed;
- the interface state is still relevant;
- the image is readable;
- the related document explains it;
- the file size is reasonable.

Screenshots should not be added only to make a document appear more complete.

---

## Suggested Directory Structure

A future structure may organize Assets by responsibility.

Example:

```text
assets/
├── brand/
├── covers/
├── diagrams/
├── icons/
├── images/
├── screenshots/
├── website/
└── releases/
```

Additional subdirectories may be introduced only when the number of files creates a real navigation need.

Avoid creating empty category directories without practical content.

---

## Asset Naming

Asset filenames should be descriptive, lowercase and predictable.

Recommended pattern:

```text
descriptive-subject-purpose.ext
```

Examples:

```text
infradev-academy-logo.svg
hardware-storage-overview.png
foundation-review-flow.svg
postgres-backup-validation.png
release-v0-2-0-cover.png
```

Avoid filenames such as:

```text
image1.png
screenshot-final.png
new-logo.svg
latest.png
test.jpg
```

Detailed naming rules may be defined by STD-004 — Naming Standard.

---

## File Formats

The selected format should match the Asset purpose.

### SVG

Recommended for:

- logos;
- icons;
- diagrams;
- scalable illustrations;
- simple website graphics.

Advantages:

- scalable;
- usually small;
- editable;
- suitable for web rendering.

SVG files should be reviewed for embedded scripts or unsafe content before publication.

### PNG

Recommended for:

- screenshots;
- interface examples;
- transparent raster images;
- diagrams that cannot be exported reliably as SVG.

### JPEG

Recommended for:

- photographs;
- images where compression is useful;
- visuals without transparency requirements.

JPEG should not be used for screenshots containing text when readability is reduced.

### WebP

May be used for optimized website media when compatibility and workflow are validated.

### PDF

May be used for:

- formal visual exports;
- printable diagrams;
- publication previews;
- release materials.

PDF files should remain connected to their source and purpose.

---

## Editable Sources

When an Asset is expected to evolve, preserve its editable source when practical.

Examples:

- `.drawio`;
- `.svg`;
- `.psd`;
- `.xcf`;
- `.fig`;
- source design documents;
- Mermaid or PlantUML source.

The project should not depend only on a flattened export when future editing is expected.

When proprietary formats are used, consider whether maintainers can access the required tool.

---

## Source and Export Relationship

Source files and exported files should remain clearly related.

Example:

```text
hardware-storage-overview.drawio
hardware-storage-overview.svg
hardware-storage-overview.png
```

When multiple exports exist, identify the preferred version in the related document.

Avoid unexplained duplicates such as:

```text
hardware-storage-overview-final.svg
hardware-storage-overview-final-2.svg
hardware-storage-overview-latest.svg
```

Git history should preserve iteration rather than filename suffixes.

---

## Brand Assets

Brand Assets may include:

- primary logo;
- alternative logo;
- icon;
- wordmark;
- monochrome versions;
- approved backgrounds;
- cover elements;
- presentation identity;
- website identity.

Brand Assets should remain aligned with the Brand Principles and future visual identity guidance.

Do not create or publish alternative versions without clear purpose and approval.

---

## Asset Metadata

Important Assets may require metadata in a related Markdown file.

Possible fields include:

```markdown
**Title:** Hardware Storage Overview

**Type:** Diagram Export

**Status:** Active

**Source:** hardware-storage-overview.drawio

**Primary Export:** hardware-storage-overview.svg

**License:** Project-owned

**Last Updated:** YYYY-MM-DD
```

Metadata should remain proportional to the Asset complexity and publication risk.

---

## Alt Text

Visual Assets used in Markdown or the website should include useful alternative text.

Weak example:

```markdown
![Image](../assets/images/example.png)
```

Improved example:

```markdown
![Diagram showing the relationship between motherboard, SATA controller, SSD and operating system](../assets/diagrams/hardware-storage-overview.svg)
```

Alt text should describe the information or purpose of the image.

It should not repeat nearby text unnecessarily.

---

## Captions

Captions may explain:

- what the Asset shows;
- which environment it represents;
- why it matters;
- whether it is current or illustrative;
- which details were anonymized;
- what the reader should observe.

Example:

```markdown
Figure 1 — Simplified storage path from the motherboard SATA controller to the operating system.
```

A caption should add context rather than only repeat the filename.

---

## Technical Evidence

Assets used as technical evidence may include:

- screenshots;
- logs exported as images;
- before-and-after diagrams;
- configuration exports;
- validation records;
- test results.

Evidence should identify, when applicable:

- environment;
- date;
- version;
- scope;
- expected result;
- actual result;
- anonymization;
- related Issue or report.

Evidence should not be treated as self-explanatory.

---

## Confidentiality and Redaction

Before publishing an Asset, remove or obscure:

- passwords;
- tokens;
- private keys;
- customer names;
- personal information;
- email addresses when not required;
- private IP addresses;
- hostnames;
- database connection details;
- serial numbers when sensitive;
- internal identifiers;
- proprietary information.

Redaction should be irreversible in the published export.

Covering sensitive content with a removable shape in an editable file may not be sufficient.

Create a sanitized export.

---

## Real Cases

Assets derived from real professional cases should preserve educational value without exposing organizations or individuals.

Recommended actions:

- crop irrelevant interface areas;
- anonymize names;
- replace identifiers;
- remove credentials;
- blur or redact confidential fields;
- describe modifications;
- store sensitive originals outside the public repository.

The public repository should contain only the sanitized version.

---

## Licensing

Before adding an Asset, confirm one of the following:

- it was created by the InfraDev Academy;
- the project has permission to use it;
- its license allows the intended use;
- attribution requirements are understood;
- redistribution is allowed;
- modification is allowed when required.

Do not assume that an image found online can be reused.

Licensing information may be documented through:

- file metadata;
- a local README;
- the License Matrix;
- source attribution;
- publication notes.

---

## Attribution

When attribution is required, include:

- creator;
- original source;
- license;
- modification notice;
- access date when appropriate.

Example:

```text
Source: Example Author
License: CC BY 4.0
Modifications: Cropped and annotated for educational use
```

Attribution should remain near the Asset or in a clearly referenced attribution file.

---

## AI-generated Assets

AI-generated Assets may be used when:

- their purpose is clear;
- they do not misrepresent real evidence;
- they do not imitate confidential interfaces;
- their use is legally and ethically appropriate;
- they are identified when context requires disclosure;
- quality and accessibility are reviewed.

An AI-generated illustration should not be presented as a real technical screenshot or real-world evidence.

---

## Screenshots of Third-party Software

Screenshots of third-party software should be used carefully.

Consider:

- trademark rules;
- software license;
- documentation purpose;
- confidentiality;
- interface version;
- whether the image is necessary;
- whether a written explanation would be sufficient.

The screenshot should not imply endorsement or ownership.

---

## File Size

Large Assets can reduce repository usability.

Before committing a large file, evaluate:

- whether the resolution is necessary;
- whether compression is possible;
- whether SVG is more appropriate;
- whether the file belongs in release storage;
- whether Git LFS is required in the future;
- whether an external source should be referenced instead.

Do not reduce image quality below the level required for readability.

---

## Image Dimensions

The project may define recommended dimensions for:

- publication covers;
- website thumbnails;
- social previews;
- screenshots;
- diagrams;
- icons.

Until a visual Standard exists, choose dimensions according to actual use.

Avoid multiple near-identical exports without a defined purpose.

---

## Repository Rendering

Assets referenced from Markdown should be tested in the repository interface.

Validate:

- relative path;
- filename capitalization;
- image rendering;
- SVG compatibility;
- text readability;
- dark and light background behavior when relevant;
- mobile readability when used on the website.

A local preview alone may not represent repository rendering.

---

## Relative Links

Use relative paths for repository Assets when practical.

Example:

```markdown
![Hardware storage overview](../assets/diagrams/hardware-storage-overview.svg)
```

The correct path depends on the location of the referencing document.

Links should be validated after:

- moving files;
- renaming directories;
- restructuring collections;
- preparing a release.

---

## Duplicate Assets

Before adding a new Asset, search for an existing reusable file.

Duplicated Assets create:

- inconsistent updates;
- unnecessary repository size;
- unclear ownership;
- broken references;
- visual drift.

When two documents use the same Asset, prefer one shared source when their meaning is identical.

Do not reuse an Asset when the context or technical state differs.

---

## Creating a New Asset

Before creating or adding an Asset, confirm that:

- it supports a defined artifact;
- visual media improves understanding;
- a reusable Asset does not already exist;
- the format is appropriate;
- the file can be maintained;
- licensing is understood;
- confidentiality was reviewed;
- accessibility will be addressed;
- repository size impact is acceptable.

An Asset should solve a communication need.

---

## Asset Review

An Asset may require several review perspectives.

### Technical Review

Validates:

- factual accuracy;
- environment representation;
- current technical state;
- evidence integrity.

### Editorial Review

Validates:

- readability;
- labels;
- caption;
- terminology;
- relationship to the document.

### Accessibility Review

Validates:

- alt text;
- color independence;
- text size;
- contrast;
- written explanation.

### Repository Review

Validates:

- filename;
- location;
- link;
- file size;
- format;
- duplication.

### Legal and Licensing Review

Validates:

- ownership;
- permission;
- license;
- attribution;
- redistribution.

The required reviews should match the Asset risk and use.

---

## Asset Lifecycle

An Asset may use the following statuses through its related documentation.

### Draft

The Asset is being created.

### In Review

The Asset is undergoing validation.

### Active

The Asset is approved for current use.

### Superseded

A newer Asset replaced it.

### Retired

The Asset should no longer be used.

### Archived

The Asset remains preserved for historical release context.

Status may be represented through filenames, metadata, related documents or repository history according to future Standards.

---

## Updating an Asset

When updating an Asset:

- preserve the editable source;
- verify all references;
- update captions when necessary;
- confirm technical accuracy;
- maintain licensing information;
- revalidate accessibility;
- review file size;
- document meaningful changes.

Do not overwrite historical release Assets when they are required to preserve past context.

---

## Retiring an Asset

An Asset may be retired when:

- it is technically outdated;
- it contains obsolete branding;
- a newer Asset replaces it;
- it creates misleading guidance;
- licensing is unclear;
- it duplicates another file;
- the related document is retired.

Retired Assets should be removed from active references.

They may remain archived when historically relevant.

---

## Website Assets

Assets used by the website may require:

- optimized formats;
- responsive sizes;
- predictable filenames;
- accessibility metadata;
- caching strategy;
- source preservation;
- build-process compatibility.

Website optimization should not remove the maintainable source of the Asset.

---

## Release Assets

Release Assets may include:

- cover images;
- badges;
- release diagrams;
- publication previews;
- announcement visuals;
- archived exports.

Release-specific Assets should identify the related version.

Example:

```text
releases/v0.2.0/assets/
```

or:

```text
assets/releases/v0.2.0/
```

The selected structure should follow repository architecture and avoid unnecessary duplication.

---

## Navigation

Contributors should:

1. identify the document or feature that requires an Asset;
2. search for an existing reusable file;
3. select an appropriate format;
4. create or sanitize the Asset;
5. preserve the source when necessary;
6. verify licensing;
7. add alt text and caption;
8. validate repository rendering;
9. request appropriate review;
10. maintain the relationship with the consuming artifact.

Readers normally access Assets through related documents, publications or website pages.

---

## Maintenance

This collection should be reviewed when:

- broken Asset links appear;
- duplicate files are found;
- branding changes;
- technical screenshots become outdated;
- licensing information is missing;
- file sizes become excessive;
- source files are unavailable;
- accessibility issues are reported;
- repository architecture changes;
- documents reference retired media.

Assets should remain useful, traceable and safe to publish.

---

## Related Collections

- [Architecture](../architecture/)
- [Diagrams](../architecture/diagrams/)
- [Official Publications](../publications/)
- [Knowledge](../knowledge/)
- [Releases](../releases/)
- [Standards](../standards/)
- [Guides](../guides/)
- [Templates](../templates/)

---

## Final Statement

Assets support the InfraDev Academy by making knowledge more understandable, reusable and visually consistent.

Their value depends on clear purpose, responsible licensing, accessibility, confidentiality and maintainable connection to the artifacts they support.
