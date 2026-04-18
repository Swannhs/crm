import { Response } from 'express';
import { DeviceService, HardwareProductService, HardwareBundleService, HardwareCategoryService, SunmiService, UnifiService } from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class DeviceController {
  private svc = new DeviceService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const devices = await this.svc.getAll(req.identity.orgId);
      return res.json({ success: true, data: devices });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { name, type, status, locationId, metadata } = req.body;
      if (!name) return res.status(400).json({ success: false, message: 'Name is required' });

      const device = await this.svc.create({ name, type, status, locationId, metadata }, req.identity.userId, req.identity.orgId);
      return res.status(201).json({ success: true, data: device });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const device = await this.svc.update(id, req.body);
      return res.json({ success: true, data: device });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      await this.svc.delete(id);
      return res.json({ success: true, message: 'Device deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async authenticateByCode(req: AuthenticatedRequest, res: Response) {
    try {
      const { code } = req.body;
      const device = await this.svc.authenticateByCode(code);
      if (!device) return res.status(404).json({ success: false, message: 'Device not found' });
      return res.json({ success: true, data: device });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class HardwareController {
  private productSvc = new HardwareProductService();
  private bundleSvc = new HardwareBundleService();
  private categorySvc = new HardwareCategoryService();

  async createProduct(req: AuthenticatedRequest, res: Response) {
    try {
      const product = await this.productSvc.create(req.body);
      return res.status(201).json({ success: true, data: product });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getProducts(req: AuthenticatedRequest, res: Response) {
    try {
      const products = await this.productSvc.getAll();
      return res.json({ success: true, data: products });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getProductById(req: AuthenticatedRequest, res: Response) {
    try {
      const product = await this.productSvc.getById(req.params.id);
      if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
      return res.json({ success: true, data: product });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateProduct(req: AuthenticatedRequest, res: Response) {
    try {
      const product = await this.productSvc.update(req.params.id, req.body);
      return res.json({ success: true, data: product });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteProduct(req: AuthenticatedRequest, res: Response) {
    try {
      await this.productSvc.delete(req.params.id);
      return res.json({ success: true, message: 'Product deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async importProducts(req: AuthenticatedRequest, res: Response) {
    try {
      const { products } = req.body;
      const result = await this.productSvc.importMany(products);
      return res.json({ success: true, data: result });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async createBundle(req: AuthenticatedRequest, res: Response) {
    try {
      const bundle = await this.bundleSvc.create(req.body);
      return res.status(201).json({ success: true, data: bundle });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getBundles(req: AuthenticatedRequest, res: Response) {
    try {
      const bundles = await this.bundleSvc.getAll();
      return res.json({ success: true, data: bundles });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getBundleById(req: AuthenticatedRequest, res: Response) {
    try {
      const bundle = await this.bundleSvc.getById(req.params.id);
      if (!bundle) return res.status(404).json({ success: false, message: 'Bundle not found' });
      return res.json({ success: true, data: bundle });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async updateBundle(req: AuthenticatedRequest, res: Response) {
    try {
      const bundle = await this.bundleSvc.update(req.params.id, req.body);
      return res.json({ success: true, data: bundle });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteBundle(req: AuthenticatedRequest, res: Response) {
    try {
      await this.bundleSvc.delete(req.params.id);
      return res.json({ success: true, message: 'Bundle deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getCategories(req: AuthenticatedRequest, res: Response) {
    try {
      const categories = await this.categorySvc.getAll();
      return res.json({ success: true, data: categories });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async createCategory(req: AuthenticatedRequest, res: Response) {
    try {
      const category = await this.categorySvc.create(req.body);
      return res.status(201).json({ success: true, data: category });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteCategory(req: AuthenticatedRequest, res: Response) {
    try {
      await this.categorySvc.delete(req.params.id);
      return res.json({ success: true, message: 'Category deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getRecommendation(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { recommendations: [] } });
  }

  async generateProductDescription(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { description: "Generated description placeholder" } });
  }

  async generateBundleDescription(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { description: "Generated description placeholder" } });
  }
}

export class SunmiController {
  private svc = new SunmiService();

  async getConfig(req: AuthenticatedRequest, res: Response) {
    try {
      const config = await this.svc.getConfig(req.identity.orgId);
      return res.json({ success: true, data: config });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async upsertConfig(req: AuthenticatedRequest, res: Response) {
    try {
      const config = await this.svc.upsertConfig(req.identity.orgId, req.body);
      return res.json({ success: true, data: config });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async testConnection(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.svc.testConnection(req.identity.orgId);
      return res.json(result);
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getDevices(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { devices: [] } });
  }

  async getDeviceStatus(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { status: "online" } });
  }

  async getDeviceInfo(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: {} });
  }

  async applyControl(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, message: "Control applied" });
  }

  async getGroups(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { groups: [] } });
  }

  async createGroup(req: AuthenticatedRequest, res: Response) {
    return res.status(201).json({ success: true, data: {} });
  }
}

export class UnifiController {
  private svc = new UnifiService();

  async saveConnection(req: AuthenticatedRequest, res: Response) {
    try {
      const connection = await this.svc.createConnection({
        ...req.body,
        organizationId: req.identity.orgId
      });
      return res.status(201).json({ success: true, data: connection });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getConnection(req: AuthenticatedRequest, res: Response) {
    try {
      const { locationId } = req.query;
      return res.json({ success: true, data: {} });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteConnection(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.query;
      if (id) await this.svc.deleteConnection(id as string);
      return res.json({ success: true, message: 'Connection deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getConnections(req: AuthenticatedRequest, res: Response) {
    try {
      const connections = await this.svc.getConnections(req.identity.orgId);
      return res.json({ success: true, data: connections });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async testConnection(req: AuthenticatedRequest, res: Response) {
    try {
      const { host, port, apiKey } = req.body;
      const result = await this.svc.testConnection(host, port, apiKey);
      return res.json(result);
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async discoverHosts(req: AuthenticatedRequest, res: Response) {
    const result = await this.svc.discoverHosts();
    return res.json({ success: true, data: result });
  }

  async getCloudDevices(req: AuthenticatedRequest, res: Response) {
    const result = await this.svc.getCloudDevices("");
    return res.json({ success: true, data: result });
  }

  async getCameras(req: AuthenticatedRequest, res: Response) {
    const result = await this.svc.getCameras("");
    return res.json({ success: true, data: result });
  }

  async getCameraDetails(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: {} });
  }

  async getCameraSnapshot(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: {} });
  }

  async createRtspsStream(req: AuthenticatedRequest, res: Response) {
    return res.status(201).json({ success: true, data: {} });
  }

  async getRtspsStream(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: {} });
  }

  async deleteRtspsStream(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, message: 'Stream deleted' });
  }

  async ptzGotoPreset(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, message: 'PTZ preset executed' });
  }

  async ptzPatrolStart(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, message: 'PTZ patrol started' });
  }

  async ptzPatrolStop(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, message: 'PTZ patrol stopped' });
  }

  async getNvrInfo(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: {} });
  }

  async getLiveViews(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { liveviews: [] } });
  }

  async getRecordings(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { recordings: [] } });
  }

  async assignDevice(req: AuthenticatedRequest, res: Response) {
    try {
      const assignment = await this.svc.assignDevice({
        ...req.body,
        assignedBy: req.identity.userId
      });
      return res.status(201).json({ success: true, data: assignment });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async unassignDevice(req: AuthenticatedRequest, res: Response) {
    try {
      const { deviceId } = req.body;
      await this.svc.unassignDevice(deviceId);
      return res.json({ success: true, message: 'Device unassigned' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getAssignments(req: AuthenticatedRequest, res: Response) {
    try {
      const assignments = await this.svc.getAssignments(req.identity.orgId);
      return res.json({ success: true, data: assignments });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}