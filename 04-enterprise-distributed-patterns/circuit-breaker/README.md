# ⚡ Circuit Breaker Pattern

The Circuit Breaker pattern prevents an application from repeatedly trying to execute an operation that's likely to fail, allowing services to recover without overwhelming downstream resources.

---

## 🏗️ State Machine Diagram

```mermaid
stateDiagram-v2
    [*] --> CLOSED

    CLOSED --> OPEN: Failures > Threshold
    OPEN --> HALF_OPEN: Timeout Expires
    HALF_OPEN --> CLOSED: Test Request Succeeds
    HALF_OPEN --> OPEN: Test Request Fails

    note right of CLOSED
      Normal Operation: Requests flow through.
      Failures counted in sliding window.
    end note

    note right of OPEN
      Circuit Tripped: Requests fail fast immediately
      without calling remote downstream service.
    end note

    note right of HALF_OPEN
      Trial State: Allow single probe request
      to check if downstream recovered.
    end note
```

---

## 💻 Code & Vitest Suite
See [`circuit-breaker.ts`](./circuit-breaker.ts) and [`circuit-breaker.test.ts`](./circuit-breaker.test.ts).
