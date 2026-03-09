import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StoreService {
    constructor(private readonly prismaService: PrismaService) {}

    async createStore(storeName: string) {
        const store = await this.prismaService.store.create({
            data: {
                name: storeName,
            },
        });

        return store;
    }

    async updateStore(storeId: string, storeName: string) {
        const store = await this.prismaService.store.findUnique({
            where: { id: storeId },
        });

        if (!store) {
            throw new NotFoundException('');
        }

        const updated = await this.prismaService.store.update({
            where: { id: storeId },
            data: {
                name: storeName,
            },
        });

        return updated;
    }

    async grantStoreAccess(storeId: string, userIds: string[]) {
        const data = userIds.map((id) => ({
            storeId: storeId,
            userId: id,
        }));

        const createdCount = await this.prismaService.storeAccess.createMany({
            data: data,
        });

        return createdCount;
    }

    async revokeStoreAccess(storeId: string, userIds: string[]) {
        const deletedCount = await this.prismaService.storeAccess.deleteMany({
            where: {
                storeId: storeId,
                userId: { in: userIds },
            },
        });

        return deletedCount;
    }
}
