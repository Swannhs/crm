import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class CrmService {
  private readonly model = 'crm.lead';
  private readonly defaultFields = [
    'id',
    'name',
    'partner_id',
    'email_from',
    'phone',
    'probability',
    'planned_revenue',
    'expected_revenue',
    'recurring_revenue_monthly',
    'stage_id',
    'type',
    'description',
    'priority',
    'user_id',
    'date_deadline',
    'create_date',
    'write_date',
    'activity_ids',
    'activity_type_id',
    'activity_summary',
    'activity_state',
    'activity_date_deadline',
    'active',
    'is_won',
  ];

  private readonly stageModel = 'crm.stage';
  private readonly stageFields = ['id', 'name', 'sequence', 'is_won'];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = search
      ? ['|', ['name', 'ilike', `%${search}%`], ['email_from', 'ilike', `%${search}%`]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.model, domain, this.defaultFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'create_date desc',
      }),
      this.odooClient.execute(this.model, 'search_count', [domain]),
    ]);

    const mappedData = data.map((lead: any) => this.normalizeOpportunity(lead));

    return { data: mappedData, total };
  }

  async findOne(id: number) {
    const [lead] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      this.defaultFields,
    );
    if (!lead) return null;
    return this.normalizeOpportunity(lead);
  }

  private normalizeOpportunity(lead: any) {
    const expectedRevenue = Number(lead.expected_revenue || lead.planned_revenue || 0);
    const probability = Number(lead.probability || 0);
    const weightedValue = (expectedRevenue * probability) / 100;
    
    let status: 'open' | 'won' | 'lost' = 'open';
    if (lead.stage_id) {
      const stageId = lead.stage_id[0];
      const stageName = lead.stage_id[1].toLowerCase();
      
      // Check if stage is explicitly won
      if (lead.is_won || stageName === 'won' || stageName.includes('won')) {
        status = 'won';
      } else if (stageName === 'lost' || stageName.includes('lost') || lead.active === false) {
        status = 'lost';
      }
    }

    return {
      id: lead.id,
      odooId: lead.id,
      name: lead.name,
      customerName: lead.partner_id ? lead.partner_id[1] : undefined,
      customerId: lead.partner_id ? lead.partner_id[0] : undefined,
      companyName: lead.partner_id ? lead.partner_id[1] : undefined, // In Odoo, partner is the same
      stage: lead.stage_id ? lead.stage_id[1] : 'New',
      stageId: lead.stage_id ? lead.stage_id[0] : undefined,
      expectedRevenue,
      probability,
      weightedValue,
      status,
      expectedCloseDate: lead.date_deadline,
      nextActivity: lead.activity_summary || lead.activity_type_id ? {
        id: lead.activity_ids?.[0] ? `act-${lead.activity_ids[0]}` : null,
        odooId: lead.activity_ids?.[0],
        title: lead.activity_summary || (Array.isArray(lead.activity_type_id) ? lead.activity_type_id[1] : 'Activity'),
        dueDate: lead.activity_date_deadline,
        state: lead.activity_state as any,
        overdue: lead.activity_state === 'overdue',
      } : null,
      createdAt: lead.create_date,
      updatedAt: lead.write_date,
    };
  }

  async create(data: any) {
    return this.odooClient.execute(this.model, 'create', [data]);
  }

  async update(id: number, data: any) {
    return this.odooClient.execute(this.model, 'write', [[id], data]);
  }

  async remove(id: number) {
    return this.odooClient.execute(this.model, 'unlink', [[id]]);
  }

  async getStages() {
    return this.odooClient.searchRead(this.stageModel, [], this.stageFields, {
      order: 'sequence asc',
    });
  }

  // --- Activities ---
  async getActivities(paginationDto: PaginationDto) {
    const domain: any[] = [['res_model', '=', this.model]];
    if (paginationDto.search) {
      domain.push(['summary', 'ilike', `%${paginationDto.search}%`]);
    }

    return this.odooClient.searchRead(
      'mail.activity',
      domain,
      [
        'id',
        'res_id',
        'res_name',
        'summary',
        'note',
        'date_deadline',
        'activity_type_id',
        'user_id',
        'state',
      ],
      { order: 'date_deadline asc', limit: 100 },
    );
  }

  async createActivity(data: any) {
    const { type, title, dueDate, opportunityId, res_id, ...rest } = data;
    
    // Normalize type to activity_type_id
    let activity_type_id = data.activity_type_id;
    if (!activity_type_id && type) {
      const types = await this.odooClient.searchRead('mail.activity.type', [], ['id', 'name']);
      const foundType = types.find((t: any) => t.name.toLowerCase().includes(type.toLowerCase()));
      if (foundType) activity_type_id = foundType.id;
    }

    const payload = {
      ...rest,
      res_model: this.model,
      res_id: Number(res_id || opportunityId),
      summary: title || data.summary,
      date_deadline: dueDate || data.date_deadline,
    };

    if (activity_type_id) {
      payload['activity_type_id'] = activity_type_id;
    }

    return this.odooClient.execute('mail.activity', 'create', [payload]);
  }

  async updateActivity(id: number, data: any) {
    return this.odooClient.execute('mail.activity', 'write', [[id], data]);
  }

  async completeActivity(id: number) {
    return this.odooClient.execute('mail.activity', 'action_done', [[id]]);
  }

  async removeActivity(id: number) {
    return this.odooClient.execute('mail.activity', 'unlink', [[id]]);
  }

  async createNote(id: number, body: string) {
    return this.odooClient.execute('mail.message', 'create', [
      {
        body,
        res_id: id,
        model: this.model,
        message_type: 'comment',
        subtype_id: 1,
      },
    ]);
  }

  async getTimeline(id: number) {
    const [messages, activities] = await Promise.all([
      this.odooClient.searchRead(
        'mail.message',
        [['res_id', '=', id], ['model', '=', this.model]],
        ['id', 'body', 'date', 'author_id', 'message_type', 'subtype_id'],
        { order: 'date desc', limit: 50 },
      ),
      this.odooClient.searchRead(
        'mail.activity',
        [['res_id', '=', id], ['res_model', '=', this.model]],
        ['id', 'summary', 'note', 'date_deadline', 'activity_type_id', 'user_id', 'state', 'create_date'],
        { order: 'date_deadline desc', limit: 50 },
      ),
    ]);

    const timeline = [
      ...messages.map((m: any) => ({
        id: `msg-${m.id}`,
        type: 'message',
        title: m.subtype_id ? m.subtype_id[1] : 'Message',
        content: m.body,
        date: m.date,
        author: m.author_id ? m.author_id[1] : 'System',
      })),
      ...activities.map((a: any) => ({
        id: `act-${a.id}`,
        odooId: a.id,
        type: 'activity',
        title: a.summary || (Array.isArray(a.activity_type_id) ? a.activity_type_id[1] : 'Activity'),
        content: a.note,
        date: a.date_deadline || a.create_date,
        author: a.user_id ? a.user_id[1] : 'System',
        state: a.state,
      })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return timeline;
  }

  // --- Summary & Dashboard ---
  async getPipelineSummary() {
    const leads = await this.odooClient.searchRead(
      this.model,
      [['type', '=', 'opportunity']],
      ['expected_revenue', 'probability', 'stage_id', 'planned_revenue'],
    );

    const totalOpenValue = leads
      .filter((l: any) => l.stage_id && l.stage_id[1] !== 'Won' && l.stage_id[1] !== 'Lost')
      .reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0);

    const weightedValue = leads
      .filter((l: any) => l.stage_id && l.stage_id[1] !== 'Won' && l.stage_id[1] !== 'Lost')
      .reduce((acc, curr) => acc + ((curr.expected_revenue || curr.planned_revenue || 0) * (curr.probability || 0)) / 100, 0);

    const wonValue = leads
      .filter((l: any) => l.stage_id && l.stage_id[1] === 'Won')
      .reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0);

    const lostValue = leads
      .filter((l: any) => l.stage_id && l.stage_id[1] === 'Lost')
      .reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0);

    return {
      totalOpenValue,
      weightedValue,
      wonValue,
      lostValue,
      opportunityCount: leads.length,
    };
  }

  async getDashboard() {
    const [summary, stages, activities] = await Promise.all([
      this.getPipelineSummary(),
      this.getStages(),
      this.getActivities({ page: 1, pageSize: 20 }),
    ]);

    // Group by stage for chart
    const leads = await this.odooClient.searchRead(
      this.model,
      [['type', '=', 'opportunity']],
      ['stage_id', 'expected_revenue', 'planned_revenue'],
    );

    const pipelineByStage = stages.map((stage: any) => {
      const stageLeads = leads.filter((l: any) => l.stage_id && l.stage_id[0] === stage.id);
      return {
        stage: stage.name,
        count: stageLeads.length,
        value: stageLeads.reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0),
      };
    });

    return {
      summary,
      pipelineByStage,
      recentActivities: activities.slice(0, 10),
    };
  }
}
