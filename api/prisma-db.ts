import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStudents() {
    return await prisma.student.findMany();   
}

export async function addStudent(student: {
    idno: number;
    lastname: string;
    firstname: string;
    midname: string;
    course: string;
    yearlevel: number;
    email: string;
    username: string;
    password: string;
}) {
    return await prisma.student.create({ data: student });
}

export async function getStudent(idno: number) {
    return await prisma.student.findFirst({ where: { idno } });
}