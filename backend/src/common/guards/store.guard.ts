import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { StoreAccessService } from 'src/module/store-access/store-access.service';
import { type AuthRequest } from '../types';

@Injectable()
export class StoreGuard implements CanActivate {
    constructor(private readonly storeAccessService: StoreAccessService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<AuthRequest>();
        const payload = req.user;

        const storeAccess = await this.storeAccessService.validateStoreAccess(
            payload.storeId,
            payload.sub,
        );

        if (!storeAccess) throw new ForbiddenException('Store access denied');

        return true;
    }
}
