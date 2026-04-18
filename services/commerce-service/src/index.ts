import { createServiceApp } from "@mymanager/node-service-kit";
import { ProductController, OrderController } from "./controllers/commerce.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "commerce-service", 
  jsonLimit: "1mb" 
});

const productController = new ProductController();
const orderController = new OrderController();

// --- Routes ---

// Products
app.get("/v1/products", 
  identityMiddleware, 
  (req, res) => productController.list(req as any, res)
);

app.post("/v1/products", 
  identityMiddleware, 
  (req, res) => productController.create(req as any, res)
);

// Orders
app.get("/v1/orders", 
  identityMiddleware, 
  (req, res) => orderController.list(req as any, res)
);

app.post("/v1/orders", 
  identityMiddleware, 
  (req, res) => orderController.create(req as any, res)
);

// Health
app.get("/health", (_req, res) => res.json({ status: "ok", service: "commerce-service (TS)" }));

const port = Number(process.env.PORT || 7060);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "commerce-service listening (Clean Arch TS)");
});
