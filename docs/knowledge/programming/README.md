# Programming

The Programming domain contains technical and educational resources about computational thinking, programming languages, software construction, debugging, testing and maintainable code.

It organizes programming knowledge from foundational logic to applied software development.

---

## Purpose

This collection exists to help learners understand how software is designed, written, executed, tested and improved.

The domain supports:

- programming logic;
- algorithms;
- data structures;
- paradigms;
- languages;
- debugging;
- testing;
- version control;
- software design;
- code quality;
- automation;
- practical projects;
- real and anonymized case studies.

Programming content should connect syntax with problem solving and engineering judgment.

---

## Current Status

**Collection Status:** Active

**Content Stage:** Planned / Early Development

**Primary Release Relationship:** Future Technical Release

**Primary Learning Paths:** Programming Foundations and language-specific paths — Future

The collection is active as a Knowledge domain.

Its complete curriculum has not yet been released.

---

## Scope

The Programming domain may include:

- logic;
- variables;
- data types;
- operators;
- conditions;
- loops;
- functions;
- modules;
- classes;
- objects;
- exceptions;
- files;
- collections;
- algorithms;
- data structures;
- paradigms;
- debugging;
- testing;
- APIs;
- command-line applications;
- web development foundations;
- backend development;
- automation;
- version control;
- code review;
- software design;
- language-specific practices.

Framework-specific content may be grouped under the related language or software-engineering area.

---

## Domain Principles

Programming content should follow the principles below.

### 1. Problem before Syntax

The learner should understand the problem before writing code.

### 2. Readability before Cleverness

Code should prioritize clarity, maintainability and intent.

### 3. Small Steps

Complex problems should be decomposed into understandable and testable parts.

### 4. Validation

Code should be executed, tested and compared with expected behavior.

### 5. Error as Evidence

Errors should be investigated rather than hidden.

### 6. Version Control

Meaningful code work should be traceable through Git when practical.

### 7. Context

Examples should explain where and why the code is used.

### 8. Learning by Engineering

Programming content should connect:

```text
Problem

↓

Algorithm

↓

Implementation

↓

Test

↓

Debugging

↓

Engineering Reflection
```

---

## Recommended Domain Structure

A mature Programming collection may evolve toward:

```text
programming/
├── README.md
├── fundamentals/
├── algorithms/
├── data-structures/
├── paradigms/
├── languages/
│   ├── java/
│   ├── csharp/
│   ├── python/
│   ├── javascript/
│   └── php/
├── testing/
├── debugging/
├── version-control/
├── projects/
├── laboratories/
├── case-studies/
├── checklists/
└── references/
```

Directories should only be created when active content requires them.

---

## Core Content Areas

## Programming Logic

Introduces:

- problem decomposition;
- sequence;
- condition;
- repetition;
- state;
- input;
- processing;
- output.

Logic should be taught independently from any single language when possible.

---

## Variables and Data Types

May cover:

- declaration;
- assignment;
- scope;
- mutability;
- primitive and reference types;
- type conversion;
- nullability;
- memory implications.

Examples should show how type choice affects behavior.

---

## Operators

May cover:

- arithmetic;
- comparison;
- logical operators;
- assignment;
- precedence;
- short-circuit evaluation.

Operator explanations should connect expression evaluation with real conditions.

---

## Conditions

May cover:

- `if`;
- `else`;
- `switch`;
- pattern matching;
- guards;
- validation.

Conditions should avoid unnecessary nesting when clearer alternatives exist.

---

## Loops

May cover:

- `for`;
- `while`;
- `do while`;
- iteration;
- loop control;
- infinite loops;
- performance considerations.

The learner should understand loop state and termination.

---

## Functions and Methods

May cover:

- parameters;
- return values;
- scope;
- side effects;
- pure functions;
- overloading;
- recursion;
- decomposition.

Functions should express one clear responsibility when practical.

---

## Collections

May cover:

- arrays;
- lists;
- sets;
- maps;
- queues;
- stacks;
- iteration;
- selection;
- performance;
- mutability.

Collection choice should be linked to the problem.

---

## Algorithms

May cover:

- searching;
- sorting;
- counting;
- traversal;
- recursion;
- complexity foundations;
- algorithm design;
- validation.

Algorithms should be explained through behavior and trade-offs, not only code.

---

## Data Structures

May cover:

- arrays;
- linked lists;
- stacks;
- queues;
- trees;
- graphs;
- hash tables;
- heaps.

