import { Injectable, UnauthorizedException } from '@nestjs/common';
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

    async getStoreAccess(userId: string) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            include: {
                storeAccesses: {
                    select: {
                        storeId: true,
                    },
                },
            },
        });

        if (!user) throw new UnauthorizedException('Unauthorized access');

        const storeIds = user.storeAccesses.map((store) => store.storeId);

        return storeIds;
    }
}
