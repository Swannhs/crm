import { Injectable, Logger } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class MarketingService {
  private readonly logger = new Logger(MarketingService.name);
  private campaignStatusField: string | null | undefined;
  private campaignColorFieldAvailable: boolean | undefined;

  // Models
  private readonly campaignModel = 'utm.campaign';
  private readonly mailingModel = 'mailing.mailing';
  private readonly mailingListModel = 'mailing.list';
  private readonly templateModel = 'mail.template';
  private readonly sourceModel = 'utm.source';
  private readonly mediumModel = 'utm.medium';
  private readonly leadModel = 'crm.lead';
  private readonly salesOrderModel = 'sale.order';

  // Fields
  private readonly campaignFields = ['id', 'name', 'title', 'active', 'color', 'create_date', 'write_date'];
  private readonly mailingFields = [
    'id', 'subject', 'mailing_type', 'body_html', 'state', 'sent_date', 'schedule_date', 
    'campaign_id', 'contact_list_ids', 'reply_to_mode', 'reply_to'
  ];
  private readonly mailingListFields = ['id', 'name', 'active', 'contact_nbr', 'contact_count']; // Try multiple variations
  private readonly templateFields = ['id', 'name', 'subject', 'body_html', 'model_id'];
  private readonly sourceFields = ['id', 'name', 'active', 'create_date', 'write_date'];
  private readonly mediumFields = ['id', 'name', 'active', 'create_date', 'write_date'];

  constructor(private readonly odooClient: OdooClientService) {}

  private async getCampaignFieldFlags() {
    if (this.campaignStatusField !== undefined && this.campaignColorFieldAvailable !== undefined) {
      return {
        statusField: this.campaignStatusField,
        hasColor: this.campaignColorFieldAvailable,
      };
    }

    try {
      const fieldsInfo = await this.odooClient.execute(this.campaignModel, 'fields_get', [[], ['x_marketing_status', 'color']]);
      const statusField = fieldsInfo?.x_marketing_status ? 'x_marketing_status' : null;
      const hasColor = Boolean(fieldsInfo?.color);
      this.campaignStatusField = statusField;
      this.campaignColorFieldAvailable = hasColor;
      return { statusField, hasColor };
    } catch (error) {
      this.campaignStatusField = null;
      this.campaignColorFieldAvailable = false;
      return { statusField: null, hasColor: false };
    }
  }

  // --- Campaigns (UTM) ---

  async listCampaigns(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 20;
    const search = paginationDto.search;
    const domain: any[] = search ? [['name', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.campaignModel, domain, this.campaignFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'write_date desc',
      }),
      this.odooClient.execute(this.campaignModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async getCampaign(id: number) {
    const [campaign] = await this.odooClient.searchRead(this.campaignModel, [['id', '=', id]], this.campaignFields);
    return campaign;
  }

  async createCampaign(data: any) {
    const { statusField, hasColor } = await this.getCampaignFieldFlags();
    const payload = {
      name: String(data?.name || '').trim(),
      title: data?.title ? String(data.title).trim() : undefined,
      active: true,
      ...(statusField ? { [statusField]: 'active' } : {}),
      ...(hasColor ? { color: 10 } : {}),
    };
    return this.odooClient.execute(this.campaignModel, 'create', [payload]);
  }

  async updateCampaign(id: number, data: any) {
    const { statusField } = await this.getCampaignFieldFlags();
    const payload: Record<string, any> = {};
    if (data?.name !== undefined) payload.name = String(data.name).trim();
    if (data?.title !== undefined) payload.title = String(data.title).trim();
    if (data?.active !== undefined) payload.active = data.active;
    if (statusField && data?.status !== undefined) payload[statusField] = String(data.status);
    return this.odooClient.execute(this.campaignModel, 'write', [[id], payload]);
  }

  removeCampaign(id: number) {
    return this.odooClient.execute(this.campaignModel, 'unlink', [[id]]);
  }

  async setCampaignStatus(id: number, action: 'launch' | 'pause' | 'archive') {
    const { statusField, hasColor } = await this.getCampaignFieldFlags();
    const payload: Record<string, any> = {};

    if (action === 'launch') {
      payload.active = true;
      if (statusField) payload[statusField] = 'active';
      if (hasColor) payload.color = 10;
    }
    if (action === 'pause') {
      payload.active = false;
      if (statusField) payload[statusField] = 'paused';
      if (hasColor) payload.color = 3;
    }
    if (action === 'archive') {
      payload.active = false;
      if (statusField) payload[statusField] = 'archived';
      if (hasColor) payload.color = 8;
    }

    return this.odooClient.execute(this.campaignModel, 'write', [[id], payload]);
  }

  // --- Mass Mailings (The actual "Campaign" logic for sending) ---

  async listMailings(campaignId?: number) {
    const domain: any[] = campaignId ? [['campaign_id', '=', campaignId]] : [];
    return this.odooClient.searchRead(this.mailingModel, domain, this.mailingFields);
  }

  async createMailing(data: any) {
    const payload = {
      subject: data.subject,
      body_html: data.content || data.body_html,
      mailing_type: data.type || 'mail',
      campaign_id: data.campaignId,
      contact_list_ids: data.segmentId ? [[6, 0, [Number(data.segmentId)]]] : [],
      reply_to_mode: 'update',
    };
    return this.odooClient.execute(this.mailingModel, 'create', [payload]);
  }

  async sendMailing(id: number) {
    // In Odoo mass_mailing, action_put_in_queue puts it in the outgoing queue
    return this.odooClient.execute(this.mailingModel, 'action_put_in_queue', [[id]]);
  }

  async scheduleMailing(id: number, date: string) {
    return this.odooClient.execute(this.mailingModel, 'write', [[id], { schedule_date: date }]);
  }

  // --- Segments (Mailing Lists) ---

  async listSegments() {
    try {
      this.logger.log(`Fetching segments from model: ${this.mailingListModel}`);
      
      // Step 1: Detect available fields to avoid Odoo errors
      const fieldsInfo = await this.odooClient.execute(this.mailingListModel, 'fields_get', [[], ['name', 'contact_nbr', 'contact_count', 'is_public', 'active']]);
      const availableFields = Object.keys(fieldsInfo);
      
      this.logger.log(`Available fields for ${this.mailingListModel}: ${availableFields.join(', ')}`);
      
      const requestedFields = ['id', 'name'];
      if (availableFields.includes('active')) requestedFields.push('active');
      if (availableFields.includes('contact_count')) requestedFields.push('contact_count');
      else if (availableFields.includes('contact_nbr')) requestedFields.push('contact_nbr');
      
      // Step 2: Fetch data with discovered fields
      const lists = await this.odooClient.searchRead(this.mailingListModel, [], requestedFields);
      
      this.logger.log(`Found ${lists.length} segments in Odoo.`);
      return lists;
    } catch (error) {
      this.logger.error(`Failed to fetch segments: ${error.message}`, error.stack);
      return [];
    }
  }

  async getSegment(id: number) {
    const [segment] = await this.odooClient.searchRead(this.mailingListModel, [['id', '=', id]], this.mailingListFields);
    return segment;
  }

  async createSegment(data: any) {
    // Basic fields that are almost guaranteed to exist
    const payload: any = {
      name: data.name,
    };
    
    // Check fields before setting to avoid Odoo error
    try {
      const fieldsInfo = await this.odooClient.execute(this.mailingListModel, 'fields_get', [[], ['active', 'is_public']]);
      if (fieldsInfo.active) payload.active = true;
      if (fieldsInfo.is_public) payload.is_public = data.isPublic !== false;
    } catch (e) {
      // Ignore if field detection fails
    }

    return this.odooClient.execute(this.mailingListModel, 'create', [payload]);
  }

  async updateSegment(id: number, data: any) {
    const payload: Record<string, any> = {};
    if (data.name) payload.name = data.name;
    
    try {
      const fieldsInfo = await this.odooClient.execute(this.mailingListModel, 'fields_get', [[], ['is_public']]);
      if (fieldsInfo.is_public && data.isPublic !== undefined) {
        payload.is_public = data.isPublic;
      }
    } catch (e) {}

    return this.odooClient.execute(this.mailingListModel, 'write', [[id], payload]);
  }

  async deleteSegment(id: number) {
    return this.odooClient.execute(this.mailingListModel, 'unlink', [[id]]);
  }

  // --- Templates (Mail Templates) ---

  async listTemplates() {
    // Filter by model if possible, usually 'mailing.mailing' or 'res.partner'
    return this.odooClient.searchRead(this.templateModel, [], this.templateFields, { limit: 50 });
  }

  async getTemplate(id: number) {
    const [template] = await this.odooClient.searchRead(this.templateModel, [['id', '=', id]], this.templateFields);
    return template;
  }

  // --- Dashboard & Analytics ---

  async analytics(filters?: { dateFrom?: string; dateTo?: string }) {
    const leadDateDomain: any[] = [];
    const orderDateDomain: any[] = [];
    if (filters?.dateFrom) {
      leadDateDomain.push(['create_date', '>=', filters.dateFrom]);
      orderDateDomain.push(['date_order', '>=', filters.dateFrom]);
    }
    if (filters?.dateTo) {
      leadDateDomain.push(['create_date', '<=', filters.dateTo]);
      orderDateDomain.push(['date_order', '<=', filters.dateTo]);
    }
    const [
      totalCampaigns,
      activeCampaigns,
      totalSources,
      totalMediums,
      totalLeads,
      totalOpportunities,
      salesRows,
    ] = await Promise.all([
      this.odooClient.execute(this.campaignModel, 'search_count', [[]]),
      this.odooClient.execute(this.campaignModel, 'search_count', [[['active', '=', true]]]),
      this.odooClient.execute(this.sourceModel, 'search_count', [[]]),
      this.odooClient.execute(this.mediumModel, 'search_count', [[]]),
      this.odooClient.execute(this.leadModel, 'search_count', [[['type', '=', 'lead'], ...leadDateDomain]]),
      this.odooClient.execute(this.leadModel, 'search_count', [[['type', '=', 'opportunity'], ...leadDateDomain]]),
      this.odooClient.searchRead(this.salesOrderModel, orderDateDomain, ['amount_total', 'state', 'date_order'], { limit: 300, order: 'id desc' }),
    ]);

    const wonSales = Array.isArray(salesRows)
      ? salesRows.filter((row: any) => ['sale', 'done'].includes(String(row?.state || '').toLowerCase()))
      : [];
    const revenue = wonSales.reduce((sum: number, row: any) => sum + Number(row?.amount_total || 0), 0);
    const conversionRate = totalLeads > 0 ? Number(((totalOpportunities / totalLeads) * 100).toFixed(2)) : 0;

    return {
      totalCampaigns: Number(totalCampaigns || 0),
      activeCampaigns: Number(activeCampaigns || 0),
      totalSources: Number(totalSources || 0),
      totalMediums: Number(totalMediums || 0),
      totalLeads: Number(totalLeads || 0),
      totalOpportunities: Number(totalOpportunities || 0),
      conversionRate,
      wonOrders: wonSales.length,
      revenue,
      avgRevenuePerWonOrder: wonSales.length ? Number((revenue / wonSales.length).toFixed(2)) : 0,
    };
  }

  async campaignInsights(id: number, paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 20;
    const leadFields = ['id', 'name', 'email_from', 'phone', 'type', 'stage_id', 'expected_revenue', 'create_date'];
    const orderFields = ['id', 'name', 'partner_id', 'state', 'amount_total', 'date_order'];

    const leadDomain: any[] = [['campaign_id', '=', id]];
    const orderDomain: any[] = [['campaign_id', '=', id]];

    const [leads, leadsTotal, orders, ordersTotal] = await Promise.all([
      this.odooClient.searchRead(this.leadModel, leadDomain, leadFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'create_date desc',
      }),
      this.odooClient.execute(this.leadModel, 'search_count', [leadDomain]),
      this.odooClient.searchRead(this.salesOrderModel, orderDomain, orderFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'date_order desc',
      }),
      this.odooClient.execute(this.salesOrderModel, 'search_count', [orderDomain]),
    ]);

    return {
      leads,
      leadsTotal: Number(leadsTotal || 0),
      orders,
      ordersTotal: Number(ordersTotal || 0),
    };
  }

  // --- Sources & Mediums ---

  async listSources(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 100;
    const search = paginationDto.search;
    const domain: any[] = search ? [['name', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.sourceModel, domain, this.sourceFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'name asc',
      }),
      this.odooClient.execute(this.sourceModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  createSource(data: any) {
    const payload = {
      name: String(data?.name || '').trim(),
      active: data?.active !== false,
    };
    return this.odooClient.execute(this.sourceModel, 'create', [payload]);
  }

  updateSource(id: number, data: any) {
    const payload: Record<string, any> = {};
    if (data?.name !== undefined) payload.name = String(data.name).trim();
    if (data?.active !== undefined) payload.active = Boolean(data.active);
    return this.odooClient.execute(this.sourceModel, 'write', [[id], payload]);
  }

  deleteSource(id: number) {
    return this.odooClient.execute(this.sourceModel, 'unlink', [[id]]);
  }

  removeSource(id: number) {
    return this.deleteSource(id);
  }

  async listMediums(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 100;
    const search = paginationDto.search;
    const domain: any[] = search ? [['name', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.mediumModel, domain, this.mediumFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'name asc',
      }),
      this.odooClient.execute(this.mediumModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  createMedium(data: any) {
    const payload = {
      name: String(data?.name || '').trim(),
      active: data?.active !== false,
    };
    return this.odooClient.execute(this.mediumModel, 'create', [payload]);
  }

  updateMedium(id: number, data: any) {
    const payload: Record<string, any> = {};
    if (data?.name !== undefined) payload.name = String(data.name).trim();
    if (data?.active !== undefined) payload.active = Boolean(data.active);
    return this.odooClient.execute(this.mediumModel, 'write', [[id], payload]);
  }

  deleteMedium(id: number) {
    return this.odooClient.execute(this.mediumModel, 'unlink', [[id]]);
  }

  removeMedium(id: number) {
    return this.deleteMedium(id);
  }
}
