import { db } from '../db.js';

export class ProjectRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.project.findMany({ where, orderBy: { createdAt: "desc" }, skip, take, include: { _count: { select: { boards: true } } } }),
      db.project.count({ where })
    ]);
    return { data, total };
  }

  async findUnique(id: string, orgId: string) {
    return db.project.findFirst({ where: { id, orgId, isDeleted: false }, include: { boards: { where: { isDeleted: false } } } });
  }

  async create(data: any) { return db.project.create({ data }); }

  async update(id: string, orgId: string, data: any) {
    return db.project.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.project.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class BoardRepository {
  async findByProject(projectId: string, orgId: string) {
    return db.board.findMany({ where: { projectId, orgId, isDeleted: false }, orderBy: { createdAt: "asc" } });
  }

  async findWithColumns(id: string, orgId: string) {
    return db.board.findFirst({
      where: { id, orgId, isDeleted: false },
      include: {
        columns: {
          where: { isDeleted: false },
          include: { cards: { where: { isDeleted: false }, orderBy: { position: "asc" } } },
          orderBy: { position: "asc" }
        }
      }
    });
  }

  async create(data: any) { return db.board.create({ data }); }

  async update(id: string, orgId: string, data: any) {
    return db.board.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.board.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class ColumnRepository {
  async findByBoard(boardId: string, orgId: string) {
    return db.column.findMany({ where: { boardId, orgId, isDeleted: false }, orderBy: { position: "asc" } });
  }

  async create(data: any) { return db.column.create({ data }); }

  async update(id: string, orgId: string, data: any) {
    return db.column.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.column.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class CardRepository {
  async findByBoard(boardId: string, orgId: string) {
    return db.card.findMany({ where: { boardId, orgId, isDeleted: false, isArchived: false }, orderBy: { position: "asc" } });
  }

  async findUnique(id: string, orgId: string) {
    return db.card.findFirst({ where: { id, orgId, isDeleted: false }, include: { comments: { where: { isDeleted: false } } } });
  }

  async create(data: any) { return db.card.create({ data }); }

  async update(id: string, orgId: string, data: any) {
    return db.card.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.card.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class TaskRepository {
  async findMany(where: any, skip: number, take: number) {
    const [data, total] = await Promise.all([
      db.task.findMany({ where, orderBy: { createdAt: "desc" }, skip, take }),
      db.task.count({ where })
    ]);
    return { data, total };
  }

  async create(data: any) { return db.task.create({ data }); }

  async update(id: string, orgId: string, data: any) {
    return db.task.updateMany({ where: { id, orgId }, data });
  }

  async softDelete(id: string, orgId: string) {
    return db.task.updateMany({ where: { id, orgId }, data: { isDeleted: true } });
  }
}

export class LabelRepository {
  async findMany(orgId: string) {
    return db.label.findMany({ where: { orgId }, orderBy: { name: "asc" } });
  }

  async create(data: any) { return db.label.create({ data }); }

  async delete(id: string, orgId: string) {
    return db.label.deleteMany({ where: { id, orgId } });
  }
}
