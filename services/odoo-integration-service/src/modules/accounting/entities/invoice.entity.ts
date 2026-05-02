import { ApiProperty } from '@nestjs/swagger';

export class InvoiceEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  odooId: number;

  @ApiProperty()
  number: string;

  @ApiProperty()
  customerName: string;

  @ApiProperty({ required: false })
  customerId?: number;

  @ApiProperty({ required: false })
  invoiceDate?: string;

  @ApiProperty({ required: false })
  dueDate?: string;

  @ApiProperty()
  amountTotal: number;

  @ApiProperty()
  amountResidual: number;

  @ApiProperty({ required: false })
  amountUntaxed?: number;

  @ApiProperty()
  paymentState: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  isOverdue: boolean;

  @ApiProperty({ required: false })
  currency?: string;

  @ApiProperty({ required: false, type: 'array', items: { type: 'object' } })
  lines?: any[];
}
}
