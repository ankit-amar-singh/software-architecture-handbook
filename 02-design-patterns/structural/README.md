# 🔌 Structural Design Patterns

Structural design patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

---

## 🔑 Covered Patterns

| Pattern | Intent | Real-World Use Case |
| :--- | :--- | :--- |
| **Adapter** | Convert the interface of a class into another interface clients expect | Legacy API wrapper, third-party payment gateway normalization |
| **Decorator** | Attach additional responsibilities to an object dynamically | Middleware pipeline, adding logging/caching/compression to streams |
| **Facade** | Provide a unified high-level interface to a set of interfaces in a subsystem | Video transcoding engine wrapper, complex checkout workflow facade |
| **Proxy** | Provide a surrogate or placeholder for another object to control access to it | Virtual Proxy (lazy loading), Protection Proxy (RBAC), Caching Proxy |

---

## 💻 Code & Vitest Suite
See [`structural-patterns.ts`](./structural-patterns.ts) and [`structural-patterns.test.ts`](./structural-patterns.test.ts).
