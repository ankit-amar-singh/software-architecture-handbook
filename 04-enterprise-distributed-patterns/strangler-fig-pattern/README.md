# 🌳 Strangler Fig Migration Pattern

The **Strangler Fig Pattern** (coined by Martin Fowler) describes a strategy for incrementally replacing a legacy monolithic system by creating new microservices around the edges of the legacy app, until the legacy system is eventually "strangled" and decommissioned.

---

## 🏗️ Migration Stages

```mermaid
graph TD
    subgraph "Stage 1: Monolith All Traffic"
        Client1[Client] --> Proxy1[API Router]
        Proxy1 -->|100% Traffic| Legacy1[Legacy Monolith]
    end

    subgraph "Stage 2: Incremental Interception"
        Client2[Client] --> Proxy2[API Router / Gateway]
        Proxy2 -->|80% Traffic| Legacy2[Legacy Monolith]
        Proxy2 -->|20% /orders Route| NewService[New Order Microservice]
    end

    subgraph "Stage 3: Full Monolith Decommission"
        Client3[Client] --> Proxy3[API Router / Gateway]
        Proxy3 --> ServiceA[Order Microservice]
        Proxy3 --> ServiceB[User Microservice]
        Proxy3 --> ServiceC[Billing Microservice]
    end
```

---

## 🔑 Key Rules for Successful Migration
1. **Never attempt a Big Bang Rewrite**: Big Bang rewrites of mature enterprise monoliths fail at an alarmingly high rate due to undocumented edge case business logic.
2. **Intercept at the Gateway Layer**: Use URL routing rules to switch traffic per endpoint path.
3. **Use Data Synchronization**: Mirror database updates during transition phases using Change Data Capture (CDC).
