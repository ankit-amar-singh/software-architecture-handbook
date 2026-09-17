# 📐 S.O.L.I.D. Principles

The SOLID principles are five core software design guidelines established by Robert C. Martin (Uncle Bob) to make software designs more understandable, flexible, and maintainable.

---

## 🎯 Summary Matrix of SOLID Principles

| Letter | Principle | Architectural Intent | Violation Symptom |
| :--- | :--- | :--- | :--- |
| **S** | **Single Responsibility (SRP)** | A class should have one, and only one, reason to change | God Object, high risk of side effects during modifications |
| **O** | **Open/Closed (OCP)** | Open for extension, but closed for modification | Giant `switch`/`if-else` blocks whenever new features are added |
| **L** | **Liskov Substitution (LSP)** | Subtypes must be substitutable for their base types | Throwing `NotImplementedError` or breaking base class contracts |
| **I** | **Interface Segregation (ISP)** | Clients should not be forced to depend on interfaces they do not use | Fat/bloated interfaces forcing dummy method implementations |
| **D** | **Dependency Inversion (DIP)** | High-level modules should not depend on low-level modules; both should depend on abstractions | Hardcoded instantiation (`new PostgresDatabase()`) inside domain services |

---

## 📐 Detailed Breakdown

### 1. Single Responsibility Principle (SRP)
- **Concept**: Each module/class should handle a single part of the functionality provided by the software.
- **Example**: Separating `UserAccount` entity logic, `UserRepository` database access, and `UserNotificationService` email delivery into 3 isolated classes.

### 2. Open/Closed Principle (OCP)
- **Concept**: Extend system behavior by adding new classes, not editing existing code.
- **Example**: Discount engine taking an array of `DiscountStrategy` implementations (`BlackFridayDiscount`, `VIPDiscount`) instead of modifying a master `calculateDiscount()` method.

### 3. Liskov Substitution Principle (LSP)
- **Concept**: Objects of a superclass should be replaceable with objects of its subclasses without breaking application behavior.
- **Classic Violation**: `Square extends Rectangle` where mutating width breaks height constraints.
- **Solution**: Both inherit from `Shape` interface or separate immutable dimension contracts.

### 4. Interface Segregation Principle (ISP)
- **Concept**: Prefer multiple small, client-specific interfaces over a single bloated interface.
- **Example**: Splitting `MultiFunctionDevice` into `Printer`, `Scanner`, and `Fax` interfaces so simple printers don't need to implement unused scanning methods.

### 5. Dependency Inversion Principle (DIP)
- **Concept**: High-level business logic should depend on abstractions (interfaces), not concrete implementations (low-level database/HTTP drivers).
- **Example**: `OrderService` depending on `IPaymentProcessor` interface, injected via constructor.

---

## 💻 Code & Vitest Suite
See [`solid-principles.ts`](./solid-principles.ts) and [`solid-principles.test.ts`](./solid-principles.test.ts).
