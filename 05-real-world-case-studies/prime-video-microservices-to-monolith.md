# 📹 Case Study: Amazon Prime Video’s Microservices-to-Monolith Consolidation

## 📌 Context & Problem
Amazon Prime Video built an automated Video Quality Analysis tool designed to inspect stream frames for visual defects. The initial implementation utilized a serverless microservice architecture (AWS Step Functions, AWS Lambda, S3).

At scale, the architecture hit severe cost and performance bottlenecks:
- Thousands of S3 reads/writes per video frame created massive storage IOPS costs.
- Step Functions orchestration state transitions incurred high per-step charges.

## 🛠️ Architectural Solution: Process Consolidation
Prime Video re-architected the solution by **consolidating microservices back into a single process monolith**:

1. Combined frame splitting, media processing, and defect detection into memory-shared threads running on EC2 instances.
2. Replaced S3 bucket data passing with high-speed in-memory buffer transfers.

## 📈 Key Outcomes & Takeaways
- **90% Infrastructure Cost Reduction**: Dramatically reduced AWS bill by eliminating Step Functions overhead and S3 API calls.
- **Pragmatic Architecture Rule**: Microservices are NOT a goal; choose the architecture that minimizes operational overhead and data movement costs.
