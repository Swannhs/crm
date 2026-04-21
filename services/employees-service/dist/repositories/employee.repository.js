import { db } from '../db.js';
export class EmployeeRepository {
    async findMany(orgId) {
        return db.employee.findMany({ where: { orgId }, include: { availabilities: true } });
    }
    async findUnique(id, orgId) {
        return db.employee.findUnique({ where: { id, orgId }, include: { availabilities: true, timeOffRequests: true, schedules: true } });
    }
    async create(data) { return db.employee.create({ data }); }
    async findManyForSchedule(orgId) {
        return db.employee.findMany({
            where: { orgId },
            orderBy: { createdAt: "asc" }
        });
    }
}
export class ShiftRepository {
    async findMany(where) { return db.shift.findMany({ where, orderBy: { startTime: "asc" } }); }
    async create(data) { return db.shift.create({ data }); }
    async update(id, orgId, data) { return db.shift.updateMany({ where: { id, orgId }, data }); }
    async delete(id, orgId) { return db.shift.deleteMany({ where: { id, orgId } }); }
    async findManyForEmployees(orgId, employeeIds, startTime, endTime) {
        const where = { orgId, employeeId: { in: employeeIds } };
        if (startTime || endTime) {
            where.startTime = {};
            if (startTime)
                where.startTime.gte = startTime;
            if (endTime)
                where.startTime.lte = endTime;
        }
        return db.shift.findMany({ where, orderBy: { startTime: "asc" } });
    }
}
export class AttendanceRepository {
    async findMany(where) { return db.attendance.findMany({ where, orderBy: { date: "desc" } }); }
    async checkIn(data) { return db.attendance.create({ data }); }
    async checkOut(orgId, employeeId) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return db.attendance.updateMany({ where: { orgId, employeeId, date: { gte: today }, checkOut: null }, data: { checkOut: new Date() } });
    }
}
export class PayrollRepository {
    async findMany(where, skip, take) {
        const [data, total] = await Promise.all([
            db.payroll.findMany({ where, orderBy: { periodStart: "desc" }, skip, take }),
            db.payroll.count({ where })
        ]);
        return { data, total };
    }
    async create(data) { return db.payroll.create({ data }); }
}
