# 🧱 Module 01: Fundamental Principles of Software Engineering

This module provides an exhaustive architectural reference on foundational object-oriented design and clean code engineering principles.

---

## 🎯 Overview of Core Principles

| Principle | Summary | Primary Benefit |
| :--- | :--- | :--- |
| **[OOP Foundations](./01-oops-foundations)** | Encapsulation, Abstraction, Inheritance, and Polymorphism | Domain modeling and code reusability |
| **[SOLID Principles](./02-solid-principles)** | S.O.L.I.D. (SRP, OCP, LSP, ISP, DIP) | Maintainability, extensibility, testability |
| **[DRY / KISS / YAGNI](./03-dry-kiss-yagni)** | Don't Repeat Yourself, Keep It Simple, You Aren't Gonna Need It | Reducing complexity & code duplication |
| **[Composition Over Inheritance](./04-composition-vs-inheritance)** | Favor object composition & delegation over rigid class hierarchies | Avoiding fragile base class coupling |
| **[Law of Demeter](./05-law-of-demeter)** | Principle of Least Knowledge: talk only to your immediate friends | Reducing deep coupling & tight navigation |

---

## 🚀 Key Takeaways & Architecture Guidelines

1. **Abstractions should be stable**: High-level policies should not depend on low-level volatile detail (Dependency Inversion).
2. **Encapsulate what varies**: Identify aspects of your application that change and separate them from what stays the same (Open/Closed Principle).
3. **Prefer Interfaces to Classes**: Program to an interface, not an implementation.
4. **Avoid Premature Abstraction**: YAGNI dictates building only what is required today while keeping architecture extensible for tomorrow.
