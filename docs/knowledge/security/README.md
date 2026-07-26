# Security

The Security domain contains technical and educational resources about protecting systems, data, identities, applications and infrastructure.

It organizes security knowledge through risk awareness, preventive controls, detection, response and recovery.

---

## Purpose

This collection exists to help learners understand how security decisions affect software, infrastructure, users and operations.

The domain supports:

- security foundations;
- risk;
- threats;
- vulnerabilities;
- identity;
- authentication;
- authorization;
- secrets;
- cryptography foundations;
- network security;
- operating-system security;
- application security;
- cloud security;
- container security;
- backup protection;
- incident response;
- security operations;
- practical laboratories;
- anonymized case studies.

Security content should connect technical controls with realistic threats and responsible behavior.

---

## Current Status

**Collection Status:** Active

**Content Stage:** Planned / Early Development

**Primary Release Relationship:** Future Technical Release

**Primary Learning Path:** Security Foundations — Future

The collection is active as a Knowledge domain.

Its complete curriculum has not yet been released.

---

## Scope

The Security domain may include:

- information security foundations;
- confidentiality;
- integrity;
- availability;
- risk;
- threat modeling;
- vulnerabilities;
- attack surface;
- identity and access;
- authentication;
- authorization;
- passwords;
- multi-factor authentication;
- secrets;
- cryptography foundations;
- endpoint security;
- network security;
- application security;
- database security;
- cloud security;
- container security;
- software supply chain;
- logging;
- monitoring;
- incident response;
- backup protection;
- security awareness;
- secure configuration;
- ethical and legal boundaries.

Advanced offensive-security content should only be introduced with clear educational purpose, authorization and safe-lab boundaries.

---

## Domain Principles

Security content should follow the principles below.

### 1. Authorization before Action

Security testing must occur only in authorized environments.

### 2. Risk before Control

A control should respond to an identified risk.

### 3. Least Privilege

Users, services and systems should receive only the access required.

### 4. Defense in Depth

Security should use multiple complementary controls.

### 5. Secure by Default

Systems should begin from the safest practical configuration.

### 6. Evidence-based Security

Security conclusions should use logs, configuration, testing and validated behavior.

### 7. Recovery

Prevention is not sufficient.

Detection, response and recovery should also be planned.

### 8. Learning by Engineering

Security content should connect:

```text
Asset

↓

Threat

↓

Vulnerability

↓

Risk

↓

Control

↓

Validation

↓

Response and Recovery
```

---

## Recommended Domain Structure

A mature Security collection may evolve toward:

```text
security/
├── README.md
├── fundamentals/
├── risk/
├── identity-and-access/
├── cryptography/
├── endpoint-security/
├── network-security/
├── application-security/
├── database-security/
├── cloud-security/
├── container-security/
├── supply-chain/
├── monitoring/
├── incidents/
├── laboratories/
├── case-studies/
├── diagrams/
├── checklists/
└── references/
```

Subdirectories should be introduced only when active content requires them.

---

## Core Content Areas

## Security Foundations

Introduces:

- assets;
- threats;
- vulnerabilities;
- controls;
- risk;
- attack surface;
- exposure;
- likelihood;
- impact;
- residual risk.

The objective is to create a reliable security vocabulary before tool usage.

---

## Confidentiality, Integrity and Availability

May cover:

- confidentiality;
- integrity;
- availability;
- trade-offs;
- operational examples;
- control selection.

The CIA triad should be connected to real systems rather than memorized in isolation.

---

## Risk

May cover:

- asset value;
- threat;
- vulnerability;
- likelihood;
- impact;
- control;
- residual risk;
- acceptance;
- mitigation;
- transfer;
- avoidance.

Risk statements should identify context and assumptions.

---

## Threat Modeling

May cover:

- system boundaries;
- assets;
- actors;
- trust boundaries;
- attack paths;
- abuse cases;
- mitigations;
- residual risk.

Threat modeling should happen early enough to influence design.

---

## Vulnerabilities

May cover:

- software flaws;
- weak configuration;
- outdated dependencies;
- excessive privilege;
- exposed services;
- weak authentication;
- human error;
- missing validation.

A vulnerability should not be confused with a confirmed compromise.

---

## Attack Surface

May cover:

- services;
- ports;
- users;
- APIs;
- dependencies;
- administrative interfaces;
- cloud resources;
- external integrations.

Reducing attack surface should preserve required functionality.

---

## Identity

May cover:

- human identity;
- service identity;
- device identity;
- federated identity;
- temporary identity;
- lifecycle;
- ownership.

Identity should remain traceable and revocable.

---

## Authentication

May cover:

- passwords;
- passphrases;
- multi-factor authentication;
- certificates;
- tokens;
- biometrics;
- single sign-on;
- session security.

Authentication confirms identity.

It does not define what the identity may access.

---

## Authorization

May cover:

- roles;
- permissions;
- access-control lists;
- policy;
- least privilege;
- separation of duties;
- privilege review.

