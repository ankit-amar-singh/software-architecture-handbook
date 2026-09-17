# 🔄 Module 04: Enterprise & Distributed Resilience Patterns

This module focuses on distributed system failure handling, resilience state machines, transaction saga orchestration, and high-availability patterns.

---

## 🎯 Master Pattern Directory

| Pattern | Architectural Objective | Failure Mode Solved |
| :--- | :--- | :--- |
| **[Saga Pattern](./saga-pattern)** | Maintain eventual data consistency across microservice transactions | Lack of ACID 2PC (Two-Phase Commit) in microservices |
| **[Transactional Outbox](./transactional-outbox)** | Atomically update database and publish events | Dual-write discrepancy (DB succeeds but Kafka publish fails) |
| **[Circuit Breaker](./circuit-breaker)** | Prevent cascading network timeouts during downstream service outages | Thread exhaustion & slow response degradation |
| **[API Gateway & BFF](./api-gateway-and-bff)** | Single entry point for routing, auth, rate limiting, and client DTO shaping | Monolithic client fetching, security exposure |
| **[Strangler Fig](./strangler-fig-pattern)** | Incrementally migrate legacy monolith to microservices | High-risk "Big Bang" rewrite failures |
| **[Bulkhead & Rate Limiting](./bulkhead-and-rate-limiting)** | Isolate resource pools (threads, connections) and cap request rates | Single tenant consuming 100% server capacity |

---

## 💻 Included Runnable Implementations
- ⚡ **[Circuit Breaker State Machine](./circuit-breaker)** (`circuit-breaker.ts` + `circuit-breaker.test.ts`)
- ⏱️ **[Token Bucket Rate Limiter](./bulkhead-and-rate-limiting)** (`rate-limiter.ts` + `rate-limiter.test.ts`)
