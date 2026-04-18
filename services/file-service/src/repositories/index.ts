import { db } from '../db.js';
import type { FileManagerInput, ImageLibraryInput, FileSearchInput } from '../types/index.js';

export class FileManagerRepository {
  async create(data: FileManagerInput & { userId: string; organizationId?: string }) {
    return db.fileManager.create({ data });
  }

  async findById(id: string) {
    return db.fileManager.findUnique({ where: { id } });
  }

  async findByUserId(userId: string, organizationId: string) {
    return db.fileManager.findMany({
      where: { userId, organizationId, isDeleted: false, parentId: null },
      orderBy: [{ type: 'asc' }, { name: 'asc' }]
    });
  }

  async findByParentId(parentId: string | null, userId: string, organizationId: string) {
    return db.fileManager.findMany({
      where: { parentId, userId, organizationId, isDeleted: false },
      orderBy: [{ type: 'asc' }, { name: 'asc' }]
    });
  }

  async search(userId: string, organizationId: string, query: string) {
    return db.fileManager.findMany({
      where: {
        userId,
        organizationId,
        isDeleted: false,
        name: { contains: query, mode: 'insensitive' }
      },
      orderBy: { name: 'asc' }
    });
  }

  async findDeleted(userId: string, organizationId: string) {
    return db.fileManager.findMany({
      where: { userId, organizationId, isDeleted: true },
      orderBy: { deletedAt: 'desc' }
    });
  }

  async update(id: string, data: Partial<FileManagerInput>) {
    return db.fileManager.update({ where: { id }, data });
  }

  async delete(id: string) {
    return db.fileManager.update({ where: { id }, data: { isDeleted: true, deletedAt: new Date() } });
  }

  async permanentDelete(id: string) {
    return db.fileManager.delete({ where: { id } });
  }

  async restore(id: string) {
    return db.fileManager.update({ where: { id }, data: { isDeleted: false, deletedAt: null } });
  }

  async star(id: string) {
    return db.fileManager.update({ where: { id }, data: { isStarred: true } });
  }

  async unstar(id: string) {
    return db.fileManager.update({ where: { id }, data: { isStarred: false } });
  }

  async share(id: string, sharedWith: string[]) {
    return db.fileManager.update({ where: { id }, data: { isShared: true, sharedWith } });
  }

  async moveToFolder(fileIds: string[], folderId: string | null) {
    return db.fileManager.updateMany({
      where: { id: { in: fileIds } },
      data: { parentId: folderId }
    });
  }

  async clearAllDeleted(userId: string, organizationId: string) {
    const files = await db.fileManager.findMany({
      where: { userId, organizationId, isDeleted: true }
    });
    await db.fileManager.deleteMany({
      where: { id: { in: files.map(f => f.id) } }
    });
    return { deletedCount: files.length };
  }
}

export class FileManagerActivityRepository {
  async create(data: any) {
    return db.fileManagerActivity.create({ data });
  }

  async findByFileId(fileId: string) {
    return db.fileManagerActivity.findMany({
      where: { fileId },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
  }

  async findByUserId(userId: string, organizationId: string) {
    return db.fileManagerActivity.findMany({
      where: { userId, organizationId },
      orderBy: { createdAt: 'desc' },
      take: 100
    });
  }
}

export class ImageLibraryRepository {
  async create(data: ImageLibraryInput & { userId: string; organizationId?: string }) {
    return db.imageLibrary.create({ data });
  }

  async findById(id: string) {
    return db.imageLibrary.findUnique({ where: { id } });
  }

  async findByUserId(userId: string, organizationId: string) {
    return db.imageLibrary.findMany({
      where: { userId, organizationId },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findByCategory(userId: string, organizationId: string, category: string) {
    return db.imageLibrary.findMany({
      where: { userId, organizationId, category },
      orderBy: { createdAt: 'desc' }
    });
  }

  async delete(id: string) {
    return db.imageLibrary.delete({ where: { id } });
  }
}

export class FileUploadProgressRepository {
  async create(data: { userId: string; fileName: string; totalSize: number }) {
    return db.fileUploadProgress.create({ data });
  }

  async findById(id: string) {
    return db.fileUploadProgress.findUnique({ where: { id } });
  }

  async updateProgress(id: string, uploadedSize: number) {
    return db.fileUploadProgress.update({ where: { id }, data: { uploadedSize } });
  }

  async complete(id: string) {
    return db.fileUploadProgress.update({ where: { id }, data: { status: 'completed' } });
  }

  async fail(id: string) {
    return db.fileUploadProgress.update({ where: { id }, data: { status: 'failed' } });
  }
}