Authorization should reflect current responsibilities.

---

## Password Security

May cover:

- passphrases;
- password managers;
- reuse;
- storage;
- hashing;
- reset;
- account recovery;
- credential stuffing.

Passwords should never be stored in plaintext.

---

## Multi-factor Authentication

May cover:

- possession factors;
- knowledge factors;
- biometric factors;
- authenticator applications;
- hardware keys;
- recovery codes;
- phishing resistance.

MFA reduces risk but does not remove the need for secure recovery.

---

## Secrets Management

May cover:

- passwords;
- tokens;
- API keys;
- certificates;
- private keys;
- connection strings;
- secret stores;
- rotation;
- revocation;
- audit.

Secrets should not be embedded in source code, images or public documentation.

---

## Cryptography Foundations

May cover:

- encryption;
- hashing;
- digital signatures;
- symmetric encryption;
- asymmetric encryption;
- certificates;
- keys;
- integrity;
- authenticity.

Cryptography content should avoid custom cryptographic design.

---

## Encryption

May cover:

- data at rest;
- data in transit;
- full-disk encryption;
- database encryption;
- transport-layer security;
- key ownership;
- key rotation.

Encryption does not replace authorization or backup.

---

## Hashing

May cover:

- integrity;
- password hashing;
- checksums;
- salting;
- work factors;
- collision resistance.

Fast hashes should not be used directly for password storage.

---

## Certificates and PKI

May cover:

- certificates;
- certificate authorities;
- public keys;
- private keys;
- trust chains;
- revocation;
- expiration;
- TLS.

Certificate validation should include hostname and trust.

---

## Endpoint Security

May cover:

- operating-system updates;
- antivirus;
- endpoint detection;
- local firewall;
- disk encryption;
- application control;
- device hardening;
- secure boot;
- removable media.

Endpoint controls should be maintained and observable.

---

## Network Security

May cover:

- segmentation;
- firewalls;
- secure protocols;
- VPN;
- DNS security;
- wireless security;
- monitoring;
- intrusion detection;
- network-access control.

Network security should connect policy with actual traffic paths.

---

## Application Security

May cover:

- input validation;
- output encoding;
- authentication;
- authorization;
- session management;
- error handling;
- logging;
- dependency management;
- secure configuration;
- secrets.

Application security should be integrated throughout development.

---

## Web Security Foundations

May cover:

- injection;
- cross-site scripting;
- cross-site request forgery;
- insecure direct object references;
- authentication failures;
- session risk;
- security headers.

Examples should remain safe and authorized.

---

## API Security

May cover:

- authentication;
- authorization;
- rate limits;
- validation;
- logging;
- tokens;
- object-level access;
- error messages;
- transport security.

An authenticated API request is not automatically authorized.

---

## Database Security

May cover:

- least privilege;
- roles;
- network exposure;
- connection encryption;
- audit;
- backup protection;
- query safety;
- data masking;
- sensitive data.

Database security should connect to the Databases domain.

---

## Cloud Security

May cover:

- shared responsibility;
- identity;
- network controls;
- encryption;
- audit;
- public exposure;
- policy;
- secrets;
- configuration posture.

Cloud resources should be continuously reviewed for unintended exposure.

---

## Container Security

May cover:

- trusted images;
- image scanning;
- non-root execution;
- capabilities;
- secrets;
- read-only filesystems;
- network exposure;
- runtime monitoring.

Container isolation should not be treated as a complete security boundary.

---

## Supply-chain Security

May cover:

- dependencies;
- packages;
- registries;
- provenance;
- signatures;
- checksums;
- build pipelines;
- malicious updates;
- software bills of materials.

Trust should be verified across the delivery chain.

---

## Patch Management

May cover:

- vulnerability information;
- update priority;
- compatibility;
- maintenance windows;
- rollback;
- validation;
- unsupported software.

Patching should be risk-based and traceable.

---

## Secure Configuration

May cover:

- hardening;
- default credentials;
- unnecessary services;
- open ports;
- permissions;
- logging;
- encryption;
- baseline configuration.

Secure configuration should be documented and validated.

---

## Backups and Security

May cover:

- backup confidentiality;
- integrity;
- access;
- encryption;
- immutability;
- offline copies;
- restore testing;
- ransomware resilience.

A backup can become a security risk when poorly protected.

---

## Logging and Detection

May cover:

- audit logs;
- authentication logs;
- security events;
- centralized logging;
- alerting;
- correlation;
- retention;
- tamper resistance.

Logs should support detection without exposing unnecessary sensitive data.

---

## Incident Response

May cover:

- preparation;
- detection;
- triage;
- containment;
- eradication;
- recovery;
- communication;
- evidence;
- lessons learned.

Incident response should preserve evidence and prioritize safety.

---

## Security Incident Flow

Recommended model:

```text
Detect

↓

Validate

↓

Classify

↓

Contain

↓

Preserve Evidence

↓

Eradicate

↓

Recover

↓

Review and Improve
```

