import { createServiceApp } from "@mymanager/node-service-kit";
import { CalendarController, EventController } from "./controllers/calendar.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "calendar-service", 
  jsonLimit: "2mb",
  enableCors: false
});

const calendarController = new CalendarController();
const eventController = new EventController();

// --- Routes ---

// Calendars
app.get("/v1/calendars", 
  identityMiddleware, 
  (req, res) => calendarController.list(req as any, res)
);

app.post("/v1/calendars", 
  identityMiddleware, 
  (req, res) => calendarController.create(req as any, res)
);

// Events
app.get("/v1/events", 
  identityMiddleware, 
  (req, res) => eventController.list(req as any, res)
);

app.post("/v1/events", 
  identityMiddleware, 
  (req, res) => eventController.create(req as any, res)
);

app.get("/v1/event-categories",
  identityMiddleware,
  (req, res) => eventController.categories(req as any, res)
);

// Health
app.get("/health", (_req, res) => res.json({ status: "ok", service: "calendar-service (TS)" }));

const port = Number(process.env.PORT || 8050);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "calendar-service listening (Clean Arch TS)");
});
