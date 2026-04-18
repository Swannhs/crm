import { EmployeeRepository, ShiftRepository, AttendanceRepository, PayrollRepository } from '../repositories/employee.repository.js';

export class EmployeeService {
  private repo = new EmployeeRepository();
  async getEmployees(orgId: string) { return this.repo.findMany(orgId); }
  async getEmployee(id: string, orgId: string) {
    const emp = await this.repo.findUnique(id, orgId);
    if (!emp) throw new Error('Not found');
    return emp;
  }
  async createEmployee(orgId: string, data: any) {
    return this.repo.create({ orgId, userId: data.userId, contactId: data.contactId, jobTitle: data.jobTitle, department: data.department, salary: data.salary || 0, status: "active" });
  }
}

export class ShiftService {
  private repo = new ShiftRepository();
  async getShifts(orgId: string, filters: any) {
    const where: any = { orgId };
    if (filters.employeeId) where.employeeId = filters.employeeId;
    if (filters.start) where.startTime = { gte: new Date(filters.start) };
    if (filters.end) where.endTime = { lte: new Date(filters.end) };
    return this.repo.findMany(where);
  }
  async createShift(orgId: string, data: any) {
    return this.repo.create({ orgId, employeeId: data.employeeId, startTime: new Date(data.startTime), endTime: new Date(data.endTime), position: data.position, notes: data.notes, isDraft: data.isDraft || false, shiftName: data.shiftName, color: data.color });
  }
}

export class AttendanceService {
  private repo = new AttendanceRepository();
  async getAttendance(orgId: string, filters: any) {
    const where: any = { orgId };
    if (filters.employeeId) where.employeeId = filters.employeeId;
    if (filters.date) where.date = new Date(filters.date);
    return this.repo.findMany(where);
  }
  async checkIn(orgId: string, employeeId: string) {
    return this.repo.checkIn({ orgId, employeeId, date: new Date(), checkIn: new Date(), status: "present" });
  }
  async checkOut(orgId: string, employeeId: string) {
    return this.repo.checkOut(orgId, employeeId);
  }
}

export class PayrollService {
  private repo = new PayrollRepository();
  async getPayroll(orgId: string, filters: any) {
    const page = parseInt(filters.page || '1');
    const limit = parseInt(filters.limit || '20');
    const where: any = { orgId };
    if (filters.status) where.status = filters.status;
    return this.repo.findMany(where, (page - 1) * limit, limit);
  }
  async createPayroll(orgId: string, userId: string, data: any) {
    return this.repo.create({ orgId, createdBy: userId, periodStart: new Date(data.periodStart), periodEnd: new Date(data.periodEnd), totalAmountCents: Number(data.totalAmountCents || 0), status: data.status || "draft", notes: data.notes });
  }
}
