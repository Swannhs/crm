import { createServiceApp } from "@mymanager/node-service-kit";
import { PostController, CommentController, GroupController } from "./controllers/community.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "community-service", 
  jsonLimit: "1mb" 
});

const postController = new PostController();
const commentController = new CommentController();
const groupController = new GroupController();

const auth = identityMiddleware;
const cast = (req: any) => req as any;

// --- Posts ---
app.get("/v1/posts", auth, (req, res) => postController.list(cast(req), res));
app.post("/v1/posts", auth, (req, res) => postController.create(cast(req), res));
app.put("/v1/posts/:id", auth, (req, res) => postController.update(cast(req), res));
app.delete("/v1/posts/:id", auth, (req, res) => postController.delete(cast(req), res));
app.post("/v1/posts/:id/like", auth, (req, res) => postController.like(cast(req), res));

// --- Comments ---
app.get("/v1/posts/:postId/comments", auth, (req, res) => commentController.list(cast(req), res));
app.post("/v1/posts/:postId/comments", auth, (req, res) => commentController.create(cast(req), res));
app.delete("/v1/posts/:postId/comments/:id", auth, (req, res) => commentController.delete(cast(req), res));

// --- Groups ---
app.get("/v1/groups", auth, (req, res) => groupController.list(cast(req), res));
app.post("/v1/groups", auth, (req, res) => groupController.create(cast(req), res));
app.get("/v1/groups/:id", auth, (req, res) => groupController.get(cast(req), res));
app.put("/v1/groups/:id", auth, (req, res) => groupController.update(cast(req), res));
app.delete("/v1/groups/:id", auth, (req, res) => groupController.delete(cast(req), res));
app.get("/v1/groups/:id/members", auth, (req, res) => groupController.listMembers(cast(req), res));
app.post("/v1/groups/:id/members", auth, (req, res) => groupController.addMember(cast(req), res));
app.delete("/v1/groups/:id/members/:userId", auth, (req, res) => groupController.removeMember(cast(req), res));

// --- Health ---
app.get("/health", (_req, res) => res.json({ status: "ok", service: "community-service (TS)" }));

const port = Number(process.env.PORT || 7050);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "community-service listening (Clean Arch TS)");
});
