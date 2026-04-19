import { Response } from 'express';
import { EmployeeService, ShiftService, AttendanceService, PayrollService } from '../services/employee.service.js';
import { AuthenticatedRequest } from '../middleware/identity.js';

export class EmployeeController {
  private svc = new EmployeeService();
  async list(req: AuthenticatedRequest, res: Response) {
    try { return res.json({ data: await this.svc.getEmployees(req.identity.orgId) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
  async get(req: AuthenticatedRequest, res: Response) {
    try { return res.json({ data: await this.svc.getEmployee(req.params.id, req.identity.orgId) }); }
    catch (e: any) { return e.message === 'Not found' ? res.status(404).json({ message: e.message }) : res.status(500).json({ message: e.message }); }
  }
  async create(req: AuthenticatedRequest, res: Response) {
    try { return res.status(201).json({ data: await this.svc.createEmployee(req.identity.orgId, req.body) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
  async getContactsWithCategoriesAndShifts(req: AuthenticatedRequest, res: Response) {
    try {
      const data = await this.svc.getEmployeesWithScheduleSummary(req.identity.orgId, req.query);
      return res.json({ success: true, data });
    } catch (e: any) {
      return res.status(500).json({ success: false, message: e.message });
    }
  }
}

export class ShiftController {
  private svc = new ShiftService();
  async list(req: AuthenticatedRequest, res: Response) {
    try { return res.json({ data: await this.svc.getShifts(req.identity.orgId, req.query) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
  async create(req: AuthenticatedRequest, res: Response) {
    try { return res.status(201).json({ data: await this.svc.createShift(req.identity.orgId, req.body) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class AttendanceController {
  private svc = new AttendanceService();
  async list(req: AuthenticatedRequest, res: Response) {
    try { return res.json({ data: await this.svc.getAttendance(req.identity.orgId, req.query) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
  async checkIn(req: AuthenticatedRequest, res: Response) {
    try { return res.status(201).json({ data: await this.svc.checkIn(req.identity.orgId, req.body.employeeId) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
  async checkOut(req: AuthenticatedRequest, res: Response) {
    try { return res.json({ data: await this.svc.checkOut(req.identity.orgId, req.body.employeeId) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}

export class PayrollController {
  private svc = new PayrollService();
  async list(req: AuthenticatedRequest, res: Response) {
    try { const r = await this.svc.getPayroll(req.identity.orgId, req.query); return res.json({ data: r.data, total: r.total }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
  async create(req: AuthenticatedRequest, res: Response) {
    try { return res.status(201).json({ data: await this.svc.createPayroll(req.identity.orgId, req.identity.userId, req.body) }); }
    catch (e: any) { return res.status(500).json({ message: e.message }); }
  }
}
