# Cloud

The Cloud domain contains technical and educational resources about on-demand infrastructure, managed services, scalability, availability, identity, networking, cost and cloud operations.

It connects infrastructure engineering with service consumption, automation and distributed-system foundations.

---

## Purpose

This collection exists to help learners understand how cloud platforms provide computing, storage, networking and managed services through programmable interfaces and shared responsibility.

The domain supports:

- cloud foundations;
- service models;
- deployment models;
- regions and availability zones;
- compute;
- storage;
- networking;
- identity and access;
- managed databases;
- containers;
- serverless foundations;
- observability;
- resilience;
- cost awareness;
- security;
- practical laboratories;
- anonymized case studies.

Cloud content should connect architecture choices with operational, security and cost consequences.

---

## Current Status

**Collection Status:** Active

**Content Stage:** Planned / Early Development

**Primary Release Relationship:** Future Technical Release

**Primary Learning Path:** Cloud Foundations — Future

The collection is active as a Knowledge domain.

Its complete curriculum has not yet been released.

---

## Scope

The Cloud domain may include:

- cloud concepts;
- public cloud;
- private cloud;
- hybrid cloud;
- infrastructure as a service;
- platform as a service;
- software as a service;
- regions;
- availability zones;
- compute;
- storage;
- networking;
- load balancing;
- identity;
- access control;
- managed databases;
- containers;
- serverless;
- monitoring;
- logging;
- automation;
- infrastructure as code;
- resilience;
- backup;
- disaster recovery;
- cost management;
- Governance;
- security.

Provider-specific content may be introduced for AWS, Azure, Google Cloud or other platforms when there is a clear learning need.

---

## Domain Principles

Cloud content should follow the principles below.

### 1. Shared Responsibility

Cloud providers and customers have different security and operational responsibilities.

### 2. Architecture before Service Selection

A service should be selected because it solves a requirement, not only because it is popular.

### 3. Automation

Cloud infrastructure should be reproducible when practical.

### 4. Least Privilege

Identity and access should be restricted to required actions.

### 5. Cost Awareness

Cloud resources have operational and financial consequences.

### 6. Resilience

Availability, backup and recovery should be designed intentionally.

### 7. Observability

Cloud systems should provide enough evidence to understand behavior and failures.

### 8. Learning by Engineering

Cloud content should connect:

```text
Requirement

↓

Architecture

↓

Service Selection

↓

Configuration or Code

↓

Validation

↓

Operational Evidence

↓

Engineering Reflection
```

---

## Recommended Domain Structure

A mature Cloud collection may evolve toward:

```text
cloud/
├── README.md
├── fundamentals/
├── service-models/
├── compute/
├── storage/
├── networking/
├── identity/
├── databases/
├── containers/
├── serverless/
├── observability/
├── resilience/
├── cost-management/
├── security/
├── providers/
│   ├── aws/
│   ├── azure/
│   └── google-cloud/
├── laboratories/
├── case-studies/
├── diagrams/
├── checklists/
└── references/
```

Subdirectories should be created only when active content requires them.

---

## Core Content Areas

## Cloud Foundations

Introduces:

- on-demand resources;
- elasticity;
- scalability;
- measured service;
- resource pooling;
- automation;
- managed services;
- shared responsibility.

The objective is to explain what changes when infrastructure becomes programmable and service-based.

---

## Deployment Models

May cover:

- public cloud;
- private cloud;
- hybrid cloud;
- multi-cloud;
- edge computing foundations.

Deployment models should be evaluated through requirements and constraints.

---

## Service Models

May cover:

- Infrastructure as a Service;
- Platform as a Service;
- Software as a Service;
- Functions as a Service;
- managed services.

The learner should understand which responsibilities remain with the customer.

---

## Regions and Availability Zones

May cover:

- geographic regions;
- availability zones;
- latency;
- data residency;
- redundancy;
- service availability;
- disaster recovery.

A region and an availability zone should not be treated as the same boundary.

---

## Compute

May cover:

- virtual machines;
- machine types;
- images;
- autoscaling;
- startup scripts;
- instance lifecycle;
- patching;
- scheduling;
- cost.

Compute selection should consider workload, availability and operational responsibility.

---

## Cloud Storage

May cover:

- object storage;
- block storage;
- file storage;
- lifecycle;
- durability;
- performance;
- encryption;
- backup;
- access control.

Storage type should match the data-access pattern.

---

## Cloud Networking

May cover:

- virtual networks;
- subnets;
- route tables;
- gateways;
- public and private addresses;
- security groups;
- network access controls;
- load balancers;
- DNS;
- peering;
- VPN;
- private connectivity.

Cloud networking should be explained through packet path and policy boundaries.

---

## Identity and Access Management

May cover:

- identities;
- users;
- groups;
- roles;
- policies;
- temporary credentials;
- service identities;
- federation;
- least privilege;
- audit.

