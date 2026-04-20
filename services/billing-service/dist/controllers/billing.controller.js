import { BillingService } from '../services/billing.service.js';
import { AppError } from '../errors.js';
export class BillingController {
    billingService;
    constructor(billingService = new BillingService()) {
        this.billingService = billingService;
    }
    handleError(res, error) {
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
    listInvoices = async (req, res) => {
        try {
            const { orgId } = req.identity;
            const result = await this.billingService.getInvoices(orgId, req.query);
            return res.json(result);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    getInvoiceStats = async (req, res) => {
        try {
            const { orgId } = req.identity;
            const result = await this.billingService.getInvoiceStats(orgId);
            return res.json(result);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    getInvoice = async (req, res) => {
        try {
            const { orgId } = req.identity;
            const invoice = await this.billingService.getInvoiceById(orgId, req.params.id);
            return res.json({ data: invoice });
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    createInvoice = async (req, res) => {
        try {
            const { orgId, userId } = req.identity;
            const invoice = await this.billingService.createInvoice(orgId, userId, req.body);
            return res.status(201).json({ data: invoice });
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    listPayments = async (req, res) => {
        try {
            const { orgId } = req.identity;
            const payments = await this.billingService.getPayments(orgId, req.query);
            return res.json(payments);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
    recordPayment = async (req, res) => {
        try {
            const { orgId, userId } = req.identity;
            const payment = await this.billingService.recordPayment(orgId, userId, req.body, req.log);
            return res.status(201).json({ data: payment });
        }
        catch (error) {
            return this.handleError(res, error);
        }
    };
}
