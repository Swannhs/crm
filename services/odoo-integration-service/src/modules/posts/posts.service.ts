import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class PostsService {
  private readonly model = 'blog.post';
  private readonly defaultFields = [
    'id', 'name', 'subtitle', 'author_id', 'post_date', 
    'website_published', 'blog_id', 'visits'
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAll(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    
    const domain: any[] = search
      ? [['name', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.model,
        domain,
        this.defaultFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'post_date desc' }
      ),
      this.odooClient.execute(this.model, 'search_count', [domain])
    ]);

    return { data, total };
  }

  async findOne(id: number) {
    const [post] = await this.odooClient.searchRead(
      this.model,
      [['id', '=', id]],
      [...this.defaultFields, 'content']
    );
    return post;
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

  async publish(id: number) {
    return this.odooClient.execute(this.model, 'write', [[id], { website_published: true }]);
  }

  async unpublish(id: number) {
    return this.odooClient.execute(this.model, 'write', [[id], { website_published: false }]);
  }
}
