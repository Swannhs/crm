import { ProjectRepository, BoardRepository, ColumnRepository, CardRepository, TaskRepository, LabelRepository } from '../repositories/project.repository.js';

export class ProjectService {
  private repo = new ProjectRepository();

  async getProjects(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { orgId, isDeleted: false };
    if (filters.status) where.status = filters.status;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async getProject(id: string, orgId: string) {
    const project = await this.repo.findUnique(id, orgId);
    if (!project) throw new Error('Not found');
    return project;
  }

  async createProject(orgId: string, userId: string, data: any) {
    const project = await this.repo.create({ orgId, createdBy: userId, name: data.name, description: data.description, color: data.color });
    
    // Auto-create a default board
    const boardService = new BoardService();
    await boardService.createBoard(orgId, userId, project.id, { name: 'Main Board' });
    
    return project;
  }

  async updateProject(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, { name: data.name, description: data.description, status: data.status, color: data.color });
  }

  async deleteProject(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class BoardService {
  private repo = new BoardRepository();

  async getBoards(projectId: string, orgId: string) {
    return this.repo.findByProject(projectId, orgId);
  }

  async getBoard(id: string, orgId: string) {
    const board = await this.repo.findWithColumns(id, orgId);
    if (!board) throw new Error('Not found');
    return board;
  }

  async createBoard(orgId: string, userId: string, projectId: string, data: any) {
    const board = await this.repo.create({ orgId, projectId, createdBy: userId, name: data.name, description: data.description, background: data.background });
    
    // Auto-create default columns
    const columnService = new ColumnService();
    await columnService.createColumn(board.id, orgId, { name: 'To Do', position: 1 });
    await columnService.createColumn(board.id, orgId, { name: 'In Progress', position: 2 });
    await columnService.createColumn(board.id, orgId, { name: 'Done', position: 3 });
    
    return board;
  }

  async updateBoard(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, { name: data.name, description: data.description, background: data.background, status: data.status });
  }

  async deleteBoard(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class ColumnService {
  private repo = new ColumnRepository();

  async getColumns(boardId: string, orgId: string) {
    return this.repo.findByBoard(boardId, orgId);
  }

  async createColumn(boardId: string, orgId: string, data: any) {
    return this.repo.create({ boardId, orgId, name: data.name, position: data.position || 0, color: data.color });
  }

  async updateColumn(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, { name: data.name, position: data.position, color: data.color });
  }

  async deleteColumn(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class CardService {
  private repo = new CardRepository();

  async getCards(boardId: string, orgId: string) {
    return this.repo.findByBoard(boardId, orgId);
  }

  async getCard(id: string, orgId: string) {
    const card = await this.repo.findUnique(id, orgId);
    if (!card) throw new Error('Not found');
    return card;
  }

  async createCard(boardId: string, orgId: string, userId: string, data: any) {
    return this.repo.create({
      columnId: data.columnId, boardId, orgId, createdBy: userId,
      title: data.title, description: data.description, position: data.position || 0,
      dueDate: data.dueDate ? new Date(data.dueDate) : null,
      priority: data.priority, assignees: data.assignees || [], labels: data.labels || []
    });
  }

  async updateCard(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, {
      title: data.title, description: data.description, columnId: data.columnId,
      position: data.position,
      dueDate: data.dueDate !== undefined ? (data.dueDate ? new Date(data.dueDate) : null) : undefined,
      priority: data.priority, assignees: data.assignees, labels: data.labels, isArchived: data.isArchived
    });
  }

  async deleteCard(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class TaskService {
  private repo = new TaskRepository();

  async getTasks(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '30');
    const where: any = { orgId, isDeleted: false };
    if (filters.status) where.status = filters.status;
    if (filters.categoryId) where.categoryId = filters.categoryId;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }

  async createTask(orgId: string, userId: string, data: any) {
    return this.repo.create({
      orgId, createdBy: userId, title: data.title, description: data.description,
      status: data.status || "todo", priority: data.priority,
      dueDate: data.dueDate ? new Date(data.dueDate) : null,
      assignees: data.assignees || [], categoryId: data.categoryId || null
    });
  }

  async updateTask(id: string, orgId: string, data: any) {
    return this.repo.update(id, orgId, {
      title: data.title, description: data.description, status: data.status,
      priority: data.priority,
      dueDate: data.dueDate !== undefined ? (data.dueDate ? new Date(data.dueDate) : null) : undefined,
      assignees: data.assignees
    });
  }

  async deleteTask(id: string, orgId: string) {
    return this.repo.softDelete(id, orgId);
  }
}

export class LabelService {
  private repo = new LabelRepository();

  async getLabels(orgId: string) { return this.repo.findMany(orgId); }

  async createLabel(orgId: string, name: string, color: string) {
    return this.repo.create({ orgId, name, color: color || "#6366f1" });
  }

  async deleteLabel(id: string, orgId: string) {
    return this.repo.delete(id, orgId);
  }
}
