# 🏗️ Creational Design Patterns

Creational design patterns abstract the instantiation process. They help make a system independent of how its objects are created, composed, and represented.

---

## 🔑 Covered Patterns

| Pattern | Intent | Real-World Use Case |
| :--- | :--- | :--- |
| **Singleton** | Ensure a class has only one instance, providing a global point of access | Logger service, Connection Pool, Global Config Manager |
| **Factory Method** | Define an interface for creating an object, but let subclasses decide which class to instantiate | Cross-platform UI widget creation, Payment Gateway instantiator |
| **Abstract Factory** | Provide an interface for creating families of related objects without specifying concrete classes | Multi-cloud storage client (AWS S3 vs GCP Storage vs Azure Blob) |
| **Builder** | Separate complex object construction from its representation | SQL Query Builder (`select().where().build()`), HTTP Request Builder |
| **Prototype** | Specify the kinds of objects to create using a prototypical instance, cloning existing objects | Cloning heavy document objects, game entity spawner |

---

## 💻 Code & Vitest Suite
See [`creational-patterns.ts`](./creational-patterns.ts) and [`creational-patterns.test.ts`](./creational-patterns.test.ts).
