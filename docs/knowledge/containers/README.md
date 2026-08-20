# Containers

The Containers domain contains technical and educational resources about application packaging, images, containers, registries, networking, storage and container-based workflows.

It connects software development with repeatable execution environments and deployment foundations.

---

## Purpose

This collection exists to help learners understand how containers package applications and dependencies into isolated, reproducible runtime environments.

The domain supports:

- container foundations;
- Docker;
- images;
- containers;
- registries;
- volumes;
- networking;
- Compose;
- build files;
- development environments;
- diagnostics;
- security;
- practical laboratories;
- anonymized case studies.

Container content should connect commands with architecture, lifecycle and operational consequences.

---

## Current Status

**Collection Status:** Active

**Content Stage:** Planned / Early Development

**Primary Release Relationship:** Future Technical Release

**Primary Learning Path:** Containers Foundations — Future

The collection is active as a Knowledge domain.

Its complete curriculum has not yet been released.

---

## Scope

The Containers domain may include:

- container concepts;
- operating-system isolation;
- images;
- layers;
- containers;
- registries;
- Dockerfiles;
- build context;
- volumes;
- bind mounts;
- networking;
- ports;
- environment variables;
- secrets foundations;
- Docker Compose;
- logs;
- lifecycle;
- resource limits;
- security;
- development workflows;
- troubleshooting;
- deployment foundations.

Container orchestration may connect to Cloud and DevOps.

Application implementation belongs primarily to Programming.

---

## Domain Principles

Container content should follow the principles below.

### 1. Understand the Boundary

A container is not a virtual machine.

### 2. Reproducibility

Builds and runtime configuration should be repeatable.

### 3. Immutable Image, Replaceable Container

Application changes should normally produce a new image rather than manual changes inside a running container.

### 4. Explicit Configuration

Ports, volumes, environment variables and dependencies should be visible.

### 5. Minimal Privilege

Containers should not run with unnecessary permissions.

### 6. Persistent Data Awareness

Data that must survive container replacement should use an appropriate persistence strategy.

### 7. Evidence-based Diagnostics

Troubleshooting should inspect container state, logs, networking and configuration.

### 8. Learning by Engineering

Container content should connect:

```text
Application Requirement

↓

Image Definition

↓

Container Runtime

↓

Validation

↓

Operational Evidence

↓

Engineering Reflection
```

---

## Recommended Domain Structure

A mature Containers collection may evolve toward:

```text
containers/
├── README.md
├── fundamentals/
├── docker/
├── images/
├── runtime/
├── storage/
├── networking/
├── compose/
├── security/
├── diagnostics/
├── laboratories/
├── case-studies/
├── diagrams/
├── checklists/
└── references/
```

Subdirectories should be created only when active content requires them.

---

## Core Content Areas

## Container Foundations

Introduces:

- process isolation;
- namespaces;
- control groups;
- image;
- container;
- runtime;
- host;
- registry;
- lifecycle.

The objective is to explain what containers isolate and what they share with the host.

---

## Containers and Virtual Machines

May compare:

- isolation model;
- operating system;
- startup time;
- resource use;
- portability;
- security boundary;
- use case.

The comparison should avoid claiming that one approach always replaces the other.

---

## Docker

May cover:

- Docker Engine;
- Docker CLI;
- Docker Desktop;
- daemon;
- client;
- images;
- containers;
- networks;
- volumes;
- Compose.

Docker content should identify environment and version.

---

## Images

May cover:

- image layers;
- base images;
- tags;
- digests;
- caching;
- size;
- provenance;
- scanning;
- pull;
- push;
- removal.

Tags should not be treated as immutable identifiers.

---

## Containers

May cover:

- creation;
- start;
- stop;
- restart;
- remove;
- inspect;
- logs;
- execution;
- state;
- exit codes.

A stopped container is not the same as a removed container.

---

## Dockerfiles

May cover:

- `FROM`;
- `WORKDIR`;
- `COPY`;
- `RUN`;
- `ENV`;
- `EXPOSE`;
- `CMD`;
- `ENTRYPOINT`;
- multi-stage builds;
- `.dockerignore`.

Dockerfiles should be reviewed for cache behavior, size, security and maintainability.

---

## Build Context

May cover:

- context directory;
- copied files;
- `.dockerignore`;
- secret exposure;
- build cache;
- reproducibility.

A large or unsafe build context can affect performance and confidentiality.

---

## Registries

May cover:

- public registry;
- private registry;
- repository;
- tag;
- digest;
- authentication;
- push;
- pull;
- retention;
- provenance.

