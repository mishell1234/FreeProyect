'use client';

import { useEffect, useState } from 'react';
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { ProjectPeriod } from '@/src/types/projects';
import { useSearchParams } from "next/navigation"; 
import styles from './proyectos.module.css';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { style } from 'framer-motion/client';

type RegistroTC = {
    fecha: string;
    compra: number;
    venta: number;
};

const periodosGrafico = [30, 60, 90, 120, 150, 180];

export default function TipoDeCambioDescriptivo() {

    const categories: ProjectPeriod[] = ["30", "60", "90", "total"];
    const searchParams = useSearchParams();
    const initialFilter = (searchParams.get("filter") as ProjectPeriod) || "30";
    const [active, setActive] = useState<ProjectPeriod>(initialFilter);
    const [periodo, setPeriodo] = useState<ProjectPeriod>("30");
    const [estadisticas, setEstadisticas] = useState<any>(null);
    const [cargando, setCargando] = useState(true)

    const [periodoGrafico, setPeriodoGrafico] = useState(30);
    const [datosGraficos, setDatosGrafico] = useState<RegistroTC[]>([]);
    const [cargandoGrafico, setCargandoGrafico] = useState(true);
    const [errorGrafico, setErrorGrafico] = useState<string | null>(null);

    const [mostrarTabla, setMostrarTabla] = useState(false);

    useEffect(() => {
            async function obtenerEstadisticas(){
                
                setCargando(true);

                const respuesta = await fetch(`/api/tc/estadistica?periodo=${periodo}`);

                const resultado = await respuesta.json();

                setEstadisticas(resultado.estadisticas);

                setCargando(false);
            }

            obtenerEstadisticas();
    }, [periodo]);

    useEffect(() => {
        async function obtenerDatosGrafico() {
            try {
                setCargandoGrafico(true);
                setErrorGrafico(null);

                const respuesta = await fetch ( `/api/tc/estadistica?tipo=grafico&periodo=${periodoGrafico}`);

                if(!respuesta.ok) {
                    throw new Error('No se pudieron obtener los datos del gráfico')
                }

                
                const resultado : { datos: RegistroTC[] } = await respuesta.json();

                setDatosGrafico(resultado.datos);
                
            } catch(error) {
                console.error('Error al cargar el gráfico:', error);
                setErrorGrafico('No fue posible cargar el gráfico.');

            }finally {
            setCargandoGrafico(false);
            }
        } 

        obtenerDatosGrafico();
    }, [periodoGrafico]);
    return(
        <MathJaxContext>
            {/*Pestañas filtro*/}

            <div className= {`${styles.tituloProyectoActivo} text-center md:text-2xl text-lg font-bold uppercase tracking-[2px] mb-[15px]`}>
                Estadística descriptiva del Tipo de Cambio USD/PEN
            </div>
                
            <div className="place-items-center my-8 md:flex grid grid-cols-2 gap-2 mx-2">

                <div className= "md:text-base text-xs col-span-2">
                    Ventana
                </div>                
                
                {categories.map((category) => (
                    <div 
                    key={category} 
                    data-category={category}
                    className={`${styles.pestaniaArsenal} 
                    ${active === category ? styles.pestaniaArsenalActive : ""
                    }`} onClick={(event) => {event.stopPropagation();setActive(category); setPeriodo(category)}}>
                        {category === "total"
                            ? "Todo"
                            : category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                ))}
            </div>

            <div className = {`${styles.gridTc}`}>

                <div className = {styles.cardMeanTc}>

                    <div className={`${styles.tituloMeanTc} md:text-lg text-[14px]`}>
                        <MathJax>
                            {"\\(\\bar{x}_{compra}\\)"}
                        </MathJax>
                    </div>

                    <div className={`${styles.valorMeanTc} md:text-base text-[10px] text-center`}>
                        {cargando? "Calculando..." : estadisticas?.compra?.media?.toFixed(4) ?? "Sin datos"}
                    </div>

                </div>

                <div className = {styles.cardMeanTc}>

                    <div className={`${styles.tituloMeanTc} md:text-lg text-[14px]`}>
                        <MathJax>
                            {"\\(\\bar{x}_{venta}\\)"}
                        </MathJax>
                    </div>

                    <div className={`${styles.valorMeanTc} md:text-base text-[10px] text-center`}>
                        {cargando? "Calculando..." : estadisticas?.venta?.media?.toFixed(4) ?? "Sin datos"}
                    </div>

                </div>
            </div>
            
            <section className="mx-4 mt-6 w-full rounded-2xl border border-cyan-500/20 bg-[#0b1018] p-4 md:p-6">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h2 className="text-lg font-semibold text-white">
                            Evolución del tipo de cambio
                        </h2>
                        <p className="mt-1 text-md text-gray-400">
                            Compra y venta · USD/PEN
                        </p>
                    </div>

                    <select
                        value={periodoGrafico}
                        onChange={(event) =>
                            setPeriodoGrafico(Number(event.target.value))
                        }
                        onClick={(event) => {event.stopPropagation()}}
                        className="rounded-lg border border-cyan-500/30 bg-[#111a27] px-3 py-2 text-md text-white outline-none focus:border-cyan-400"
                        aria-label="Período del gráfico"
                    >
                        {periodosGrafico.map((cantidad) => (
                            <option key={cantidad} value={cantidad}>
                                {cantidad} registros
                            </option>
                        ))}
                    </select>
                </div>

                {cargandoGrafico ? (
                    <div className="flex h-72 items-center justify-center text-cyan-400">
                        Cargando gráfico...
                    </div>
                ) : errorGrafico ? (
                    <div className="flex h-72 items-center justify-center text-red-400">
                        {errorGrafico}
                    </div>
                ) : datosGraficos.length === 0 ? (
                    <div className="flex h-72 items-center justify-center text-gray-400">
                        No hay datos disponibles.
                    </div>
                ) : (
                    <div className="relative h-72 w-full min-w-0 max-w-full md:h-96">                        
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={datosGraficos}
                                margin={{
                                    top: 10,
                                    right: 20,
                                    left: 8,
                                    bottom: 8,
                                }}
                            >
                                <CartesianGrid
                                    stroke="#263445"
                                    strokeDasharray="3 3"
                                />

                                <XAxis
                                    dataKey="fecha"
                                    padding={{left: 5, right: 4}}
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                    tickLine={false}
                                    axisLine={{ stroke: '#334155' }}
                                    minTickGap={25}
                                    tickFormatter={(fecha: string) =>
                                        fecha.slice(5, 10)
                                    }
                                />

                                <YAxis
                                    domain={['auto', 'auto']}
                                    tick={{ fill: '#94a3b8', fontSize: 11 }}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(valor: number) =>
                                        valor.toFixed(3)
                                    }
                                    width={65}
                                />

                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#111a27',
                                        border: '1px solid #334155',
                                        borderRadius: '8px',
                                        padding: '5px 8px',
                                        fontSize: '11px',
                                        lineHeight: '1.3',
                                        color: '#fff',
                                    }}
                                    labelStyle={{
                                        color: '#cbd5e1',
                                        fontSize: '10px',
                                        marginBottom: '2px',
                                    }}
                                    itemStyle={{
                                        padding: '1px 0',
                                        fontSize: '11px',
                                    }}
                                    formatter={(valor) => Number(valor).toFixed(4)}
                                    labelFormatter={(fecha) => `Fecha: ${fecha}`}
                                    />

                                <Legend />

                                <Line
                                    type="monotone"
                                    dataKey="compra"
                                    name="Compra"
                                    stroke="#06b6d4"
                                    strokeWidth={2}
                                    dot={false}
                                    activeDot={{ r: 4 }}
                                />

                                <Line
                                    type="monotone"
                                    dataKey="venta"
                                    name="Venta"
                                    stroke="#a78bfa"
                                    strokeWidth={2}
                                    dot={false}
                                    activeDot={{ r: 4 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </section>

            <div className="mx-4 mt-4" onClick={(event) => {event.stopPropagation()}}>
                <button
                    type="button"
                    onClick={() => setMostrarTabla((anterior) => !anterior)}
                    className="w-full rounded-lg border border-cyan-500/30 bg-[#111a27] px-4 py-3 text-md font-medium text-cyan-300 transition-colors hover:border-cyan-400 hover:bg-[#172436] mx-4"
                    aria-expanded={mostrarTabla}
                    aria-controls="tabla-datos-tc"
                >
                    {mostrarTabla ? "Ocultar datos ▲" : "Ver datos de la gráfica ▼"}
                </button>

                {mostrarTabla && (
                    <div
                    id="tabla-datos-tc"
                    className="mt-4 mx-2 w-[calc(100%+1.5rem)] min-w-0 overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0b1018] md:mx-0 md:w-full"
                    >
                    <div className="border-b border-cyan-500/20 p-4">
                        <h3 className="font-semibold text-white">
                        Datos históricos del tipo de cambio
                        </h3>
                        <p className="mt-1 text-md text-gray-400">
                        {datosGraficos.length} de {periodoGrafico} registros · Compra y venta USD/PEN
                        </p>
                    </div>
                        
                    
                        <div className="mx-auto w-4/5 min-w-0 max-w-full overflow-x-auto">
                        <table className="w-full table-fixed border-collapse text-[11px] md:text-md">
                            <thead>
                            <th className="px-1 py-1 text-center md:px-2 md:py-2">
                                Fecha
                                </th>
                                <th className="px-1 py-1 text-center md:px-2 md:py-2">
                                Compra (S/)
                                </th>
                                <th className="px-1 py-1 text-center md:px-2 md:py-2">
                                Venta (S/)
                                </th>
                            </thead>

                            <tbody>
                            {[...datosGraficos].reverse().map((registro) => (
                                <tr key={registro.fecha}>
                                <td className="px-1 py-1 text-center md:px-2 md:py-2">
                                <span className="block truncate text-[9px] leading-tight min-[400px]:text-[8px] md:text-md">
                                    {registro.fecha}
                                </span>
                                </td>

                                <td className="px-1 py-1 text-center md:px-2 md:py-2">
                                    <span className="block truncate">
                                    {registro.compra.toFixed(4)}
                                    </span>
                                </td>

                                <td className="px-1 py-1 text-center md:px-2 md:py-2">
                                    <span className="block truncate">
                                    {registro.venta.toFixed(4)}
                                    </span>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>

                    </div>
                )}
                </div>
        </MathJaxContext>
    );
}