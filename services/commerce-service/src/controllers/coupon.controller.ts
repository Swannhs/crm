import { Request, Response } from 'express';
import { CouponRepository } from '../repositories/coupon.repository.js';

function getRouteParam(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] || '' : value || '';
}

export class CouponController {
  private couponRepo = new CouponRepository();

  async getAll(req: Request, res: Response) {
    try {
      const orgId = req.header('X-Org-Id');
      if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });

      const coupons = await this.couponRepo.findAll(orgId);
      return res.json({ data: coupons });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const orgId = req.header('X-Org-Id');
      if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });

      const coupon = await this.couponRepo.create({ ...req.body, orgId });
      return res.status(201).json({ data: coupon });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const orgId = req.header('X-Org-Id');
      if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });

      const coupon = await this.couponRepo.update(getRouteParam(req.params.id), orgId, { ...req.body, orgId });
      return res.json({ data: coupon });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const orgId = req.header('X-Org-Id');
      if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });

      await this.couponRepo.delete(getRouteParam(req.params.id), orgId);
      return res.json({ success: true });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
