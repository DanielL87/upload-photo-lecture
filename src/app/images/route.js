import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server.js";

export async function POST(req) {
  //   const { base64Image } = await req.json();

  return NextResponse.json({
    success: true,
    message: "Photo Route",
  });
}
