import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "community-service", jsonLimit: "1mb" });

// Posts API
app.get("/v1/posts", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;

  try {
    const posts = await db.post.findMany({
      where: { orgId: orgId, isDeleted: false },
      orderBy: { createdAt: 'desc' }
    });
    res.json({ data: posts });
  } catch (err) {
    logger.error({ err }, "Failed to fetch posts");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/posts", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { text, post_color, attachments, contact_id, group_id } = req.body;

  try {
    const post = await db.post.create({
      data: {
        orgId: orgId,
        userId: userId,
        contactId: contact_id || null,
        groupId: group_id || null,
        text,
        postColor: post_color,
        attachments: attachments || []
      }
    });

    res.status(201).json({ data: post });
  } catch (err) {
    logger.error({ err }, "Failed to create post");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Comments API
app.get("/v1/posts/:postId/comments", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { postId } = req.params;

  try {
    const comments = await db.comment.findMany({
      where: { postId: postId, orgId: orgId, isDeleted: false },
      orderBy: { createdAt: 'asc' }
    });
    res.json({ data: comments });
  } catch (err) {
    logger.error({ err }, "Failed to fetch comments");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/posts/:postId/comments", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { postId } = req.params;
  const { text, contact_id } = req.body;

  try {
    const comment = await db.comment.create({
      data: {
        postId: postId,
        orgId: orgId,
        userId: userId,
        contactId: contact_id || null,
        text
      }
    });

    res.status(201).json({ data: comment });
  } catch (err) {
    logger.error({ err }, "Failed to create comment");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Groups API
app.get("/v1/groups", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const groups = await db.group.findMany({ where: { orgId, isDeleted: false }, include: { _count: { select: { members: true } } }, orderBy: { createdAt: "desc" } });
  res.json({ data: groups });
});

app.post("/v1/groups", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, description, cover_image, privacy } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const group = await db.group.create({
    data: { orgId, createdBy: userId, name, description, coverImage: cover_image, privacy: privacy || "public" }
  });
  await db.groupMember.create({ data: { groupId: group.id, userId, role: "admin" } });
  res.status(201).json({ data: group });
});

app.get("/v1/groups/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const group = await db.group.findFirst({ where: { id: req.params.id, orgId }, include: { members: true } });
  if (!group) return res.status(404).json({ message: "Not found" });
  res.json({ data: group });
});

app.put("/v1/groups/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.group.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { name, description, cover_image, privacy } = req.body;
  const group = await db.group.update({ where: { id: req.params.id }, data: { name, description, coverImage: cover_image, privacy } });
  res.json({ data: group });
});

app.delete("/v1/groups/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.group.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

app.get("/v1/groups/:id/members", requireIdentityContext, async (req, res) => {
  const members = await db.groupMember.findMany({ where: { groupId: req.params.id }, orderBy: { joinedAt: "asc" } });
  res.json({ data: members });
});

app.post("/v1/groups/:id/members", requireIdentityContext, async (req, res) => {
  const { userId } = req.identity;
  const { user_id, role } = req.body;
  const member = await db.groupMember.upsert({
    where: { groupId_userId: { groupId: req.params.id, userId: user_id || userId } },
    create: { groupId: req.params.id, userId: user_id || userId, role: role || "member" },
    update: { role: role || "member" }
  });
  res.status(201).json({ data: member });
});

app.delete("/v1/groups/:id/members/:userId", requireIdentityContext, async (req, res) => {
  await db.groupMember.deleteMany({ where: { groupId: req.params.id, userId: req.params.userId } });
  res.json({ message: "Removed" });
});

// Posts (extended)
app.put("/v1/posts/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const existing = await db.post.findFirst({ where: { id: req.params.id, orgId } });
  if (!existing) return res.status(404).json({ message: "Not found" });
  const { text, post_color, attachments } = req.body;
  const post = await db.post.update({ where: { id: req.params.id }, data: { text, postColor: post_color, attachments } });
  res.json({ data: post });
});

app.delete("/v1/posts/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.post.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

app.post("/v1/posts/:id/like", requireIdentityContext, async (req, res) => {
  await db.post.update({ where: { id: req.params.id }, data: { likesCount: { increment: 1 } } });
  res.json({ message: "Liked" });
});

// Comments (extended)
app.delete("/v1/posts/:postId/comments/:id", requireIdentityContext, async (req, res) => {
  await db.comment.updateMany({ where: { id: req.params.id, postId: req.params.postId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// Badges API
app.get("/v1/badges", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const badges = await db.badge.findMany({ where: { orgId }, orderBy: { name: "asc" } });
  res.json({ data: badges });
});

app.post("/v1/badges", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, icon, points } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const badge = await db.badge.create({ data: { orgId, name, description, icon, points: points || 0 } });
  res.status(201).json({ data: badge });
});

app.post("/v1/badges/:id/award", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { user_id } = req.body;
  if (!user_id) return res.status(400).json({ message: "user_id required" });
  const award = await db.userBadge.create({ data: { badgeId: req.params.id, orgId, userId: user_id, awardedBy: userId } });
  res.status(201).json({ data: award });
});

app.get("/v1/badges/user/:userId", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const awards = await db.userBadge.findMany({ where: { orgId, userId: req.params.userId }, include: { badge: true } });
  res.json({ data: awards });
});

// Health
app.get("/health", (_req, res) => res.json({ status: "ok", service: "community-service" }));

const port = Number(process.env.PORT || 7030);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "community-service listening");
});
