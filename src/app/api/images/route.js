import { prisma } from "@/app/lib/prisma.js";
import { NextResponse } from "next/server.js";

export async function POST(req) {
  try {
    const { base64Image } = await req.json();

    const image = await prisma.photo.create({
      data: {
        base64: base64Image,
      },
    });

    return NextResponse.json({
      success: true,
      image,
    });
  } catch (error) {
    console.error("Error during image upload:", error.message);

    return NextResponse.json({
      success: false,
      error: "Error during image upload",
    });
  }
}

export async function DELETE(req) {
  const { imageId } = await req.json();

  const photo = await prisma.photo.delete({
    where: { id: imageId },
  });

  return NextResponse.json({
    success: true,
    photo,
  });
}
