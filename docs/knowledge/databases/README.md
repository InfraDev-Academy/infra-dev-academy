# Databases

The Databases domain contains technical and educational resources about data modeling, relational systems, SQL, transactions, performance, backup, recovery and database administration.

It connects software behavior with structured data, persistence, integrity and operational reliability.

---

## Purpose

This collection exists to help learners understand how data is structured, stored, queried, protected and maintained.

The domain supports:

- database foundations;
- relational modeling;
- SQL;
- PostgreSQL;
- MySQL;
- transactions;
- indexes;
- constraints;
- query analysis;
- backup and recovery;
- security;
- migrations;
- diagnostics;
- practical laboratories;
- anonymized case studies.

Database content should connect concepts with observable behavior and safe operational practice.

---

## Current Status

**Collection Status:** Active

**Content Stage:** Planned / Early Development

**Primary Release Relationship:** Future Technical Release

**Primary Learning Paths:** Database Foundations and PostgreSQL Foundations — Future

The collection is active as a Knowledge domain.

Its complete curriculum has not yet been released.

---

## Scope

The Databases domain may include:

- database concepts;
- relational databases;
- tables;
- rows;
- columns;
- keys;
- relationships;
- normalization;
- SQL;
- transactions;
- constraints;
- indexes;
- views;
- functions;
- procedures;
- schemas;
- users and roles;
- backup;
- restore;
- replication foundations;
- migrations;
- performance;
- monitoring;
- troubleshooting;
- integration with applications.

NoSQL-specific content may be introduced later when the project has a clear learning need.

---

## Domain Principles

Database content should follow the principles below.

### 1. Integrity before Convenience

A database should protect the consistency of its data.

### 2. Evidence before Optimization

Performance changes should be based on measurements and query analysis.

### 3. Backup before Risk

Schema changes, migrations and destructive operations should include recovery planning.

### 4. Least Privilege

Users and applications should receive only the permissions they require.

### 5. Reproducibility

Queries and procedures should identify environment, version, expected result and validation.

### 6. Transactions

Multi-step data changes should consider atomicity and failure behavior.

### 7. Maintainability

Schemas, queries and procedures should remain understandable over time.

### 8. Learning by Engineering

Database content should connect:

```text
Business Rule

↓

Data Model

↓

SQL or Configuration

↓

Validation

↓

Operational Evidence

↓

Engineering Reflection
```

---

## Recommended Domain Structure

A mature Databases collection may evolve toward:

```text
databases/
├── README.md
├── fundamentals/
├── modeling/
├── sql/
├── postgresql/
├── mysql/
├── transactions/
├── performance/
├── security/
├── backup-and-recovery/
├── migrations/
├── laboratories/
├── case-studies/
├── diagrams/
├── checklists/
└── references/
```

Subdirectories should be created only when active content justifies them.

---

## Core Content Areas

## Database Foundations

Introduces:

- data;
- information;
- persistence;
- database management systems;
- relational model;
- schema;
- table;
- record;
- attribute;
- query;
- transaction.

The objective is to explain why databases exist and how they support applications.

---

## Data Modeling

May cover:

- entities;
- attributes;
- relationships;
- cardinality;
- primary keys;
- foreign keys;
- optionality;
- business rules;
- conceptual model;
- logical model;
- physical model.

A model should reflect the domain rather than only mirror a form or interface.

---

## Normalization

May cover:

- first normal form;
- second normal form;
- third normal form;
- dependency;
- redundancy;
- anomaly;
- denormalization trade-offs.

Normalization should be taught through data integrity and maintenance problems.

---

## Tables and Constraints

May cover:

- table definition;
- data types;
- primary key;
- foreign key;
- unique constraint;
- not-null constraint;
- check constraint;
- default value.

Constraints should protect rules that belong to the data layer.

---

## SQL Foundations

May cover:

- `SELECT`;
- `INSERT`;
- `UPDATE`;
- `DELETE`;
- filtering;
- ordering;
- grouping;
- aggregation;
- joins;
- subqueries;
- common table expressions.

SQL examples should identify the expected result and affected rows.

---

## Querying Data

May cover:

- projection;
- selection;
- sorting;
- grouping;
- aggregate functions;
- aliases;
- null handling;
- date and time;
- text processing;
- conditional expressions.

Queries should be written for clarity before premature optimization.

---

## Joins

May cover:

- inner join;
- left join;
- right join;
- full join;
- self join;
- join conditions;
- duplicate results;
- missing relationships.

The learner should understand why a join returns each row.

---

## Data Modification

May cover:

- inserts;
- updates;
- deletes;
- batch changes;
- affected rows;
- validation;
- rollback;
- transactions.

Destructive statements should be tested with equivalent `SELECT` filters before execution when practical.

---

## Transactions

May cover:

- atomicity;
- consistency;
- isolation;
- durability;
- commit;
- rollback;
- savepoint;
- concurrency;
- locks;
- failure handling.

