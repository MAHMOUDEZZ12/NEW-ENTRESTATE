# ✅ ENTRESTATE — MASTER BUILD PLAN (PHASED)

Entrestate is the AI-Native Operating System for Real Estate.  
This document defines every required step to reach full production status, organized by build phase.

---

## 🩵 PHASE 1 — FOUNDATION (CLOUD + FIREBASE + AI CORE)

### 1.1 Firebase & Cloud Setup
- [ ] Connect Firebase project to repo (`firebase.json`, `firestore.rules`, `apphosting.yaml`).
- [ ] Deploy core structure:
  - `users/{uid}` (profile, brandKit, workspace)
  - `projects_catalog` (public listings)
  - `jobs`, `assets`, `flows`, `marketData`
- [ ] Set up Storage paths with correct permissions.
- [ ] Enable Firestore security rules:
  - Private: `users/{uid}/**`
  - Public: `projects_catalog/**`
  - Readonly: `marketData/**`
- [ ] Add scheduled Functions for data sync, email, WhatsApp updates.

### 1.2 AI Core Integration (Gemini + Vertex)
- [ ] Connect Genkit flows (`src/ai/flows`).
- [ ] Verify connection to Gemini models.
- [ ] Test AI runtime: text → flow → response.
- [ ] Create `ai-core-checker` function to verify keys and models (gemini-pro, vision, text-embedding).
- [ ] Deploy Firestore triggers for AI job orchestration.

### 1.3 GEM (AI Orchestration Engine)
- [ ] Implement GEM as system brain:
  - Manages user events, flow orchestration, intent recognition.
- [ ] GEM must handle:
  - “Intent-to-flow” mapping (natural language → AI flow)
  - Dynamic parameter injection from user brandKit or workspace.
- [ ] Add control interface `/me/gem` to show:
  - Running tasks
  - Pending flows
  - AI resource usage
  - Connected agents (Meta, WhatsApp, Search, Cloud)

---

## 💬 PHASE 2 — WHATSMAP (CONVERSATIONAL CONTROL BRAIN)

### 2.1 Web Interface
- [ ] Build `/whatsmap` page (conversation + actions).
- [ ] Add modular UI components:
  - Quick action cards
  - Project / Developer selectors
  - PDF viewer
- [ ] Display AI job progress via Firestore subscription.

### 2.2 WhatsApp Integration
- [ ] Create `/api/wa/webhook` (GET verify + POST inbound).
- [ ] Create `/api/wa/send` for sending templates/media.
- [ ] Map phone → user UID.
- [ ] Auto-create “agent session” per new WhatsApp number.
- [ ] Enable full WhatsMAP chat → job creation pipeline.

### 2.3 GEM <-> WhatsMAP Bridge
- [ ] Add `plan.gemini.ts` to interpret WhatsMAP text into flows:
  - Example: “Compare Emaar and Sobha → PDF” → 
    Steps: `searchProjects`, `analyze`, `generatePDF`.
- [ ] Add step tracking + replays for user debugging.
- [ ] Store chat history in `users/{uid}/conversations`.

---

## ☁️ PHASE 3 — ENTRESTATE CLOUD (DATA INTELLIGENCE)

### 3.1 Data Ingestion
- [ ] Build ingestion function for portals, ads, and social data.
- [ ] Use Vertex AI Search or BigQuery for indexing.
- [ ] Segment data:
  - Trusted portals
  - Developer announcements
  - Social media signals

### 3.2 Market Library
- [ ] `/api/search?mode=fast|smart|deep`
- [ ] Fast → keyword search.
- [ ] Smart → Gemini interpretation.
- [ ] Deep → predictive / historical analysis.
- [ ] Expose to WhatsMAP + Cloud dashboards.

### 3.3 Cloud Dashboards
- [ ] Market Overview (transactions, developer trends)
- [ ] Project Pipeline (Soon / Now / Delivering)
- [ ] Developer Reputation Index (AI-scored)
- [ ] Project Data Quality Graph (vertex data validator)

---

## 🧠 PHASE 4 — DASHBOARDS (DEV / GEM CONTROL)

### 4.1 DEV Panel (Admin Intelligence)
- [ ] `/me/dev` = Admin Control Center.
- [ ] Features:
  - Project ingestion control.
  - AI key & quota manager.
  - Logs & queue monitor.
  - Re-deploy & sync trigger buttons.
