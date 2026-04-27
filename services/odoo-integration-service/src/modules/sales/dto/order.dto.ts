import { IsInt, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class OrderLineDto {
  @ApiProperty()
  @IsInt()
  product_id: number;

  @ApiProperty()
  @IsInt()
  product_uom_qty: number;

  @ApiProperty()
  @IsInt()
  price_unit: number;
}

export class CreateOrderDto {
  @ApiProperty()
  @IsInt()
  partner_id: number;

  @ApiProperty({ type: [OrderLineDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderLineDto)
  order_line: OrderLineDto[];
}
