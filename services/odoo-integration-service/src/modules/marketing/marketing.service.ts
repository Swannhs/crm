import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class MarketingService {
  private readonly campaignModel = 'utm.campaign';
  private readonly sourceModel = 'utm.source';
  private readonly mediumModel = 'utm.medium';
  private readonly leadModel = 'crm.lead';
  private readonly salesOrderModel = 'sale.order';

  private readonly campaignFields = ['id', 'name', 'title', 'active', 'create_date', 'write_date'];
  private readonly sourceFields = ['id', 'name', 'active', 'create_date', 'write_date'];
  private readonly mediumFields = ['id', 'name', 'active', 'create_date', 'write_date'];

  constructor(private readonly odooClient: OdooClientService) {}

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

  createCampaign(data: any) {
    const payload = {
      name: String(data?.name || data?.title || '').trim(),
      title: data?.title ? String(data.title).trim() : undefined,
      active: data?.active !== false,
    };
    return this.odooClient.execute(this.campaignModel, 'create', [payload]);
  }

  updateCampaign(id: number, data: any) {
    const payload: Record<string, any> = {};
    if (data?.name !== undefined) payload.name = String(data.name).trim();
    if (data?.title !== undefined) payload.title = String(data.title).trim();
    if (data?.active !== undefined) payload.active = data.active;
    return this.odooClient.execute(this.campaignModel, 'write', [[id], payload]);
  }

  removeCampaign(id: number) {
    return this.odooClient.execute(this.campaignModel, 'unlink', [[id]]);
  }

  setCampaignStatus(id: number, status: 'launch' | 'pause' | 'archive') {
    const active = status === 'launch';
    return this.odooClient.execute(this.campaignModel, 'write', [[id], { active }]);
  }

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
    const payload = { name: String(data?.name || '').trim(), active: data?.active !== false };
    return this.odooClient.execute(this.sourceModel, 'create', [payload]);
  }

  updateSource(id: number, data: any) {
    const payload: Record<string, any> = {};
    if (data?.name !== undefined) payload.name = String(data.name).trim();
    if (data?.active !== undefined) payload.active = data.active;
    return this.odooClient.execute(this.sourceModel, 'write', [[id], payload]);
  }

  removeSource(id: number) {
    return this.odooClient.execute(this.sourceModel, 'unlink', [[id]]);
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
    const payload = { name: String(data?.name || '').trim(), active: data?.active !== false };
    return this.odooClient.execute(this.mediumModel, 'create', [payload]);
  }

  updateMedium(id: number, data: any) {
    const payload: Record<string, any> = {};
    if (data?.name !== undefined) payload.name = String(data.name).trim();
    if (data?.active !== undefined) payload.active = data.active;
    return this.odooClient.execute(this.mediumModel, 'write', [[id], payload]);
  }

  removeMedium(id: number) {
    return this.odooClient.execute(this.mediumModel, 'unlink', [[id]]);
  }

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
}
