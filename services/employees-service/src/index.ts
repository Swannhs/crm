import { createServiceApp } from "@mymanager/node-service-kit";
import { EmployeeController, ShiftController, AttendanceController, PayrollController } from "./controllers/employee.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ serviceName: "employees-service", jsonLimit: "1mb" });
const auth = identityMiddleware;
const cast = (req: any) => req as any;

const empCtrl = new EmployeeController();
const shiftCtrl = new ShiftController();
const attCtrl = new AttendanceController();
const payCtrl = new PayrollController();

app.get("/v1/employees", auth, (req, res) => empCtrl.list(cast(req), res));
app.get("/v1/employees/:id", auth, (req, res) => empCtrl.get(cast(req), res));
app.post("/v1/employees", auth, (req, res) => empCtrl.create(cast(req), res));
app.get("/v1/employee-schedule/get-contacts-with-categories-and-shifts", auth, (req, res) => empCtrl.getContactsWithCategoriesAndShifts(cast(req), res));
app.get("/v1/employee-schedule/get-employee-category-schedule-data", auth, (req, res) => empCtrl.getContactsWithCategoriesAndShifts(cast(req), res));

app.get("/v1/shifts", auth, (req, res) => shiftCtrl.list(cast(req), res));
app.post("/v1/shifts", auth, (req, res) => shiftCtrl.create(cast(req), res));

app.get("/v1/attendance", auth, (req, res) => attCtrl.list(cast(req), res));
app.post("/v1/attendance/check-in", auth, (req, res) => attCtrl.checkIn(cast(req), res));
app.post("/v1/attendance/check-out", auth, (req, res) => attCtrl.checkOut(cast(req), res));

app.get("/v1/payroll", auth, (req, res) => payCtrl.list(cast(req), res));
app.post("/v1/payroll", auth, (req, res) => payCtrl.create(cast(req), res));

app.get("/health", (_req, res) => res.json({ status: "ok", service: "employees-service (TS)" }));

const port = Number(process.env.PORT || 7070);
app.listen(port, "0.0.0.0", () => logger.info({ port }, "employees-service listening (Clean Arch TS)"));