Long-lived administrative credentials should be avoided when safer alternatives exist.

---

## Managed Databases

May cover:

- relational database services;
- NoSQL services;
- backups;
- replication;
- scaling;
- maintenance;
- availability;
- monitoring;
- responsibility boundaries.

Managed does not mean maintenance-free or risk-free.

---

## Containers in the Cloud

May cover:

- managed container platforms;
- registries;
- serverless containers;
- orchestration foundations;
- networking;
- storage;
- identity;
- scaling.

Container concepts remain grounded in the Containers domain.

---

## Serverless Foundations

May cover:

- functions;
- events;
- triggers;
- execution limits;
- statelessness;
- cold starts;
- observability;
- cost;
- security.

Serverless removes server management from the consumer, not servers from the system.

---

## Load Balancing

May cover:

- traffic distribution;
- health checks;
- layer 4;
- layer 7;
- TLS termination;
- session behavior;
- availability;
- routing rules.

A load balancer should be connected to validated health signals.

---

## Autoscaling

May cover:

- horizontal scaling;
- vertical scaling;
- metrics;
- thresholds;
- cooldown;
- capacity;
- cost;
- stability.

Autoscaling cannot correct every application bottleneck.

---

## Content Delivery

May cover:

- content delivery networks;
- edge caching;
- latency;
- invalidation;
- origin;
- static content;
- security.

Caching behavior should be documented and testable.

---

## Cloud Observability

May cover:

- metrics;
- logs;
- traces;
- events;
- audit logs;
- dashboards;
- alerts;
- service health.

Cloud-native observability should connect managed services with application behavior.

---

## Cloud Security

May cover:

- shared responsibility;
- identity;
- network controls;
- encryption;
- keys;
- secrets;
- audit;
- vulnerability management;
- configuration posture;
- incident response.

Security should be designed into the architecture.

---

## Encryption

May cover:

- encryption at rest;
- encryption in transit;
- key management;
- customer-managed keys;
- service-managed keys;
- rotation;
- access control.

Encryption does not replace authorization or data minimization.

---

## Secrets Management

May cover:

- secret stores;
- rotation;
- temporary credentials;
- application access;
- audit;
- environment variables;
- deployment integration.

Secrets should not be stored in source repositories or images.

---

## Resilience

May cover:

- redundancy;
- failure domains;
- multi-zone architecture;
- backup;
- restore;
- replication;
- failover;
- graceful degradation.

Resilience should reflect business requirements.

---

## Backup and Disaster Recovery

May cover:

- recovery point objective;
- recovery time objective;
- backups;
- snapshots;
- cross-region copies;
- restore testing;
- failover;
- runbooks.

A disaster-recovery plan should be tested.

---

## Cost Management

May cover:

- pricing models;
- usage;
- budgets;
- alerts;
- tagging;
- reserved capacity;
- savings plans;
- rightsizing;
- idle resources;
- data transfer;
- storage lifecycle.

Cost should be considered during architecture, not only after billing.

---

## FinOps Foundations

May cover:

- visibility;
- allocation;
- optimization;
- accountability;
- forecasting;
- cost ownership;
- engineering trade-offs.

FinOps should connect cost with business and technical value.

---

## Cloud Governance

May cover:

- accounts;
- subscriptions;
- projects;
- resource hierarchy;
- policies;
- naming;
- tagging;
- budgets;
- access;
- audit;
- standards.

Governance should support safe autonomy rather than unnecessary obstruction.

---

## Infrastructure as Code

May cover:

- declarative resources;
- modules;
- state;
- plan;
- apply;
- drift;
- version control;
- review;
- rollback.

Cloud infrastructure should be reproducible and reviewable when practical.

---

## Cloud Architecture

Possible architecture concerns include:

- availability;
- latency;
- data residency;
- security;
- cost;
- scalability;
- recoverability;
- service limits;
- operational complexity;
- vendor dependency.

Architecture decisions should document trade-offs.

---

## Diagnostics

Cloud diagnostics should follow a structured model.

```text
Define the Failed Outcome

↓

Identify the Resource and Scope

↓

Validate Identity and Permissions

↓

Validate Network Path

↓

Validate Configuration and Service State

↓

Review Logs, Metrics and Events

↓

Compare Expected and Actual Architecture

↓

Apply Controlled Change

↓

Validate and Document
```

---

## Diagnostic Evidence

Possible evidence includes:

- resource state;
- audit logs;
- service logs;
- metrics;
- traces;
- identity policies;
- network rules;
- route tables;
- health checks;
- deployment history;
- quotas;
- billing events;
- configuration;
- service status.

Cloud diagnostics should avoid random resource recreation.

---

## Practical Laboratories

Possible laboratories include:

