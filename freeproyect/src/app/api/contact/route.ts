import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1️⃣ Parsear body
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 2️⃣ Validaciones obligatorias
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // 3️⃣ Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // 4️⃣ Crear cliente Supabase (EN RUNTIME)
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );

    // 5️⃣ Insertar en la BD
    const { error } = await supabase
      .from('ContactMessage')
      .insert([
        {
          name,
          email,
          subject,
          message,
        },
      ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Error al guardar el mensaje' },
        { status: 500 }
      );
    }

    // 6️⃣ Respuesta OK
    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 201 }
    );
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Error inesperado del servidor' },
      { status: 500 }
    );
  }
}
