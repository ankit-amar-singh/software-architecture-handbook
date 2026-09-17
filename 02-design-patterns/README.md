# 🔌 Module 02: Gang of Four (GoF) & Enterprise Design Patterns

Design patterns are refined, standardized solutions to recurring software engineering problems.

---

## 🎯 Master Classification of Design Patterns

```mermaid
graph TD
    Patterns["GoF Design Patterns"] --> Creational["Creational Patterns"]
    Patterns --> Structural["Structural Patterns"]
    Patterns --> Behavioral["Behavioral Patterns"]

    subgraph "Creational Patterns (Object Creation)"
        Creational --> Singleton["Singleton"]
        Creational --> Factory["Factory Method & Abstract Factory"]
        Creational --> Builder["Builder"]
        Creational --> Prototype["Prototype"]
    end

    subgraph "Structural Patterns (Composition & Relationships)"
        Structural --> Adapter["Adapter"]
        Structural --> Decorator["Decorator"]
        Structural --> Facade["Facade"]
        Structural --> Proxy["Proxy"]
        Structural --> Bridge["Bridge / Composite / Flyweight"]
    end

    subgraph "Behavioral Patterns (Algorithms & Responsibility Assignment)"
        Behavioral --> Observer["Observer / Pub-Sub"]
        Behavioral --> Strategy["Strategy"]
        Behavioral --> CoR["Chain of Responsibility"]
        Behavioral --> Command["Command"]
        Behavioral --> State["State Machine"]
    end
```

---

## 📁 Submodule Navigation

- 🏗️ **[Creational Patterns](./creational)**: Object instantiation mechanisms, decoupling creation from usage.
- 🔌 **[Structural Patterns](./structural)**: Object composition, interface adapting, and subsystem facades.
- 🚦 **[Behavioral Patterns](./behavioral)**: Communication, algorithm encapsulation, and state transition management.
