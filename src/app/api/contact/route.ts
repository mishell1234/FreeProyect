import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";


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

        const { error } = await supabase
            .from('ContactMessage')
            .insert([
                { name, email, subject, message }
            ]);

        if (error) {
            console.error('Supabase error', error);
            return NextResponse.json(
                { error: 'Error al guardar mensaje' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true },
            { status: 201 }
        );

    }catch(err){
        console.error('API error', err);

        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500}
        );
    }
}