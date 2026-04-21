import { CommerceService, ProductService } from '../services/commerce.service.js';
export class ProductController {
    productService = new ProductService();
    getParam(value) {
        return Array.isArray(value) ? value[0] : value;
    }
    async list(req, res) {
        try {
            const { orgId } = req.identity;
            const products = await this.productService.getProducts(orgId);
            return res.json({ data: products });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            const { orgId } = req.identity;
            const product = await this.productService.createProduct(orgId, req.body);
            return res.status(201).json({ data: product });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async getById(req, res) {
        try {
            const { orgId } = req.identity;
            const id = this.getParam(req.params.id);
            const product = await this.productService.getProductById(orgId, id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            return res.json({ data: product });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async update(req, res) {
        try {
            const { orgId } = req.identity;
            const id = this.getParam(req.params.id);
            const product = await this.productService.updateProduct(orgId, id, req.body);
            return res.json({ data: product });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async delete(req, res) {
        try {
            const { orgId } = req.identity;
            const id = this.getParam(req.params.id);
            await this.productService.deleteProduct(orgId, id);
            return res.status(204).send();
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
export class OrderController {
    commerceService = new CommerceService();
    async list(req, res) {
        try {
            const { orgId } = req.identity;
            const orders = await this.commerceService.getOrders(orgId);
            return res.json({ data: orders });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
    async create(req, res) {
        try {
            const { orgId, userId } = req.identity;
            const order = await this.commerceService.createOrder(orgId, userId, req.body);
            return res.status(201).json({ data: order });
        }
        catch (err) {
            return res.status(500).json({ message: err.message });
        }
    }
}
