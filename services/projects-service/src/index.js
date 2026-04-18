import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "projects-service", jsonLimit: "5mb" });

// ─── Projects ─────────────────────────────────────────────────────────────────
app.get("/v1/projects", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, page = 1, limit = 20 } = req.query;
  const where = { orgId, isDeleted: false };
  if (status) where.status = status;
  try {
    const [data, total] = await Promise.all([
      db.project.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit, include: { _count: { select: { boards: true } } } }),
      db.project.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch projects");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/projects/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const project = await db.project.findFirst({ where: { id: req.params.id, orgId, isDeleted: false }, include: { boards: { where: { isDeleted: false } } } });
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json({ data: project });
  } catch (err) {
    logger.error({ err }, "Failed to fetch project");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/projects", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, description, color } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  try {
    const project = await db.project.create({ data: { orgId, createdBy: userId, name, description, color } });
    res.status(201).json({ data: project });
  } catch (err) {
    logger.error({ err }, "Failed to create project");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/projects/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, status, color } = req.body;
  await db.project.updateMany({ where: { id: req.params.id, orgId }, data: { name, description, status, color } });
  res.json({ message: "Updated" });
});

app.delete("/v1/projects/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.project.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Boards ───────────────────────────────────────────────────────────────────
app.get("/v1/projects/:projectId/boards", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const boards = await db.board.findMany({ where: { projectId: req.params.projectId, orgId, isDeleted: false }, orderBy: { createdAt: "asc" } });
    res.json({ data: boards });
  } catch (err) {
    logger.error({ err }, "Failed to fetch boards");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/boards/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const board = await db.board.findFirst({ where: { id: req.params.id, orgId, isDeleted: false }, include: { columns: { where: { isDeleted: false }, include: { cards: { where: { isDeleted: false }, orderBy: { position: "asc" } } }, orderBy: { position: "asc" } } } });
    if (!board) return res.status(404).json({ message: "Not found" });
    res.json({ data: board });
  } catch (err) {
    logger.error({ err }, "Failed to fetch board");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/projects/:projectId/boards", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, description, background } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  try {
    const board = await db.board.create({ data: { orgId, projectId: req.params.projectId, createdBy: userId, name, description, background } });
    res.status(201).json({ data: board });
  } catch (err) {
    logger.error({ err }, "Failed to create board");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/boards/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, background, status } = req.body;
  await db.board.updateMany({ where: { id: req.params.id, orgId }, data: { name, description, background, status } });
  res.json({ message: "Updated" });
});

app.delete("/v1/boards/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.board.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Columns ──────────────────────────────────────────────────────────────────
app.get("/v1/boards/:boardId/columns", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const columns = await db.column.findMany({ where: { boardId: req.params.boardId, orgId, isDeleted: false }, orderBy: { position: "asc" } });
    res.json({ data: columns });
  } catch (err) {
    logger.error({ err }, "Failed to fetch columns");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/boards/:boardId/columns", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, position, color } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  try {
    const col = await db.column.create({ data: { boardId: req.params.boardId, orgId, name, position: position || 0, color } });
    res.status(201).json({ data: col });
  } catch (err) {
    logger.error({ err }, "Failed to create column");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/columns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, position, color } = req.body;
  await db.column.updateMany({ where: { id: req.params.id, orgId }, data: { name, position, color } });
  res.json({ message: "Updated" });
});

