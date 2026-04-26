import { ApiProperty } from '@nestjs/swagger';

export class LeadEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  partner_id?: [number, string];

  @ApiProperty({ required: false })
  email_from?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty({ required: false })
  probability?: number;

  @ApiProperty({ required: false })
  planned_revenue?: number;

  @ApiProperty({ required: false })
  stage_id?: [number, string];

  @ApiProperty()
  type: 'lead' | 'opportunity';

  @ApiProperty({ required: false })
  description?: string;
}
