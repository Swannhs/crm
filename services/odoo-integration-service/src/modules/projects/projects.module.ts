import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller.js';
import { ProjectsService } from './projects.service.js';
import { OdooBaseModule } from '../odoo-base/odoo-base.module.js';

@Module({
  imports: [OdooBaseModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