Transaction examples should explain what happens when a step fails.

---

## Concurrency

May cover:

- concurrent access;
- locks;
- blocking;
- deadlocks;
- isolation levels;
- lost updates;
- dirty reads;
- non-repeatable reads;
- phantom reads.

Concurrency should be taught through real access patterns.

---

## Indexes

May cover:

- index purpose;
- B-tree foundations;
- uniqueness;
- composite indexes;
- selectivity;
- covering indexes;
- write cost;
- storage cost;
- maintenance.

An index should not be added only because a query is slow.

The query plan and workload should be reviewed.

---

## Query Performance

May cover:

- query plans;
- sequential scans;
- index scans;
- joins;
- row estimates;
- statistics;
- execution time;
- I/O;
- caching;
- parameter behavior.

Performance content should distinguish development tests from production workload.

---

## Views

May cover:

- logical abstraction;
- reusable queries;
- permissions;
- compatibility;
- materialized views;
- refresh behavior.

Views should not hide unclear or unstable data rules.

---

## Functions and Procedures

May cover:

- database functions;
- stored procedures;
- parameters;
- return values;
- transaction behavior;
- security;
- maintainability.

Business logic placement should consider application and database responsibilities.

---

## Schemas

May cover:

- namespaces;
- organization;
- ownership;
- search path;
- permissions;
- migration boundaries.

Schemas should be used intentionally rather than only as folders.

---

## PostgreSQL

May cover:

- installation;
- service;
- cluster;
- database;
- schema;
- roles;
- connection settings;
- `psql`;
- `pg_dump`;
- `pg_restore`;
- logs;
- extensions;
- query analysis;
- backup;
- recovery.

PostgreSQL content should identify the server version.

---

## MySQL

May cover:

- installation;
- server;
- database;
- users;
- permissions;
- command-line client;
- backup;
- restore;
- storage engines;
- logs;
- query analysis.

Version-specific differences should be explicit.

---

## Connections

May cover:

- host;
- port;
- database;
- user;
- password;
- SSL;
- connection string;
- timeout;
- pool;
- authentication;
- network dependency.

A connection failure should be investigated across application, network and database layers.

---

## Users and Roles

May cover:

- login roles;
- group roles;
- ownership;
- privileges;
- default privileges;
- application users;
- administrative users;
- service accounts.

Shared administrator credentials should not be treated as normal application configuration.

---

## Backup

May cover:

- logical backup;
- physical backup;
- full backup;
- incremental concepts;
- retention;
- scheduling;
- encryption;
- verification;
- off-site copies.

A backup file is not sufficient evidence of recoverability.

---

## Restore

May cover:

- restore planning;
- target environment;
- version compatibility;
- permissions;
- object ownership;
- data validation;
- application validation;
- rollback.

Restore procedures should be tested in a safe environment.

---

## Backup and Recovery Model

Recommended model:

```text
Define Recovery Need

↓

Identify Data and Dependencies

↓

Create Backup

↓

Verify Artifact

↓

Restore in Controlled Environment

↓

Validate Data and Application

↓

Document Recovery Evidence
```

---

## Migrations

May cover:

- schema migration;
- data migration;
- versioning;
- forward change;
- rollback;
- compatibility;
- deployment order;
- validation.

A migration should distinguish schema change from data transformation.

---

## Data Import and Export

May cover:

- CSV;
- SQL scripts;
- dump files;
- encoding;
- delimiters;
- date formats;
- null values;
- validation;
- duplication.

Imports should be tested before production execution.

---

## Replication Foundations

May cover:

- primary and replica;
- asynchronous replication;
- synchronous replication;
- read scaling;
- failover;
- lag;
- recovery objectives.

Replication is not a replacement for backup.

---

## Monitoring

May cover:

- connections;
- locks;
- query duration;
- database size;
- table size;
- index usage;
- cache behavior;
- replication lag;
- backup status;
- disk capacity.

Monitoring should support action rather than only produce metrics.

---

## Diagnostics

Database diagnostics should follow a structured model.

```text
Define the Symptom

↓

Identify Scope

↓

Validate Connectivity

↓

Validate Authentication

↓

Validate Database and Schema

↓

Review Logs and Locks

↓

Analyze Query or Operation

↓

Apply Controlled Change

↓

Validate Result
```

---

## Diagnostic Evidence

Possible evidence includes:

- database service status;
- connection test;
- port availability;
- authentication result;
- server logs;
- application logs;
- active sessions;
- locks;
- query plan;
- affected rows;
- backup logs;
- disk capacity;
- configuration;
- version.

Evidence should be collected before destructive changes.

---

## Common PostgreSQL Commands

Future command documentation may include:

- `psql`;
- `createdb`;
- `dropdb`;
- `pg_dump`;
- `pg_restore`;
- `vacuumdb`;
- `reindexdb`;
- `pg_isready`.

Each command should include:

