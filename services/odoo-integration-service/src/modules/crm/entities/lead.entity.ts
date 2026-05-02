import { ApiProperty } from '@nestjs/swagger';

export class LeadEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  odooId: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  customerName?: string;

  @ApiProperty({ required: false })
  customerId?: number;

  @ApiProperty({ required: false })
  companyName?: string;

  @ApiProperty()
  stage: string;

  @ApiProperty({ required: false })
  stageId?: number;

  @ApiProperty()
  expectedRevenue: number;

  @ApiProperty()
  probability: number;

  @ApiProperty()
  weightedValue: number;

  @ApiProperty()
  status: 'open' | 'won' | 'lost';

  @ApiProperty({ required: false })
  expectedCloseDate?: string;

  @ApiProperty({ required: false })
  nextActivity?: any;

  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  updatedAt: string;
}
