export class AppError extends Error {
  status: number;
  code: string;

  constructor(message: string, status = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.code = code;
  }
}

export class OdooAuthError extends AppError {
  constructor(message = 'Failed to authenticate with Odoo.') {
    super(message, 401, 'ODOO_AUTH_ERROR');
    this.name = 'OdooAuthError';
  }
}

export class OdooConnectionError extends AppError {
  constructor(message = 'Unable to reach Odoo API endpoint.') {
    super(message, 502, 'ODOO_CONNECTION_ERROR');
    this.name = 'OdooConnectionError';
  }
}

export class OdooApiError extends AppError {
  constructor(message = 'Odoo API returned an error.') {
    super(message, 502, 'ODOO_API_ERROR');
    this.name = 'OdooApiError';
  }
}

export function asError(error: unknown): AppError {
  if (error instanceof AppError) return error;
  if (error instanceof Error) return new AppError(error.message, 500, 'INTERNAL_ERROR');
  return new AppError('Internal server error', 500, 'INTERNAL_ERROR');
}