- [ ] Add visual job viewer (`users/jobs` queue).
- [ ] Integrate “DataCloud Admin” panel.

### 4.2 GEM Panel (AI Brain Monitor)
- [ ] `/me/gem` = AI orchestration monitor.
- [ ] Show active flows, steps, duration, and outcomes.
- [ ] Include “flow re-run” and “report issue” actions.
- [ ] Display AI usage logs (model calls, cost estimate, errors).
- [ ] Add “Training Mode” toggle for Human-in-the-Loop (HITL) feedback.

---

## 🧩 PHASE 5 — APPSTORE + SUITES

### 5.1 Appstore (Internal Marketplace)
- [ ] Rename internal `/marketplace` → `/appstore`.
- [ ] List all suites:
  - Meta Suite
  - Listing Portal Pro
  - SuperSeller CRM
  - Reality Designer
- [ ] Add install/uninstall logic to user workspace.
- [ ] Add “App Details” with screenshot, flows used, and required data.

### 5.2 Suite Dashboards
- [ ] Meta Suite → campaign builder + insights.
- [ ] Listing Portal → Bayut + Property Finder sync + report.
- [ ] SuperSeller → CRM pipeline with AI lead scoring.
- [ ] Reality Designer → creative hub for assets.

---

## 🎨 PHASE 6 — CREATIVE + AUTOMATION FLOWS

### 6.1 PDF Renderer
- [ ] Implement `/api/pdf` using puppeteer-core + @sparticuz/chromium.
- [ ] Save to Storage, return signed URL.
- [ ] Link to worker chain: `search → analyze → generatePDF → deliver`.

### 6.2 Meta Ads Launcher
- [ ] Implement `launchMeta.ts` to create campaigns/adsets.
- [ ] Extend to creative uploads.
- [ ] Add campaign summary widget to Meta Suite.

### 6.3 Automated Flows
- [ ] “Flows” Library:
  - prebuilt automations like:
    - “Rebrand Brochure → Landing Page → Video → Deploy”
    - “Ad + CRM → WhatsApp → Follow-up”
- [ ] Add Flow visualizer under `/me/flows`.

---

## 🧱 PHASE 7 — INFRASTRUCTURE & DEPLOYMENT

### 7.1 Next.js & Hosting
- [ ] Fix duplicate routes (`robots.txt`, `sitemap.xml`).
- [ ] Update `next.config.js` → set `outputFileTracingRoot`.
- [ ] Configure Firebase Hosting rewrites for `/api/*`.
- [ ] Optimize static cache and storage serving.

### 7.2 CI/CD
- [ ] Add GitHub Actions:
  - Lint + Build + Test + Deploy
- [ ] Environment auto-injection for Firebase.
- [ ] Function build pipeline for `functions/src`.

---

## 📡 PHASE 8 — TESTING, QA, & OPTIMIZATION

- [ ] Unit test all `/api/*` routes.
- [ ] Integration test: WhatsMAP → PDF → Meta flow.
- [ ] Performance test Firebase queries.
- [ ] UX review for mobile and tablets.
- [ ] Deploy staging → production via GitHub Action.

---

## 🪄 PHASE 9 — EXTENSIONS (OPTIONAL ROADMAP)

- [ ] Public Entrestate Cloud API (market intelligence access).
- [ ] WordPress AI plugin pack.
- [ ] Data monetization & export API.
- [ ] SmartAgent for LinkedIn + Telegram.
- [ ] Developer Performance Scoring Engine (AI + Graph).

---

### ⚙️ STATUS TRACKER
| Phase | Area | Status | Owner |
|-------|------|---------|--------|
| 1 | Firebase + AI Core | 🔧 In Progress | |
| 2 | WhatsMAP Brain | ⏳ Planned | |
| 3 | Data Cloud | ⏳ Planned | |
| 4 | DEV / GEM Panels | ⏳ Planned | |
| 5 | Appstore & Suites | ⏳ Planned | |
| 6 | PDF / Meta Flows | ⏳ Planned | |
| 7 | Infra & CI/CD | ⏳ Planned | |
| 8 | QA & Tests | ⏳ Planned | |
| 9 | Extensions | ⏳ Future | |

---

### Notes
This TODO is the **control panel roadmap**.  
GEM = AI Orchestration layer.  
DEV = Admin Intelligence Panel.  
Both will merge into the Entrestate Master Console.
