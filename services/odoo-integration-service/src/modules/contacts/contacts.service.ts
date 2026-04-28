import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto.js';
import { PrismaService } from '../../common/prisma/prisma.service.js';
import { parse } from 'csv-parse/sync';

@Injectable()
export class ContactsService {
  private readonly model = 'res.partner';
  private readonly defaultFields = ['id', 'name', 'email', 'phone', 'mobile', 'is_company', 'street', 'city', 'country_id', 'supplier_rank', 'employee'];

  async import(file: Express.Multer.File) {
    const content = file.buffer.toString();
    const records = parse(content, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    const results = [];
    for (const record of records as any[]) {
      try {
        const createDto: CreateContactDto = {
          name: record.Name || record.name || record.fullName || record.FullName,
          email: record.Email || record.email,
          phone: record.Phone || record.phone,
          mobile: record.Mobile || record.mobile,
          isCompany: record.IsCompany === 'true' || record.isCompany === 'true' || record.IsCompany === true || false,
          street: record.Street || record.street,
          city: record.City || record.city,
          vat: record.VAT || record.vat,
        } as any;

        if (createDto.name) {
          const res = await this.create(createDto);
          results.push({ success: true, name: createDto.name, id: res });
        }
      } catch (error: any) {
        results.push({ success: false, name: (record as any).name || 'Unknown', error: error.message });
      }
    }
    return results;
  }

  constructor(
    private readonly odooClient: OdooClientService,
    private readonly prisma: PrismaService,
  ) {}

  private async buildDomain(search?: string, type?: string): Promise<any[]> {
    const domain: any[] = [];
    const normalizedType = String(type || '').toLowerCase();

    if (search) {
      domain.push('|', ['name', 'ilike', `%${search}%`], ['email', 'ilike', `%${search}%`]);
    }

    if (normalizedType) {
      const tabStatuses: Record<string, string[]> = {
        lead: ['lead'],
        member: ['member', 'qualified'],
        client: ['client'],
        vendor: ['vendor'],
        employee: ['employee'],
      };

      const statusAliases = tabStatuses[normalizedType];
      if (statusAliases) {
        const statusMaps = await this.prisma.contactMap.findMany({
          where: {
            OR: statusAliases.map((status) => ({
              status: {
                equals: status,
                mode: 'insensitive',
              },
            })),
          },
          select: { odooId: true },
        });

        const odooIds = statusMaps.map((item: { odooId: number }) => item.odooId);
        if (odooIds.length === 0) {
          return [['id', '=', 0]];
        }

        domain.push(['id', 'in', odooIds]);
      }
    }

    return domain;
  }

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    const type = paginationDto.type;

    const domain = await this.buildDomain(search, type);

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.model,
        domain,
        this.defaultFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'write_date desc' }
      ),
      this.odooClient.execute(this.model, 'search_count', [domain])
    ]);

    const dataWithUuids = await Promise.all(
      data.map(async (c: any) => {
        const map = await this.prisma.contactMap.findUnique({
          where: { odooId: c.id }
        }) as any;

        // If no map exists, create one (lazy initialization)
        let uuid = map?.uuid;
        let status = map?.status || 'new';

        if (!map) {
          const newMap = await this.prisma.contactMap.create({
            data: { odooId: c.id }
          }) as any;
          uuid = newMap.uuid;
          status = newMap.status || 'new';
        }

        return {
          ...c,
          uuid,
          status
        };
      })
    );

    const totalPages = total > 0 ? Math.ceil(total / pageSize) : 0;

    return {
      data: dataWithUuids,
      total,
      page,
      pageSize,
      totalPages,
    };
  }

  async getAnalytics(paginationDto: PaginationDto) {
    const search = paginationDto.search;
    const type = paginationDto.type;
    const domain = await this.buildDomain(search, type);

    const contacts = await this.odooClient.searchRead(
      this.model,
      domain,
      ['id', 'is_company', 'create_date'],
      { limit: 2000, order: 'create_date asc' }
    );

    const contactIds = contacts.map((contact: any) => contact.id);
    const statusMaps = contactIds.length
      ? await this.prisma.contactMap.findMany({
          where: {
            odooId: { in: contactIds },
          },
          select: {
            odooId: true,
            status: true,
          },
        })
      : [];

    const statusByOdooId = new Map<number, string>();
    statusMaps.forEach((item: { odooId: number; status: string | null }) => {
      statusByOdooId.set(item.odooId, item.status || 'new');
    });

    const statusCounts: Record<string, number> = {};
    const typeCounts: Record<string, number> = {};

    contacts.forEach((contact: any) => {
      const status = String(statusByOdooId.get(contact.id) || 'new').toLowerCase();
      statusCounts[status] = (statusCounts[status] || 0) + 1;

      const contactType = contact.is_company ? 'Company' : 'Client';
      typeCounts[contactType] = (typeCounts[contactType] || 0) + 1;
    });

    const now = new Date();
    const monthKeys: string[] = [];
    for (let i = 5; i >= 0; i -= 1) {
      const month = new Date(now.getFullYear(), now.getMonth() - i, 1);
      monthKeys.push(`${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, '0')}`);
    }

    const monthlyCounts: Record<string, number> = {};
    monthKeys.forEach((key) => {
      monthlyCounts[key] = 0;
    });

    contacts.forEach((contact: any) => {
      const createdAt = new Date(contact?.create_date || Date.now());
      if (Number.isNaN(createdAt.getTime())) return;
      const key = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}`;
      if (Object.prototype.hasOwnProperty.call(monthlyCounts, key)) {
        monthlyCounts[key] += 1;
      }
    });

    return {
      totalContacts: contacts.length,
      statusDistribution: Object.entries(statusCounts).map(([label, value]) => ({
        label,
        value,
      })),
      typeDistribution: Object.entries(typeCounts).map(([label, value]) => ({
        label,
        value,
      })),
      monthlyCreated: monthKeys.map((key) => ({
        month: key,
        value: monthlyCounts[key],
      })),
    };
  }

  async findOne(id: number) {
    const [contact] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      this.defaultFields
    );
    if (!contact) return null;

    const map = await this.prisma.contactMap.findUnique({
      where: { odooId: id }
    }) as any;

    // Lazy create map if missing
    let uuid = map?.uuid;
    let status = map?.status || 'new';

    if (!map) {
       const newMap = await this.prisma.contactMap.create({ data: { odooId: id } }) as any;
       uuid = newMap.uuid;
       status = newMap.status || 'new';
    }

    // Calculate insights
    const [orders, tasks, activities, shifts] = await Promise.all([
      this.getOrders(id),
      this.getTasks(id),
      this.getActivities(id),
      this.getShifts(id, { page: 1, pageSize: 1 } as PaginationDto)
    ]);

    const totalSpent = orders
      .filter((o: any) => o.state === 'sale' || o.state === 'done')
      .reduce((acc: number, curr: any) => acc + curr.amount_total, 0);

    const completedTasks = tasks.filter((t: any) => t.status === 'done').length;
    const engagement = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

    const lastActivity = activities[0]?.createdAt || shifts.data?.[0]?.clockIn || contact.write_date || contact.create_date;

    return {
      ...contact,
      uuid,
      status,
      insights: {
        totalSpent,
        engagement,
        lastActive: lastActivity,
        totalTasks: tasks.length,
        completedTasks,
        totalOrders: orders.length
      }
    };
  }

  async findByUuid(uuid: string) {
    const map = await this.prisma.contactMap.findUnique({
      where: { uuid }
    }) as any;
    if (!map) return null;
    return this.findOne(map.odooId);
  }

  async resolveUuid(uuid: string): Promise<number | null> {
    const map = await this.prisma.contactMap.findUnique({
      where: { uuid }
    }) as any;
    return map?.odooId ?? null;
  }

  // --- Pets ---
  async getPets(id: number) {
    return this.prisma.pet.findMany({ where: { contactId: id } });
  }
  async createPet(id: number, data: any) {
    return this.prisma.pet.create({ data: { ...data, contactId: id } });
  }
  async removePet(petId: string) {
    return this.prisma.pet.delete({ where: { id: petId } });
  }

  async updatePet(petId: string, data: any) {
    return this.prisma.pet.update({ where: { id: petId }, data });
  }

  // --- Files ---
  async getFiles(id: number) {
    return this.prisma.contactFile.findMany({ where: { contactId: id } });
  }
  async createFile(id: number, data: any) {
    return this.prisma.contactFile.create({ data: { ...data, contactId: id } });
  }
  async removeFile(fileId: string) {
    return this.prisma.contactFile.delete({ where: { id: fileId } });
  }

  // --- Tasks ---
  async getTasks(id: number) {
    return this.prisma.contactTask.findMany({ where: { contactId: id } });
  }
  async createTask(id: number, data: any) {
    return this.prisma.contactTask.create({ data: { ...data, contactId: id } });
  }
  async removeTask(taskId: string) {
    return this.prisma.contactTask.delete({ where: { id: taskId } });
  }

  async updateTask(taskId: string, data: any) {
    return this.prisma.contactTask.update({ where: { id: taskId }, data });
  }

  async create(data: CreateContactDto) {
    const normalized: any = {
      ...data,
      name: (data as any).name ?? (data as any).fullName,
      is_company: (data as any).is_company ?? (data as any).isCompany ?? false,
    };

    delete normalized.fullName;
    delete normalized.isCompany;

    const createdId = await this.odooClient.execute(this.model, 'create', [normalized]);

    if (typeof createdId === 'number') {
      await this.prisma.contactMap.upsert({
        where: { odooId: createdId },
        update: { status: String((data as any).status || 'new').toLowerCase() },
        create: {
          odooId: createdId,
          status: String((data as any).status || 'new').toLowerCase(),
        },
      });
    }

    return createdId;
  }

  async update(id: number, data: UpdateContactDto) {
    const { status, ...odooData } = data;

    // Update local status if provided
    if (status) {
      await (this.prisma.contactMap as any).upsert({
        where: { odooId: id },
        update: { status: String(status).toLowerCase() },
        create: { odooId: id, status: String(status).toLowerCase() },
      });
    }

    // Update Odoo if there's other data
    if (Object.keys(odooData).length > 0) {
      return this.odooClient.execute(this.model, 'write', [[id], odooData]);
    }

    return { id, status };
  }

  async remove(id: number) {
    return this.odooClient.execute(this.model, 'unlink', [[id]]);
  }

  async getOrders(id: number) {
    return this.odooClient.searchRead(
      'sale.order',
      [['partner_id', '=', id]],
      ['id', 'name', 'date_order', 'amount_total', 'state', 'invoice_status'],
      { order: 'date_order desc' }
    );
  }

  async getProjects(id: number) {
    return this.odooClient.searchRead(
      'project.project',
      [['partner_id', '=', id]],
      ['id', 'name', 'label_tasks', 'allow_timesheets', 'create_date'],
      { order: 'create_date desc' }
    );
  }

  // --- Activities ---
  async getActivities(id: number) {
    return this.prisma.contactActivity.findMany({
      where: { contactId: id },
      orderBy: { createdAt: 'desc' }
    });
  }

  async createActivity(contactId: number, data: any) {
    return this.prisma.contactActivity.create({
      data: {
        contactId,
        ...data,
      },
    });
  }

  async updateActivity(id: string, data: any) {
    return this.prisma.contactActivity.update({
      where: { id },
      data,
    });
  }

  async removeActivity(id: string) {
    return this.prisma.contactActivity.delete({
      where: { id },
    });
  }

  // --- Shifts / Attendance ---
  async getShifts(id: number, paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;

    const [data, total] = await Promise.all([
      this.prisma.contactShift.findMany({
        where: { contactId: id },
        orderBy: { clockIn: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize
      }),
      this.prisma.contactShift.count({
        where: { contactId: id }
      })
    ]);
    return { data, total };
  }

  async clockIn(id: number) {
    return this.prisma.contactShift.create({
      data: { contactId: id, clockIn: new Date(), status: 'Approved' }
    });
  }

  async clockOut(shiftId: string) {
    return this.prisma.contactShift.update({
      where: { id: shiftId },
      data: { clockOut: new Date() }
    });
  }
}
