import { createServiceApp } from "@mymanager/node-service-kit";
import { ProductController, OrderController } from "./controllers/commerce.controller.js";
import { AuthController } from "./controllers/auth.controller.js";
import { CategoryController } from "./controllers/category.controller.js";
import { CouponController } from "./controllers/coupon.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "commerce-service", 
  jsonLimit: "1mb" 
});

const productController = new ProductController();
const orderController = new OrderController();
const authController = new AuthController();
const categoryController = new CategoryController();
const couponController = new CouponController();

// --- Routes ---

// Public Shop Routes
app.post("/v1/public/auth/signup", (req, res) => authController.signup(req, res));
app.post("/v1/public/auth/login", (req, res) => authController.login(req, res));

app.get("/v1/public/products", 
  (req, res) => {
    const orgId = req.header('X-Org-Id');
    if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });
    (req as any).identity = { orgId };
    return productController.list(req as any, res);
  }
);

app.get("/v1/public/products/:id", 
  (req, res) => {
    const orgId = req.header('X-Org-Id');
    if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });
    (req as any).identity = { orgId };
    return productController.getById(req as any, res);
  }
);

// Private Routes (Admin)
// Products
app.get("/v1/products", 
  identityMiddleware, 
  (req, res) => productController.list(req as any, res)
);

app.post("/v1/products", 
  identityMiddleware, 
  (req, res) => productController.create(req as any, res)
);

app.get("/v1/products/:id",
  identityMiddleware,
  (req, res) => productController.getById(req as any, res)
);

app.patch("/v1/products/:id",
  identityMiddleware,
  (req, res) => productController.update(req as any, res)
);

app.delete("/v1/products/:id",
  identityMiddleware,
  (req, res) => productController.delete(req as any, res)
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

// Categories
app.get("/v1/categories", 
  identityMiddleware, 
  (req, res) => categoryController.getAll(req, res)
);

app.post("/v1/categories", 
  identityMiddleware, 
  (req, res) => categoryController.create(req, res)
);

app.patch("/v1/categories/:id",
  identityMiddleware,
  (req, res) => categoryController.update(req, res)
);

app.delete("/v1/categories/:id",
  identityMiddleware,
  (req, res) => categoryController.delete(req, res)
);

// Coupons
app.get("/v1/coupons", 
  identityMiddleware, 
  (req, res) => couponController.getAll(req, res)
);

app.post("/v1/coupons", 
  identityMiddleware, 
  (req, res) => couponController.create(req, res)
);

app.patch("/v1/coupons/:id",
  identityMiddleware,
  (req, res) => couponController.update(req, res)
);

app.delete("/v1/coupons/:id",
  identityMiddleware,
  (req, res) => couponController.delete(req, res)
);

// Health
app.get("/health", (_req, res) => res.json({ status: "ok", service: "commerce-service (TS)" }));

const port = Number(process.env.PORT || 7060);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "commerce-service listening (Clean Arch TS)");
});
