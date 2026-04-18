import { Response } from 'express';
import { BookingService } from '../services/booking.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class AppointmentController {
  private bookingService = new BookingService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const page = parseInt(req.query.page as string || '1');
      const limit = Math.min(parseInt(req.query.limit as string || '50'), 500);
      
      const result = await this.bookingService.getAppointments(orgId, page, limit);
      return res.json({
        data: result.data,
        pagination: {
          total: result.total,
          page,
          limit,
          pages: Math.ceil(result.total / limit)
        }
      });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const appointment = await this.bookingService.createAppointment(orgId, userId, req.body);
      return res.status(201).json({ data: appointment });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async cancel(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const { id } = req.params;
      await this.bookingService.cancelAppointment(id, orgId);
      return res.json({ status: 'ok' });
    } catch (err: any) {
      if (err.message === 'Appointment not found') {
        return res.status(404).json({ message: err.message });
      }
      return res.status(500).json({ message: err.message });
    }
  }
}
