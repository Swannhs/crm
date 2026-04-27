import { Controller, Get, Post, Put, Delete, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { ProjectsService } from './projects.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  // Projects
  @Get('v1/projects')
  async getProjects(@Query() paginationDto: PaginationDto) {
    return this.projectsService.findAllProjects(paginationDto);
  }

  @Get('v1/projects/:id')
  async getProject(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.findOneProject(id);
  }

  @Post('v1/projects')
  async createProject(@Body() data: any) {
    return this.projectsService.createProject(data);
  }

  @Put('v1/projects/:id')
  async updateProject(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.projectsService.updateProject(id, data);
  }

  @Delete('v1/projects/:id')
  async deleteProject(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.removeProject(id);
  }

  // Tasks
  @Get('v1/tasks')
  async getTasks(@Query() paginationDto: PaginationDto) {
    return this.projectsService.findAllTasks(paginationDto);
  }

  @Post('v1/tasks')
  async createTask(@Body() data: any) {
    return this.projectsService.createTask(data);
  }

  // Kanban Compatibility (Mapping Boards/Columns/Cards to Tasks)
  @Get('v1/projects/:projectId/boards')
  async getProjectBoards(@Param('projectId', ParseIntPipe) projectId: number) {
    // Return a virtual board for the project
    const project = await this.projectsService.findOneProject(projectId);
    return [{
      id: `board-${projectId}`,
      name: `${project.name} Board`,
      projectId: projectId
    }];
  }

  @Get('v1/boards/:boardId/columns')
  async getColumns(@Param('boardId') boardId: string) {
    // Odoo tasks use stages. We return virtual columns for Kanban.
    return [
      { id: '1', name: 'New' },
      { id: '2', name: 'In Progress' },
      { id: '3', name: 'Done' }
    ];
  }

  @Get('v1/boards/:boardId/cards')
  async getCards(@Param('boardId') boardId: string) {
    const projectId = parseInt(boardId.split('-')[1]);
    return this.projectsService.findTasksByProject(projectId);
  }

  @Post('v1/boards/:boardId/cards')
  async createCard(@Param('boardId') boardId: string, @Body() data: any) {
    const projectId = parseInt(boardId.split('-')[1]);
    return this.projectsService.createTask({ ...data, project_id: projectId });
  }

  @Delete('v1/cards/:id')
  async deleteCard(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.removeTask(id);
  }

  // Timesheets
  @Get('v1/tasks/:id/worklogs')
  async getWorklogs(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.findWorklogsByTask(id);
  }

  @Post('v1/tasks/:id/worklogs')
  async logWork(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.projectsService.logWork({ ...data, taskId: id });
  }

  // Sub-tasks
  @Get('v1/tasks/:id/subtasks')
  async getSubtasks(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.findSubtasks(id);
  }

  @Post('v1/tasks/:id/subtasks')
  async createSubtask(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.projectsService.createSubtask(id, data);
  }
}
