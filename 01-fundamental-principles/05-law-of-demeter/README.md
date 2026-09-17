# 🛡️ Law of Demeter (LoD)

> *"Principle of Least Knowledge: Each unit should have only limited knowledge about other units: only units 'closely' related to the current unit."*

---

## 🎯 What is the Law of Demeter?

The Law of Demeter (LoD) is a design guideline for developing software, particularly object-oriented programs. In its general form, the LoD is a specific case of loose coupling.

### The "Don't Talk to Strangers" Rule
A method `m` of an object `O` may only invoke methods of:
1. `O` itself.
2. `m`'s parameters.
3. Any objects created/instantiated within `m`.
4. `O`'s direct component objects (fields).

### The "Train Wreck" Code Smell
```typescript
// ❌ Violation: Deep navigation through object graphs ("Train Wreck")
const zipCode = customer.getOrders()[0].getShippingAddress().getZipCode();
```
- **Problem**: `customer` caller must know the internal structure of `Order`, `Address`, and `ZipCode`. Any structural change anywhere in the chain breaks caller code.
- **Refactoring (LoD)**: Delegate operation down the component chain.

```typescript
// ✅ Compliant: Delegated call to immediate friend
const zipCode = customer.getLatestOrderShippingZipCode();
```

---

## 💻 Code & Vitest Suite
See [`law-of-demeter.ts`](./law-of-demeter.ts) and [`law-of-demeter.test.ts`](./law-of-demeter.test.ts).
