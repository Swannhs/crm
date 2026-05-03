import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { CurrentUser } from '../../common/decorators/user.decorator.js';
import type { Identity } from '../../common/interfaces/identity.interface.js';
import { SupportService } from './support.service.js';

@ApiTags('Support')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Get('tickets')
  @ApiOperation({ summary: 'List support tickets' })
  async listTickets(@CurrentUser() user: Identity, @Query('status') status?: string) {
    return this.supportService.listTickets(user.orgId, { status });
  }

  @Post('tickets')
  @ApiOperation({ summary: 'Create support ticket' })
  async createTicket(@CurrentUser() user: Identity, @Body() body: any) {
    return this.supportService.createTicket(user.orgId, user.userId, body);
  }

  @Get('tickets/:id')
  @ApiOperation({ summary: 'Get support ticket detail' })
  async getTicket(@CurrentUser() user: Identity, @Param('id') id: string) {
    return this.supportService.getTicket(user.orgId, id);
  }

  @Patch('tickets/:id')
  @ApiOperation({ summary: 'Update support ticket' })
  async updateTicket(@CurrentUser() user: Identity, @Param('id') id: string, @Body() body: any) {
    return this.supportService.updateTicket(user.orgId, id, body);
  }

  @Delete('tickets/:id')
  @ApiOperation({ summary: 'Delete support ticket' })
  async deleteTicket(@CurrentUser() user: Identity, @Param('id') id: string) {
    return this.supportService.deleteTicket(user.orgId, id);
  }

  @Post('tickets/:id/notes')
  @ApiOperation({ summary: 'Add internal note to ticket' })
  async addInternalNote(@CurrentUser() user: Identity, @Param('id') id: string, @Body('body') noteBody: string) {
    return this.supportService.addInternalNote(user.orgId, id, noteBody, user.userId);
  }

  @Post('tickets/:id/replies')
  @ApiOperation({ summary: 'Add customer-visible reply to ticket' })
  async addReply(@CurrentUser() user: Identity, @Param('id') id: string, @Body() body: any) {
    return this.supportService.addReply(user.orgId, id, body?.body, user.userId, body?.visibleToCustomer !== false);
  }

  @Get('kb/categories')
  async listCategories(@CurrentUser() user: Identity) {
    return this.supportService.listCategories(user.orgId);
  }

  @Post('kb/categories')
  async createCategory(@CurrentUser() user: Identity, @Body() body: any) {
    return this.supportService.createCategory(user.orgId, body);
  }

  @Get('kb/articles')
  async listArticles(@CurrentUser() user: Identity, @Query('categoryId') categoryId?: string) {
    return this.supportService.listArticles(user.orgId, { categoryId });
  }

  @Post('kb/articles')
  async createArticle(@CurrentUser() user: Identity, @Body() body: any) {
    return this.supportService.createArticle(user.orgId, user.userId, body);
  }

  @Patch('kb/articles/:id')
  async updateArticle(@CurrentUser() user: Identity, @Param('id') id: string, @Body() body: any) {
    return this.supportService.updateArticle(user.orgId, id, body);
  }

  @Get('portal/articles')
  @ApiOperation({ summary: 'Public-facing knowledge base articles' })
  async listPublicArticles(@CurrentUser() user: Identity) {
    return this.supportService.listPublicArticles(user.orgId);
  }
}
