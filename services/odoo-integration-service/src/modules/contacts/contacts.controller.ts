import { Controller, Get, Post, Put, Delete, Body, Query, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { ContactsService } from './contacts.service.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { ContactEntity } from './entities/contact.entity.js';
import { CreateContactDto, UpdateContactDto } from './dto/contact.dto.js';
import { IdentityGuard } from '../../common/guards/identity.guard.js';

@ApiTags('Contacts')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiOperation({ summary: 'List all contacts' })
  @ApiResponse({ status: 200, type: [ContactEntity] })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.contactsService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get contact details' })
  @ApiResponse({ status: 200, type: ContactEntity })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new contact' })
  async create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a contact' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a contact' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.contactsService.remove(id);
  }
}
