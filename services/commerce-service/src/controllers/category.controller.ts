import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/category.repository.js';

export class CategoryController {
  private categoryRepo = new CategoryRepository();

  async getAll(req: Request, res: Response) {
    try {
      const orgId = req.header('X-Org-Id');
      if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });

      const categories = await this.categoryRepo.findAll(orgId);
      return res.json({ data: categories });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const orgId = req.header('X-Org-Id');
      if (!orgId) return res.status(400).json({ message: 'Missing X-Org-Id header' });

      const category = await this.categoryRepo.create({ ...req.body, orgId });
      return res.status(201).json({ data: category });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
