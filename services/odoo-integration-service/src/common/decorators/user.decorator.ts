import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Identity } from '../interfaces/identity.interface.js';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Identity => {
    const request = ctx.switchToHttp().getRequest();
    return request.identity;
  },
);
