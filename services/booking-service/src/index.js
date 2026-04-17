import { createServiceApp } from "@mymanager/node-service-kit";
import {
  getBookingTypes,
  getBookingTypesCount,
  getBookingTypeByLink,
  getBookingTypeById,
  createBookingType,
  updateBookingType,
  deleteBookingType,
  getMultipleBookings,
  createBookingGroup,
  editBookingGroup,
  getBookingGroups,
  getBookingGroupById
} from "./bookingType.controller.js";
import {
  createAppointmentFromBooking,
  getAppointments,
  createAppointment,
  createBulkAppointment,
  updateAppointment,
  getAppointmentsTotals,
  getInvitedUserList,
  getAppointmentById,
  removeAppointment,
  getAppointmentsForGroupBooking,
  insertBulkAppointmentFromGroup,
  deleteAllAppointmentSeries,
  createBulkAppointmentsFromMembership,
  createMultiServiceAppointments
} from "./appointment.controller.js";

const { app, logger } = createServiceApp({ serviceName: "booking-service", jsonLimit: "10mb" });

// Booking Type endpoints (12 routes)
app.get("/v1/booking-types", getBookingTypes);
app.get("/v1/booking-types-count", getBookingTypesCount);
app.get("/v1/booking-types/:link", getBookingTypeByLink);
app.get("/v1/booking-types-id/:id", getBookingTypeById);
app.post("/v1/booking-types", createBookingType);
app.put("/v1/booking-types/:id", updateBookingType);
app.delete("/v1/booking-types/:id", deleteBookingType);
app.get("/v1/booking-types-multi", getMultipleBookings);

// Booking Group endpoints
app.post("/v1/booking-group", createBookingGroup);
app.put("/v1/booking-group/:id", editBookingGroup);
app.get("/v1/booking-group", getBookingGroups);
app.get("/v1/booking-group/:id", getBookingGroupById);

// Appointment endpoints (14 routes)
app.post("/v1/appointments", createAppointmentFromBooking);
app.post("/v1/appointments/user", createAppointment);
app.post("/v1/appointments/bulk", createBulkAppointment);
app.post("/v1/appointments/bulk-membership", createBulkAppointmentsFromMembership);
app.post("/v1/appointments/insert-bulk-group", insertBulkAppointmentFromGroup);
app.post("/v1/appointments/multi-service", createMultiServiceAppointments);
app.put("/v1/appointments/:id", updateAppointment);
app.put("/v1/appointments/delete-all/:seriesId", deleteAllAppointmentSeries);
app.get("/v1/appointments/group-appointments", getAppointmentsForGroupBooking);
app.get("/v1/appointments", getAppointments);
app.get("/v1/appointments/stats", getAppointmentsTotals);
app.get("/v1/appointments/invitedList", getInvitedUserList);
app.get("/v1/appointments/by-id/:id", getAppointmentById);
app.delete("/v1/appointments/:id", removeAppointment);

const port = Number(process.env.PORT || 7040);
app.listen(port, "0.0.0.0", () => {
  logger.info({ port }, "booking-service listening");
});
