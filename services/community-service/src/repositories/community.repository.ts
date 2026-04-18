import { db } from '../db.js';

export class PostRepository {
  async findMany(orgId: string) {
    return db.post.findMany({
      where: { orgId, isDeleted: false },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findUnique(id: string, orgId: string) {
    return db.post.findFirst({ where: { id, orgId } });
  }

  async create(data: any) {
    return db.post.create({ data });
  }

  async update(id: string, data: any) {
    return db.post.update({ where: { id }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.post.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }

  async incrementLikes(id: string) {
    return db.post.update({ where: { id }, data: { likesCount: { increment: 1 } } });
  }
}

export class CommentRepository {
  async findMany(postId: string, orgId: string) {
    return db.comment.findMany({
      where: { postId, orgId, isDeleted: false },
      orderBy: { createdAt: 'asc' }
    });
  }

  async create(data: any) {
    return db.comment.create({ data });
  }

  async softDelete(id: string, postId: string) {
    return db.comment.updateMany({ where: { id, postId }, data: { isDeleted: true } });
  }
}

export class GroupRepository {
  async findMany(orgId: string) {
    return db.group.findMany({
      where: { orgId, isDeleted: false },
      include: { _count: { select: { members: true } } },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findUnique(id: string, orgId: string) {
    return db.group.findFirst({ where: { id, orgId }, include: { members: true } });
  }

  async create(data: any) {
    return db.group.create({ data });
  }

  async update(id: string, data: any) {
    return db.group.update({ where: { id }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.group.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }

  async getMembers(groupId: string) {
    return db.groupMember.findMany({ where: { groupId }, orderBy: { joinedAt: 'asc' } });
  }

  async upsertMember(groupId: string, userId: string, role: string) {
    return db.groupMember.upsert({
      where: { groupId_userId: { groupId, userId } },
      create: { groupId, userId, role },
      update: { role }
    });
  }

  async removeMember(groupId: string, userId: string) {
    return db.groupMember.deleteMany({ where: { groupId, userId } });
  }
}
