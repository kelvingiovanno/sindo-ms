import { Module } from '@nestjs/common';
import { StoreAccessService } from './store-access.service';
import { StoreAccessController } from './store-access.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [StoreAccessService],
    controllers: [StoreAccessController],
    exports: [StoreAccessService],
})
export class StoreAccessModule {}
