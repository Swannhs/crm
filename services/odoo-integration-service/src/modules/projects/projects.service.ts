import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class ProjectsService {
  private readonly projectModel = 'project.project';
  private readonly taskModel = 'project.task';
  private readonly taskStageModel = 'project.task.type';
  private readonly timesheetModel = 'account.analytic.line';
  private readonly taskCommentModel = 'project.task.comment';

  private readonly projectFields = [
    'id',
    'name',
    'user_id',
    'partner_id',
    'date_start',
    'date',
    'label_tasks',
    'color',
  ];

  private readonly taskFields = [
    'id',
    'name',
    'project_id',
    'user_ids',
    'stage_id',
    'date_deadline',
    'priority',
    'sequence',
    'kanban_state',
    'description',
  ];
  private readonly taskStageFields = [
    'id',
    'name',
    'sequence',
    'fold',
    'project_ids',
  ];
  private readonly taskCommentFields = [
    'id',
    'task_id',
    'parent_id',
    'author',
    'content',
    'create_date',
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  // Projects
  async findAllProjects(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = search ? [['name', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.projectModel,
        domain,
        this.projectFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'name asc' },
      ),
      this.odooClient.execute(this.projectModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async findOneProject(id: number) {
    const [project] = await this.odooClient.searchRead(
      this.projectModel,
      [['id', '=', id]],
      this.projectFields,
    );
    return project;
  }

  async findOneTask(id: number) {
    const [task] = await this.odooClient.searchRead(
      this.taskModel,
      [['id', '=', id]],
      this.taskFields,
    );
    return task;
  }

  async createProject(data: any) {
    return this.odooClient.execute(this.projectModel, 'create', [data]);
  }

  async updateProject(id: number, data: any) {
    return this.odooClient.execute(this.projectModel, 'write', [[id], data]);
  }

  async removeProject(id: number) {
    return this.odooClient.execute(this.projectModel, 'unlink', [[id]]);
  }

  // Tasks
  async findAllTasks(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = search ? [['name', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.taskModel, domain, this.taskFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'sequence asc',
      }),
      this.odooClient.execute(this.taskModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async findTasksByProject(projectId: number) {
    const rows = await this.odooClient.searchRead(
      this.taskModel,
      [['project_id', '=', projectId]],
      this.taskFields,
      { order: 'sequence asc' },
    );
    return rows.map((task: any) => ({
      ...task,
      title: task?.name,
      columnId: String(
        Array.isArray(task?.stage_id)
          ? task.stage_id[0]
          : (task?.stage_id ?? ''),
      ),
      createdAt: task?.create_date ?? task?.createdAt ?? null,
      updatedAt: task?.write_date ?? task?.updatedAt ?? null,
    }));
  }

  async createTask(data: any) {
    const payload = { ...data };
    if (payload.title && !payload.name) payload.name = payload.title;
    if (payload.columnId && !payload.stage_id)
      payload.stage_id = Number(payload.columnId);
    delete payload.title;
    delete payload.columnId;
    const id = await this.odooClient.execute(this.taskModel, 'create', [
      payload,
    ]);
    return this.findOneTask(Number(id));
  }

  async findColumnsByProject(projectId: number) {
    const stages = await this.odooClient.searchRead(
      this.taskStageModel,
      [],
      this.taskStageFields,
      { order: 'sequence asc, id asc' },
    );

    return stages
      .filter((stage: any) => {
        const projectIdsRaw = stage?.project_ids;
        if (!Array.isArray(projectIdsRaw) || projectIdsRaw.length === 0)
          return true;
        const projectIds = projectIdsRaw
          .flatMap((value: any) => {
            if (Array.isArray(value)) {
              // Handle Odoo m2m command style values, e.g. [6, 0, [1,2]]
              if (value[0] === 6 && Array.isArray(value[2])) return value[2];
              return value;
            }
            return [value];
          })
          .map((v: any) => Number(v))
          .filter((v: number) => Number.isFinite(v));
        return projectIds.includes(projectId);
      })
      .map((stage: any) => ({
        id: String(stage.id),
        name: String(stage.name ?? ''),
        sequence: Number(stage.sequence ?? 0),
        fold: Boolean(stage.fold),
      }));
  }

  async createColumnForProject(projectId: number, data: any) {
    const name = String(data?.name ?? '').trim();
    if (!name) {
      throw new Error('Column name is required.');
    }

    const existing = await this.findColumnsByProject(projectId);
    const maxSequence = existing.reduce(
      (max, col) => Math.max(max, Number(col.sequence ?? 0)),
      0,
    );
    const sequence = Number.isFinite(Number(data?.sequence))
      ? Number(data.sequence)
      : maxSequence + 1;

    const stageId = await this.odooClient.execute(
      this.taskStageModel,
      'create',
      [
        {
          name,
          sequence,
          // Odoo many2many command: replace project_ids with one project link.
          project_ids: [[6, 0, [projectId]]],
          fold: Boolean(data?.fold ?? false),
        },
      ],
    );

    const [created] = await this.odooClient.searchRead(
      this.taskStageModel,
      [['id', '=', Number(stageId)]],
      this.taskStageFields,
    );

    return {
      id: String(created?.id ?? stageId),
      name: String(created?.name ?? name),
      sequence: Number(created?.sequence ?? sequence),
      fold: Boolean(created?.fold ?? false),
    };
  }

  async updateColumn(id: number, data: any) {
    const updateData: Record<string, unknown> = {};
    if (typeof data?.name === 'string' && data.name.trim()) {
      updateData.name = data.name.trim();
    }
    if (
      data?.sequence !== undefined &&
      Number.isFinite(Number(data.sequence))
    ) {
      updateData.sequence = Number(data.sequence);
    }
    if (data?.fold !== undefined) {
      updateData.fold = Boolean(data.fold);
    }

    if (Object.keys(updateData).length === 0) {
      const [noop] = await this.odooClient.searchRead(
        this.taskStageModel,
        [['id', '=', id]],
        this.taskStageFields,
      );
      return noop;
    }

    await this.odooClient.execute(this.taskStageModel, 'write', [
      [id],
      updateData,
    ]);
    const [updated] = await this.odooClient.searchRead(
      this.taskStageModel,
      [['id', '=', id]],
      this.taskStageFields,
    );
    return updated;
  }

  async removeColumn(id: number) {
    const tasks = await this.odooClient.searchRead(
      this.taskModel,
      [['stage_id', '=', id]],
      ['id'],
    );
    const taskIds = (tasks || [])
      .map((t: any) => Number(t.id))
      .filter((v: number) => Number.isFinite(v));
    if (taskIds.length > 0) {
      await this.odooClient.execute(this.taskModel, 'unlink', [taskIds]);
    }
    return this.odooClient.execute(this.taskStageModel, 'unlink', [[id]]);
  }

  async reorderColumns(
    projectId: number,
    orderedColumnIds: Array<string | number>,
  ) {
    const existing = await this.findColumnsByProject(projectId);
    const existingIds = new Set(existing.map((col: any) => String(col.id)));
    const normalized = orderedColumnIds
      .map((id) => String(id))
      .filter((id) => existingIds.has(id));

    for (let index = 0; index < normalized.length; index += 1) {
      const columnId = Number(normalized[index]);
      await this.odooClient.execute(this.taskStageModel, 'write', [
        [columnId],
        { sequence: index + 1 },
      ]);
    }
    return this.findColumnsByProject(projectId);
  }

  async findBoard(projectId: number) {
    const project = await this.findOneProject(projectId);
    if (!project) return null;
    return {
      id: `board-${projectId}`,
      name: `${project.name} Board`,
      projectId,
    };
  }

  async createBoard(projectId: number, data: any) {
    const existing = await this.findBoard(projectId);
    if (!existing) throw new Error('Project not found');
    const name = String(data?.name ?? '').trim();
    return {
      ...existing,
      name: name || existing.name,
    };
  }

  async updateTask(id: number, data: any) {
    // Map frontend fields if necessary
    const updateData = { ...data };
    if (updateData.title && !updateData.name)
      updateData.name = updateData.title;
    if (data.columnId) {
      updateData.stage_id = parseInt(data.columnId);
      delete updateData.columnId;
    }
    delete updateData.title;
    await this.odooClient.execute(this.taskModel, 'write', [[id], updateData]);
    return this.findOneTask(id);
  }

  async removeTask(id: number) {
    return this.odooClient.execute(this.taskModel, 'unlink', [[id]]);
  }

  // Timesheets / Worklogs
  async findWorklogsByTask(taskId: number) {
    return this.odooClient.searchRead(
      this.timesheetModel,
      [['task_id', '=', taskId]],
      ['id', 'name', 'date', 'unit_amount', 'user_id'],
      { order: 'date desc' },
    );
  }

  async logWork(data: {
    taskId: number;
    projectId: number;
    name: string;
    hours: number;
    date: string;
  }) {
    return this.odooClient.execute(this.timesheetModel, 'create', [
      {
        name: data.name,
        task_id: data.taskId,
        project_id: data.projectId,
        unit_amount: data.hours,
        date: data.date,
        user_id: 1, // Defaulting to Admin for mock/simplified flow
      },
    ]);
  }

  // Sub-tasks
  async findSubtasks(parentTaskId: number) {
    return this.odooClient.searchRead(
      this.taskModel,
      [['parent_id', '=', parentTaskId]],
      this.taskFields,
    );
  }

  async createSubtask(parentTaskId: number, data: any) {
    const parentTask = await this.findOneTask(parentTaskId);
    return this.odooClient.execute(this.taskModel, 'create', [
      {
        ...data,
        name: data?.name ?? data?.title ?? 'Subtask',
        parent_id: parentTaskId,
        project_id: parentTask.project_id?.[0],
      },
    ]);
  }

  async getTaskComments(taskId: number) {
    const rows = await this.odooClient.searchRead(
      this.taskCommentModel,
      [['task_id', '=', taskId]],
      this.taskCommentFields,
      { order: 'create_date asc, id asc' },
    );

    const comments = rows
      .filter((row: any) => !row.parent_id)
      .map((row: any) => ({
        id: String(row.id),
        taskId,
        author: String(row.author ?? 'Unknown'),
        content: String(row.content ?? ''),
        createdAt: row.create_date ?? null,
        replies: [] as any[],
      }));

    const byId = new Map(comments.map((c: any) => [c.id, c]));
    rows
      .filter((row: any) => !!row.parent_id)
      .forEach((row: any) => {
        const parentId = String(
          Array.isArray(row.parent_id) ? row.parent_id[0] : row.parent_id,
        );
        const parent = byId.get(parentId);
        if (!parent) return;
        parent.replies.push({
          id: String(row.id),
          taskId,
          parentId,
          author: String(row.author ?? 'Unknown'),
          content: String(row.content ?? ''),
          createdAt: row.create_date ?? null,
        });
      });

    return comments;
  }

  async addTaskComment(taskId: number, data: any) {
    const content = String(data?.content ?? '').trim();
    if (!content) throw new Error('Comment content is required.');
    const author =
      String(data?.author ?? data?.userName ?? 'User').trim() || 'User';
    const id = await this.odooClient.execute(this.taskCommentModel, 'create', [
      {
        task_id: taskId,
        author,
        content,
        parent_id: false,
        create_date: new Date().toISOString(),
      },
    ]);
    return {
      id: String(id),
      taskId,
      author,
      content,
      createdAt: new Date().toISOString(),
      replies: [],
    };
  }

  async addCommentReply(commentId: number, data: any) {
    const content = String(data?.content ?? '').trim();
    if (!content) throw new Error('Reply content is required.');
    const author =
      String(data?.author ?? data?.userName ?? 'User').trim() || 'User';

    const [parent] = await this.odooClient.searchRead(
      this.taskCommentModel,
      [['id', '=', commentId]],
      this.taskCommentFields,
    );
    if (!parent) throw new Error('Parent comment not found.');
    const taskId = Number(
      Array.isArray(parent.task_id) ? parent.task_id[0] : parent.task_id,
    );

    const id = await this.odooClient.execute(this.taskCommentModel, 'create', [
      {
        task_id: taskId,
        parent_id: commentId,
        author,
        content,
        create_date: new Date().toISOString(),
      },
    ]);

    return {
      id: String(id),
      taskId,
      parentId: String(commentId),
      author,
      content,
      createdAt: new Date().toISOString(),
    };
  }
}
