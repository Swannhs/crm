import { prisma } from "../db.js";
import { randomUUID } from "node:crypto";

/**
 * Create an appointment from booking form submission (unauthenticated)
 */
export async function createAppointmentFromBooking(req, res) {
  const { booking_type_id, contact_info } = req.body;

  if (!booking_type_id || !contact_info?.email) {
    return res.status(422).json({ message: "booking_type_id and contact email required" });
  }

  try {
    const bookingType = await prisma.bookingType.findUnique({
      where: { id: booking_type_id }
    });

    if (!bookingType) {
      return res.status(404).json({ message: "Booking type not found" });
    }

    const appointment = await prisma.appointment.create({
      data: {
        id: randomUUID(),
        org_id: bookingType.org_id,
        booking_type_id,
        created_by_user_id: contact_info.email, // Use email as temporary user ID for public bookings
        title: bookingType.title,
        meeting_type: bookingType.meeting_type,
        location: bookingType.location,
        start_datetime: new Date(req.body.start_datetime),
        end_datetime: new Date(new Date(req.body.start_datetime).getTime() + bookingType.duration_minutes * 60000),
        duration_minutes: bookingType.duration_minutes,
        metadata: { contact_info }
      }
    });

    return res.status(201).json({ data: appointment });
  } catch (err) {
    res.logger?.error({ err }, "Failed to create appointment from booking");
    return res.status(500).json({ message: "Failed to create appointment" });
  }
}

/**
 * Get all appointments for user/organization
 */
export async function getAppointments(req, res) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const page = parseInt(req.query.page || 1);
    const limit = Math.min(parseInt(req.query.limit || 50), 500);
    const skip = (page - 1) * limit;

    const where = { org_id: orgId };

    const [appointments, total] = await Promise.all([
      prisma.appointment.findMany({
        where,
        orderBy: { start_datetime: "desc" },
        skip,
        take: limit
      }),
      prisma.appointment.count({ where })
    ]);

    return res.json({
      data: appointments,
      pagination: { total, page, limit, pages: Math.ceil(total / limit) }
    });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch appointments");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Create an appointment
 */
export async function createAppointment(req, res) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context" });
  }

  const { title, booking_type_id, start_datetime, contact_id } = req.body;

  if (!title || !start_datetime) {
    return res.status(422).json({ message: "title and start_datetime required" });
  }

  try {
    let durationMinutes = 30;

    if (booking_type_id) {
      const bookingType = await prisma.bookingType.findUnique({
        where: { id: booking_type_id }
      });
      if (bookingType) {
        durationMinutes = bookingType.duration_minutes;
      }
    }

    const startTime = new Date(start_datetime);
    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

    const appointment = await prisma.appointment.create({
      data: {
        id: randomUUID(),
        org_id: orgId,
        created_by_user_id: userId,
        booking_type_id: booking_type_id || null,
        title,
        description: req.body.description || null,
        contact_id: contact_id || null,
        meeting_type: req.body.meeting_type || "inperson",
        location: req.body.location || null,
        start_datetime: startTime,
        end_datetime: endTime,
        duration_minutes: durationMinutes,
        status: "scheduled",
        metadata: req.body.metadata || {}
      }
    });

    return res.status(201).json({ data: appointment });
  } catch (err) {
    req.logger?.error({ err }, "Failed to create appointment");
    return res.status(500).json({ message: "Failed to create appointment" });
  }
}

/**
 * Create multiple appointments in bulk
 */
export async function createBulkAppointment(req, res) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context" });
  }

  if (!Array.isArray(req.body) || req.body.length === 0) {
    return res.status(422).json({ message: "Body must be array of appointments" });
  }

  try {
    const appointments = await Promise.all(
      req.body.map(async (apt) => {
        const durationMinutes = apt.duration_minutes || 30;
        const startTime = new Date(apt.start_datetime);
        const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

        return prisma.appointment.create({
          data: {
            id: randomUUID(),
            org_id: orgId,
            created_by_user_id: userId,
            booking_type_id: apt.booking_type_id || null,
            title: apt.title || "Appointment",
            description: apt.description || null,
            contact_id: apt.contact_id || null,
            meeting_type: apt.meeting_type || "inperson",
            location: apt.location || null,
            start_datetime: startTime,
            end_datetime: endTime,
            duration_minutes: durationMinutes,
            status: "scheduled",
            metadata: apt.metadata || {}
          }
        });
      })
    );

    return res.status(201).json({ data: appointments });
  } catch (err) {
    req.logger?.error({ err }, "Failed to create bulk appointments");
    return res.status(500).json({ message: "Failed to create appointments" });
  }
}

