import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const fecha = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Lima'
      }
    ).format(new Date());

    const respuesta = await fetch(
      `https://api.decolecta.com/v1/tipo-cambio/sunat?date=${fecha}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.KEY_API_SUNAT}`,
        },
      }
    );

    if (!respuesta.ok) {
      return NextResponse.json(
        { error: 'Error al consultar Decolecta' },
        { status: respuesta.status }
      );
    }

    const datos = await respuesta.json();

    const tc = {
      fecha: datos.date,
      compra: Number(datos.buy_price),
      venta: Number(datos.sell_price)
    };

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!
    );

    const { data: usuario } = await supabase.auth.getUser();

    console.log("Usuario:", usuario.user);

    const { data, error} = await supabase
      .from('tbl_tc')
      .insert([tc])


    if (error) {
      console.error('Supabase error', error);

      return NextResponse.json(
        { error: 'Error al guardar el tipo de cambio'},
        { status: 500}
      );
    }
    
    return NextResponse.json(tc);

  } catch (error) {
    console.error('Error:', error);

    return NextResponse.json(
      { error: 'Error inesperado del servidor' },
      { status: 500 }
    );
  }
}