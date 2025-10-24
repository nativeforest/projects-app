
import { IProject } from '@/app/lib/interfaces/project.interface';
import prisma from '../../../lib/prismaConfig/prisma';

export async function GET(req: Request) {
    try {
        const projects = await prisma.project.findMany({
            include: {
                
            },

            orderBy: { creationDate: 'desc' }

        });
        return new Response(JSON.stringify({ projects }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), {
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
