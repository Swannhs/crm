export interface DeviceInput {
  name: string;
  type?: string;
  status?: string;
  locationId?: string;
  metadata?: any;
}

export interface HardwareProductInput {
  name: string;
  description?: string;
  sku: string;
  price: number;
  categoryId?: string;
  brand?: string;
  imageUrl?: string;
  specifications?: any;
}

export interface HardwareBundleInput {
  name: string;
  description?: string;
  sku: string;
  price: number;
  productIds?: string[];
  imageUrl?: string;
  discount?: number;
}

export interface HardwareCategoryInput {
  name: string;
  description?: string;
  parentId?: string;
}

export interface SunmiConfigInput {
  organizationId?: string;
  apiUrl?: string;
  apiKey?: string;
  appId?: string;
  deviceSn?: string;
}

export interface UnifiConnectionInput {
  organizationId: string;
  locationId?: string;
  name: string;
  host: string;
  port?: number;
  apiKey?: string;
  sslVerify?: boolean;
}

export interface DeviceAssignmentInput {
  deviceId: string;
  organizationId: string;
  locationId?: string;
  assignedBy?: string;
}