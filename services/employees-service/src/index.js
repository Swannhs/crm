import { createServiceApp, requireIdentityContext } from "@mymanager/node-service-kit";
import { db } from "./db.js";

const { app, logger } = createServiceApp({ serviceName: "employees-service", jsonLimit: "1mb" });

// Employees CRUD
app.get("/v1/employees", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const employees = await db.employee.findMany({
      where: { orgId },
      include: { availabilities: true }
    });
    res.json({ data: employees });
  } catch (err) {
    logger.error({ err }, "Failed to fetch employees");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/employees", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { userId, contactId, jobTitle, department, salary } = req.body;

  try {
    const employee = await db.employee.create({
      data: {
        orgId,
        userId,
        contactId,
        jobTitle,
        department,
        salary: salary || 0,
        status: "active"
      }
    });
    res.status(201).json({ data: employee });
  } catch (err) {
    logger.error({ err }, "Failed to create employee");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/v1/employees/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const employee = await db.employee.findUnique({
      where: { id: req.params.id, orgId },
      include: { availabilities: true, timeOffRequests: true, schedules: true }
    });
    if (!employee) return res.status(404).json({ message: "Employee not found" });
    res.json({ data: employee });
  } catch (err) {
    logger.error({ err }, "Failed to fetch employee");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Availability
app.post("/v1/employees/:id/availability", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { dayOfWeek, startTime, endTime } = req.body;

  try {
    const availability = await db.availability.create({
      data: {
        employeeId: req.params.id,
        orgId,
        dayOfWeek,
        startTime,
        endTime
      }
    });
    res.status(201).json({ data: availability });
  } catch (err) {
    logger.error({ err }, "Failed to set availability");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Time Off
app.post("/v1/employees/:id/time-off", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { startDate, endDate, type, reason } = req.body;

  try {
    const request = await db.timeOff.create({
      data: {
        employeeId: req.params.id,
        orgId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        type,
        reason,
        status: "pending"
      }
    });
    res.status(201).json({ data: request });
  } catch (err) {
    logger.error({ err }, "Failed to create time off request");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Schedule
app.get("/v1/schedules", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { start, end } = req.query;

  try {
    const filter = { orgId };
    if (start && end) {
      filter.startTime = { gte: new Date(start) };
      filter.endTime = { lte: new Date(end) };
    }

    const schedules = await db.schedule.findMany({
      where: filter,
      include: { employee: true }
    });
    res.json({ data: schedules });
  } catch (err) {
    logger.error({ err }, "Failed to fetch schedules");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/schedules", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, startTime, endTime, position, notes } = req.body;

  try {
    const schedule = await db.schedule.create({
      data: {
        employeeId,
        orgId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        position,
        notes
      }
    });
    res.status(201).json({ data: schedule });
  } catch (err) {
    logger.error({ err }, "Failed to create schedule");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Metrics
app.get("/v1/employees/metrics", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { start, end } = req.query;

  try {
    const metrics = await db.workedEmployee.findMany({
      where: {
        orgId,
        date: {
          gte: start ? new Date(start) : undefined,
          lte: end ? new Date(end) : undefined
        }
      },
      include: { employee: true }
    });
    res.json({ data: metrics });
  } catch (err) {
    logger.error({ err }, "Failed to fetch metrics");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

const port = Number(process.env.PORT || 7070);
app.listen(port, "0.0.0.0", () => {
    logger.info({ port }, "employees-service listening");
});