Advanced structures should follow practical need and learner readiness.

---

## Paradigms

May cover:

- procedural programming;
- object-oriented programming;
- functional programming;
- event-driven programming;
- declarative programming.

Paradigms should be compared through problem-solving models rather than slogans.

---

## Object-oriented Programming

May cover:

- class;
- object;
- responsibility;
- encapsulation;
- inheritance;
- composition;
- polymorphism;
- interfaces;
- abstraction.

Content should avoid presenting inheritance as the default reuse strategy.

---

## Functional Programming

May cover:

- pure functions;
- immutability;
- higher-order functions;
- composition;
- map;
- filter;
- reduce;
- side effects.

Functional concepts may be introduced inside languages that support them.

---

## Error Handling

May cover:

- exceptions;
- validation;
- error values;
- logging;
- recovery;
- user-facing messages;
- fail-fast behavior.

Code should not suppress errors without explanation.

---

## Debugging

Debugging should follow a structured model.

```text
Reproduce

↓

Observe

↓

Form Hypothesis

↓

Inspect State

↓

Apply Controlled Change

↓

Retest

↓

Document
```

Debugging is an engineering process, not random code modification.

---

## Testing

May cover:

- test cases;
- unit tests;
- integration tests;
- end-to-end tests;
- assertions;
- test data;
- mocks;
- regression;
- boundary conditions.

Testing should validate behavior rather than implementation details unnecessarily.

---

## Code Quality

May cover:

- naming;
- structure;
- readability;
- duplication;
- cohesion;
- coupling;
- comments;
- documentation;
- refactoring;
- static analysis.

Code quality should be evaluated in context.

---

## Version Control

May cover:

- repository;
- commit;
- branch;
- merge;
- Pull Request;
- conflict;
- review;
- history;
- release tags.

Git content should connect commands with collaboration and recovery.

---

## Command-line Applications

May cover:

- input;
- output;
- arguments;
- environment;
- files;
- exit codes;
- validation;
- packaging.

Command-line applications are useful for foundational projects and automation.

---

## APIs

May cover:

- HTTP foundations;
- request;
- response;
- endpoint;
- method;
- status code;
- JSON;
- validation;
- authentication foundations;
- error handling.

API content should connect protocol behavior with implementation.

---

## Web Programming

May cover:

- HTML;
- CSS;
- JavaScript;
- frontend behavior;
- forms;
- browser APIs;
- server communication;
- PHP;
- Node.js;
- accessibility foundations.

Web content should distinguish structure, presentation and behavior.

---

## Backend Development

May cover:

- services;
- controllers;
- persistence;
- validation;
- APIs;
- authentication;
- error handling;
- testing;
- architecture.

Backend content should avoid framework usage without foundational understanding.

---

## Java

May cover:

- syntax;
- classes;
- objects;
- collections;
- exceptions;
- streams;
- Maven or Gradle;
- testing;
- Spring Boot;
- JPA;
- Hibernate;
- APIs.

Java content should identify language and framework versions.

---

## C#

May cover:

- syntax;
- .NET;
- classes;
- collections;
- exceptions;
- LINQ;
- testing;
- console applications;
- web APIs.

Version-specific limitations should be explicit.

---

## Python

May cover:

- syntax;
- dynamic typing;
- functions;
- collections;
- modules;
- exceptions;
- virtual environments;
- testing;
- scripting;
- automation.

Python content should identify environment and dependency management.

---

## JavaScript and TypeScript

May cover:

- browser JavaScript;
- Node.js;
- asynchronous programming;
- modules;
- DOM;
- events;
- fetch;
- TypeScript;
- testing.

Asynchronous behavior should be explained through execution order and state.

---

## PHP

May cover:

- syntax;
- forms;
- sessions;
- database access;
- validation;
- backend foundations;
- web security basics.

PHP content should identify runtime and web-server context.

---

## Practical Laboratories

Possible laboratories include:

- create a first console application;
- implement input validation;
- build a menu;
- manipulate collections;
- create functions;
- debug a failing program;
- write unit tests;
- consume an API;
- build a CRUD;
- use Git branches;
- review a Pull Request;
- document a command-line tool.

Every laboratory should define:

- problem;
- prerequisites;
- environment;
- expected behavior;
- implementation steps;
- tests;
- validation;
- known limitations;
- reflection.

---

## Projects

Possible learning projects include:

- command-line task manager;
- contact manager;
- expense tracker;
- inventory API;
- user CRUD;
- landing page;
- portfolio;
- test automation utility;
- log analyzer;
- backup script.

