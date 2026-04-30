import { Controller, Get, Post, Put, Patch, Delete, Body, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { MarketingService } from './marketing.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Marketing')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('marketing')
export class MarketingController {
  constructor(private readonly marketingService: MarketingService) {}

  @Get('summary')
  @ApiOperation({ summary: 'Get marketing summary dashboard stats' })
  async getSummary() {
    const stats = await this.marketingService.analytics();
    return {
      totalContacts: stats.totalLeads,
      activeCampaigns: stats.activeCampaigns,
      scheduledCampaigns: 0,
      sentCampaigns: stats.totalCampaigns - stats.activeCampaigns,
      openRate: 0,
      clickRate: 0,
      conversionRate: stats.conversionRate,
      channelHealth: 'healthy',
    };
  }

  @Get('activity')
  @ApiOperation({ summary: 'Get recent marketing activity' })
  async getActivity() {
    return [];
  }

  // --- Campaigns (UTM) ---

  @Get('campaigns')
  @ApiOperation({ summary: 'List all marketing campaigns' })
  async listCampaigns(@Query() paginationDto: PaginationDto) {
    const result = await this.marketingService.listCampaigns(paginationDto);
    return {
      ...result,
      data: result.data.map((c: any) => ({
        id: String(c.id),
        name: c.name,
        type: 'email',
        status: c.active ? 'active' : Number(c?.color ?? -1) === 8 ? 'archived' : 'paused',
        active: c.active !== false,
        color: c?.color,
        title: c?.title,
        createdAt: c.create_date,
        updatedAt: c.write_date,
      })),
    };
  }

  @Post('campaigns')
  @ApiOperation({ summary: 'Create a new campaign' })
  async createCampaign(@Body() data: any) {
    return this.marketingService.createCampaign(data);
  }

  @Get('campaigns/:id')
  @ApiOperation({ summary: 'Get a specific campaign' })
  async getCampaign(@Param('id', ParseIntPipe) id: number) {
    const c = await this.marketingService.getCampaign(id);
    if (!c) return null;
    return {
      id: String(c.id),
      name: c.name,
      type: 'email',
      status: c.active ? 'active' : Number(c?.color ?? -1) === 8 ? 'archived' : 'paused',
      active: c.active !== false,
      color: c?.color,
      title: c?.title,
      createdAt: c.create_date,
      updatedAt: c.write_date,
    };
  }

  @Patch('campaigns/:id')
  @ApiOperation({ summary: 'Update a campaign' })
  async updateCampaign(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.marketingService.updateCampaign(id, data);
  }

  @Put('campaigns/:id')
  @ApiOperation({ summary: 'Update a campaign (PUT alias)' })
  async updateCampaignPut(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.marketingService.updateCampaign(id, data);
  }

