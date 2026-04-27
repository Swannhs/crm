import { ApiProperty } from '@nestjs/swagger';

export class OrderEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  partner_id: [number, string];

  @ApiProperty({ required: false })
  date_order?: string;

  @ApiProperty({ required: false })
  amount_total?: number;

  @ApiProperty({ required: false })
  amount_untaxed?: number;

  @ApiProperty({ required: false })
  amount_tax?: number;

  @ApiProperty()
  state: 'draft' | 'sent' | 'sale' | 'done' | 'cancel';

  @ApiProperty({ required: false })
  invoice_status?: 'upselling' | 'invoiced' | 'to invoice' | 'no';
}
