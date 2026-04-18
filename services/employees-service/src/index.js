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

// ─── Shifts ──────────────────────────────────────────────────────────────────
app.get("/v1/shifts", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, start, end } = req.query;
  const where = { orgId };
  if (employeeId) where.employeeId = employeeId;
  if (start) where.startTime = { gte: new Date(start) };
  if (end) where.endTime = { lte: new Date(end) };
  try {
    const shifts = await db.shift.findMany({ where, orderBy: { startTime: "asc" } });
    res.json({ data: shifts });
  } catch (err) {
    logger.error({ err }, "Failed to fetch shifts");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/shifts", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, startTime, endTime, position, notes, isDraft, shiftName, color } = req.body;
  try {
    const shift = await db.shift.create({
      data: { orgId, employeeId, startTime: new Date(startTime), endTime: new Date(endTime), position, notes, isDraft: isDraft || false, shiftName, color }
    });
    res.status(201).json({ data: shift });
  } catch (err) {
    logger.error({ err }, "Failed to create shift");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/shifts/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { startTime, endTime, position, notes, isDraft, shiftName, color } = req.body;
  try {
    const shift = await db.shift.updateMany({
      where: { id: req.params.id, orgId },
      data: { startTime: startTime ? new Date(startTime) : undefined, endTime: endTime ? new Date(endTime) : undefined, position, notes, isDraft, shiftName, color }
    });
    res.json({ data: shift });
  } catch (err) {
    logger.error({ err }, "Failed to update shift");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/v1/shifts/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.shift.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Salary ───────────────────────────────────────────────────────────────────
app.get("/v1/salary", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId } = req.query;
  const where = { orgId };
  if (employeeId) where.employeeId = employeeId;
  try {
    const salaries = await db.salary.findMany({ where, orderBy: { createdAt: "desc" } });
    res.json({ data: salaries });
  } catch (err) {
    logger.error({ err }, "Failed to fetch salaries");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/salary", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, amount, type, effectiveDate, notes } = req.body;
  try {
    const salary = await db.salary.create({
      data: { orgId, employeeId, amount: Number(amount), type: type || "hourly", effectiveDate: effectiveDate ? new Date(effectiveDate) : new Date(), notes }
    });
    res.status(201).json({ data: salary });
  } catch (err) {
    logger.error({ err }, "Failed to create salary");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/salary/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { amount, type, effectiveDate, notes } = req.body;
  await db.salary.updateMany({ where: { id: req.params.id, orgId }, data: { amount: amount ? Number(amount) : undefined, type, effectiveDate: effectiveDate ? new Date(effectiveDate) : undefined, notes } });
  res.json({ message: "Updated" });
});

app.delete("/v1/salary/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.salary.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Attendance ───────────────────────────────────────────────────────────────
app.get("/v1/attendance", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, date } = req.query;
  const where = { orgId };
  if (employeeId) where.employeeId = employeeId;
  if (date) where.date = new Date(date);
  try {
    const records = await db.attendance.findMany({ where, orderBy: { date: "desc" } });
    res.json({ data: records });
  } catch (err) {
    logger.error({ err }, "Failed to fetch attendance");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/attendance/check-in", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, notes } = req.body;
  try {
    const record = await db.attendance.create({
      data: { orgId, employeeId, date: new Date(), checkIn: new Date(), status: "present", notes }
    });
    res.status(201).json({ data: record });
  } catch (err) {
    logger.error({ err }, "Failed to check in");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/attendance/check-out", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, notes } = req.body;
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const record = await db.attendance.updateMany({
      where: { orgId, employeeId, date: { gte: today }, checkOut: null },
      data: { checkOut: new Date(), notes }
    });
    res.json({ data: record });
  } catch (err) {
    logger.error({ err }, "Failed to check out");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/v1/attendance/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.attendance.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Budgets ──────────────────────────────────────────────────────────────────
app.get("/v1/budgets", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { period } = req.query;
  const where = { orgId };
  if (period) where.period = period;
  try {
    const budgets = await db.budget.findMany({ where, orderBy: { period: "desc" } });
    res.json({ data: budgets });
  } catch (err) {
    logger.error({ err }, "Failed to fetch budgets");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/budgets", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { period, budgetedCents, actualCents, notes } = req.body;
  try {
    const budget = await db.budget.create({ data: { orgId, period, budgetedCents: Number(budgetedCents || 0), actualCents: Number(actualCents || 0), notes } });
    res.status(201).json({ data: budget });
  } catch (err) {
    logger.error({ err }, "Failed to create budget");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/budgets/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { budgetedCents, actualCents, notes } = req.body;
  await db.budget.updateMany({ where: { id: req.params.id, orgId }, data: { budgetedCents: budgetedCents !== undefined ? Number(budgetedCents) : undefined, actualCents: actualCents !== undefined ? Number(actualCents) : undefined, notes } });
  res.json({ message: "Updated" });
});

app.delete("/v1/budgets/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.budget.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Employee Categories ──────────────────────────────────────────────────────
app.get("/v1/categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  try {
    const categories = await db.employeeCategory.findMany({ where: { orgId }, orderBy: { name: "asc" } });
    res.json({ data: categories });
  } catch (err) {
    logger.error({ err }, "Failed to fetch categories");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/categories", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, color } = req.body;
  if (!name) return res.status(400).json({ message: "name required" });
  try {
    const category = await db.employeeCategory.create({ data: { orgId, name, description, color } });
    res.status(201).json({ data: category });
  } catch (err) {
    logger.error({ err }, "Failed to create category");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/categories/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { name, description, color } = req.body;
  await db.employeeCategory.updateMany({ where: { id: req.params.id, orgId }, data: { name, description, color } });
  res.json({ message: "Updated" });
});

app.delete("/v1/categories/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.employeeCategory.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Activity Log ─────────────────────────────────────────────────────────────
app.get("/v1/activity-log", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, page = 1, limit = 50 } = req.query;
  const where = { orgId };
  if (employeeId) where.employeeId = employeeId;
  try {
    const logs = await db.activityLog.findMany({ where, orderBy: { createdAt: "desc" }, skip: (+page - 1) * +limit, take: +limit });
    res.json({ data: logs });
  } catch (err) {
    logger.error({ err }, "Failed to fetch activity logs");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/activity-log", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { employeeId, action, description, metadata } = req.body;
  try {
    const log = await db.activityLog.create({ data: { orgId, employeeId, userId, action, description, metadata: metadata || {} } });
    res.status(201).json({ data: log });
  } catch (err) {
    logger.error({ err }, "Failed to create activity log");
    res.status(500).json({ message: "Internal server error" });
  }
});

// ─── Payroll ──────────────────────────────────────────────────────────────────
app.get("/v1/payroll", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, page = 1, limit = 20 } = req.query;
  const where = { orgId };
  if (status) where.status = status;
  try {
    const [data, total] = await Promise.all([
      db.payroll.findMany({ where, orderBy: { periodStart: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.payroll.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch payroll");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/payroll", requireIdentityContext, async (req, res) => {
  const { orgId, userId } = req.identity;
  const { periodStart, periodEnd, totalAmountCents, status, notes } = req.body;
  try {
    const record = await db.payroll.create({
      data: { orgId, createdBy: userId, periodStart: new Date(periodStart), periodEnd: new Date(periodEnd), totalAmountCents: Number(totalAmountCents || 0), status: status || "draft", notes }
    });
    res.status(201).json({ data: record });
  } catch (err) {
    logger.error({ err }, "Failed to create payroll");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/v1/payroll/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { status, totalAmountCents, notes } = req.body;
  await db.payroll.updateMany({ where: { id: req.params.id, orgId }, data: { status, totalAmountCents: totalAmountCents !== undefined ? Number(totalAmountCents) : undefined, notes } });
  res.json({ message: "Updated" });
});

app.delete("/v1/payroll/:id", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  await db.payroll.deleteMany({ where: { id: req.params.id, orgId } });
  res.json({ message: "Deleted" });
});

// ─── Payroll History ──────────────────────────────────────────────────────────
app.get("/v1/payroll/history", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { employeeId, page = 1, limit = 20 } = req.query;
  const where = { orgId };
  if (employeeId) where.employeeId = employeeId;
  try {
    const [data, total] = await Promise.all([
      db.payrollHistory.findMany({ where, orderBy: { paidAt: "desc" }, skip: (+page - 1) * +limit, take: +limit }),
      db.payrollHistory.count({ where })
    ]);
    res.json({ data, total });
  } catch (err) {
    logger.error({ err }, "Failed to fetch payroll history");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/v1/payroll/history", requireIdentityContext, async (req, res) => {
  const { orgId } = req.identity;
  const { payrollId, employeeId, grossCents, netCents, deductionsCents, paidAt, notes } = req.body;
  try {
    const record = await db.payrollHistory.create({
      data: { orgId, payrollId, employeeId, grossCents: Number(grossCents || 0), netCents: Number(netCents || 0), deductionsCents: Number(deductionsCents || 0), paidAt: paidAt ? new Date(paidAt) : new Date(), notes }
    });
    res.status(201).json({ data: record });
  } catch (err) {
    logger.error({ err }, "Failed to create payroll history");
    res.status(500).json({ message: "Internal server error" });
  }
});

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

const port = Number(process.env.PORT || 7070);
app.listen(port, "0.0.0.0", () => {
    logger.info({ port }, "employees-service listening");
});
