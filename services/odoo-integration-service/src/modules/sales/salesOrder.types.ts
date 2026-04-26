export type OdooSalesOrderRecord = {
  id: number;
  name?: string;
  partner_id?: [number, string] | false;
  date_order?: string;
  amount_total?: number;
  state?: string;
  currency_id?: [number, string] | false;
  client_order_ref?: string;
  create_date?: string;
  write_date?: string;
};

export type SalesOrderDto = {
  id: number;
  name: string;
  partner?: string;
  dateOrder?: string;
  amountTotal?: number;
  state?: string;
  currency?: string;
  clientOrderRef?: string;
  createdAt?: string;
  updatedAt?: string;
};
