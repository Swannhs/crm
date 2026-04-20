import { EmployeeRepository, ShiftRepository, AttendanceRepository, PayrollRepository } from '../repositories/employee.repository.js';
export class EmployeeService {
    repo = new EmployeeRepository();
    async getEmployees(orgId) { return this.repo.findMany(orgId); }
    async getEmployee(id, orgId) {
        const emp = await this.repo.findUnique(id, orgId);
        if (!emp)
            throw new Error('Not found');
        return emp;
    }
    async createEmployee(orgId, data) {
        return this.repo.create({ orgId, userId: data.userId, contactId: data.contactId, jobTitle: data.jobTitle, department: data.department, salary: data.salary || 0, status: "active" });
    }
    async getEmployeesWithScheduleSummary(orgId, filters) {
        try {
            const employees = await this.repo.findManyForSchedule(orgId);
            if (!employees.length)
                return [];
            const start = filters.startOfWeek ? new Date(`${filters.startOfWeek}T00:00:00.000Z`) : undefined;
            const end = filters.endOfWeek ? new Date(`${filters.endOfWeek}T23:59:59.999Z`) : undefined;
            const shiftRepo = new ShiftRepository();
            const shifts = await shiftRepo.findManyForEmployees(orgId, employees.map((employee) => employee.id), start, end);
            const shiftsByEmployee = new Map();
            for (const shift of shifts) {
                if (!shift.employeeId)
                    continue;
                const list = shiftsByEmployee.get(shift.employeeId) || [];
                list.push(shift);
                shiftsByEmployee.set(shift.employeeId, list);
            }
            const search = String(filters.search || "").trim().toLowerCase();
            return employees
                .map((employee) => {
                const metadata = (employee.metadata && typeof employee.metadata === "object") ? employee.metadata : {};
                const fullName = String(metadata.fullName || metadata.name || "").trim() ||
                    [metadata.firstName, metadata.lastName].filter(Boolean).join(" ").trim() ||
                    employee.jobTitle ||
                    `Employee ${employee.id.slice(0, 8)}`;
                const email = String(metadata.email || "");
                const phone = String(metadata.phone || "");
                const photo = String(metadata.photo || metadata.avatar || "");
                const categories = [
                    employee.department ? { _id: `department-${employee.department}`, name: employee.department } : null,
                    employee.jobTitle ? { _id: `job-${employee.jobTitle}`, name: employee.jobTitle } : null
                ].filter(Boolean);
                const employeeShifts = shiftsByEmployee.get(employee.id) || [];
                return {
                    _id: employee.id,
                    fullName,
                    email,
                    phone,
                    photo,
                    totalShifts: employeeShifts.length,
                    displaySummary: employeeShifts.length === 1 ? "1 shift this week" : `${employeeShifts.length} shifts this week`,
                    categories,
                    shifts: employeeShifts
                };
            })
                .filter((employee) => {
                if (!search)
                    return true;
                return [employee.fullName, employee.email, employee.phone]
                    .filter(Boolean)
                    .some((value) => String(value).toLowerCase().includes(search));
            });
        }
        catch (error) {
            if (error?.code === "P2021") {
                return [];
            }
            throw error;
        }
    }
}
export class ShiftService {
    repo = new ShiftRepository();
    async getShifts(orgId, filters) {
        const where = { orgId };
        if (filters.employeeId)
            where.employeeId = filters.employeeId;
        if (filters.start)
            where.startTime = { gte: new Date(filters.start) };
        if (filters.end)
            where.endTime = { lte: new Date(filters.end) };
        return this.repo.findMany(where);
    }
    async createShift(orgId, data) {
        return this.repo.create({ orgId, employeeId: data.employeeId, startTime: new Date(data.startTime), endTime: new Date(data.endTime), position: data.position, notes: data.notes, isDraft: data.isDraft || false, shiftName: data.shiftName, color: data.color });
    }
}
export class AttendanceService {
    repo = new AttendanceRepository();
    async getAttendance(orgId, filters) {
        const where = { orgId };
        if (filters.employeeId)
            where.employeeId = filters.employeeId;
        if (filters.date)
            where.date = new Date(filters.date);
        return this.repo.findMany(where);
    }
    async checkIn(orgId, employeeId) {
        return this.repo.checkIn({ orgId, employeeId, date: new Date(), checkIn: new Date(), status: "present" });
    }
    async checkOut(orgId, employeeId) {
        return this.repo.checkOut(orgId, employeeId);
    }
}
export class PayrollService {
    repo = new PayrollRepository();
    async getPayroll(orgId, filters) {
        const page = parseInt(filters.page || '1');
        const limit = parseInt(filters.limit || '20');
        const where = { orgId };
        if (filters.status)
            where.status = filters.status;
        return this.repo.findMany(where, (page - 1) * limit, limit);
    }
    async createPayroll(orgId, userId, data) {
        return this.repo.create({ orgId, createdBy: userId, periodStart: new Date(data.periodStart), periodEnd: new Date(data.periodEnd), totalAmountCents: Number(data.totalAmountCents || 0), status: data.status || "draft", notes: data.notes });
    }
}
