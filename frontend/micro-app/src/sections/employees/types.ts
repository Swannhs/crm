export type EmployeeStatus = 'active' | 'inactive' | 'invited' | 'on_leave' | 'terminated';

export type EmploymentType = 'full_time' | 'part_time' | 'contractor' | 'intern' | 'temporary';

export type EmployeeRole = {
  id: string;
  name: string;
  description?: string;
  permissions?: string[];
  system?: boolean;
};

export type Employee = {
  id: string;
  orgId?: string;
  userId?: string;
  contactId?: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  jobTitle?: string;
  departmentId?: string;
  departmentName?: string;
  managerId?: string;
  managerName?: string;
  status: EmployeeStatus;
  employmentType?: EmploymentType;
  startDate?: string;
  endDate?: string;
  location?: string;
  timezone?: string;
  roles?: EmployeeRole[];
  permissions?: string[];
  createdAt?: string;
  updatedAt?: string;
};

export type EmployeeDepartment = {
  id: string;
  orgId?: string;
  name: string;
  description?: string;
  managerId?: string;
  managerName?: string;
  employeeCount?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type AttendanceStatus = 'present' | 'absent' | 'late' | 'remote' | 'on_leave' | 'holiday';

export type AttendanceRecord = {
  id: string;
  employeeId: string;
  employeeName?: string;
  date: string;
  clockIn?: string;
  clockOut?: string;
  totalHours?: number;
  status: AttendanceStatus;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type TimeOffStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';

export type TimeOffRequest = {
  id: string;
  employeeId: string;
  employeeName?: string;
  type: 'vacation' | 'sick' | 'personal' | 'unpaid' | 'other';
  startDate: string;
  endDate: string;
  days?: number;
  reason?: string;
  status: TimeOffStatus;
  reviewedBy?: string;
  reviewedAt?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type EmployeeDocument = {
  id: string;
  employeeId: string;
  name: string;
  type?: 'contract' | 'id' | 'tax' | 'certificate' | 'policy' | 'other';
  fileUrl?: string;
  uploadedBy?: string;
  uploadedAt?: string;
};

export type EmployeeSummary = {
  totalEmployees?: number;
  activeEmployees?: number;
  onLeave?: number;
  departments?: number;
  pendingTimeOff?: number;
  todayAttendance?: number;
};

export const hasNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

export const formatOptionalNumber = (value: unknown) => (hasNumber(value) ? value.toLocaleString() : 'Unavailable');

export const formatEmployeeName = (employee: Partial<Employee>) => {
  const full = [employee.firstName, employee.lastName].filter(Boolean).join(' ').trim();
  return employee.displayName || full || employee.email || 'Unnamed employee';
};
