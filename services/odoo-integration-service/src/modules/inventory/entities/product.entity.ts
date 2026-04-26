import { ApiProperty } from '@nestjs/swagger';

export class ProductEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  default_code?: string;

  @ApiProperty({ required: false })
  list_price?: number;

  @ApiProperty({ required: false })
  standard_price?: number;

  @ApiProperty()
  type: 'consu' | 'service' | 'product';

  @ApiProperty({ required: false })
  qty_available?: number;

  @ApiProperty({ required: false })
  virtual_available?: number;

  @ApiProperty({ required: false })
  barcode?: string;
}
