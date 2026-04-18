import { 
  FileManagerRepository, 
  FileManagerActivityRepository, 
  ImageLibraryRepository,
  FileUploadProgressRepository
} from '../repositories/index.js';
import type { FileManagerInput, ImageLibraryInput } from '../types/index.js';

export class FileManagerService {
  private repo = new FileManagerRepository();
  private activityRepo = new FileManagerActivityRepository();

  async create(data: FileManagerInput, userId: string, organizationId?: string) {
    const file = await this.repo.create({ ...data, userId, organizationId });
    await this.activityRepo.create({ userId, organizationId, fileId: file.id, action: 'created', details: { name: file.name, type: file.type } });
    return file;
  }

  async getFiles(userId: string, organizationId: string, parentId?: string) {
    return this.repo.findByParentId(parentId || null, userId, organizationId);
  }

  async getFolderItems(folderId: string, userId: string, organizationId: string) {
    return this.repo.findByParentId(folderId, userId, organizationId);
  }

  async search(userId: string, organizationId: string, query: string) {
    return this.repo.search(userId, organizationId, query);
  }

  async getDeletedFiles(userId: string, organizationId: string) {
    return this.repo.findDeleted(userId, organizationId);
  }

  async getFileById(id: string) {
    return this.repo.findById(id);
  }

  async rename(id: string, name: string) {
    return this.repo.update(id, { name });
  }

  async delete(id: string) {
    return this.repo.delete(id);
  }

  async restore(id: string) {
    return this.repo.restore(id);
  }

  async star(id: string) {
    return this.repo.star(id);
  }

  async unstar(id: string) {
    return this.repo.unstar(id);
  }

  async share(id: string, sharedWith: string[]) {
    return this.repo.share(id, sharedWith);
  }

  async move(fileIds: string[], targetFolderId: string | null) {
    return this.repo.moveToFolder(fileIds, targetFolderId);
  }

  async clearAllDeleted(userId: string, organizationId: string) {
    return this.repo.clearAllDeleted(userId, organizationId);
  }

  async addFolder(data: FileManagerInput, userId: string, organizationId?: string) {
    return this.create({ ...data, type: 'folder' }, userId, organizationId);
  }

  async pasteFile(fileIds: string[], targetFolderId: string | null, userId: string, organizationId: string) {
    return this.repo.moveToFolder(fileIds, targetFolderId);
  }
}

export class ImageLibraryService {
  private repo = new ImageLibraryRepository();

  async addImage(data: ImageLibraryInput, userId: string, organizationId?: string) {
    return this.repo.create({ ...data, userId, organizationId });
  }

  async getImages(userId: string, organizationId: string) {
    return this.repo.findByUserId(userId, organizationId);
  }

  async getImagesByCategory(userId: string, organizationId: string, category: string) {
    return this.repo.findByCategory(userId, organizationId, category);
  }

  async getImageById(id: string) {
    return this.repo.findById(id);
  }

  async deleteImage(id: string) {
    return this.repo.delete(id);
  }
}

export class FileUploadProgressService {
  private repo = new FileUploadProgressRepository();

  async createProgress(userId: string, fileName: string, totalSize: number) {
    return this.repo.create({ userId, fileName, totalSize });
  }

  async getProgress(id: string) {
    return this.repo.findById(id);
  }

  async updateProgress(id: string, uploadedSize: number) {
    return this.repo.updateProgress(id, uploadedSize);
  }

  async complete(id: string) {
    return this.repo.complete(id);
  }

  async fail(id: string) {
    return this.repo.fail(id);
  }
}