import { Response } from 'express';
import { InvoiceService, DepositService } from '../services/payment.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class InvoiceController {
  private invoiceService = new InvoiceService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.invoiceService.getInvoices(req.identity.orgId, req.query);
      return res.json({ data: result.data, total: result.total });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const invoice = await this.invoiceService.createInvoice(orgId, userId, req.body);
      return res.status(201).json({ data: invoice });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async stats(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.invoiceService.getStats(req.identity.orgId);
      return res.json({ data });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async addPayment(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const payment = await this.invoiceService.recordPayment(req.params.id, orgId, userId, req.body);
      return res.status(201).json({ data: payment });
    } catch (err: any) {
      if (err.message === 'Not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }
}

export class DepositController {
  private depositService = new DepositService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.depositService.getDeposits(req.identity.orgId);
      return res.json({ data });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const deposit = await this.depositService.createDeposit(orgId, userId, req.body);
      return res.status(201).json({ data: deposit });
    } catch (err: any) { return res.status(500).json({ message: err.message }); }
  }
}
