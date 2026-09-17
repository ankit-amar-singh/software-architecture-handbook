# 🚦 Behavioral Design Patterns

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

---

## 🔑 Covered Patterns

| Pattern | Intent | Real-World Use Case |
| :--- | :--- | :--- |
| **Observer / Pub-Sub** | Define a one-to-many dependency between objects so that when one object changes state, all dependents are notified | Event Dispatcher, UI Reactive State, Webhook broadcaster |
| **Strategy** | Define a family of algorithms, encapsulate each one, and make them interchangeable | Shipping rate calculators, Authentication strategies (Passport.js) |
| **Chain of Responsibility** | Pass requests along a chain of handlers | Express / NestJS Middleware pipelines, Security Filter chains |
| **Command** | Encapsulate a request as an object, thereby letting you parameterize clients with different requests | Job Queue processors, Undo/Redo history buffer |
| **State** | Allow an object to alter its behavior when its internal state changes | Order Fulfillment state machine (Pending -> Paid -> Shipped) |

---

## 💻 Code & Vitest Suite
See [`behavioral-patterns.ts`](./behavioral-patterns.ts) and [`behavioral-patterns.test.ts`](./behavioral-patterns.test.ts).
