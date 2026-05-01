declare module '@mymanager/node-service-kit' {
  export function createServiceApp(options: any): { app: any; logger: any };
  export function requireIdentityContext(req: any, res: any, next: any): void;
}
