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
  ];

  private readonly stageModel = 'crm.stage';
  private readonly stageFields = ['id', 'name', 'sequence', 'is_won'];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['email_from', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(this.model, domain, this.defaultFields, {
        offset: (page - 1) * pageSize,
        limit: pageSize,
        order: 'create_date desc',
      }),
      this.odooClient.execute(this.model, 'search_count', [domain]),
    ]);

    const mappedData = data.map((lead: any) => ({
      ...lead,
      nextActivity: lead.activity_summary || lead.activity_type_id ? {
        title: lead.activity_summary || (Array.isArray(lead.activity_type_id) ? lead.activity_type_id[1] : 'Activity'),
        dueDate: lead.activity_date_deadline,
        state: lead.activity_state,
        overdue: lead.activity_state === 'overdue',
      } : null,
    }));

    return { data: mappedData, total };
  }

  async findOne(id: number) {
    const [lead] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      this.defaultFields,
    );
    return lead;
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
    return this.odooClient.execute('mail.activity', 'create', [
      {
        ...data,
        res_model: this.model,
      },
    ]);
  }

  async updateActivity(id: number, data: any) {
    return this.odooClient.execute('mail.activity', 'write', [[id], data]);
  }

  async completeActivity(id: number) {
    return this.odooClient.execute('mail.activity', 'action_done', [[id]]);
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