  @Delete('campaigns/:id')
  @ApiOperation({ summary: 'Delete a campaign' })
  async removeCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.removeCampaign(id);
  }

  @Post('campaigns/:id/launch')
  @ApiOperation({ summary: 'Set campaign status to active' })
  async launchCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.setCampaignStatus(id, 'launch');
  }

  @Post('campaigns/:id/pause')
  @ApiOperation({ summary: 'Set campaign status to paused' })
  async pauseCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.setCampaignStatus(id, 'pause');
  }

  @Post('campaigns/:id/archive')
  @ApiOperation({ summary: 'Archive campaign (soft)' })
  async archiveCampaign(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.setCampaignStatus(id, 'archive');
  }

  // --- Mailing Actions ---

  @Post('campaigns/:id/send')
  @ApiOperation({ summary: 'Send campaign mailing' })
  async sendCampaign(@Param('id', ParseIntPipe) id: number) {
    const mailings = await this.marketingService.listMailings(id);
    if (mailings.length === 0) throw new Error('No mailing found for this campaign');
    return this.marketingService.sendMailing(mailings[0].id);
  }

  @Post('campaigns/:id/schedule')
  @ApiOperation({ summary: 'Schedule campaign mailing' })
  async scheduleCampaign(@Param('id', ParseIntPipe) id: number, @Body() body: { time: string }) {
    const mailings = await this.marketingService.listMailings(id);
    if (mailings.length === 0) throw new Error('No mailing found for this campaign');
    return this.marketingService.scheduleMailing(mailings[0].id, body.time);
  }

  @Post('campaigns/:id/send-test')
  async sendTest(@Param('id', ParseIntPipe) id: number, @Body() body: { email: string }) {
    return { success: true };
  }

  // --- Segments (Mailing Lists) ---

  @Get('segments')
  @ApiOperation({ summary: 'List all marketing segments' })
  async listSegments() {
    const segments = await this.marketingService.listSegments();
    return segments.map((s: any) => ({
      id: String(s.id),
      name: s.name,
      contactCount: s.contact_count ?? s.contact_nbr ?? 0, // Dynamic mapping based on Odoo version
      type: 'static',
      createdAt: s.create_date || new Date().toISOString(),
      updatedAt: s.write_date || new Date().toISOString(),
    }));
  }

  @Get('segments/:id')
  async getSegment(@Param('id', ParseIntPipe) id: number) {
    const s = await this.marketingService.getSegment(id);
    if (!s) return null;
    return {
      id: String(s.id),
      name: s.name,
      contactCount: s.contact_count ?? s.contact_nbr ?? 0,
      type: 'static',
      createdAt: s.create_date,
      updatedAt: s.write_date,
    };
  }

  @Post('segments')
  async createSegment(@Body() data: any) {
    return this.marketingService.createSegment(data);
  }

  @Patch('segments/:id')
  async updateSegment(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.marketingService.updateSegment(id, data);
  }

  @Delete('segments/:id')
  async deleteSegment(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.deleteSegment(id);
  }

  // --- Templates ---

  @Get('templates')
  @ApiOperation({ summary: 'List all marketing templates' })
  async listTemplates() {
    const templates = await this.marketingService.listTemplates();
    return templates.map((t: any) => ({
      id: String(t.id),
      name: t.name,
      subject: t.subject,
      content: t.body_html,
      category: 'newsletter',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
  }

  @Get('templates/:id')
  async getTemplate(@Param('id', ParseIntPipe) id: number) {
    const t = await this.marketingService.getTemplate(id);
    if (!t) return null;
    return {
      id: String(t.id),
      name: t.name,
      subject: t.subject,
      content: t.body_html,
      category: 'newsletter',
    };
  }

  // --- Sources & Mediums ---

  @Get('sources')
  async listSources(@Query() paginationDto: PaginationDto) {
    return this.marketingService.listSources(paginationDto);
  }

  @Post('sources')
  async createSource(@Body() data: any) {
    return this.marketingService.createSource(data);
  }

  @Put('sources/:id')
  async updateSource(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.marketingService.updateSource(id, data);
  }

  @Delete('sources/:id')
  async deleteSource(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.deleteSource(id);
  }

  @Get('mediums')
  async listMediums(@Query() paginationDto: PaginationDto) {
    return this.marketingService.listMediums(paginationDto);
  }

  @Post('mediums')
  async createMedium(@Body() data: any) {
    return this.marketingService.createMedium(data);
  }

  @Put('mediums/:id')
  async updateMedium(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.marketingService.updateMedium(id, data);
  }

  @Delete('mediums/:id')
  async deleteMedium(@Param('id', ParseIntPipe) id: number) {
    return this.marketingService.deleteMedium(id);
  }

  @Get('analytics')
  async getAnalytics(@Query() filters?: any) {
    return this.marketingService.analytics(filters);
  }

  @Get('campaigns/:id/analytics')
  async getCampaignAnalytics(
    @Param('id', ParseIntPipe) id: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.marketingService.campaignInsights(id, paginationDto);
  }

  @Get('campaigns/:id/insights')
  async getCampaignInsights(
    @Param('id', ParseIntPipe) id: number,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.marketingService.campaignInsights(id, paginationDto);
  }
}
