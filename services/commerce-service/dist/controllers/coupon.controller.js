import { CouponRepository } from '../repositories/coupon.repository.js';
export class CouponController {
    couponRepo = new CouponRepository();
    async getAll(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const coupons = await this.couponRepo.findAll(orgId);
            return res.json({ data: coupons });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const coupon = await this.couponRepo.create({ ...req.body, orgId });
            return res.status(201).json({ data: coupon });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
