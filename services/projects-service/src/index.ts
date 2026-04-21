import { createServiceApp } from "@mymanager/node-service-kit";
import { ProjectController, BoardController, ColumnController, CardController, TaskController, LabelController } from "./controllers/project.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "projects-service", 
  jsonLimit: "5mb",
  enableCors: false
});
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const projectCtrl = new ProjectController();
const boardCtrl = new BoardController();
const colCtrl = new ColumnController();
const cardCtrl = new CardController();
const taskCtrl = new TaskController();
const labelCtrl = new LabelController();

// --- Projects ---
app.get("/v1/projects", auth, (req, res) => projectCtrl.list(cast(req), res));
app.get("/v1/projects/:id", auth, (req, res) => projectCtrl.get(cast(req), res));
app.post("/v1/projects", auth, (req, res) => projectCtrl.create(cast(req), res));
app.patch("/v1/projects/:id", auth, (req, res) => projectCtrl.update(cast(req), res));
app.delete("/v1/projects/:id", auth, (req, res) => projectCtrl.delete(cast(req), res));

// --- Boards ---
app.get("/v1/projects/:projectId/boards", auth, (req, res) => boardCtrl.listByProject(cast(req), res));
app.get("/v1/boards/:id", auth, (req, res) => boardCtrl.get(cast(req), res));
app.post("/v1/projects/:projectId/boards", auth, (req, res) => boardCtrl.create(cast(req), res));
app.patch("/v1/boards/:id", auth, (req, res) => boardCtrl.update(cast(req), res));
app.delete("/v1/boards/:id", auth, (req, res) => boardCtrl.delete(cast(req), res));

// --- Columns ---
app.get("/v1/boards/:boardId/columns", auth, (req, res) => colCtrl.listByBoard(cast(req), res));
app.post("/v1/boards/:boardId/columns", auth, (req, res) => colCtrl.create(cast(req), res));
app.patch("/v1/columns/:id", auth, (req, res) => colCtrl.update(cast(req), res));
app.delete("/v1/columns/:id", auth, (req, res) => colCtrl.delete(cast(req), res));

// --- Cards ---
app.get("/v1/boards/:boardId/cards", auth, (req, res) => cardCtrl.listByBoard(cast(req), res));
app.get("/v1/cards/:id", auth, (req, res) => cardCtrl.get(cast(req), res));
app.post("/v1/boards/:boardId/cards", auth, (req, res) => cardCtrl.create(cast(req), res));
app.patch("/v1/cards/:id", auth, (req, res) => cardCtrl.update(cast(req), res));
app.delete("/v1/cards/:id", auth, (req, res) => cardCtrl.delete(cast(req), res));

// --- Tasks ---
app.get("/v1/tasks", auth, (req, res) => taskCtrl.list(cast(req), res));
app.post("/v1/tasks", auth, (req, res) => taskCtrl.create(cast(req), res));
app.patch("/v1/tasks/:id", auth, (req, res) => taskCtrl.update(cast(req), res));
app.delete("/v1/tasks/:id", auth, (req, res) => taskCtrl.delete(cast(req), res));

// --- Labels ---
app.get("/v1/labels", auth, (req, res) => labelCtrl.list(cast(req), res));
app.post("/v1/labels", auth, (req, res) => labelCtrl.create(cast(req), res));
app.delete("/v1/labels/:id", auth, (req, res) => labelCtrl.delete(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "projects-service (TS)" }));

const port = Number(process.env.PORT || 8040);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "projects-service listening (Clean Arch TS)"));
