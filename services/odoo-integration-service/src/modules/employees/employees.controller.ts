import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
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

  @Post(':id/clock-in')
  @ApiOperation({ summary: 'Clock in employee (contract alias)' })
  async clockInByEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() data?: any,
  ) {
    return this.employeesService.clockIn({ ...(data || {}), employeeId: id });
  }

  @Post('attendance/:attendanceId/clock-out')
  @ApiOperation({ summary: 'Clock out attendance record' })
  async clockOut(
    @Param('attendanceId', ParseIntPipe) attendanceId: number,
    @Body() data: any,
  ) {
    return this.employeesService.clockOut(attendanceId, data);
  }

  @Post(':id/clock-out')
  @ApiOperation({ summary: 'Clock out employee (contract alias)' })
  async clockOutByEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() data?: any,
  ) {
    return this.employeesService.clockOutLatestForEmployee(id, data);
  }

  @Post('attendance')
  @ApiOperation({ summary: 'Create attendance record (contract alias)' })
  async createAttendanceRecord(@Body() data: any) {
    return this.employeesService.createAttendanceRecord(data);
  }

  @Patch('attendance/:id')
  @ApiOperation({ summary: 'Update attendance record (contract alias)' })
  async updateAttendanceRecord(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.employeesService.updateAttendanceRecord(id, data);
  }

  @Delete('attendance/:id')
  @ApiOperation({ summary: 'Delete attendance record (contract alias)' })
  async deleteAttendanceRecord(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.deleteAttendanceRecord(id);
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

  @Get('time-off')
  @ApiOperation({ summary: 'List time-off requests (contract alias)' })
  async getTimeOffRequests(@Query() query: any) {
    return this.employeesService.getLeaveRequests(query);
  }

  @Post('leave/requests')
  @ApiOperation({ summary: 'Create leave request' })
  async createLeaveRequest(@Body() data: any) {
    return this.employeesService.createLeaveRequest(data);
  }

  @Post('time-off')
  @ApiOperation({ summary: 'Create time-off request (contract alias)' })
  async createTimeOffRequest(@Body() data: any) {
    return this.employeesService.createLeaveRequest(data);
  }

  @Post('leave/requests/:id/approve')
  @ApiOperation({ summary: 'Approve leave request' })
  async approveLeaveRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.approveLeaveRequest(id);
  }

  @Post('time-off/:id/approve')
  @ApiOperation({ summary: 'Approve time-off request (contract alias)' })
  async approveTimeOffRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.approveLeaveRequest(id);
  }

  @Post('leave/requests/:id/refuse')
  @ApiOperation({ summary: 'Refuse leave request' })
  async refuseLeaveRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.refuseLeaveRequest(id);
  }

  @Post('time-off/:id/reject')
  @ApiOperation({ summary: 'Reject time-off request (contract alias)' })
  async rejectTimeOffRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.refuseLeaveRequest(id);
  }

  @Post('time-off/:id/cancel')
  @ApiOperation({ summary: 'Cancel time-off request (contract alias)' })
  async cancelTimeOffRequest(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.cancelLeaveRequest(id);
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

  @Get('roles')
  @ApiOperation({ summary: 'List employee roles' })
  async getRoles() {
    return this.employeesService.getRoles();
  }

  @Post(':id/roles')
  @ApiOperation({ summary: 'Assign role to employee' })
  async assignRole(@Param('id', ParseIntPipe) id: number, @Body() data: any) {
    return this.employeesService.assignRole(id, Number(data?.roleId));
  }

  @Delete(':id/roles/:roleId')
  @ApiOperation({ summary: 'Remove role from employee' })
  async removeRole(
    @Param('id', ParseIntPipe) id: number,
    @Param('roleId', ParseIntPipe) roleId: number,
  ) {
    return this.employeesService.removeRole(id, roleId);
  }

  @Patch(':id/permissions')
  @ApiOperation({ summary: 'Update employee permission overrides' })
  async updatePermissions(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.employeesService.updateEmployeePermissions(id, data);
  }

  @Get('settings')
  @ApiOperation({ summary: 'Get HR settings' })
  async getSettings(@Headers('x-org-id') orgId?: string) {
    return this.employeesService.getSettings(orgId || '');
  }

  @Patch('settings')
  @ApiOperation({ summary: 'Update HR settings' })
  async updateSettings(
    @Headers('x-org-id') orgId?: string,
    @Body() data?: any,
  ) {
    return this.employeesService.updateSettings(orgId || '', data || {});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee details' })
  async findOne(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.employeesService.findOne(numericId);
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
    @Body() body: { status: 'active' | 'inactive' },
  ) {
    return this.employeesService.updateStatus(id, body.status);
  }

  @Post(':id/archive')
  @ApiOperation({ summary: 'Archive/deactivate employee (contract alias)' })
  async archive(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.updateStatus(id, 'inactive');
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete employee (contract alias)' })
  async remove(@Param('id') id: string) {
    const numericId = parseInt(String(id).replace(/^\D+/g, ''), 10);
    return this.employeesService.remove(numericId);
  }

  @Get(':id/attendance')
  @ApiOperation({ summary: 'List employee attendance' })
  async getAttendanceByEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: any,
  ) {
    return this.employeesService.getAttendanceByEmployee(id, query);
  }

  @Get(':id/shifts')
  @ApiOperation({ summary: 'List employee shifts' })
  async getShiftsByEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: any,
  ) {
    return this.employeesService.getShiftsByEmployee(id, query);
  }

  @Get(':id/documents')
  @ApiOperation({ summary: 'List employee documents' })
  async getEmployeeDocuments(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.getEmployeeDocuments(id);
  }

  @Post(':id/documents')
  @ApiOperation({ summary: 'Create employee document metadata' })
  async uploadEmployeeDocument(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: any,
  ) {
    return this.employeesService.uploadEmployeeDocument(id, data);
  }

  @Delete(':id/documents/:documentId')
  @ApiOperation({ summary: 'Delete employee document metadata' })
  async deleteEmployeeDocument(
    @Param('id', ParseIntPipe) id: number,
    @Param('documentId') documentId: string,
  ) {
    return this.employeesService.deleteEmployeeDocument(id, documentId);
  }
}
