# 🏛️ Software Architecture & Design Patterns Handbook

[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-Unit_Tests-6E9F18?style=for-the-badge&logo=vitest)](https://vitest.dev/)
[![Architecture](https://img.shields.io/badge/Architecture-Enterprise_Patterns-4A90E2?style=for-the-badge)](https://github.com/ankit-amar-singh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

> **The Definitive Senior Architect Reference & Technical Playbook**  
> A comprehensive, production-grade handbook covering Object-Oriented Design (OOP), SOLID Principles, Gang of Four (GoF) Design Patterns, Enterprise Architectural Topologies (Monolith, Microservices, Event-Driven, Serverless, CQRS, Monorepo), Distributed System Resilience Patterns, and Real-World Case Studies with runnable TypeScript implementations and automated tests.

---

## 🗺️ Architectural Learning Roadmap

```mermaid
graph TD
    Root[Software Architecture Handbook] --> Module1[01. Fundamental Principles]
    Root --> Module2[02. Design Patterns Suite]
    Root --> Module3[03. Enterprise Paradigms]
    Root --> Module4[04. Distributed Resilience]
    Root --> Module5[05. Real-World Case Studies]
    Root --> Module6[06. Decision Frameworks]

    subgraph "01. Fundamentals"
        Module1 --> OOP[OOPS Principles]
        Module1 --> SOLID[S.O.L.I.D. Principles]
        Module1 --> DRY[DRY / KISS / YAGNI]
        Module1 --> Comp[Composition vs Inheritance]
        Module1 --> LoD[Law of Demeter]
    end

    subgraph "02. Design Patterns"
        Module2 --> Creational[Creational (Singleton, Factory, Builder, etc.)]
        Module2 --> Structural[Structural (Adapter, Decorator, Facade, Proxy, etc.)]
        Module2 --> Behavioral[Behavioral (Observer, Strategy, Command, State, etc.)]
    end

    subgraph "03. Architecture Paradigms"
        Module3 --> Mono[Monolith & Modular Monolith]
        Module3 --> Micro[Microservices Architecture]
        Module3 --> MonoRepo[Monorepo Architecture]
        Module3 --> EDA[Event-Driven & CQRS]
        Module3 --> Clean[Hexagonal & Clean Architecture]
        Module3 --> MFE[Microfrontends]
    end

    subgraph "04. Distributed Resilience"
        Module4 --> Saga[Saga Pattern (Orchestration/Choreography)]
        Module4 --> Outbox[Transactional Outbox Pattern]
        Module4 --> CB[Circuit Breaker & Rate Limiter]
        Module4 --> Gateway[API Gateway & BFF]
    end

    subgraph "05. Industry Case Studies"
        Module5 --> Shopify[Shopify Modular Monolith]
        Module5 --> Netflix[Netflix Microservices Engine]
        Module5 --> Uber[Uber DOMA Architecture]
        Module5 --> Prime[Amazon Prime Video Monolith Shift]
    end
```

---

## 📚 Master Index & Syllabus

### [01. Fundamental Principles](./01-fundamental-principles/README.md)
- 🧱 **[OOP Foundations](./01-fundamental-principles/01-oops-foundations)**: Encapsulation, Abstraction, Inheritance, Polymorphism.
- 📐 **[SOLID Principles](./01-fundamental-principles/02-solid-principles)**: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
- ⚡ **[DRY, KISS & YAGNI](./01-fundamental-principles/03-dry-kiss-yagni)**: Code duplication refactoring, simplicity enforcement, avoiding over-engineering.
- 🔗 **[Composition over Inheritance](./01-fundamental-principles/04-composition-vs-inheritance)**: Solving the fragile base class problem with delegation & strategy interfaces.
- 🛡️ **[Law of Demeter (LoD)](./01-fundamental-principles/05-law-of-demeter)**: Principle of Least Knowledge, refactoring deep object chaining (`a.getB().getC()`).

### [02. Gang of Four (GoF) Design Patterns](./02-design-patterns/README.md)
- 🏗️ **[Creational Patterns](./02-design-patterns/creational)**: Singleton, Factory Method, Abstract Factory, Builder, Prototype.
- 🔌 **[Structural Patterns](./02-design-patterns/structural)**: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.
- 🚦 **[Behavioral Patterns](./02-design-patterns/behavioral)**: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor.

### [03. Enterprise Architecture Paradigms](./03-architecture-paradigms/README.md)
- 🏢 **[Monolithic Architecture](./03-architecture-paradigms/01-monolithic-architecture)**: Single deployment artifact, monolithic DB, deployment topologies.
- 📦 **[Modular Monolith](./03-architecture-paradigms/02-modular-monolith)**: Domain boundary isolation, module encapsulation, public API contracts (*Shopify Model*).
- ⚙️ **[Microservices Architecture](./03-architecture-paradigms/03-microservices-architecture)**: Service decomposition, database-per-service, inter-service gRPC/REST, OpenTelemetry.
- 🗂️ **[Monorepo Architecture](./03-architecture-paradigms/04-monorepo-architecture)**: Monorepo vs Polyrepo, Turborepo/Nx tooling, atomic commits, remote caching.
- 📡 **[Event-Driven Architecture (EDA)](./03-architecture-paradigms/05-event-driven-architecture)**: Event Brokers (Kafka/RabbitMQ), Pub/Sub, Change Data Capture (CDC), eventual consistency.
- 🏛️ **[Clean / Hexagonal Architecture](./03-architecture-paradigms/06-clean-hexagonal-architecture)**: Ports & Adapters, Domain-Driven Design (DDD), decoupling core domain from frameworks.
- 🔄 **[CQRS & Event Sourcing](./03-architecture-paradigms/07-cqrs-and-event-sourcing)**: Command-Query Responsibility Segregation, immutable event streams, projections.
- ☁️ **[Serverless & Edge Architecture](./03-architecture-paradigms/08-serverless-and-edge)**: FaaS, event-driven triggers, cold start mitigation, edge workers.
- 🧩 **[Microfrontends Architecture](./03-architecture-paradigms/09-microfrontends)**: Webpack Module Federation, iFrames vs Web Components, build-time vs runtime integration.

### [04. Enterprise & Distributed Systems Patterns](./04-enterprise-distributed-patterns/README.md)
- 🔄 **[Saga Pattern](./04-enterprise-distributed-patterns/saga-pattern)**: Distributed transactions across microservices via Orchestration vs Choreography.
- 📬 **[Transactional Outbox Pattern](./04-enterprise-distributed-patterns/transactional-outbox)**: Eliminating dual-write inconsistency between relational DBs and message brokers.
- ⚡ **[Circuit Breaker & Rate Limiter](./04-enterprise-distributed-patterns/circuit-breaker)**: Resiliency state machines (Closed, Open, Half-Open), Token Bucket algorithms.
- 🌐 **[API Gateway & BFF](./04-enterprise-distributed-patterns/api-gateway-and-bff)**: Centralized routing, authentication offloading, Backend-For-Frontend (BFF) pattern.
- 🌳 **[Strangler Fig Pattern](./04-enterprise-distributed-patterns/strangler-fig-pattern)**: Step-by-step incremental migration of legacy monoliths to microservices.
- 🧱 **[Bulkhead Pattern](./04-enterprise-distributed-patterns/bulkhead-and-rate-limiting)**: Thread pool & connection pool fault isolation to prevent cascading outages.

### [05. Real-World Case Studies](./05-real-world-case-studies/README.md)
- 🛍️ **[Shopify’s Modular Monolith](./05-real-world-case-studies/shopify-modular-monolith.md)**: Managing 3M+ lines of Ruby monolith using Packwerk module boundary enforcement.
- 🎬 **[Netflix Microservices Architecture](./05-real-world-case-studies/netflix-microservices-evolution.md)**: Evolution to 1,000+ microservices, Chaos Engineering, and Eureka service discovery.
- 🚗 **[Uber DOMA Architecture](./05-real-world-case-studies/uber-doma-architecture.md)**: Domain-Oriented Microservices Architecture mitigating microservice sprawl.
- 📹 **[Amazon Prime Video Migration](./05-real-world-case-studies/prime-video-microservices-to-monolith.md)**: Moving audio/video quality monitoring from serverless microservices back to monolith process, saving 90% cost.

### [06. Decision Frameworks](./06-decision-frameworks/README.md)
- 📝 **[Architecture Decision Records (ADRs)](./06-decision-frameworks/adr-templates)**: Templates and standards for recording architectural choices.
- 📊 **[Architecture Tradeoff Matrix](./06-decision-frameworks/architecture-comparison-matrix.md)**: Multi-dimensional comparison across scalability, latency, cost, and complexity.
- 🌳 **[Interactive Decision Trees](./06-decision-frameworks/decision-trees)**: Step-by-step flowcharts for selecting architectural paradigms and design patterns.

---

## ⚡ Quick Start & Executable Tests

Every design pattern and code example in this repository includes a **runnable TypeScript implementation** accompanied by **Vitest unit tests**.

### Install Dependencies
```bash
pnpm install
```

### Run All Architectural Tests
```bash
pnpm test
```

### Execute Typechecking
```bash
pnpm run typecheck
```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for details.
