import { createServiceApp } from "@mymanager/node-service-kit";
import { AppointmentController } from "./controllers/appointment.controller.js";
import { BookingTypeController } from "./controllers/booking-type.controller.js";
import { identityMiddleware } from "./middleware/identity.js";

const { app, logger } = createServiceApp({ 
  serviceName: "booking-service", 
  jsonLimit: "10mb" 
});

const appointmentController = new AppointmentController();
const bookingTypeController = new BookingTypeController();

// --- Routes ---

// Booking types
app.get("/v1/booking-types",
  identityMiddleware,
  (req, res) => bookingTypeController.list(req as any, res)
);

app.post("/v1/booking-types",
  identityMiddleware,
  (req, res) => bookingTypeController.create(req as any, res)
);

app.get("/v1/booking-types-count",
  identityMiddleware,
  (req, res) => bookingTypeController.count(req as any, res)
);

app.get("/v1/booking-types/:link",
  identityMiddleware,
  (req, res) => bookingTypeController.getByLink(req as any, res)
);

// Appointments
app.get("/v1/appointments", 
  identityMiddleware, 
  (req, res) => appointmentController.list(req as any, res)
);

app.post("/v1/appointments/user", 
  identityMiddleware, 
  (req, res) => appointmentController.create(req as any, res)
);

app.delete("/v1/appointments/:id", 
  identityMiddleware, 
  (req, res) => appointmentController.cancel(req as any, res)
);

// --- Server ---

const port = Number(process.env.PORT || 7040);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "booking-service listening (Clean Arch TS)");
});
