import { Response } from 'express';
import { FileManagerService, ImageLibraryService, FileUploadProgressService } from '../services/index.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class FileManagerController {
  private svc = new FileManagerService();

  async getFiles(req: AuthenticatedRequest, res: Response) {
    try {
      const { parentId } = req.body;
      const files = await this.svc.getFiles(req.identity.userId, req.identity.orgId, parentId);
      return res.json({ success: true, data: files });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getFolderItem(req: AuthenticatedRequest, res: Response) {
    try {
      const folderId = req.params.folderId;
      const items = await this.svc.getFolderItems(folderId, req.identity.userId, req.identity.orgId);
      return res.json({ success: true, data: items });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async searchFiles(req: AuthenticatedRequest, res: Response) {
    try {
      const query = req.query.q as string;
      if (!query) return res.json({ success: true, data: [] });
      
      const results = await this.svc.search(req.identity.userId, req.identity.orgId, query);
      return res.json({ success: true, data: results });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async addNewFolder(req: AuthenticatedRequest, res: Response) {
    try {
      const { name, parentId } = req.body;
      if (!name) return res.status(400).json({ success: false, message: 'Name is required' });

      const folder = await this.svc.addFolder({ name, parentId }, req.identity.userId, req.identity.orgId);
      return res.status(201).json({ success: true, data: folder });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async uploadFile(req: AuthenticatedRequest, res: Response) {
    try {
      const { name, parentId, url, mimeType, size, path } = req.body;
      if (!name) return res.status(400).json({ success: false, message: 'Name is required' });

      const file = await this.svc.create({ name, type: 'file', parentId, url, mimeType, size, path }, req.identity.userId, req.identity.orgId);
      return res.status(201).json({ success: true, data: file });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async editFileName(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const { name } = req.body;
      if (!name) return res.status(400).json({ success: false, message: 'Name is required' });

      const file = await this.svc.rename(id, name);
      return res.json({ success: true, data: file });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteFile(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      await this.svc.delete(id);
      return res.json({ success: true, message: 'File deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async restoreFile(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const file = await this.svc.restore(id);
      return res.json({ success: true, data: file });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async starFile(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const file = await this.svc.star(id);
      return res.json({ success: true, data: file });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async unstarFile(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const file = await this.svc.unstar(id);
      return res.json({ success: true, data: file });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async shareFile(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      const { sharedWith } = req.body;
      const file = await this.svc.share(id, sharedWith);
      return res.json({ success: true, data: file });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async pasteFile(req: AuthenticatedRequest, res: Response) {
    try {
      const { fileIds, targetFolderId } = req.body;
      if (!fileIds || !Array.isArray(fileIds)) {
        return res.status(400).json({ success: false, message: 'fileIds array is required' });
      }
      await this.svc.pasteFile(fileIds, targetFolderId || null, req.identity.userId, req.identity.orgId);
      return res.json({ success: true, message: 'Files moved' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async clearAllDeleted(req: AuthenticatedRequest, res: Response) {
    try {
      const result = await this.svc.clearAllDeleted(req.identity.userId, req.identity.orgId);
      return res.json({ success: true, data: result });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async renameFolder(req: AuthenticatedRequest, res: Response) {
    try {
      const folderId = req.params.folderId;
      const { name } = req.body;
      if (!name) return res.status(400).json({ success: false, message: 'Name is required' });

      const folder = await this.svc.rename(folderId, name);
      return res.json({ success: true, data: folder });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteFolder(req: AuthenticatedRequest, res: Response) {
    try {
      const folderId = req.params.folderId;
      await this.svc.delete(folderId);
      return res.json({ success: true, message: 'Folder deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async shareFolder(req: AuthenticatedRequest, res: Response) {
    try {
      const { folderId, sharedWith } = req.body;
      const folder = await this.svc.share(folderId, sharedWith);
      return res.json({ success: true, data: folder });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async sharedMeFolder(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: [] });
  }

  async getFileContent(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: {} });
  }

  async getTxtFileContent(req: AuthenticatedRequest, res: Response) {
    return res.json({ success: true, data: { content: "" } });
  }
}

export class ImageLibraryController {
  private svc = new ImageLibraryService();

  async addImage(req: AuthenticatedRequest, res: Response) {
    try {
      const image = await this.svc.addImage(req.body, req.identity.userId, req.identity.orgId);
      return res.status(201).json({ success: true, data: image });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getImages(req: AuthenticatedRequest, res: Response) {
    try {
      const images = await this.svc.getImages(req.identity.userId, req.identity.orgId);
      return res.json({ success: true, data: images });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async deleteImage(req: AuthenticatedRequest, res: Response) {
    try {
      const id = req.params.id;
      await this.svc.deleteImage(id);
      return res.json({ success: true, message: 'Image deleted' });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}

export class FileUploadController {
  private progressSvc = new FileUploadProgressService();

  async uploadFileForProgress(req: AuthenticatedRequest, res: Response) {
    try {
      const { fileName, totalSize } = req.body;
      const progress = await this.progressSvc.createProgress(req.identity.userId, fileName, totalSize);
      return res.status(201).json({ success: true, data: progress });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }

  async getProgressUpdate(req: AuthenticatedRequest, res: Response) {
    try {
      const uploadId = req.params.uploadId;
      const progress = await this.progressSvc.getProgress(uploadId);
      return res.json({ success: true, data: progress });
    } catch (err: any) {
      return res.status(500).json({ success: false, message: err.message });
    }
  }
}
