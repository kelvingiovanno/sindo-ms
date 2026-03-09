import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { HelloModule } from './module/hello/hello.module';
import { StoreModule } from './module/store/store.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        PrismaModule,
        AuthModule,
        HelloModule,
        StoreModule,
    ],
})
export class AppModule {}
