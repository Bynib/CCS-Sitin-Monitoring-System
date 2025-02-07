import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  const { username, password } = await req.json();
  console.log(username, password);
  const uniqueStudent = await prisma.student.findMany();

  console.log(uniqueStudent);
  for (let i = 0; i < uniqueStudent.length; i++) {
    if (uniqueStudent[i].username === username && uniqueStudent[i].password === password) {
      return NextResponse.json({ student: uniqueStudent[i] });
    }
  }

}