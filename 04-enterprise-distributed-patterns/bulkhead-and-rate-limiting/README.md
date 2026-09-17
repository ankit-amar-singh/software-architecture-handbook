# 🧱 Bulkhead & Rate Limiting Patterns

The **Bulkhead Pattern** isolates elements of an application into pools so that if one fails, the others will continue to function (inspired by ship hull bulkheads). **Rate Limiting** caps incoming request rates to protect services from exhaustion.

---

## 💻 Code & Vitest Suite
See [`rate-limiter.ts`](./rate-limiter.ts) and [`rate-limiter.test.ts`](./rate-limiter.test.ts).
