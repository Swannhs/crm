## 1.Prerequisites

- Node.js 20.x (Recommended)

---

## 2.Installation

#### Using Yarn (Recommended)

```sh
yarn install
yarn dev
```

#### Using Npm

```sh
npm i
npm run dev
```

---

## 3.Mock Server

By default we provide demo data from : `https://api-dev-minimal...`

To set up your local server:

**Guide:** [https://docs.minimals.cc/mock-server](https://docs.minimals.cc/mock-server).

**Resource:** [Download](https://www.dropbox.com/sh/6ojn099upi105tf/AACpmlqrNUacwbBfVdtt2t6va?dl=0).

---

**NOTE:** When copying folders remember to also copy hidden files like .env. This is important because .env files often contain environment variables that are crucial for the application to run correctly.

---

## 4.Docker

The micro-app now supports Docker in both development and production-style modes.

### Development container

This is what the base microservices compose stack uses:

```sh
cd microservices
yarn compose:dev
```

Frontend behavior in dev mode:
- source is bind-mounted into the container
- `next dev` runs on port `3034`
- dependencies live in a Docker volume at `/app/node_modules`

### Production-style container

The frontend now has explicit Dockerfiles for each mode:
- `Dockerfile.dev`: local Docker development with `next dev`
- `Dockerfile.prod`: production build with `next build` + `next start`

Used by:
- `yarn compose:web-test`
- `yarn compose:prod`

---

## Magento frontend integration

The frontend uses `/api/magento/*` for CRM/admin Magento integration.

Magento is the eCommerce source of truth. The frontend should not use custom CRM shop-service APIs for catalog, cart, checkout, orders, payments, inventory, shipping, tax, or promotions.

Admin Magento integration route:
- `/integrations/magento`

Canonical API base:
- `/api/magento`

Deprecated aliases:
- `/api/shop`
- `/api/integrations/magento`
