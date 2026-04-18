import { Response } from 'express';
import { PostService, CommentService, GroupService } from '../services/community.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class PostController {
  private postService = new PostService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const posts = await this.postService.getPosts(req.identity.orgId);
      return res.json({ data: posts });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const post = await this.postService.createPost(orgId, userId, req.body);
      return res.status(201).json({ data: post });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const post = await this.postService.updatePost(req.params.id, req.identity.orgId, req.body);
      return res.json({ data: post });
    } catch (err: any) {
      if (err.message === 'Not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.postService.deletePost(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async like(req: AuthenticatedRequest, res: Response) {
    try {
      await this.postService.likePost(req.params.id);
      return res.json({ message: 'Liked' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export class CommentController {
  private commentService = new CommentService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const comments = await this.commentService.getComments(req.params.postId, req.identity.orgId);
      return res.json({ data: comments });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      const comment = await this.commentService.createComment(req.params.postId, orgId, userId, req.body);
      return res.status(201).json({ data: comment });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.commentService.deleteComment(req.params.id, req.params.postId);
      return res.json({ message: 'Deleted' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export class GroupController {
  private groupService = new GroupService();

  async list(req: AuthenticatedRequest, res: Response) {
    try {
      const groups = await this.groupService.getGroups(req.identity.orgId);
      return res.json({ data: groups });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async get(req: AuthenticatedRequest, res: Response) {
    try {
      const group = await this.groupService.getGroup(req.params.id, req.identity.orgId);
      return res.json({ data: group });
    } catch (err: any) {
      if (err.message === 'Not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async create(req: AuthenticatedRequest, res: Response) {
    try {
      const { orgId, userId } = req.identity;
      if (!req.body.name) return res.status(400).json({ message: 'name required' });
      const group = await this.groupService.createGroup(orgId, userId, req.body);
      return res.status(201).json({ data: group });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async update(req: AuthenticatedRequest, res: Response) {
    try {
      const group = await this.groupService.updateGroup(req.params.id, req.identity.orgId, req.body);
      return res.json({ data: group });
    } catch (err: any) {
      if (err.message === 'Not found') return res.status(404).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    }
  }

  async delete(req: AuthenticatedRequest, res: Response) {
    try {
      await this.groupService.deleteGroup(req.params.id, req.identity.orgId);
      return res.json({ message: 'Deleted' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async listMembers(req: AuthenticatedRequest, res: Response) {
    try {
      const members = await this.groupService.getMembers(req.params.id);
      return res.json({ data: members });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async addMember(req: AuthenticatedRequest, res: Response) {
    try {
      const { userId } = req.identity;
      const member = await this.groupService.addMember(
        req.params.id,
        req.body.user_id || userId,
        req.body.role
      );
      return res.status(201).json({ data: member });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  async removeMember(req: AuthenticatedRequest, res: Response) {
    try {
      await this.groupService.removeMember(req.params.id, req.params.userId);
      return res.json({ message: 'Removed' });
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}
