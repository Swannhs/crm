import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class ProjectsService {
  private readonly projectModel = 'project.project';
  private readonly taskModel = 'project.task';
  private readonly timesheetModel = 'account.analytic.line';

  private readonly projectFields = [
    'id', 'name', 'user_id', 'partner_id', 'date_start', 'date', 'label_tasks', 'color'
  ];

  private readonly taskFields = [
    'id', 'name', 'project_id', 'user_ids', 'stage_id', 'date_deadline', 'priority', 'sequence', 'kanban_state', 'description'
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
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'name asc' }
      ),
      this.odooClient.execute(this.projectModel, 'search_count', [domain])
    ]);

    return { data, total };
  }

  async findOneProject(id: number) {
    const [project] = await this.odooClient.searchRead(
      this.projectModel,
      [['id', '=', id]],
      this.projectFields
    );
    return project;
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
      this.odooClient.searchRead(
        this.taskModel,
        domain,
        this.taskFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'sequence asc' }
      ),
      this.odooClient.execute(this.taskModel, 'search_count', [domain])
    ]);

    return { data, total };
  }

  async findTasksByProject(projectId: number) {
    return this.odooClient.searchRead(
      this.taskModel,
      [['project_id', '=', projectId]],
      this.taskFields,
      { order: 'sequence asc' }
    );
  }

  async createTask(data: any) {
    return this.odooClient.execute(this.taskModel, 'create', [data]);
  }

  async updateTask(id: number, data: any) {
    // Map frontend fields if necessary
    const updateData = { ...data };
    if (data.columnId) {
      updateData.stage_id = parseInt(data.columnId);
      delete updateData.columnId;
    }
    return this.odooClient.execute(this.taskModel, 'write', [[id], updateData]);
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
      { order: 'date desc' }
    );
  }

  async logWork(data: { taskId: number; projectId: number; name: string; hours: number; date: string }) {
    return this.odooClient.execute(this.timesheetModel, 'create', [{
      name: data.name,
      task_id: data.taskId,
      project_id: data.projectId,
      unit_amount: data.hours,
      date: data.date,
      user_id: 1, // Defaulting to Admin for mock/simplified flow
    }]);
  }

  // Sub-tasks
  async findSubtasks(parentTaskId: number) {
    return this.odooClient.searchRead(
      this.taskModel,
      [['parent_id', '=', parentTaskId]],
      this.taskFields
    );
  }

  async createSubtask(parentTaskId: number, data: any) {
    const parentTask = await this.findOneProject(parentTaskId);
    return this.odooClient.execute(this.taskModel, 'create', [{
      ...data,
      parent_id: parentTaskId,
      project_id: parentTask.project_id?.[0],
    }]);
  }
}
