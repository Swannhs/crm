import { Response } from 'express';
import { BillingService } from '../services/billing.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class BillingController {
  private billingService = new BillingService();

  async listInvoices(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const invoices = await this.billingService.getInvoices(orgId);
      return res.json({ data: invoices });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async createInvoice(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const invoice = await this.billingService.createInvoice(orgId, userId, req.body);
      return res.status(201).json({ data: invoice });
    } catch (err: any) {
      return res.status(422).json({ message: err.message });
    }
  }

  async recordPayment(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const payment = await this.billingService.recordPayment(orgId, userId, req.body);
      return res.status(201).json({ data: payment });
    } catch (err: any) {
      if (err.message === 'Invoice not found') {
        return res.status(404).json({ message: err.message });
      }
      return res.status(500).json({ message: err.message });
    }
  }
}