app.delete("/v1/columns/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.column.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Cards ────────────────────────────────────────────────────────────────────
app.get("/v1/boards/:boardId/cards", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const cards = await db.card.findMany({ where: { boardId: req.params.boardId, orgId, isDeleted: false, isArchived: false }, orderBy: { position: "asc" } });
    res.json({ data: cards });
  } catch (err) {
    logger.error({ err }, "Failed to fetch cards");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/cards/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const card = await db.card.findFirst({ where: { id: req.params.id, orgId, isDeleted: false }, include: { comments: { where: { isDeleted: false } } } });
    if (!card) return res.status(404).json({ message: "Not found" });
    res.json({ data: card });
  } catch (err) {
    logger.error({ err }, "Failed to fetch card");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/boards/:boardId/cards", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { columnId, title, description, position, dueDate, priority, assignees, labels } = req.body;
  if (!columnId || !title) return res.status(400).json({ message: "columnId and title required" });
  try {
    const card = await db.card.create({ data: { columnId, boardId: req.params.boardId, orgId, createdBy: userId, title, description, position: position || 0, dueDate: dueDate ? new Date(dueDate) : null, priority, assignees: assignees || [], labels: labels || [] } });
    res.status(201).json({ data: card });
  } catch (err) {
    logger.error({ err }, "Failed to create card");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/cards/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { title, description, columnId, position, dueDate, priority, assignees, labels, isArchived } = req.body;
  await db.card.updateMany({ where: { id: req.params.id, orgId }, data: { title, description, columnId, position, dueDate: dueDate !== undefined ? (dueDate ? new Date(dueDate) : null) : undefined, priority, assignees, labels, isArchived } });
  res.json({ message: "Updated" });
});

app.delete("/v1/cards/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.card.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Card Comments ────────────────────────────────────────────────────────────
app.get("/v1/cards/:cardId/comments", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const comments = await db.cardComment.findMany({ where: { cardId: req.params.cardId, orgId, isDeleted: false }, orderBy: { createdAt: "asc" } });
    res.json({ data: comments });
  } catch (err) {
    logger.error({ err }, "Failed to fetch comments");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/cards/:cardId/comments", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: "text required" });
  try {
    const comment = await db.cardComment.create({ data: { cardId: req.params.cardId, orgId, userId, text } });
    res.status(201).json({ data: comment });
  } catch (err) {
    logger.error({ err }, "Failed to create comment");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/v1/cards/:cardId/comments/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.cardComment.updateMany({ where: { id: req.params.id, cardId: req.params.cardId, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Labels ───────────────────────────────────────────────────────────────────
app.get("/v1/labels", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const labels = await db.label.findMany({ where: { orgId }, orderBy: { name: "asc" } });
  res.json({ data: labels });
});

app.post("/v1/labels", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, color } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const label = await db.label.create({ data: { orgId, name, color: color || "#6366f1" } });
  res.status(201).json({ data: label });
});

app.delete("/v1/labels/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.label.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Tasks ────────────────────────────────────────────────────────────────────
app.get("/v1/tasks", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, categoryId, page = 1, limit = 30 } = req.query;
  const where = { orgId, isDeleted: false };
  if (status) where.status = status;
  if (categoryId) where.categoryId = categoryId;
  try {
    const [data, total] = await Promise.all([
      db.task.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.task.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch tasks");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/tasks", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { title, description, status, priority, dueDate, assignees, categoryId } = req.body;
  if (!title) return res.status(400).json({ message: "title required" });
  try {
    const task = await db.task.create({ data: { orgId, createdBy: userId, title, description, status: status || "todo", priority, dueDate: dueDate ? new Date(dueDate) : null, assignees: assignees || [], categoryId: categoryId || null } });
    res.status(201).json({ data: task });
  } catch (err) {
    logger.error({ err }, "Failed to create task");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/tasks/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { title, description, status, priority, dueDate, assignees } = req.body;
  await db.task.updateMany({ where: { id: req.params.id, orgId }, data: { title, description, status, priority, dueDate: dueDate !== undefined ? (dueDate ? new Date(dueDate) : null) : undefined, assignees } });
  res.json({ message: "Updated" });
});

app.delete("/v1/tasks/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.task.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Task Categories ──────────────────────────────────────────────────────────
app.get("/v1/task-categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const categories = await db.taskCategory.findMany({ where: { orgId }, orderBy: { name: "asc" } });
  res.json({ data: categories });
});

app.post("/v1/task-categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, color } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const category = await db.taskCategory.create({ data: { orgId, name, color } });
  res.status(201).json({ data: category });
});

// ─── Templates ────────────────────────────────────────────────────────────────
app.get("/v1/templates", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const templates = await db.projectTemplate.findMany({ where: { OR: [{ orgId }, { isPublic: true }] }, orderBy: { name: "asc" } });
  res.json({ data: templates });
});

app.post("/v1/templates", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, description, structure, isPublic } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const template = await db.projectTemplate.create({ data: { orgId, createdBy: userId, name, description, structure: structure || {}, isPublic: isPublic || false } });
  res.status(201).json({ data: template });
});

app.delete("/v1/templates/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.projectTemplate.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Health ───────────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok", service: "projects-service" }));

const port = Number(process.env.PORT || 8040);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "projects-service listening");
});
