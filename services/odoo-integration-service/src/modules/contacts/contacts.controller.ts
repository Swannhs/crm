import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { ContactsService } from './contacts.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Contacts')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiOperation({ summary: 'List Odoo contacts' })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.contactsService.findAll(paginationDto);
  }
}
