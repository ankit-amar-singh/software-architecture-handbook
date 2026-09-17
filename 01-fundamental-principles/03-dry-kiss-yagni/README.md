# ⚡ DRY, KISS, and YAGNI Principles

Three indispensable pragmatic software design acronyms that guide clean code composition and prevent code bloat.

---

## 🔑 Concept Breakdown

### 1. DRY (Don't Repeat Yourself)
> *"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."* — Andy Hunt & Dave Thomas (The Pragmatic Programmer)
- **Goal**: Eliminate duplicated domain logic, business rules, and schemas.
- **Caution**: Do not conflate **structural duplication** (two code blocks looking similar by coincidence) with **knowledge duplication** (business logic duplicated). Premature DRY-ing leads to bad abstractions.

### 2. KISS (Keep It Simple, Stupid)
> *"Simplicity is a prerequisite for reliability."* — Edsger W. Dijkstra
- **Goal**: Write code that is straightforward to read and reason about. Avoid clever one-liners or unnecessary design pattern implementations when a simple function suffices.

### 3. YAGNI (You Aren't Gonna Need It)
> *"Always implement things when you actually need them, never when you just foresee that you need them."* — Martin Fowler
- **Goal**: Eliminate speculative generality, unused config parameters, and dead feature flags.

---

## 💻 Code & Vitest Suite
See [`dry-kiss-yagni.ts`](./dry-kiss-yagni.ts) and [`dry-kiss-yagni.test.ts`](./dry-kiss-yagni.test.ts).
