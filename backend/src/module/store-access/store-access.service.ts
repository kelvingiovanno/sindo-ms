import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreAccessService {
    constructor(private readonly prismaService: PrismaService) {}

    async validateStoreAccess(storeId: string, userId: string) {
        const store = await this.prismaService.storeAccess.findUnique({
            where: {
                storeId_userId: {
                    storeId,
                    userId,
                },
            },
            include: {
                users: true,
                stores: true,
            },
        });

        return store;
    }

    async getUserStoreAccess(userId: string) {
        const stores = await this.prismaService.storeAccess.findMany({
            where: { userId: userId },
            include: {
                stores: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        return stores.map((store) => ({
            storeId: store.storeId,
            storeName: store.stores.name,
        }));
    }
}
