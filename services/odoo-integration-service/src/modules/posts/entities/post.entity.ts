import { ApiProperty } from '@nestjs/swagger';

export class PostEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  content?: string;

  @ApiProperty({ required: false })
  blog_id?: number;

  @ApiProperty({ required: false })
  author_id?: number;

  @ApiProperty({ required: false })
  post_date?: string;

  @ApiProperty({ required: false })
  website_published?: boolean;
}
