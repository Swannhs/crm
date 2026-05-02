import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { ProjectsService } from './projects.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  private parseBoardProjectId(boardId: string): number {
    const parsed = Number(String(boardId).replace(/^board-/, ''));
    if (!Number.isInteger(parsed) || parsed <= 0) {
      throw new BadRequestException(
        'Invalid boardId. Expected format: board-<projectId>.',
      );
    }
    return parsed;
  }

  // Projects
  @Get('v1/projects')
  async getProjects(@Query() paginationDto: PaginationDto) {
    return this.projectsService.findAllProjects(paginationDto);
  }

  @Get('v1/projects/:id')
  async getProject(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.projectsService.findOneProject(numericId);
  }

  @Post('v1/projects')
  async createProject(@Body() data: any) {
    return this.projectsService.createProject(data);
  }

  @Put('v1/projects/:id')
  async updateProject(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.projectsService.updateProject(id, data);
  }

  @Delete('v1/projects/:id')
  async deleteProject(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.projectsService.removeProject(numericId);
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
    const board = await this.projectsService.findBoard(projectId);
    return board ? [board] : [];
  }

  @Post('v1/projects/:projectId/boards')
  async createProjectBoard(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Body() data: any,
  ) {
    return this.projectsService.createBoard(projectId, data);
  }

  @Get('v1/boards/:boardId')
  async getBoard(@Param('boardId') boardId: string) {
    const projectId = this.parseBoardProjectId(boardId);
    return this.projectsService.findBoard(projectId);
  }

  @Get('v1/boards/:boardId/columns')
  async getColumns(@Param('boardId') boardId: string) {
    const projectId = this.parseBoardProjectId(boardId);
    return this.projectsService.findColumnsByProject(projectId);
  }

  @Post('v1/boards/:boardId/columns')
  async createColumn(@Param('boardId') boardId: string, @Body() data: any) {
    const projectId = this.parseBoardProjectId(boardId);
    const column = await this.projectsService.createColumnForProject(
      projectId,
      data,
    );
    return { ...column, boardId, projectId };
  }

  @Patch('v1/columns/:id')
  async updateColumn(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    const updated = await this.projectsService.updateColumn(id, data);
    return updated
      ? {
          id: String(updated.id),
          name: updated.name,
          sequence: updated.sequence,
          fold: updated.fold,
        }
      : null;
  }

  @Delete('v1/columns/:id')
  async deleteColumn(@Param('id', ParseIntPipe) id: number) {
    await this.projectsService.removeColumn(id);
    return { success: true };
  }

  @Post('v1/boards/:boardId/columns/reorder')
  async reorderColumns(
    @Param('boardId') boardId: string,
    @Body() data: { orderedColumnIds?: Array<string | number> },
  ) {
    const projectId = this.parseBoardProjectId(boardId);
    const orderedColumnIds = Array.isArray(data?.orderedColumnIds)
      ? data.orderedColumnIds
      : [];
    return this.projectsService.reorderColumns(projectId, orderedColumnIds);
  }

  @Get('v1/boards/:boardId/cards')
  async getCards(@Param('boardId') boardId: string) {
    const projectId = this.parseBoardProjectId(boardId);
    return this.projectsService.findTasksByProject(projectId);
  }

  @Post('v1/boards/:boardId/cards')
  async createCard(@Param('boardId') boardId: string, @Body() data: any) {
    const projectId = this.parseBoardProjectId(boardId);
    return this.projectsService.createTask({ ...data, project_id: projectId });
  }

  @Patch('v1/cards/:id')
  async updateCard(@Param('id') id: string, @Body() data: any) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.projectsService.updateTask(numericId, data);
  }

  @Delete('v1/cards/:id')
  async deleteCard(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.projectsService.removeTask(numericId);
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
  async createSubtask(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.projectsService.createSubtask(id, data);
  }

  // Comments & Replies
  @Get('v1/tasks/:id/comments')
  async getComments(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.getTaskComments(id);
  }

  @Post('v1/tasks/:id/comments')
  async addComment(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.projectsService.addTaskComment(id, data);
  }

  @Post('v1/comments/:commentId/replies')
  async addReply(
    @Param('commentId', ParseIntPipe) commentId: number,
    @Body() data: any,
  ) {
    return this.projectsService.addCommentReply(commentId, data);
  }
}
