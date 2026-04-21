import { Response } from 'express';
import { CommerceService, ProductService } from '../services/commerce.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class ProductController {
  private productService = new ProductService();

  private getParam(value: string | string[]) {
    return Array.isArray(value) ? value[0] : value;
  }

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const products = await this.productService.getProducts(orgId);
      return res.json({ data: products });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const product = await this.productService.createProduct(orgId, req.body);
      return res.status(201).json({ data: product });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async getById(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const id = this.getParam(req.params.id);
      const product = await this.productService.getProductById(orgId, id);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.json({ data: product });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const id = this.getParam(req.params.id);
      const product = await this.productService.updateProduct(orgId, id, req.body);
      return res.json({ data: product });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const id = this.getParam(req.params.id);
      await this.productService.deleteProduct(orgId, id);
      return res.status(204).send();
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export class OrderController {
  private commerceService = new CommerceService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId } = req.identity;
      const orders = await this.commerceService.getOrders(orgId);
      return res.json({ data: orders });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const order = await this.commerceService.createOrder(orgId, userId, req.body);
      return res.status(201).json({ data: order });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
