# 🧩 Microfrontends Architecture

Microfrontends extend microservice architecture principles to the frontend web layer, allowing multiple autonomous engineering teams to independently build, test, and deploy sections of a single web application.

---

## 🏗️ Microfrontend Composition

```mermaid
graph TD
    AppShell[Application Shell / Container App] --> MFE1[Microfrontend 1: Header & Nav (Team Core)]
    AppShell --> MFE2[Microfrontend 2: Product Catalog (Team Search)]
    AppShell --> MFE3[Microfrontend 3: Checkout & Cart (Team Payments)]

    subgraph "Integration Options"
        ModuleFed[Webpack / Vite Module Federation]
        WebComp[Custom Web Components]
        IFrames[Isolated iFrames]
    end
```

---

## 🎯 Integration Strategies

1. **Build-Time Integration**: Packages published as NPM modules. (Simple, but requires container app rebuild for updates).
2. **Run-Time Module Federation**: Dynamic bundle loading at runtime via Webpack/Vite Module Federation. (True independent deployability).
3. **Web Components**: Standard HTML5 custom elements (`<checkout-widget>`) encapsulating shadow DOM styling.
