import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStudents() {
    return await prisma.student.findMany();   
}

export async function addStudent(student: {
    IDNo: number;
    Lastname: string;
    Firstname: string;
    Midname: string;
    Course: string;
    YearLevel: number;
    Email: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}) {
    return await prisma.student.create({ data: student });
}
