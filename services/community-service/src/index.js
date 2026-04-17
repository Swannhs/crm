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

function notImplemented(module, req, res) {
  res.status(501).json({
    message: "API not implemented in microservices yet.",
    module,
    method: req.method,
    path: req.path
  });
}

// Fallback for unimplemented modules
const legacyModules = [
  "community-badges",
  "community-badge-library",
  "community-activity",
  "community-points"
];

for (const module of legacyModules) {
  app.all(`/v1/${module}*`, requireIdentityContext, (req, res) => notImplemented(module, req, res));
}

const port = Number(process.env.PORT || 7030);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "community-service listening");
});
