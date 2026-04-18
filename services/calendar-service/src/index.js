import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "calendar-service", jsonLimit: "2mb" });

// ─── Calendars ────────────────────────────────────────────────────────────────
app.get("/v1/calendars", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  try {
    const calendars = await db.calendar.findMany({ where: { orgId, userId }, orderBy: { name: "asc" } });
    res.json({ data: calendars });
  } catch (err) {
    logger.error({ err }, "Failed to fetch calendars");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/calendars", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, color, isDefault, provider } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  try {
    const calendar = await db.calendar.create({ data: { orgId, userId, name, color: color || "#6366f1", isDefault: isDefault || false, provider } });
    res.status(201).json({ data: calendar });
  } catch (err) {
    logger.error({ err }, "Failed to create calendar");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/calendars/:id", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { name, color, isDefault, isVisible } = req.body;
  await db.calendar.updateMany({ where: { id: req.params.id, orgId, userId }, data: { name, color, isDefault, isVisible } });
  res.json({ message: "Updated" });
});

app.delete("/v1/calendars/:id", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  await db.calendar.deleteMany({ where: { id: req.params.id, orgId, userId } });
  res.json({ message: "Deleted" });
});

// ─── Calendar Settings ────────────────────────────────────────────────────────
app.get("/v1/calendar-settings", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const settings = await db.calendarSettings.findUnique({ where: { orgId } });
    res.json({ data: settings || { orgId, timezone: "UTC", weekStart: 0, timeFormat: "12h", defaultView: "month" } });
  } catch (err) {
    logger.error({ err }, "Failed to fetch calendar settings");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/calendar-settings", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { timezone, weekStart, timeFormat, defaultView, theme } = req.body;
  try {
    const settings = await db.calendarSettings.upsert({
      where: { orgId },
      create: { orgId, timezone, weekStart, timeFormat, defaultView, theme: theme || {} },
      update: { timezone, weekStart, timeFormat, defaultView, theme }
    });
    res.json({ data: settings });
  } catch (err) {
    logger.error({ err }, "Failed to update calendar settings");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Events ───────────────────────────────────────────────────────────────────
app.get("/v1/events", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { calendarId, categoryId, start, end, page = 1, limit = 100 } = req.query;
  const where = { orgId, isDeleted: false };
  if (calendarId) where.calendarId = calendarId;
  if (categoryId) where.categoryId = categoryId;
  if (start) where.startDate = { gte: new Date(start) };
  if (end) where.endDate = { lte: new Date(end) };
  try {
    const [data, total] = await Promise.all([
      db.event.findMany({ where, orderBy: { startDate: "asc" }, skip: (+page - 1) * +limit, take: +limit, include: { category: true } }),
      db.event.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch events");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/events/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const event = await db.event.findFirst({ where: { id: req.params.id, orgId, isDeleted: false }, include: { category: true, scheduleItems: true } });
    if (!event) return res.status(404).json({ message: "Not found" });
    res.json({ data: event });
  } catch (err) {
    logger.error({ err }, "Failed to fetch event");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/events", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { title, description, location, startDate, endDate, allDay, calendarId, categoryId, color, attendees, recurrence, isRecurring } = req.body;
  if (!title || !startDate || !endDate) return res.status(400).json({ message: "title, startDate, endDate required" });
  try {
    const event = await db.event.create({
      data: { orgId, createdBy: userId, title, description, location, startDate: new Date(startDate), endDate: new Date(endDate), allDay: allDay || false, calendarId: calendarId || null, categoryId: categoryId || null, color, attendees: attendees || [], recurrence: recurrence || {}, isRecurring: isRecurring || false }
    });
    res.status(201).json({ data: event });
  } catch (err) {
    logger.error({ err }, "Failed to create event");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/v1/events/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { title, description, location, startDate, endDate, allDay, color, status, attendees, categoryId } = req.body;
  await db.event.updateMany({ where: { id: req.params.id, orgId }, data: { title, description, location, startDate: startDate ? new Date(startDate) : undefined, endDate: endDate ? new Date(endDate) : undefined, allDay, color, status, attendees, categoryId } });
  res.json({ message: "Updated" });
});

app.delete("/v1/events/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.event.updateMany({ where: { id: req.params.id, orgId }, data: { isDeleted: true } });
  res.json({ message: "Deleted" });
});

// ─── Event Schedule ───────────────────────────────────────────────────────────
app.get("/v1/events/:eventId/schedule", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const items = await db.eventScheduleItem.findMany({ where: { eventId: req.params.eventId, orgId }, orderBy: { startTime: "asc" } });
    res.json({ data: items });
  } catch (err) {
    logger.error({ err }, "Failed to fetch schedule");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/events/:eventId/schedule", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { title, startTime, endTime, speaker, location, description } = req.body;
  if (!title || !startTime || !endTime) return res.status(400).json({ message: "title, startTime, endTime required" });
  try {
    const item = await db.eventScheduleItem.create({ data: { eventId: req.params.eventId, orgId, title, startTime: new Date(startTime), endTime: new Date(endTime), speaker, location, description } });
    res.status(201).json({ data: item });
  } catch (err) {
    logger.error({ err }, "Failed to create schedule item");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/v1/events/:eventId/schedule/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.eventScheduleItem.deleteMany({ where: { id: req.params.id, eventId: req.params.eventId, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Event Categories ─────────────────────────────────────────────────────────
app.get("/v1/event-categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const categories = await db.eventCategory.findMany({ where: { orgId }, orderBy: { name: "asc" } });
  res.json({ data: categories });
});

app.post("/v1/event-categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, color, icon } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  const category = await db.eventCategory.create({ data: { orgId, name, color: color || "#6366f1", icon } });
  res.status(201).json({ data: category });
});

app.delete("/v1/event-categories/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.eventCategory.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Health ───────────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => res.json({ status: "ok", service: "calendar-service" }));

const port = Number(process.env.PORT || 8050);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "calendar-service listening");
});
