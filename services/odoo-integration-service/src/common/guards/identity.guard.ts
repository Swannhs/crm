import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Identity } from '../interfaces/identity.interface.js';

@Injectable()
export class IdentityGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const userId = request.headers['x-user-id'];
    const orgId = request.headers['x-org-id'];

    if (!userId || !orgId) {
      throw new UnauthorizedException('Missing X-User-Id or X-Org-Id headers');
    }

    const identity: Identity = {
      userId: userId as string,
      orgId: orgId as string,
      roles: (request.headers['x-user-roles'] as string)?.split(',') || [],
    };

    request.identity = identity;
    return true;
  }
}
