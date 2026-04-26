import { ApiProperty } from '@nestjs/swagger';

export class InvoiceEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  partner_id: [number, string];

  @ApiProperty({ required: false })
  invoice_date?: string;

  @ApiProperty({ required: false })
  invoice_date_due?: string;

  @ApiProperty({ required: false })
  amount_total?: number;

  @ApiProperty({ required: false })
  amount_untaxed?: number;

  @ApiProperty({ required: false })
  amount_residual?: number;

  @ApiProperty()
  state: 'draft' | 'posted' | 'cancel';

  @ApiProperty()
  payment_state: 'not_paid' | 'in_payment' | 'paid' | 'partial' | 'reversed';

  @ApiProperty()
  move_type: 'out_invoice' | 'in_invoice' | 'out_refund' | 'in_refund';
}
