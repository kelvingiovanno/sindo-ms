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

    async getUserStoreAccessById(userId: string) {
        const user = await this.prismaService.user.findUnique({
            where: { id: userId },
            include: {
                storeAccesses: {
                    select: {
                        storeId: true,
                        stores: {
                            select: {
                                name: true,
                            },
                        },
                    },
                },
            },
        });

        if (!user) throw new UnauthorizedException('Unauthorized access');

        const stores = user.storeAccesses.map((store) => ({
            id: store.storeId,
            name: store.stores.name,
        }));

        return stores;
    }
}
