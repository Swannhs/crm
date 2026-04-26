import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class InventoryService {
  private readonly productModel = 'product.template';
  private readonly productFields = [
    'id', 'name', 'default_code', 'list_price', 'standard_price', 
    'type', 'qty_available', 'virtual_available', 'barcode'
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAllProducts(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    
    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['default_code', 'ilike', search]]
      : [];

    return this.odooClient.searchRead(
      this.productModel,
      domain,
      this.productFields,
      { offset: (page - 1) * pageSize, limit: pageSize, order: 'name asc' }
    );
  }

  async findProduct(id: number) {
    const [product] = await this.odooClient.searchRead(
      this.productModel,
      [['id', '=', id]],
      this.productFields
    );
    return product;
  }
}
