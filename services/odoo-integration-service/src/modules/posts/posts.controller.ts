import { Controller, Get, Post, Put, Delete, Body, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { PostsService } from './posts.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { PostEntity } from './entities/post.entity.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Posts')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('list')
  @ApiOperation({ summary: 'List all blog posts' })
  async list(@Query() paginationDto: PaginationDto) {
    return this.postsService.findAll(paginationDto);
  }

  @Get('details')
  @ApiOperation({ summary: 'Get post details' })
  async details(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.findOne(id);
  }

  @Get('latest')
  @ApiOperation({ summary: 'Get latest blog posts' })
  async latest() {
    return this.postsService.findAll({ page: 1, pageSize: 5 });
  }

  @Get('search')
  @ApiOperation({ summary: 'Search blog posts' })
  async search(@Query('q') q: string) {
    return this.postsService.findAll({ search: q });
  }

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  async create(@Body() data: any) {
    return this.postsService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a post' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.postsService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.remove(id);
  }

  @Post(':id/publish')
  @ApiOperation({ summary: 'Publish a post' })
  async publish(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.publish(id);
  }

  @Post(':id/unpublish')
  @ApiOperation({ summary: 'Unpublish a post' })
  async unpublish(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.unpublish(id);
  }
}
