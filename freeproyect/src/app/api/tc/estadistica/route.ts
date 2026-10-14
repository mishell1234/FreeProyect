import { calcularEstadisticas } from "@/src/lib/estadistica/descriptiva";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type RegistroTC = {
    fecha: string;
    compra: number;
    venta: number;
};

export async function GET(request: Request) {
    try{

        const { searchParams } = new URL(request.url);

        const periodo = searchParams.get("periodo") ?? "total";

        const tipo = searchParams.get("tipo") ?? "descriptiva"

        const periodosValidos =  tipo === "grafico" ? ["30", "60", "90", "120", "150", "180"] : ["30", "60", "90", "total"];

        if (!["descriptiva", "grafico"].includes(tipo)) {
            return NextResponse.json (
                { error: "tipo de consulta inválida" },
                { status: 400}
            );
        }

        if (!periodosValidos.includes(periodo)) {
            return NextResponse.json(
                { error: "Período inválido" },
                { status: 400 }

            );
        }

        const dias = periodo === "total" ? null : Number(periodo);

        const supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_ANON_KEY!
        );

        let consulta = supabase.from("tbl_tc").select("fecha, compra, venta").order("fecha", { ascending: false });

        let datos: RegistroTC[] = [];

        if (dias !== null) {

            const { data, error } = await consulta.limit(dias);

            if(error) {
                throw error;
            }

            datos = data;

        } else {

            let inicio = 0;
            const limite = 1000;

            while (true) {

                const { data, error} = await consulta.range(inicio, inicio + limite - 1);

                if(error) {
                    throw error;
                }

                datos.push(...data)

                if(data.length < limite) {
                    break;
                }

                inicio += limite;
            }
        }

        if(tipo === "grafico") {
            const { data, error } = await consulta.limit(dias!);

            if(error) {
                throw error;
            }

            datos = data ?? [];

            datos.reverse();

            return NextResponse.json({
                tipo,
                periodo,
                cantidad: datos.length,
                datos
            }); 
        }

        console.log("TOTAL DATA:", datos.length);

        const compra = datos.map((registro) => registro.compra);

        const venta = datos.map((registro) => registro.venta);

        const estadisticaCompra = calcularEstadisticas(compra);

        const estadisticaVenta = calcularEstadisticas(venta);

        return NextResponse.json({
            periodo,
            datos: datos,
            estadisticas: {
                compra: estadisticaCompra,
                venta: estadisticaVenta
            }
        });

    } catch (error) {
        console.error('Error', error);

        return NextResponse.json(
            {
                error: 'Error inesperado del servicio'
            },
            {
                status:500
            }
        );
    }
}