import { EmployeeService, ShiftService, AttendanceService, PayrollService } from '../services/employee.service.js';
export class EmployeeController {
    svc = new EmployeeService();
    async list(req, res) {
        try {
            return res.json({ data: await this.svc.getEmployees(req.identity.orgId) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
    async get(req, res) {
        try {
            return res.json({ data: await this.svc.getEmployee(req.params.id, req.identity.orgId) });
        }
        catch (e) {
            return e.message === 'Not found' ? res.status(404).json({ message: e.message }) : res.status(500).json({ message: e.message });
        }
    }
    async create(req, res) {
        try {
            return res.status(201).json({ data: await this.svc.createEmployee(req.identity.orgId, req.body) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
    async getContactsWithCategoriesAndShifts(req, res) {
        try {
            const data = await this.svc.getEmployeesWithScheduleSummary(req.identity.orgId, req.query);
            return res.json({ success: true, data });
        }
        catch (e) {
            return res.status(500).json({ success: false, message: e.message });
        }
    }
}
export class ShiftController {
    svc = new ShiftService();
    async list(req, res) {
        try {
            return res.json({ data: await this.svc.getShifts(req.identity.orgId, req.query) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
    async create(req, res) {
        try {
            return res.status(201).json({ data: await this.svc.createShift(req.identity.orgId, req.body) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}
export class AttendanceController {
    svc = new AttendanceService();
    async list(req, res) {
        try {
            return res.json({ data: await this.svc.getAttendance(req.identity.orgId, req.query) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
    async checkIn(req, res) {
        try {
            return res.status(201).json({ data: await this.svc.checkIn(req.identity.orgId, req.body.employeeId) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
    async checkOut(req, res) {
        try {
            return res.json({ data: await this.svc.checkOut(req.identity.orgId, req.body.employeeId) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}
export class PayrollController {
    svc = new PayrollService();
    async list(req, res) {
        try {
            const r = await this.svc.getPayroll(req.identity.orgId, req.query);
            return res.json({ data: r.data, total: r.total });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
    async create(req, res) {
        try {
            return res.status(201).json({ data: await this.svc.createPayroll(req.identity.orgId, req.identity.userId, req.body) });
        }
        catch (e) {
            return res.status(500).json({ message: e.message });
        }
    }
}
