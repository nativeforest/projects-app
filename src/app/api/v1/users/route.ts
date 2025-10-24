import { IUser } from "@/app/lib/interfaces/user.interface";
import prisma from '../../../lib/prismaConfig/prisma';

export async function GET(req: Request) {

    try {
        const users = await prisma.user.findMany({
           

            orderBy: { creationDate: 'desc' }

        });
        return new Response(JSON.stringify({ users }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch uswers' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    finally {
        await prisma.$disconnect();
    }
}
