import { CategoryRepository } from '../repositories/category.repository.js';
export class CategoryController {
    categoryRepo = new CategoryRepository();
    getParam(value) {
        return Array.isArray(value) ? value[0] : value;
    }
    async getAll(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const categories = await this.categoryRepo.findAll(orgId);
            return res.json({ data: categories });
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
            const category = await this.categoryRepo.create({ ...req.body, orgId });
            return res.status(201).json({ data: category });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async update(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const id = this.getParam(req.params.id);
            const existing = await this.categoryRepo.findById(orgId, id);
            if (!existing) {
                return res.status(404).json({ message: 'Category not found' });
            }
            const category = await this.categoryRepo.update(orgId, id, {
                ...existing,
                ...req.body,
                orgId,
            });
            return res.json({ data: category });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async delete(req, res) {
        try {
            const orgId = req.header('X-Org-Id');
            if (!orgId)
                return res.status(400).json({ message: 'Missing X-Org-Id header' });
            const id = this.getParam(req.params.id);
            const deleted = await this.categoryRepo.delete(orgId, id);
            if (!deleted.count) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.status(204).send();
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
