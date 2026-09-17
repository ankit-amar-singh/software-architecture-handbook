# 🎬 Case Study: Netflix Microservices Architecture & Chaos Engineering

## 📌 Context & Problem
In 2008, a major database corruption outage disrupted Netflix DVD shipping operations for 3 days. Realizing that a single monolithic database failure could bring down the entire business, Netflix initiated a 7-year cloud migration to AWS microservices.

## 🛠️ Architectural Solution
Netflix decomposed its monolith into **over 1,000 microservices**:

1. **Database Decentralization**: Replaced monolithic Oracle DB with Cassandra (NoSQL) and DynamoDB, giving each microservice exclusive ownership of its data.
2. **Service Discovery & Resiliency**: Built open-source infrastructure (Eureka for service discovery, Hystrix for circuit breaking, Ribbon for client load balancing).
3. **Chaos Engineering (Chaos Monkey)**: Randomly terminated production microservice instances during business hours to verify auto-scaling and fallback resilience.

## 📈 Key Outcomes & Takeaways
- **Zero Global Outages**: Local service failures (e.g. recommendation engine crash) default gracefully without interrupting video playback.
- **Global Deployment**: Seamless multi-region active-active deployment serving millions of concurrent streams.