Registry credentials should not be committed to the repository.

---

## Volumes

May cover:

- named volumes;
- bind mounts;
- anonymous volumes;
- lifecycle;
- ownership;
- permissions;
- backup;
- restore;
- portability.

Persistent data should not remain only in the writable container layer.

---

## Bind Mounts

May cover:

- host path;
- container path;
- permissions;
- development workflow;
- operating-system differences;
- accidental exposure.

Bind mounts should be explicit and reviewed.

---

## Container Networking

May cover:

- bridge networks;
- host networking;
- port publishing;
- internal DNS;
- container names;
- service communication;
- localhost behavior;
- network isolation.

A container's `localhost` normally refers to the container itself.

---

## Ports

May cover:

- application port;
- container port;
- host port;
- published port;
- exposed port;
- conflicts;
- firewall dependency.

`EXPOSE` alone does not publish a port to the host.

---

## Environment Variables

May cover:

- runtime configuration;
- defaults;
- Compose;
- `.env`;
- secret risk;
- precedence;
- validation.

Environment variables should not be treated as automatically secure.

---

## Secrets Foundations

May cover:

- secret values;
- environment risk;
- mounted secrets;
- external secret managers;
- access control;
- logs;
- image history.

Secrets should never be baked into images.

---

## Docker Compose

May cover:

- services;
- networks;
- volumes;
- environment;
- dependencies;
- health checks;
- profiles;
- lifecycle;
- development stacks.

Compose files should make application dependencies understandable.

---

## Health Checks

May cover:

- process running;
- service ready;
- liveness;
- readiness;
- command;
- interval;
- timeout;
- retries.

A running process does not guarantee a usable service.

---

## Logs

May cover:

- standard output;
- standard error;
- logging drivers;
- application logs;
- rotation;
- correlation;
- sensitive data.

Container logs should support diagnostics without exposing secrets.

---

## Resource Limits

May cover:

- CPU;
- memory;
- process limits;
- restart behavior;
- host capacity;
- failure symptoms.

Limits should be based on observed workload and operational need.

---

## Development Environments

May cover:

- local database;
- application service;
- dependency isolation;
- reproducible setup;
- onboarding;
- disposable environments;
- bind mounts;
- hot reload.

Development convenience should not create production assumptions.

---

## Container Lifecycle

Recommended lifecycle:

```text
Define

↓

Build

↓

Tag

↓

Run

↓

Validate

↓

Observe

↓

Replace

↓

Retire
```

Manual mutation inside a running container should not be the normal deployment method.

---

## Diagnostics

Container diagnostics should follow a structured model.

```text
Define the Symptom

↓

Inspect Container State

↓

Review Exit Code and Logs

↓

Validate Image and Command

↓

Validate Ports and Networks

↓

Validate Mounts and Permissions

↓

Validate Dependencies

↓

Apply Controlled Change

↓

Recreate and Retest
```

---

## Diagnostic Evidence

Possible evidence includes:

- container status;
- exit code;
- logs;
- image tag or digest;
- inspect output;
- port mapping;
- network membership;
- mounted paths;
- environment variables;
- health status;
- resource use;
- host logs;
- application logs.

Evidence should be collected before removing failed containers when practical.

---

## Common Docker Commands

Future command documentation may include:

- `docker version`;
- `docker info`;
- `docker pull`;
- `docker build`;
- `docker image ls`;
- `docker run`;
- `docker ps`;
- `docker logs`;
- `docker inspect`;
- `docker exec`;
- `docker stop`;
- `docker rm`;
- `docker volume`;
- `docker network`;
- `docker compose`.

Each command should include:

- purpose;
- syntax;
- parameters;
- risks;
- expected output;
- rollback;
- real example.

---

## Build Safety

Before building an image:

- review build context;
- configure `.dockerignore`;
- remove secrets;
- use trusted base images;
- pin versions when appropriate;
- minimize unnecessary packages;
- validate the resulting image;
- record the build command.

---

## Runtime Safety

Before running a container:

- review privileges;
- avoid unnecessary root execution;
- verify ports;
- verify mounts;
- verify environment variables;
- define data persistence;
- confirm resource requirements;
- validate network exposure.

---

## Practical Laboratories

Possible laboratories include:

- run a first container;
- inspect container state;
- map a port;
- build a small image;
- use `.dockerignore`;
- mount a volume;
- compare volume and bind mount;
- create a custom network;
- connect an application to PostgreSQL;
- create a Compose stack;
- diagnose a failed container;
- back up a named volume.

