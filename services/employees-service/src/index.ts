import { createServiceApp, createRoleContextMiddleware, requireOrgRoles } from "@mymanager/node-service-kit";
import { EmployeeController, ShiftController, AttendanceController, PayrollController } from "./controllers/employee.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "employees-service", jsonLimit: "1mb" });
const auth = [identityMiddleware, createRoleContextMiddleware()];
const readAccess = [...auth, requireOrgRoles(['org_staff', 'org_manager', 'org_admin', 'org_owner'])];
const managerAccess = [...auth, requireOrgRoles(['org_manager', 'org_admin', 'org_owner'])];
const payrollAccess = [...auth, requireOrgRoles(['org_admin', 'org_owner'])];
const cast = (req: any) => req as any;

const empCtrl = new EmployeeController();
const shiftCtrl = new ShiftController();
const attCtrl = new AttendanceController();
const payCtrl = new PayrollController();

app.get("/v1/employees", readAccess, (req, res) => empCtrl.list(cast(req), res));
app.get("/v1/employees/metrics", readAccess, (req, res) => empCtrl.metrics(cast(req), res));
app.get("/v1/employees/:id", readAccess, (req, res) => empCtrl.get(cast(req), res));
app.post("/v1/employees", managerAccess, (req, res) => empCtrl.create(cast(req), res));
app.get("/v1/employee-schedule/get-contacts-with-categories-and-shifts", readAccess, (req, res) => empCtrl.getContactsWithCategoriesAndShifts(cast(req), res));
app.get("/v1/employee-schedule/get-employee-category-schedule-data", readAccess, (req, res) => empCtrl.getContactsWithCategoriesAndShifts(cast(req), res));
app.get("/v1/schedules", readAccess, (req, res) => empCtrl.scheduleList(cast(req), res));
app.post("/v1/schedules", managerAccess, (req, res) => shiftCtrl.create(cast(req), res));
app.get("/v1/salary", readAccess, (req, res) => empCtrl.salaryList(cast(req), res));
app.post("/v1/salary", managerAccess, (req, res) => empCtrl.salaryList(cast(req), res));
app.get("/v1/budgets", readAccess, (req, res) => empCtrl.budgetList(cast(req), res));
app.post("/v1/budgets", managerAccess, (req, res) => empCtrl.budgetList(cast(req), res));
app.get("/v1/categories", readAccess, (req, res) => empCtrl.categoryList(cast(req), res));
app.post("/v1/categories", managerAccess, (req, res) => empCtrl.categoryList(cast(req), res));
app.get("/v1/activity-log", readAccess, (req, res) => empCtrl.activityLog(cast(req), res));

app.get("/v1/shifts", readAccess, (req, res) => shiftCtrl.list(cast(req), res));
app.post("/v1/shifts", managerAccess, (req, res) => shiftCtrl.create(cast(req), res));

app.get("/v1/attendance", readAccess, (req, res) => attCtrl.list(cast(req), res));
app.post("/v1/attendance/check-in", managerAccess, (req, res) => attCtrl.checkIn(cast(req), res));
app.post("/v1/attendance/check-out", managerAccess, (req, res) => attCtrl.checkOut(cast(req), res));

app.get("/v1/payroll", payrollAccess, (req, res) => payCtrl.list(cast(req), res));
app.post("/v1/payroll", payrollAccess, (req, res) => payCtrl.create(cast(req), res));
app.get("/v1/payroll/history", payrollAccess, (req, res) => payCtrl.history(cast(req), res));

app.get("/health", (_req, res) => res.json({ status: "ok", service: "employees-service (TS)" }));

const port = Number(process.env.PORT || 7070);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "employees-service listening (Clean Arch TS)"));
