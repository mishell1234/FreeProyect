import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(req: Request) {
    try{

        const body = await req.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Todos los campos son obligaorios"},
                { status: 400}
            );
        }

        const savedMessage = await prisma.contactMessage.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        return NextResponse.json(
            { success: true, data: savedMessage},
            { status: 201 }
        );
    }catch(error){
        console.error("Error al guardar el mensaje", error);

        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500}
        )
    }
}