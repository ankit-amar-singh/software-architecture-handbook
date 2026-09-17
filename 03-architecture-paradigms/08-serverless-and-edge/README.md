# ☁️ Serverless & Edge Architecture

Serverless computing allows developers to build applications without managing infrastructure (servers, clusters, OS patching).

---

## 🏗️ Serverless Event-Driven Topology

```mermaid
graph TD
    User[HTTP Request] --> Edge[Cloudflare Worker / Edge Node]
    Edge --> Gateway[API Gateway / Event Router]

    Gateway -->|Trigger| Lambda1[FaaS: Auth Function]
    Gateway -->|Trigger| Lambda2[FaaS: Order Function]

    Lambda2 --> Dynamo[(DynamoDB / Serverless Postgres)]
    Lambda2 --> S3[S3 Storage / R2]
```

---

## ⚖️ Tradeoff Matrix

| Aspect | Benefit / Tradeoff |
| :--- | :--- |
| **Cost Profile** | Pay-per-invocation ($0 when idle) |
| **Scalability** | Instant horizontal scaling to thousands of concurrent executions |
| **Cold Starts** | Initial execution latency when function scales from 0 instances |
| **Vendor Lock-in** | High dependency on cloud provider SDKs (AWS Lambda vs Cloudflare Workers) |