- create a cloud account structure;
- deploy a virtual machine;
- configure object storage;
- create a virtual network;
- create public and private subnets;
- configure identity and roles;
- deploy a managed database;
- publish a container;
- create a serverless function;
- configure monitoring;
- create a budget alert;
- test backup and restore.

Every laboratory should define:

- objective;
- prerequisites;
- provider;
- region;
- expected cost;
- resources;
- steps;
- expected result;
- evidence;
- risk;
- cleanup;
- rollback;
- reflection.

---

## Cost Safety

Before running a cloud laboratory:

- identify billable resources;
- estimate expected cost;
- define cleanup;
- set a budget or alert when possible;
- avoid unnecessary public exposure;
- stop or delete resources after validation;
- confirm that retained resources are intentional.

Educational laboratories should minimize cost risk.

---

## Real Cases

Possible anonymized cases include:

- public resource exposed accidentally;
- service unavailable because of identity policy;
- application unable to reach managed database;
- incorrect security-group rule;
- high cost caused by idle resource;
- backup created but not restorable;
- load balancer health check failing;
- serverless function timing out;
- container unable to pull private image;
- deployment limited by service quota.

Cases should preserve reasoning without exposing customer environments.

---

## Cloud Foundations Learning Path

A future Cloud Foundations path may include:

1. Cloud Concepts;
2. Service and Deployment Models;
3. Regions and Availability Zones;
4. Compute;
5. Storage;
6. Networking;
7. Identity and Access;
8. Managed Services;
9. Observability;
10. Security and Cost;
11. Integration Laboratory;
12. Engineering Reflection.

The path should only become Active after supporting resources are validated.

---

## Provider-specific Content

Provider-specific resources should identify:

- provider;
- service;
- region;
- account structure;
- command-line tool;
- version;
- pricing context;
- cleanup;
- limitations.

Provider terminology should be mapped to general cloud concepts.

---

## Technical Validation

Cloud content should identify, when applicable:

- provider;
- region;
- availability zone;
- service;
- resource type;
- account or project context;
- identity;
- network;
- command-line tool;
- expected cost;
- expected result;
- actual result;
- cleanup;
- limitation.

Sensitive identifiers should be sanitized.

---

## Security

Cloud work may affect:

- public exposure;
- credentials;
- identity;
- data;
- network access;
- billing;
- production availability;
- audit.

Security content should consider:

- least privilege;
- temporary credentials;
- network segmentation;
- encryption;
- secrets;
- logging;
- policy;
- incident response.

---

## Confidentiality

Do not publish:

- access keys;
- account identifiers when sensitive;
- subscription identifiers;
- tenant identifiers;
- private endpoints;
- production topology;
- customer data;
- billing details;
- proprietary policies;
- internal hostnames.

Use placeholders and sanitized examples.

---

## Accessibility

Cloud content should provide:

- architecture diagrams;
- written flow explanations;
- service comparisons;
- command explanations;
- cost notes;
- cleanup steps;
- expected outputs;
- terminology definitions;
- provider-neutral context.

The learner should understand the architecture rather than only click through a console.

---

## Creating New Cloud Content

Before creating a resource, confirm that:

- the learning objective is clear;
- the provider and region are known;
- the expected cost is understood;
- cleanup is defined;
- security and confidentiality were reviewed;
- the example can be validated;
- similar content does not already exist;
- maintenance is realistic.

---

## Review Requirements

Cloud content may require:

### Technical Review

Validates architecture, service configuration and behavior.

### Editorial Review

Validates clarity, terminology and structure.

### Product Review

Validates learner value and progression.

### Repository Review

Validates placement, links and diagram rendering.

### Security Review

Validates identity, exposure, data protection and secrets.

### Cost Review

Validates expected cost, cleanup and billing risk.

### Operational Review

Validates resilience, backup, observability and recovery.

---

## Domain Navigation

Readers should:

1. read this domain entry point;
2. begin with Cloud Foundations;
3. understand service and deployment models;
4. study compute, storage and networking;
5. learn identity and access;
6. practice managed services;
7. evaluate security, resilience and cost;
8. complete controlled laboratories;
9. follow the future Cloud Foundations Learning Path when active.

---

## Maintenance

Review this collection when:

- cloud services change;
- provider terminology changes;
- pricing changes materially;
- command-line tools evolve;
- examples stop working;
- security guidance changes;
- links break;
- laboratories reveal missing cleanup;
- learner feedback reveals gaps.

Outdated resources should be updated, superseded or retired intentionally.

---

## Related Collections

- [Knowledge](../)
- [Networking](../networking/)
- [Containers](../containers/)
- [DevOps](../devops/)
- [Security](../security/)
- [Databases](../databases/)
- [Operating Systems](../operating-systems/)
- [Standards](../../standards/)
- [Guides](../../guides/)
- [Roadmap](../../roadmap/)

---

## Final Statement

Cloud knowledge becomes engineering capability when learners can translate requirements into secure, observable, resilient and cost-aware service architectures.
