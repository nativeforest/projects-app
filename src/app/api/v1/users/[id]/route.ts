import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prismaConfig/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = (await params).id; //[]

    const user = await prisma.user.findUnique({
      where: { dni: id },
      include: {
        tasksAssigned: true,
        projectsAssigned: { include: { rate: true, project: true } },
      },
    });

    if (!user) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log("Error fetching  by id/->:", error);
    return NextResponse.json({ error: "Error fetching xx " }, { status: 500 });
  }
}
