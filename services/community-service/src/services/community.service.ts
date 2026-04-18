import { PostRepository, CommentRepository, GroupRepository } from '../repositories/community.repository.js';

export class PostService {
  private postRepo = new PostRepository();

  async getPosts(orgId: string) {
    return this.postRepo.findMany(orgId);
  }

  async createPost(orgId: string, userId: string, data: any) {
    return this.postRepo.create({
      orgId,
      userId,
      contactId: data.contact_id || null,
      groupId: data.group_id || null,
      text: data.text,
      postColor: data.post_color,
      attachments: data.attachments || []
    });
  }

  async updatePost(id: string, orgId: string, data: any) {
    const existing = await this.postRepo.findUnique(id, orgId);
    if (!existing) throw new Error('Not found');
    return this.postRepo.update(id, {
      text: data.text,
      postColor: data.post_color,
      attachments: data.attachments
    });
  }

  async deletePost(id: string, orgId: string) {
    return this.postRepo.softDelete(id, orgId);
  }

  async likePost(id: string) {
    return this.postRepo.incrementLikes(id);
  }
}

export class CommentService {
  private commentRepo = new CommentRepository();

  async getComments(postId: string, orgId: string) {
    return this.commentRepo.findMany(postId, orgId);
  }

  async createComment(postId: string, orgId: string, userId: string, data: any) {
    return this.commentRepo.create({
      postId,
      orgId,
      userId,
      contactId: data.contact_id || null,
      text: data.text
    });
  }

  async deleteComment(id: string, postId: string) {
    return this.commentRepo.softDelete(id, postId);
  }
}

export class GroupService {
  private groupRepo = new GroupRepository();

  async getGroups(orgId: string) {
    return this.groupRepo.findMany(orgId);
  }

  async createGroup(orgId: string, userId: string, data: any) {
    const group = await this.groupRepo.create({
      orgId,
      createdBy: userId,
      name: data.name,
      description: data.description,
      coverImage: data.cover_image,
      privacy: data.privacy || 'public'
    });
    // Creator auto-joins as admin
    await this.groupRepo.upsertMember(group.id, userId, 'admin');
    return group;
  }

  async getGroup(id: string, orgId: string) {
    const group = await this.groupRepo.findUnique(id, orgId);
    if (!group) throw new Error('Not found');
    return group;
  }

  async updateGroup(id: string, orgId: string, data: any) {
    const existing = await this.groupRepo.findUnique(id, orgId);
    if (!existing) throw new Error('Not found');
    return this.groupRepo.update(id, {
      name: data.name,
      description: data.description,
      coverImage: data.cover_image,
      privacy: data.privacy
    });
  }

  async deleteGroup(id: string, orgId: string) {
    return this.groupRepo.softDelete(id, orgId);
  }

  async getMembers(groupId: string) {
    return this.groupRepo.getMembers(groupId);
  }

  async addMember(groupId: string, userId: string, role: string) {
    return this.groupRepo.upsertMember(groupId, userId, role || 'member');
  }

  async removeMember(groupId: string, userId: string) {
    return this.groupRepo.removeMember(groupId, userId);
  }
}
