import { Response } from 'express';
import { BookingService } from '../services/booking.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class BookingTypeController {
  private bookingService = new BookingService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const bookingTypes = await this.bookingService.getBookingTypes(orgId);
      return res.json({ data: bookingTypes });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async count(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const total = await this.bookingService.countBookingTypes(orgId);
      return res.json({ total });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async getByLink(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const { link } = req.params;
      const bookingType = await this.bookingService.getBookingTypeByLink(orgId, link);

      if (!bookingType) {
        return res.status(404).json({ message: 'Booking type not found' });
      }

      return res.json({ data: bookingType });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const bookingType = await this.bookingService.createBookingType(orgId, userId, req.body);
      return res.status(201).json({ data: bookingType });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
