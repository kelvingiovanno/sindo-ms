import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './module/user/user.module';
import { UserModule } from './service/user/user.module';
import { ServiceService } from './modulu/service/service.service';
import { UserModule } from './module/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        JwtModule.register({
            global: true,
        }),
        PrismaModule,
        AuthModule,
        UserModule,
    ],
    providers: [ServiceService],
})
export class AppModule {}
