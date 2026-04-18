import { Response } from 'express';
import { DocumentService } from '../services/document.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class DocumentController {
  private docService = new DocumentService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.docService.getDocuments(req.identity.orgId, req.query);
      return res.json({ data: result.data, pagination: result.pagination });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const doc = await this.docService.getDocument(req.params.id, req.identity.orgId);
      return res.json({ data: doc });
    } catch (err: any) {
      if (err.message === 'Not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async upload(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      if (!req.body.name || !req.body.cloud_url || !req.body.type) {
        return res.status(422).json({ message: 'name, cloud_url, and type required' });
      }
      const doc = await this.docService.uploadDocument(orgId, userId, req.body);
      return res.status(201).json({ success: true, data: doc });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async statusCounts(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.docService.getStatusCounts(req.identity.orgId);
      return res.json({ data });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
