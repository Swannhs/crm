export type OdooInventoryRecord = {
  product_id?: [number, string] | false;
  location_id?: [number, string] | false;
  quantity?: number;
  reserved_quantity?: number;
  available_quantity?: number;
  write_date?: string;
};

export type InventoryDto = {
  product?: string;
  location?: string;
  quantity?: number;
  reservedQuantity?: number;
  availableQuantity?: number;
  updatedAt?: string;
};
