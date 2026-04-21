declare module '../../../../common/node-service-kit/src/index.js' {
  export function createServiceApp(options: {
    serviceName: string;
    loggerLevel?: string;
    jsonLimit?: string;
    urlEncodedLimit?: string;
    enableCors?: boolean;
  }): {
    app: import('express').Express;
    logger: {
      info: (payload: unknown, message?: string) => void;
      error: (payload: unknown, message?: string) => void;
    };
  };

  export function requireIdentityContext(): import('express').RequestHandler;
}

declare global {
  namespace Express {
    interface Request {
      identity?: {
        userId: string;
        orgId: string;
      };
    }
  }
}

export {};