Projects should be selected according to the learning outcomes.

---

## Real Cases

Possible anonymized cases include:

- API refusing connection;
- invalid input causing failure;
- version mismatch;
- missing dependency;
- incorrect database configuration;
- frontend form validation issue;
- unexpected zero value;
- service returning incorrect response;
- compiler limitation;
- deployment environment difference.

Cases should preserve engineering reasoning and evidence.

---

## Programming Foundations Learning Path

A future Programming Foundations path may include:

1. Logic and Problem Decomposition;
2. Variables and Types;
3. Conditions;
4. Loops;
5. Functions;
6. Collections;
7. Error Handling;
8. Debugging;
9. Testing;
10. Integration Project;
11. Engineering Reflection.

---

## Language-specific Learning Paths

Future paths may include:

- Java Foundations;
- C# Foundations;
- Python Foundations;
- JavaScript Foundations;
- PHP Foundations;
- Backend Java;
- Full Stack Foundations.

Each path should define:

- audience;
- prerequisites;
- language version;
- outcomes;
- projects;
- validation;
- next steps.

---

## Technical Validation

Programming content should identify, when applicable:

- language;
- version;
- runtime;
- compiler;
- framework;
- dependency manager;
- operating system;
- command;
- expected output;
- actual output;
- test result;
- limitation.

Code should be executed or clearly marked as unvalidated.

---

## Code Examples

Code examples should be:

- complete enough to understand;
- minimal enough to focus;
- safe;
- version-aware;
- tested;
- explained;
- free from credentials;
- connected to expected output.

Avoid examples that compile only after undocumented changes.

---

## Error Messages

Error messages should be preserved accurately when they support learning.

A case should explain:

- environment;
- command;
- exact symptom;
- relevant error;
- hypothesis;
- investigation;
- solution;
- validation.

Do not replace real evidence with vague descriptions when safe evidence is available.

---

## Security

Programming content may affect:

- credentials;
- authentication;
- authorization;
- input validation;
- data access;
- network exposure;
- dependency risk;
- code execution.

Security should be integrated into examples rather than added only at the end.

---

## Confidentiality

Do not publish:

- secrets;
- API keys;
- database passwords;
- private repositories;
- customer source code;
- production URLs;
- personal data;
- proprietary business rules;
- private logs.

Use placeholders and sanitized examples.

---

## Accessibility

Programming content should provide:

- explained code;
- syntax-highlighted examples;
- readable line length;
- expected output;
- diagrams when helpful;
- text alternatives;
- step-by-step setup;
- troubleshooting notes.

The learner should understand what the code does, not only copy it.

---

## Creating New Programming Content

Before creating a resource, confirm that:

- the learning objective is clear;
- the language and version are known;
- the example can be tested;
- similar content does not already exist;
- the resource belongs to Programming;
- security and confidentiality were considered;
- the Academy can maintain it;
- the content supports a Learning Path or release need.

---

## Review Requirements

Programming content may require:

### Technical Review

Validates code behavior, version compatibility and tests.

### Editorial Review

Validates clarity, explanation and structure.

### Product Review

Validates learner value and progression.

### Repository Review

Validates file placement, links and code rendering.

### Security Review

Validates input handling, credentials, dependencies and exposure when necessary.

---

## Domain Navigation

Readers should:

1. read this domain entry point;
2. begin with Programming Foundations;
3. select a language according to the learning goal;
4. complete small laboratories;
5. practice debugging and testing;
6. build projects;
7. use version control;
8. analyze real cases;
9. follow future Learning Paths when active.

---

## Maintenance

Review this collection when:

- language versions change;
- frameworks evolve;
- dependencies become obsolete;
- examples stop compiling;
- commands change;
- security guidance evolves;
- links break;
- duplicated content appears;
- learner feedback reveals gaps.

Outdated resources should be updated, superseded or retired intentionally.

---

## Related Collections

- [Knowledge](../)
- [Databases](../databases/)
- [Operating Systems](../operating-systems/)
- [Containers](../containers/)
- [DevOps](../devops/)
- [Security](../security/)
- [Standards](../../standards/)
- [Guides](../../guides/)
- [Templates](../../templates/)
- [Releases](../../releases/)

---

## Final Statement

Programming knowledge becomes engineering capability when learners can understand a problem, design a solution, write readable code, test behavior, debug failures and improve the result through evidence and reflection.
