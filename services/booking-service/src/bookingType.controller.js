import { prisma } from "../db.js";
import { randomUUID } from "node:crypto";

/**
 * Get all booking types for organization
 */
export async function getBookingTypes(req, res) {
  const orgId = req.header("X-Org-Id");
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const bookingTypes = await prisma.bookingType.findMany({
      where: { org_id: orgId, is_archived: false },
      orderBy: { created_at: "desc" }
    });

    return res.json({ data: bookingTypes });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch booking types");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Get booking types count
 */
export async function getBookingTypesCount(req, res) {
  const orgId = req.header("X-Org-Id");
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const count = await prisma.bookingType.count({
      where: { org_id: orgId, is_archived: false }
    });

    return res.json({ data: { total: count } });
  } catch (err) {
    req.logger?.error({ err }, "Failed to get booking types count");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Get booking type by link (public/unauthenticated)
 */
export async function getBookingTypeByLink(req, res) {
  const { link } = req.params;

  try {
    const bookingType = await prisma.bookingType.findUnique({
      where: { link },
      include: { slots: { where: { is_available: true }, take: 100 } }
    });

    if (!bookingType) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.json({ data: bookingType });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch booking type by link");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Get booking type by ID
 */
export async function getBookingTypeById(req, res) {
  const { id } = req.params;

  try {
    const bookingType = await prisma.bookingType.findUnique({
      where: { id },
      include: { slots: true }
    });

    if (!bookingType) {
      return res.status(404).json({ message: "Not found" });
    }

    return res.json({ data: bookingType });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch booking type");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Create a new booking type
 */
export async function createBookingType(req, res) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context" });
  }

  const validated = req.body;
  const title = String(validated.title || "").trim();
  const link = String(validated.link || generateLink(12)).trim().toLowerCase();

  if (!title) {
    return res.status(422).json({ message: "title is required" });
  }

  try {
    // Check if link already exists
    const existing = await prisma.bookingType.findUnique({ where: { link } });
    if (existing) {
      return res.status(409).json({ message: "Link already exists" });
    }

    const bookingType = await prisma.bookingType.create({
      data: {
        id: randomUUID(),
        org_id: orgId,
        created_by_user_id: userId,
        title,
        description: validated.description || null,
        link,
        meeting_type: validated.meeting_type || "inperson",
        location: validated.location || null,
        duration_minutes: validated.duration_minutes || 30,
        color: validated.color || "#3b82f6",
        status: "active",
        metadata: validated.metadata || {}
      }
    });

    return res.status(201).json({ data: bookingType });
  } catch (err) {
    req.logger?.error({ err }, "Failed to create booking type");
    return res.status(500).json({ message: "Failed to create booking type" });
  }
}

/**
 * Update a booking type
 */
export async function updateBookingType(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    // Check ownership
    const bookingType = await prisma.bookingType.findUnique({ where: { id } });
    if (!bookingType || bookingType.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    const updated = await prisma.bookingType.update({
      where: { id },
      data: {
        title: req.body.title || undefined,
        description: req.body.description || undefined,
        meeting_type: req.body.meeting_type || undefined,
        location: req.body.location || undefined,
        duration_minutes: req.body.duration_minutes || undefined,
        status: req.body.status || undefined,
        metadata: req.body.metadata || undefined
      }
    });

    return res.json({ data: updated });
  } catch (err) {
    req.logger?.error({ err }, "Failed to update booking type");
    return res.status(500).json({ message: "Failed to update booking type" });
  }
}

/**
 * Delete (soft delete) a booking type
 */
export async function deleteBookingType(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const bookingType = await prisma.bookingType.findUnique({ where: { id } });
    if (!bookingType || bookingType.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    await prisma.bookingType.update({
      where: { id },
      data: { is_archived: true }
    });

    return res.json({ status: "ok" });
  } catch (err) {
    req.logger?.error({ err }, "Failed to delete booking type");
    return res.status(500).json({ message: "Failed to delete booking type" });
  }
}

/**
 * Get multiple booking types by ID
 */
export async function getMultipleBookings(req, res) {
  const ids = Array.isArray(req.query.ids) ? req.query.ids : [req.query.ids];

  try {
    const bookingTypes = await prisma.bookingType.findMany({
      where: { id: { in: ids }, is_archived: false }
    });

    return res.json({ data: bookingTypes });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch multiple bookings");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Create booking type group
 */
export async function createBookingGroup(req, res) {
  const orgId = req.header("X-Org-Id");
  const userId = req.header("X-User-Id");

  if (!orgId || !userId) {
    return res.status(401).json({ message: "Missing identity context" });
  }

  const { name, description, booking_type_ids } = req.body;

  if (!name) {
    return res.status(422).json({ message: "name is required" });
  }

  try {
    const group = await prisma.bookingTypeGroup.create({
      data: {
        id: randomUUID(),
        org_id: orgId,
        created_by_user_id: userId,
        name,
        description: description || null,
        booking_type_ids: booking_type_ids || []
      }
    });

    return res.status(201).json({ data: group });
  } catch (err) {
    req.logger?.error({ err }, "Failed to create booking group");
    return res.status(500).json({ message: "Failed to create booking group" });
  }
}

/**
 * Update booking type group
 */
export async function editBookingGroup(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const group = await prisma.bookingTypeGroup.findUnique({ where: { id } });
    if (!group || group.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    const updated = await prisma.bookingTypeGroup.update({
      where: { id },
      data: {
        name: req.body.name || undefined,
        description: req.body.description || undefined,
        booking_type_ids: req.body.booking_type_ids || undefined
      }
    });

    return res.json({ data: updated });
  } catch (err) {
    req.logger?.error({ err }, "Failed to update booking group");
    return res.status(500).json({ message: "Failed to update booking group" });
  }
}

/**
 * Get all booking groups for organization
 */
export async function getBookingGroups(req, res) {
  const orgId = req.header("X-Org-Id");
  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const groups = await prisma.bookingTypeGroup.findMany({
      where: { org_id: orgId },
      orderBy: { created_at: "desc" }
    });

    return res.json({ data: groups });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch booking groups");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Get booking group by ID
 */
export async function getBookingGroupById(req, res) {
  const orgId = req.header("X-Org-Id");
  const { id } = req.params;

  if (!orgId) return res.status(401).json({ message: "Missing X-Org-Id" });

  try {
    const group = await prisma.bookingTypeGroup.findUnique({ where: { id } });

    if (!group || group.org_id !== orgId) {
      return res.status(404).json({ message: "Not found" });
    }

    // Fetch the booking types in this group
    const bookingTypes = await prisma.bookingType.findMany({
      where: { id: { in: group.booking_type_ids } }
    });

    return res.json({ data: { ...group, booking_types: bookingTypes } });
  } catch (err) {
    req.logger?.error({ err }, "Failed to fetch booking group");
    return res.status(500).json({ message: "Internal server error" });
  }
}

/**
 * Helper: Generate random link
 */
function generateLink(length) {
  let result = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
