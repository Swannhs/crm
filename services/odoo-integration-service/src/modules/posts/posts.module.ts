import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller.js';
import { PostsService } from './posts.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
})
export class PostsModule {}
