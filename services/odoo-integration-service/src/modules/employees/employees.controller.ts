import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IdentityGuard } from '../../common/guards/identity.guard.js';
import { PaginationDto } from '../../common/dto/pagination.dto.js';
import { EmployeesService } from './employees.service.js';

@ApiTags('Employees')
@UseGuards(IdentityGuard)
@ApiHeader({ name: 'x-user-id', required: true })
@ApiHeader({ name: 'x-org-id', required: true })
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  @ApiOperation({ summary: 'List Odoo employees' })
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.employeesService.findAll(paginationDto);
  }

  @Get('departments')
  @ApiOperation({ summary: 'List departments' })
  async getDepartments(@Query() paginationDto: PaginationDto) {
    return this.employeesService.getDepartments(paginationDto);
  }

  @Post('departments')
  @ApiOperation({ summary: 'Create department' })
  async createDepartment(@Body() data: any) {
    return this.employeesService.createDepartment(data);
  }

  @Get('jobs')
  @ApiOperation({ summary: 'List jobs' })
  async getJobs(@Query() paginationDto: PaginationDto) {
    return this.employeesService.getJobs(paginationDto);
  }

  @Post('jobs')
  @ApiOperation({ summary: 'Create job' })
  async createJob(@Body() data: any) {
    return this.employeesService.createJob(data);
  }

  @Get('attendance')
  @ApiOperation({ summary: 'Attendance list (all employees)' })
  async getAttendance(@Query() query: any) {
    return this.employeesService.getAttendance(query);
  }

  @Get('attendance/dashboard')
  @ApiOperation({ summary: 'Attendance dashboard KPIs' })
  async attendanceDashboard(@Query() query: any) {
    return this.employeesService.attendanceDashboard(query);
  }

  @Post('attendance/clock-in')
  @ApiOperation({ summary: 'Clock in employee' })
  async clockIn(@Body() data: any) {
    return this.employeesService.clockIn(data);
  }

  @Post('attendance/:attendanceId/clock-out')
  @ApiOperation({ summary: 'Clock out attendance record' })
  async clockOut(@Param('attendanceId', ParseIntPipe) attendanceId: number, @Body() data: any) {
    return this.employeesService.clockOut(attendanceId, data);
  }

  @Get('leave/types')
  @ApiOperation({ summary: 'List leave types' })
  async getLeaveTypes() {
    return this.employeesService.getLeaveTypes();
  }

  @Get('leave/requests')
  @ApiOperation({ summary: 'List leave requests' })
  async getLeaveRequests(@Query() query: any) {
    return this.employeesService.getLeaveRequests(query);
  }

  @Post('leave/requests')
  @ApiOperation({ summary: 'Create leave request' })
  async createLeaveRequest(@Body() data: any) {
    return this.employeesService.createLeaveRequest(data);
  }

  @Post('leave/requests/:id/approve')
  @ApiOperation({ summary: 'Approve leave request' })
  async approveLeaveRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.approveLeaveRequest(id);
  }

  @Post('leave/requests/:id/refuse')
  @ApiOperation({ summary: 'Refuse leave request' })
  async refuseLeaveRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.refuseLeaveRequest(id);
  }

  @Get('shifts')
  @ApiOperation({ summary: 'List planning shifts' })
  async getShifts(@Query() query: any) {
    return this.employeesService.getShifts(query);
  }

  @Post('shifts')
  @ApiOperation({ summary: 'Create shift' })
  async createShift(@Body() data: any) {
    return this.employeesService.createShift(data);
  }

  @Put('shifts/:id')
  @ApiOperation({ summary: 'Update shift' })
  async updateShift(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.employeesService.updateShift(id, data);
  }

  @Delete('shifts/:id')
  @ApiOperation({ summary: 'Delete shift' })
  async deleteShift(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.deleteShift(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee details' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create employee' })
  async create(@Body() data: any) {
    return this.employeesService.create(data);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update employee' })
  async update(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.employeesService.update(id, data);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Activate/deactivate employee' })
  async updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: 'active' | 'inactive' }
  ) {
    return this.employeesService.updateStatus(id, body.status);
  }

  @Get(':id/attendance')
  @ApiOperation({ summary: 'List employee attendance' })
  async getAttendanceByEmployee(@Param('id', ParseIntPipe) id: number, @Query() query: any) {
    return this.employeesService.getAttendanceByEmployee(id, query);
  }

  @Get(':id/shifts')
  @ApiOperation({ summary: 'List employee shifts' })
  async getShiftsByEmployee(@Param('id', ParseIntPipe) id: number, @Query() query: any) {
    return this.employeesService.getShiftsByEmployee(id, query);
  }
}
