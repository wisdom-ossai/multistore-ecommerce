import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    if (!body.name)
      return new NextResponse("Name is required", { status: 400 });

    const result = await db.store.create({
      data: {
        name: body.name,
        userId,
      },
    });

    if (result.error) return new NextResponse(result.error, { status: 400 });

    return new NextResponse(JSON.stringify(result), { status: 201 });
  } catch (error: any) {
    if (error.code === "P2002") {
      // Unique constraint violation
      return new NextResponse("The provided store name already exist", {
        status: 400,
      });
    } else {
      return new NextResponse("An unexpected error occurred", { status: 500 });
    }
    console.log("[STORE - POST]", error);
  }
}