- purpose;
- syntax;
- parameters;
- required privileges;
- risks;
- expected output;
- rollback;
- real example.

---

## SQL Safety

Before executing a destructive query:

- verify the target database;
- verify the schema;
- test the filter with `SELECT`;
- estimate affected rows;
- confirm backup;
- use a transaction when appropriate;
- review permissions;
- record rollback;
- validate after execution.

Avoid running unreviewed scripts directly in production.

---

## Practical Laboratories

Possible laboratories include:

- create a relational model;
- create tables and constraints;
- insert and query data;
- write joins;
- use transactions;
- create an index;
- compare query plans;
- create a database user;
- perform logical backup;
- restore into a test database;
- investigate a blocked query;
- diagnose a connection failure.

Every laboratory should define:

- objective;
- prerequisites;
- environment;
- dataset;
- steps;
- expected result;
- evidence;
- risk;
- rollback;
- reflection.

---

## Real Cases

Possible anonymized cases include:

- PostgreSQL connection failure;
- missing host or port;
- incorrect backup destination;
- all backup fields pointing to one directory;
- restore with ownership errors;
- application unable to authenticate;
- incorrect schema;
- slow query;
- blocked transaction;
- duplicate records;
- data migration between business units.

Cases should preserve engineering reasoning without exposing customers.

---

## Database Foundations Learning Path

A future Database Foundations path may include:

1. Data and Persistence;
2. Relational Model;
3. Modeling;
4. Tables and Constraints;
5. SQL Queries;
6. Joins and Aggregation;
7. Data Modification;
8. Transactions;
9. Backup and Restore;
10. Integration Laboratory;
11. Engineering Reflection.

---

## PostgreSQL Foundations Learning Path

A future PostgreSQL path may include:

1. PostgreSQL Architecture;
2. Installation and Service;
3. Databases and Schemas;
4. Roles and Permissions;
5. `psql`;
6. Backup and Restore;
7. Logs and Diagnostics;
8. Query Analysis;
9. Operational Laboratory;
10. Real Case.

---

## Technical Validation

Database content should identify, when applicable:

- database system;
- version;
- operating system;
- host;
- port;
- database;
- schema;
- user role;
- SQL statement;
- expected rows;
- affected rows;
- transaction state;
- backup format;
- restore target;
- limitation.

Sensitive values should be sanitized.

---

## Security

Database work may affect:

- credentials;
- personal data;
- financial data;
- business records;
- application availability;
- auditability.

Security content should consider:

- authentication;
- authorization;
- encryption;
- least privilege;
- secret storage;
- logging;
- backup protection;
- data minimization.

---

## Confidentiality

Do not publish:

- passwords;
- connection strings with secrets;
- customer databases;
- production dumps;
- private hostnames;
- personal data;
- proprietary schemas;
- business-sensitive records;
- internal IP addresses when sensitive.

Use synthetic or anonymized datasets.

---

## Accessibility

Database content should provide:

- schema diagrams;
- written relationship explanations;
- readable SQL;
- expected output;
- sample datasets;
- command explanations;
- safe alternatives;
- terminology definitions.

The learner should understand the model without depending only on a visual diagram.

---

## Creating New Database Content

Before creating a resource, confirm that:

- the learning objective is clear;
- the database system and version are known;
- the dataset is safe;
- the procedure can be validated;
- risks are understood;
- similar content does not already exist;
- the resource belongs to Databases;
- maintenance is realistic.

---

## Review Requirements

Database content may require:

### Technical Review

Validates SQL behavior, data integrity, transactions and recovery.

### Editorial Review

Validates clarity, structure and terminology.

### Product Review

Validates learner value and progression.

### Repository Review

Validates placement, links and rendering.

### Security Review

Validates credentials, permissions and data exposure.

### Operational Review

Validates backup, restore and production-impact procedures.

---

## Domain Navigation

Readers should:

1. read this domain entry point;
2. begin with Database Foundations;
3. study modeling and constraints;
4. practice SQL;
5. learn transactions;
6. perform backup and restore laboratories;
7. analyze real cases;
8. follow future Database Learning Paths when active.

---

## Maintenance

Review this collection when:

- database versions change;
- commands become deprecated;
- backup formats change;
- examples stop working;
- query behavior changes;
- security guidance evolves;
- links break;
- laboratories reveal missing steps;
- learner feedback reveals gaps.

Outdated resources should be updated, superseded or retired intentionally.

---

## Related Collections

- [Knowledge](../)
- [Programming](../programming/)
- [Operating Systems](../operating-systems/)
- [Networking](../networking/)
- [Containers](../containers/)
- [Security](../security/)
- [Standards](../../standards/)
- [Guides](../../guides/)
- [Checklists](../../checklists/)
- [Releases](../../releases/)

---

## Final Statement

Database knowledge becomes engineering capability when learners can model data, enforce integrity, write reliable queries, diagnose failures and recover information safely.
