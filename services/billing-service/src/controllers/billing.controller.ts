import { Response } from 'express';
import { BillingService } from '../services/billing.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';
import { AppError } from '../errors.js';

export class BillingController {
  constructor(private readonly billingService = new BillingService()) {}

  private handleError(res: Response, error: unknown) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
        code: error.code,
        ...(error.details ? { details: error.details } : {}),
      });
    }

    const message = error instanceof Error ? error.message : 'Internal server error';
    return res.status(500).json({ message, code: 'INTERNAL_SERVER_ERROR' });
  }

  listInvoices = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { orgId } = req.identity;
      const result = await this.billingService.getInvoices(orgId, req.query);
      return res.json(result);
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  getInvoice = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { orgId } = req.identity;
      const invoice = await this.billingService.getInvoiceById(orgId, req.params.id);
      return res.json({ data: invoice });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  createInvoice = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { orgId, userId } = req.identity;
      const invoice = await this.billingService.createInvoice(orgId, userId, req.body);
      return res.status(201).json({ data: invoice });
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  listPayments = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { orgId } = req.identity;
      const payments = await this.billingService.getPayments(orgId, req.query);
      return res.json(payments);
    } catch (error) {
      return this.handleError(res, error);
    }
  };

  recordPayment = async (req: AuthenticatedRequest, res: Response) => {
    try {
      const { orgId, userId } = req.identity;
      const payment = await this.billingService.recordPayment(orgId, userId, req.body, req.log as never);
      return res.status(201).json({ data: payment });
    } catch (error) {
      return this.handleError(res, error);
    }
  };
}
