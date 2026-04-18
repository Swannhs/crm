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

// ─── Follows ──────────────────────────────────────────────────────────────────
app.get("/v1/follows/following", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const records = await db.follow.findMany({ where: { orgId, followerId: userId }, orderBy: { createdAt: "desc" } });
  res.json({ data: records });
});

app.get("/v1/follows/followers", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const records = await db.follow.findMany({ where: { orgId, followingId: userId }, orderBy: { createdAt: "desc" } });
  res.json({ data: records });
});

app.post("/v1/follows", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { following_id } = req.body;
  if (!following_id) return res.status(400).json({ message: "following_id required" });
  const record = await db.follow.upsert({
    where: { orgId_followerId_followingId: { orgId, followerId: userId, followingId: following_id } },
    create: { orgId, followerId: userId, followingId: following_id },
    update: {}
  });
  res.status(201).json({ data: record });
});

app.delete("/v1/follows", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { following_id } = req.body;
  if (!following_id) return res.status(400).json({ message: "following_id required" });
  await db.follow.deleteMany({ where: { orgId, followerId: userId, followingId: following_id } });
  res.json({ message: "Unfollowed" });
});

// ─── Activity ─────────────────────────────────────────────────────────────────
app.get("/v1/activity", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { page = 1, limit = 30 } = req.query;
  const records = await db.communityActivity.findMany({ where: { orgId }, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit });
  res.json({ data: records });
});

app.post("/v1/activity", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { action, entityType, entityId, description } = req.body;
  const record = await db.communityActivity.create({ data: { orgId, userId, action, entityType, entityId, description } });
  res.status(201).json({ data: record });
});

// ─── Points ───────────────────────────────────────────────────────────────────
app.get("/v1/points", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { userId } = req.query;
  const where = { orgId };
  if (userId) where.userId = userId;
  const records = await db.pointRecord.findMany({ where, orderBy: { createdAt: "desc" } });
  const total = records.reduce((sum, r) => sum + r.points, 0);
  res.json({ data: records, total });
});

app.post("/v1/points", requireIdentityContext, async (req, res) => {
  const { orgId, userId: awardedBy } = req.identity;
  const { user_id, points, reason } = req.body;
  if (!user_id || !points) return res.status(400).json({ message: "user_id and points required" });
  const record = await db.pointRecord.create({ data: { orgId, userId: user_id, points: Number(points), reason, awardedBy } });
  res.status(201).json({ data: record });
});

// ─── Settings ─────────────────────────────────────────────────────────────────
app.get("/v1/settings", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const settings = await db.communitySettings.findFirst({ where: { orgId } });
  res.json({ data: settings || { orgId, features: {}, theme: {} } });
});

app.put("/v1/settings", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { features, theme, name, description, coverImage } = req.body;
  const settings = await db.communitySettings.upsert({
    where: { orgId },
    create: { orgId, features: features || {}, theme: theme || {}, name, description, coverImage },
    update: { features, theme, name, description, coverImage }
  });
  res.json({ data: settings });
});

// ─── Profile ──────────────────────────────────────────────────────────────────
app.get("/v1/profile/:userId", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const profile = await db.communityProfile.findFirst({ where: { orgId, userId: req.params.userId } });
  if (!profile) return res.status(404).json({ message: "Profile not found" });
  res.json({ data: profile });
});

app.put("/v1/profile", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { bio, avatar, displayName, links } = req.body;
  const profile = await db.communityProfile.upsert({
    where: { orgId_userId: { orgId, userId } },
    create: { orgId, userId, bio, avatar, displayName, links: links || [] },
    update: { bio, avatar, displayName, links }
  });
  res.json({ data: profile });
});

// ─── Community Events ─────────────────────────────────────────────────────────
app.get("/v1/events", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { page = 1, limit = 20 } = req.query;
  const [data, total] = await Promise.all([
    db.communityEvent.findMany({ where: { orgId, isDeleted: false }, orderBy: { startDate: "asc" }, skip: (+page - 1) * +limit, take: +limit }),
    db.communityEvent.count({ where: { orgId, isDeleted: false } })
  ]);
  res.json({ data, total });
});

app.post("/v1/events", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { title, description, startDate, endDate, location, coverImage } = req.body;
  if (!title || !startDate) return res.status(400).json({ message: "title and startDate required" });
  const event = await db.communityEvent.create({ data: { orgId, createdBy: userId, title, description, startDate: new Date(startDate), endDate: endDate ? new Date(endDate) : null, location, coverImage } });
  res.status(201).json({ data: event });
});

app.put("/v1/events/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { title, description, startDate, endDate, location, coverImage } = req.body;
  await db.communityEvent.updateMany({ where: { id: req.params.id, orgId }, data: { title, description, startDate: startDate ? new Date(startDate) : undefined, endDate: endDate ? new Date(endDate) : undefined, location, coverImage } });
  res.json({ message: "Updated" });
});

app.delete("/v1/events/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.communityEvent.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Community Members ────────────────────────────────────────────────────────
app.get("/v1/members", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, page = 1, limit = 30 } = req.query;
  const where = { orgId };
  if (status) where.status = status;
  const [data, total] = await Promise.all([
    db.communityMember.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
    db.communityMember.count({ where })
  ]);
  res.json({ data, total });
});

app.post("/v1/members/invite", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { email, contactId, role } = req.body;
  if (!email && !contactId) return res.status(400).json({ message: "email or contactId required" });
  const member = await db.communityMember.create({ data: { orgId, invitedBy: userId, email, contactId, role: role || "member", status: "invited" } });
  res.status(201).json({ data: member });
});

app.put("/v1/members/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, role } = req.body;
  await db.communityMember.updateMany({ where: { id: req.params.id, orgId }, data: { status, role } });
  res.json({ message: "Updated" });
});

app.delete("/v1/members/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.communityMember.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Removed" });
});

const port = Number(process.env.PORT || 7030);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "community-service listening");
});