/**
 * Update an appointment
 */
export async function updateAppointment(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const appointment = await prisma.appointment.findUnique({ where: { id } });
    if (!appointment || appointment.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    // Recalculate end time if start time changed
    let endTime = appointment.end_datetime;
    if (req.body.start_datetime) {
      const startTime = new Date(req.body.start_datetime);
      endTime = new Date(startTime.getTime() + appointment.duration_minutes * 60000);
    }

    const updated = await prisma.appointment.update({
      where: { id },
      data: {
        title: req.body.title || undefined,
        description: req.body.description || undefined,
        start_datetime: req.body.start_datetime || undefined,
        end_datetime: req.body.start_datetime ? endTime : undefined,
        location: req.body.location || undefined,
        status: req.body.status || undefined,
        metadata: req.body.metadata || undefined
      }
    });

    return res.json({ data: updated });
  } catch (err) {
    req.logger?.error({ err }, "Failed to update appointment");
    return res.status(500).json({ message: "Failed to update appointment" });
  }
}

/**
 * Get appointment statistics
 */
export async function getAppointmentsTotals(req, res) {
  const orgId = req.header("X-Org-Id");

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const [total, scheduled, completed, cancelled] = await Promise.all([
      prisma.appointment.count({ where: { org_id: orgId } }),
      prisma.appointment.count({ where: { org_id: orgId, status: "scheduled" } }),
      prisma.appointment.count({ where: { org_id: orgId, status: "completed" } }),
      prisma.appointment.count({ where: { org_id: orgId, status: "cancelled" } })
    ]);

    return res.json({
      data: { total, scheduled, completed, cancelled }
    });
  } catch (err) {
    req.logger?.error({ err }, "Failed to get appointment stats");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Get invited user list for appointment
 */
export async function getInvitedUserList(req, res) {
  const { appointment_id } = req.query;

  if (!appointment_id) {
    return res.status(422).json({ message: "appointment_id required" });
  }

  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id: appointment_id }
    });

    if (!appointment) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.json({
      data: { invited_users: appointment.invited_users || [] }
    });
  } catch (err) {
    req.logger?.error({ err }, "Failed to get invited users");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Get appointment by ID
 */
export async function getAppointmentById(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const appointment = await prisma.appointment.findUnique({
      where: { id }
    });

    if (!appointment || appointment.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.json({ data: appointment });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch appointment");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Delete (cancel) an appointment
 */
export async function removeAppointment(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const appointment = await prisma.appointment.findUnique({ where: { id } });
    if (!appointment || appointment.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    await prisma.appointment.update({
      where: { id },
      data: { status: "cancelled" }
    });

    return res.json({ status: "ok" });
  } catch (err) {
    req.logger?.error({ err }, "Failed to remove appointment");
    return res.status(500).json({ message: "Failed to remove appointment" });
  }
}

/**
 * Get appointments for group booking
 */
export async function getAppointmentsForGroupBooking(req, res) {
  const { booking_group_id } = req.query;

  if (!booking_group_id) {
    return res.status(422).json({ message: "booking_group_id required" });
  }

  try {
    const group = await prisma.bookingTypeGroup.findUnique({
      where: { id: booking_group_id }
    });

    if (!group) {
      return res.status(404).json({ message: "Not found" });
    }

    const appointments = await prisma.appointment.findMany({
      where: {
        org_id: group.org_id,
        booking_type_id: { in: group.booking_type_ids }
      },
      orderBy: { start_datetime: "desc" }
    });

    return res.json({ data: appointments });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch group appointments");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Insert bulk appointments from group
 */
export async function insertBulkAppointmentFromGroup(req, res) {
  const { booking_group_id, appointments: aptData } = req.body;

  if (!booking_group_id || !Array.isArray(aptData)) {
    return res.status(422).json({ message: "booking_group_id and appointments array required" });
  }

  try {
    const appointments = await Promise.all(
      aptData.map((apt) =>
        prisma.appointment.create({
          data: {
            id: randomUUID(),
            org_id: apt.org_id,
            created_by_user_id: apt.created_by_user_id,
            title: apt.title || "Appointment",
            start_datetime: new Date(apt.start_datetime),
            end_datetime: new Date(apt.end_datetime),
            duration_minutes: apt.duration_minutes || 30,
            status: "scheduled",
            metadata: apt.metadata || {}
          }
        })
      )
    );

    return res.status(201).json({ data: appointments });
  } catch (err) {
    req.logger?.error({ err }, "Failed to insert bulk group appointments");
    return res.status(500).json({ message: "Failed to create appointments" });
  }
}

/**
 * Delete all appointments in a series
 */
export async function deleteAllAppointmentSeries(req, res) {
  const orgId = req.header("X-Org-Id");
  const { seriesId } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const result = await prisma.appointment.updateMany({
      where: { series_id: seriesId, org_id: orgId },
      data: { status: "cancelled" }
    });

    return res.json({ data: { cancelled_count: result.count } });
  } catch (err) {
    req.logger?.error({ err }, "Failed to delete appointment series");
    return res.status(500).json({ message: "Failed to delete series" });
  }
}

/**
 * Create bulk appointments from membership
 */
export async function createBulkAppointmentsFromMembership(req, res) {
  const { appointments } = req.body;

  if (!Array.isArray(appointments)) {
    return res.status(422).json({ message: "appointments array required" });
  }

  try {
    const created = await Promise.all(
      appointments.map((apt) =>
        prisma.appointment.create({
          data: {
            id: randomUUID(),
            org_id: apt.org_id,
            created_by_user_id: apt.created_by_user_id,
            title: apt.title || "Appointment",
            contact_id: apt.contact_id || null,
            start_datetime: new Date(apt.start_datetime),
            end_datetime: new Date(apt.end_datetime),
            duration_minutes: apt.duration_minutes || 30,
            meeting_type: apt.meeting_type || "inperson",
            status: "scheduled",
            metadata: apt.metadata || {}
          }
        })
      )
    );

    return res.status(201).json({ data: created });
  } catch (err) {
    req.logger?.error({ err }, "Failed to create bulk membership appointments");
    return res.status(500).json({ message: "Failed to create appointments" });
  }
}

/**
 * Create multi-service appointments
 */
export async function createMultiServiceAppointments(req, res) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context" });
  }

  const { booking_type_ids, start_datetime, contact_id } = req.body;

  if (!Array.isArray(booking_type_ids) || !start_datetime) {
    return res.status(422).json({ message: "booking_type_ids array and start_datetime required" });
  }

  try {
    const appointments = await Promise.all(
      booking_type_ids.map(async (bookingTypeId) => {
        const bookingType = await prisma.bookingType.findUnique({
          where: { id: bookingTypeId }
        });

        const durationMinutes = bookingType?.duration_minutes || 30;
        const startTime = new Date(start_datetime);
        const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

        return prisma.appointment.create({
          data: {
            id: randomUUID(),
            org_id: orgId,
            created_by_user_id: userId,
            booking_type_id: bookingTypeId,
            title: bookingType?.title || "Appointment",
            contact_id: contact_id || null,
            start_datetime: startTime,
            end_datetime: endTime,
            duration_minutes: durationMinutes,
            meeting_type: bookingType?.meeting_type || "inperson",
            status: "scheduled",
            metadata: {}
          }
        });
      })
    );

    return res.status(201).json({ data: appointments });
  } catch (err) {
    req.logger?.error({ err }, "Failed to create multi-service appointments");
    return res.status(500).json({ message: "Failed to create appointments" });
  }
}
