# 🏛️ Clean & Hexagonal Architecture (Ports & Adapters)

Hexagonal Architecture (coined by Alistair Cockburn) and Clean Architecture (Robert C. Martin) isolate core business domain logic from external frameworks, databases, and UI representations.

---

## 🏗️ The Hexagonal Architecture Topology

```mermaid
graph TD
    subgraph "External World (Infrastructure)"
        HTTP[REST / GraphQL Controller]
        CLI[CLI Command]
        DB[(PostgreSQL / MongoDB)]
        Email[SendGrid Email API]
    end

    subgraph "Primary / Driving Ports"
        HTTP -->|Input DTO| OrderPort[IOrderUseCase Port]
        CLI -->|Input DTO| OrderPort
    end

    subgraph "Core Business Domain (Application & Entities)"
        OrderPort --> UseCase[OrderUseCase Application Service]
        UseCase --> Entity[Order Domain Entity]
    end

    subgraph "Secondary / Driven Ports"
        UseCase --> RepoPort[IOrderRepository Port]
        UseCase --> NotifPort[INotificationPort]
    end

    RepoPort --> DB
    NotifPort --> Email
```

---

## 🔑 Dependency Rule
**Dependencies point INWARD towards the Core Domain**. The Core Domain knows NOTHING about HTTP, NestJS, Prisma, TypeORM, SQL, or SendGrid.

---

## 💻 Code & Vitest Suite
See [`clean-architecture.ts`](./clean-architecture.ts) and [`clean-architecture.test.ts`](./clean-architecture.test.ts).
