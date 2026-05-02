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
    'tag_ids',
  ];

  private readonly stageModel = 'crm.stage';
  private readonly stageFields = ['id', 'name', 'sequence', 'is_won'];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: any) {
    const { page = 1, pageSize = 20, search, stageId, type, active = true } = paginationDto;
    const offset = (page - 1) * pageSize;

    const domain: any[] = [['active', '=', active]];

    if (search) {
      domain.push('|', ['name', 'ilike', search], ['partner_id.name', 'ilike', search]);
    }

    if (stageId) {
      domain.push(['stage_id', '=', Number(stageId)]);
    }

    if (type) {
      domain.push(['type', '=', type]);
    }

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.model, domain, this.defaultFields, {
        offset,
        limit: pageSize,
        order: 'create_date desc',
      }),
      this.odooClient.execute(this.model, 'search_count', [domain]),
    ]);

    const mappedData = data.map((lead: any) => this.normalizeOpportunity(lead));

    return { 
      data: mappedData, 
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
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
    const stageLabel = Array.isArray(lead.stage_id) ? lead.stage_id[1] : '';
    const probability = Number(lead.probability ?? 0);

    let status: 'new' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost' = 'new';
    const label = stageLabel.toLowerCase();

    if (lead.is_won || label.includes('won') || probability === 100) status = 'won';
    else if (lead.active === false || label.includes('lost') || (probability === 0 && label.includes('lost'))) status = 'lost';
    else if (label.includes('nego')) status = 'negotiation';
    else if (label.includes('prop') || label.includes('quote')) status = 'proposal';
    else if (label.includes('qual')) status = 'qualified';
    else if (label.includes('new')) status = 'new';

    return {
      id: lead.id,
      name: lead.name,
      partner: Array.isArray(lead.partner_id)
        ? { id: lead.partner_id[0], name: lead.partner_id[1] }
        : null,
      email: lead.email_from,
      phone: lead.phone,
      probability,
      expectedRevenue: lead.expected_revenue || lead.planned_revenue || 0,
      recurringRevenue: lead.recurring_revenue_monthly || 0,
      stage: {
        id: Array.isArray(lead.stage_id) ? lead.stage_id[0] : null,
        name: stageLabel,
        status,
      },
      user: Array.isArray(lead.user_id)
        ? { id: lead.user_id[0], name: lead.user_id[1] }
        : null,
      priority: lead.priority,
      tags: Array.isArray(lead.tag_ids) ? lead.tag_ids : [],
      expectedClose: lead.date_deadline,
      createdAt: lead.create_date,
      updatedAt: lead.write_date,
      type: lead.type,
      active: lead.active,
      nextActivity: lead.activity_summary
        ? {
            summary: lead.activity_summary,
            deadline: lead.activity_date_deadline,
            type: Array.isArray(lead.activity_type_id)
              ? lead.activity_type_id[1]
              : null,
            state: lead.activity_state,
          }
        : null,
    };
  }

  async create(data: any) {
    return this.odooClient.execute(this.model, 'create', [data]);
  }

  async update(id: number, data: any) {
    return this.odooClient.execute(this.model, 'write', [[id], data]);
  }

  async remove(id: number) {
    await this.odooClient.execute(this.model, 'write', [[id], { active: false }]);
    return { id, archived: true };
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

  private async resolveActivityTypeId(type?: string): Promise<number | undefined> {
    if (!type) return undefined;
    const types = await this.odooClient.searchRead('mail.activity.type', [], ['id', 'name']);
    const foundType = types.find((t: any) => 
      t.name.toLowerCase().includes(type.toLowerCase()) || 
      type.toLowerCase().includes(t.name.toLowerCase())
    );
    return foundType?.id;
  }

  async createActivity(data: any) {
    const { type, title, dueDate, opportunityId, res_id, ...rest } = data;
    
    const activity_type_id = data.activity_type_id || await this.resolveActivityTypeId(type);

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
      [['type', '=', 'opportunity'], ['active', '=', true]],
      ['expected_revenue', 'probability', 'stage_id', 'planned_revenue', 'is_won'],
    );

    const totalOpenValue = leads
      .filter((l: any) => !l.is_won)
      .reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0);

    const weightedValue = leads
      .filter((l: any) => !l.is_won)
      .reduce((acc, curr) => acc + ((curr.expected_revenue || curr.planned_revenue || 0) * (curr.probability || 0)) / 100, 0);

    const wonValue = leads
      .filter((l: any) => l.is_won)
      .reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0);

    const archivedLeads = await this.odooClient.searchRead(
      this.model,
      [['type', '=', 'opportunity'], ['active', '=', false]],
      ['expected_revenue', 'planned_revenue'],
    );
    const lostValue = archivedLeads.reduce((acc, curr) => acc + (curr.expected_revenue || curr.planned_revenue || 0), 0);

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
