import { BadRequestException, Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { CurrentUser } from '../../common/decorators/user.decorator.js';
import type { Identity } from '../../common/interfaces/identity.interface.js';
import { ScoresService } from './scores.service.js';
import { ContactsService } from '../contacts/contacts.service.js';

@ApiTags('Scores')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('scores')
export class ScoresController {
  constructor(
    private readonly scoresService: ScoresService,
    private readonly contactsService: ContactsService,
  ) {}

  @Get('contacts/:id')
  @ApiOperation({ summary: 'Get calculated score for a contact' })
  async getContactScore(@CurrentUser() user: Identity, @Param('id') id: string) {
    const odooId = /^\\d+$/.test(id) ? Number(id) : await this.contactsService.resolveUuid(id);
    if (!odooId) throw new BadRequestException('Invalid contact id');
    return this.scoresService.getContactScore(user.orgId, odooId);
  }

  @Get('leads/hot')
  @ApiOperation({ summary: 'Get hottest leads by score' })
  async getHotLeads(
    @CurrentUser() user: Identity,
    @Query('limit') limit?: string,
    @Query('threshold') threshold?: string,
  ) {
    return this.scoresService.getHotLeads(user.orgId, limit ? Number(limit) : 20, threshold ? Number(threshold) : 60);
  }

  @Get('rules')
  @ApiOperation({ summary: 'List scoring rules for org' })
  async getRules(@CurrentUser() user: Identity) {
    return this.scoresService.getRules(user.orgId);
  }

  @Post('rules')
  @ApiOperation({ summary: 'Create a scoring rule' })
  async createRule(@CurrentUser() user: Identity, @Body() body: any) {
    return this.scoresService.createRule(user.orgId, body);
  }

  @Put('rules/:id')
  @ApiOperation({ summary: 'Update a scoring rule' })
  async updateRule(@CurrentUser() user: Identity, @Param('id') id: string, @Body() body: any) {
    return this.scoresService.updateRule(user.orgId, id, body);
  }
}
