import { Injectable } from '@nestjs/common';
import { OdooClientService } from '../odoo-base/odoo-client.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';

@Injectable()
export class InventoryService {
  private readonly productModel = 'product.template';
  private readonly categoryModel = 'product.category';
  private readonly inventoryModel = 'stock.quant';
  private readonly locationModel = 'stock.location';
  private readonly productFields = [
    'id',
    'name',
    'default_code',
    'list_price',
    'standard_price',
    'type',
    'qty_available',
    'virtual_available',
    'barcode',
  ];
  private readonly inventoryFields = [
    'id',
    'product_id',
    'location_id',
    'quantity',
    'reserved_quantity',
    'available_quantity',
    'write_date',
  ];
  private readonly categoryFields = [
    'id',
    'name',
    'complete_name',
    'parent_id',
    'write_date',
  ];
  private readonly locationFields = [
    'id',
    'name',
    'complete_name',
    'usage',
    'active',
    'write_date',
  ];

  constructor(private readonly odooClient: OdooClientService) {}

  async findAllProducts(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;

    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['default_code', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.productModel,
        domain,
        this.productFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'name asc' },
      ),
      this.odooClient.execute(this.productModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async findProduct(id: number) {
    const [product] = await this.odooClient.searchRead(
      this.productModel,
      [['id', '=', id]],
      this.productFields,
    );
    return product;
  }

  async createProduct(data: any) {
    return this.odooClient.execute(this.productModel, 'create', [data]);
  }

  async updateProduct(id: number, data: any) {
    return this.odooClient.execute(this.productModel, 'write', [[id], data]);
  }

  async removeProduct(id: number) {
    return this.odooClient.execute(this.productModel, 'unlink', [[id]]);
  }

  async findAllCategories(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 50;
    const search = paginationDto.search;
    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['complete_name', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.categoryModel,
        domain,
        this.categoryFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'name asc' },
      ),
      this.odooClient.execute(this.categoryModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async findCategory(id: number) {
    const [category] = await this.odooClient.searchRead(
      this.categoryModel,
      [['id', '=', id]],
      this.categoryFields,
    );
    return category;
  }

  async createCategory(data: any) {
    return this.odooClient.execute(this.categoryModel, 'create', [data]);
  }

  async updateCategory(id: number, data: any) {
    return this.odooClient.execute(this.categoryModel, 'write', [[id], data]);
  }

  async removeCategory(id: number) {
    return this.odooClient.execute(this.categoryModel, 'unlink', [[id]]);
  }

  async findAllInventory(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 10;
    const search = paginationDto.search;
    const domain: any[] = search ? [['product_id', 'ilike', search]] : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.inventoryModel,
        domain,
        this.inventoryFields,
        { offset: (page - 1) * pageSize, limit: pageSize, order: 'id desc' },
      ),
      this.odooClient.execute(this.inventoryModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }

  async findInventory(id: number) {
    const [inventory] = await this.odooClient.searchRead(
      this.inventoryModel,
      [['id', '=', id]],
      this.inventoryFields,
    );
    return inventory;
  }

  async createInventory(data: any) {
    return this.odooClient.execute(this.inventoryModel, 'create', [data]);
  }

  async updateInventory(id: number, data: any) {
    return this.odooClient.execute(this.inventoryModel, 'write', [[id], data]);
  }

  async removeInventory(id: number) {
    return this.odooClient.execute(this.inventoryModel, 'unlink', [[id]]);
  }

  async findAllLocations(paginationDto: PaginationDto) {
    const page = paginationDto.page ?? 1;
    const pageSize = paginationDto.pageSize ?? 100;
    const search = paginationDto.search;
    const domain: any[] = search
      ? ['|', ['name', 'ilike', search], ['complete_name', 'ilike', search]]
      : [];

    const [data, total] = await Promise.all([
      this.odooClient.searchRead(
        this.locationModel,
        domain,
        this.locationFields,
        {
          offset: (page - 1) * pageSize,
          limit: pageSize,
          order: 'complete_name asc',
        },
      ),
      this.odooClient.execute(this.locationModel, 'search_count', [domain]),
    ]);

    return { data, total };
  }
}