---

## Evidence Handling

Security evidence may include:

- logs;
- alerts;
- files;
- hashes;
- timestamps;
- account activity;
- configuration;
- network events;
- screenshots;
- affected assets.

Evidence should be handled according to authorization, privacy and legal requirements.

---

## Security Awareness

May cover:

- phishing;
- social engineering;
- password reuse;
- suspicious links;
- attachments;
- data handling;
- reporting;
- device safety.

Security awareness should avoid blaming users and instead improve system resilience.

---

## Ethical Boundaries

Security learning should follow:

- explicit authorization;
- safe laboratory scope;
- legal compliance;
- minimal impact;
- no unauthorized access;
- no credential theft;
- no harmful persistence;
- responsible disclosure.

Educational value does not justify unauthorized activity.

---

## Practical Laboratories

Possible laboratories include:

- create a threat model;
- audit local users and privileges;
- enable MFA;
- inspect certificate details;
- identify open services;
- review firewall rules;
- scan a test dependency;
- detect a secret in a repository;
- validate backup encryption;
- investigate a simulated phishing message;
- respond to a simulated incident;
- harden a test service.

Every laboratory should define:

- objective;
- authorization;
- safe environment;
- prerequisites;
- steps;
- expected result;
- evidence;
- risk;
- cleanup;
- rollback;
- reflection.

---

## Real Cases

Possible anonymized cases include:

- password exposed in configuration;
- customer data visible in screenshot;
- service running with excessive privilege;
- backup directory accessible broadly;
- private database port exposed;
- outdated dependency;
- unencrypted local disk;
- user tricked by phishing;
- token committed to repository;
- public cloud resource exposed accidentally.

Cases should preserve lessons without exposing organizations or individuals.

---

## Security Foundations Learning Path

A future Security Foundations path may include:

1. Assets, Threats and Vulnerabilities;
2. Risk;
3. Identity and Access;
4. Passwords and MFA;
5. Cryptography Foundations;
6. Endpoint and Network Security;
7. Application and Database Security;
8. Logging and Detection;
9. Incident Response;
10. Security Laboratory;
11. Engineering Reflection.

The path should only become Active after supporting resources are validated.

---

## Technical Validation

Security content should identify, when applicable:

- authorized environment;
- operating system;
- application;
- network;
- version;
- identity;
- permission;
- control;
- expected behavior;
- actual behavior;
- evidence;
- limitation;
- cleanup;
- rollback.

Sensitive values should be sanitized.

---

## Confidentiality

Do not publish:

- credentials;
- private keys;
- tokens;
- customer data;
- personal data;
- production topology;
- vulnerability details that create avoidable harm;
- private logs;
- internal security controls;
- real incident evidence without authorization.

Use synthetic and anonymized examples.

---

## Accessibility

Security content should provide:

- clear terminology;
- written threat explanations;
- diagrams;
- readable configuration examples;
- expected behavior;
- safe-lab alternatives;
- ethical boundaries;
- reporting guidance.

The learner should understand both the control and the risk it addresses.

---

## Creating New Security Content

Before creating a resource, confirm that:

- the educational objective is clear;
- authorization is explicit;
- the environment is safe;
- the content does not enable avoidable harm;
- confidentiality is protected;
- the example can be validated;
- similar content does not already exist;
- maintenance is realistic.

---

## Review Requirements

Security content may require:

### Technical Review

Validates control behavior, threat accuracy and safe execution.

### Editorial Review

Validates clarity, terminology and responsible framing.

### Product Review

Validates learner value and progression.

### Repository Review

Validates placement, links and rendering.

### Security Review

Validates exposure risk, ethics, authorization and confidentiality.

### Legal or Compliance Review

May be required when content includes regulated data, incident handling or jurisdiction-sensitive topics.

---

## Domain Navigation

Readers should:

1. read this domain entry point;
2. begin with Security Foundations;
3. study risk;
4. learn identity and access;
5. practice secure configuration;
6. study application, network and cloud security;
7. complete controlled laboratories;
8. analyze incident response;
9. follow the future Security Foundations Learning Path when active.

---

## Maintenance

Review this collection when:

- threats evolve;
- security guidance changes;
- vulnerabilities become public;
- tools become obsolete;
- regulations change;
- examples create unintended risk;
- links break;
- laboratories reveal safety gaps;
- learner feedback reveals confusion.

Outdated resources should be updated, superseded or retired intentionally.

---

## Related Collections

- [Knowledge](../)
- [Networking](../networking/)
- [Operating Systems](../operating-systems/)
- [Programming](../programming/)
- [Databases](../databases/)
- [Containers](../containers/)
- [Cloud](../cloud/)
- [DevOps](../devops/)
- [Standards](../../standards/)
- [Guides](../../guides/)

---

## Final Statement

Security knowledge becomes engineering capability when learners can identify risk, apply proportional controls, validate protection, respond to incidents and act within clear ethical and authorized boundaries.
