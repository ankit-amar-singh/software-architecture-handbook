# 🚗 Case Study: Uber’s Domain-Oriented Microservices Architecture (DOMA)

## 📌 Context & Problem
As Uber grew, it expanded from a monolith to **over 2,200 microservices**. This massive microservice sprawl introduced extreme complexity:
- Fragmented business logic spread across dozens of small repositories.
- Cascading network latency across multi-hop gRPC calls.
- High cognitive load on engineers trying to trace order flows.

## 🛠️ Architectural Solution: DOMA
Uber introduced **DOMA (Domain-Oriented Microservices Architecture)** to establish order:

1. **Domains**: Grouped microservices into logical Domains (e.g., *Rider*, *Driver*, *Maps*, *Payment*).
2. **Layers**: Implemented strict layered architecture constraints (Gateway -> Core Domain -> Infrastructure).
3. **Gateway Extensions**: Standardized public interface gateways for each Domain to prevent cross-domain microservice spaghetti.

## 📈 Key Outcomes & Takeaways
- **Reduced Microservice Sprawl**: Stabilized microservice count while scaling developer count.
- **Improved Latency & Observability**: Clear domain topology boundaries simplified OpenTelemetry tracing.