Every laboratory should define:

- objective;
- prerequisites;
- host environment;
- commands;
- expected result;
- evidence;
- risk;
- cleanup;
- rollback;
- reflection.

---

## Real Cases

Possible anonymized cases include:

- application unable to reach PostgreSQL;
- incorrect host value inside a container;
- host port conflict;
- missing volume;
- permission failure on bind mount;
- container exits immediately;
- wrong startup command;
- environment variable not loaded;
- image contains outdated dependency;
- data lost after container removal.

Cases should preserve reasoning without exposing real secrets.

---

## Containers Foundations Learning Path

A future Containers Foundations path may include:

1. Container Concepts;
2. Docker Architecture;
3. Images and Containers;
4. Dockerfiles;
5. Volumes;
6. Networking and Ports;
7. Compose;
8. Logs and Diagnostics;
9. Integration Laboratory;
10. Security Foundations;
11. Engineering Reflection.

The path should only become Active after supporting resources are validated.

---

## Integration with Databases

Containerized database content should explain:

- service name;
- internal network;
- port;
- volume;
- initialization;
- credentials;
- health;
- backup;
- restore;
- version.

A database container should not be treated as stateless.

---

## Integration with Applications

Application container content should explain:

- build;
- runtime;
- environment;
- dependency;
- port;
- health check;
- logs;
- graceful shutdown;
- persistent state;
- deployment assumptions.

---

## Technical Validation

Container content should identify, when applicable:

- host operating system;
- Docker version;
- image;
- tag or digest;
- build command;
- runtime command;
- Compose version;
- ports;
- networks;
- volumes;
- environment variables;
- expected result;
- actual result;
- limitation.

Sensitive values should be sanitized.

---

## Security

Container work may affect:

- host access;
- network exposure;
- secrets;
- supply chain;
- image provenance;
- filesystem access;
- privileged execution;
- service availability.

Security content should consider:

- trusted images;
- least privilege;
- read-only filesystems;
- reduced capabilities;
- secret management;
- vulnerability scanning;
- patching;
- runtime isolation.

---

## Confidentiality

Do not publish:

- registry credentials;
- private image names when sensitive;
- tokens;
- `.env` secrets;
- customer configuration;
- production hostnames;
- private repositories;
- proprietary Compose files;
- personal data.

Use safe placeholders and sanitized examples.

---

## Accessibility

Container content should provide:

- architecture diagrams;
- command explanations;
- readable Compose and Dockerfile examples;
- expected output;
- troubleshooting notes;
- terminology definitions;
- host-specific notes.

The learner should understand the lifecycle without depending only on command memorization.

---

## Creating New Container Content

Before creating a resource, confirm that:

- the learning objective is clear;
- the host environment is known;
- the Docker version is relevant;
- the example can be validated;
- persistent data behavior is understood;
- security and confidentiality were reviewed;
- similar content does not already exist;
- maintenance is realistic.

---

## Review Requirements

Container content may require:

### Technical Review

Validates image build, runtime behavior, networking and storage.

### Editorial Review

Validates clarity, terminology and structure.

### Product Review

Validates learner value and progression.

### Repository Review

Validates placement, links and code rendering.

### Security Review

Validates image provenance, privileges, secrets and exposure.

### Operational Review

Validates persistence, recovery and lifecycle procedures.

---

## Domain Navigation

Readers should:

1. read this domain entry point;
2. begin with Container Foundations;
3. learn images and containers;
4. practice Dockerfiles;
5. study volumes and networking;
6. use Compose;
7. diagnose failures;
8. analyze real cases;
9. follow the future Containers Foundations Learning Path when active.

---

## Maintenance

Review this collection when:

- Docker versions change;
- commands become deprecated;
- Compose behavior changes;
- base images become unsupported;
- security guidance evolves;
- examples stop working;
- links break;
- laboratories reveal missing steps;
- learner feedback reveals gaps.

Outdated resources should be updated, superseded or retired intentionally.

---

## Related Collections

- [Knowledge](../)
- [Programming](../programming/)
- [Databases](../databases/)
- [Operating Systems](../operating-systems/)
- [Networking](../networking/)
- [DevOps](../devops/)
- [Cloud](../cloud/)
- [Security](../security/)
- [Standards](../../standards/)
- [Guides](../../guides/)

---

## Final Statement

Container knowledge becomes engineering capability when learners can define reproducible environments, manage lifecycle and persistence, diagnose failures and operate workloads safely.
