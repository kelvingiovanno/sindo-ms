import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

    async getUserByUsername(username: string) {
        const user = await this.prismaService.user.findUnique({
            where: { username },
        });

        return user;
    }
}
