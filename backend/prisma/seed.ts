import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient, UserRole } from '../generated/prisma/client';
// import bcrypt from 'bcrypt';

const adapter = new PrismaMariaDb({
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT ?? 10),
});

const prisma = new PrismaClient({
    adapter,
});

async function main() {
    const passwordHash = 'superadmin123';

    const user = await prisma.user.upsert({
        where: {
            username: 'superadmin',
        },
        update: {},
        create: {
            fullname: 'Super Admin',
            username: 'superadmin',
            password: passwordHash,
            role: UserRole.ADMIN,
        },
    });

    const store1 = await prisma.store.upsert({
        where: {
            name: 'Selat Sindo Tractor',
        },
        update: {},
        create: {
            name: 'Selat Sindo Tractor',
        },
    });

    const store2 = await prisma.store.upsert({
        where: {
            name: 'Sinergy Engine Part',
        },
        update: {},
        create: {
            name: 'Sinergy Engine Part',
        },
    });

    const store3 = await prisma.store.upsert({
        where: {
            name: 'Marine Diesel',
        },
        update: {},
        create: {
            name: 'Marine Diesel',
        },
    });

    await prisma.storeAccess.createMany({
        data: [
            {
                userId: user.id,
                storeId: store1.id,
            },
            {
                userId: user.id,
                storeId: store2.id,
            },
            {
                userId: user.id,
                storeId: store3.id,
            },
        ],
    });

    console.log('seeded');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
