import { ApiProperty } from '@nestjs/swagger';

export class ContactEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  email?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty({ required: false })
  mobile?: string;

  @ApiProperty()
  is_company: boolean;

  @ApiProperty({ required: false })
  street?: string;

  @ApiProperty({ required: false })
  city?: string;
}
