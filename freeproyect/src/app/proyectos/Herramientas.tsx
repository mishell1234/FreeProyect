'use client'

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {ProjectTool, ProjectFilter} from "@/src/types/projects";
import { projectTools } from "@/src/data/project.tools";
import  Arrows  from "@/src/components/Arrows/Arrows";
import styles from "./proyectos.module.css";


export default function HerramientasGridProyecto() {

    const searchParams = useSearchParams();
    const initialFilter = (searchParams.get("filter") as ProjectFilter) || "all";
    const [active, setActive] = useState<ProjectFilter>(initialFilter);
    const [activeProject, setActiveProject] = useState<string | null>(null);
    const [vistaIndex, setVistaIndex] = useState(0);
    const categories: ProjectFilter[] = ["all", "econometria", "finanzas", "desarrollo"];

    const filteredTools : ProjectTool[] =
        active === "all"
            ? projectTools
            : projectTools.filter((tool)=> tool.categories.includes(active));

    const usarGridActivo =
        filteredTools.length >= 2 && activeProject !== null;
    
    return(
        <>
            {/*Pestañas filtro*/}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                    <div 
                    key={category} 
                    data-category={category}
                    className={`${styles.pestaniaProyecto} Poyecto
                    ${active === category ? styles.pestaniaProyectoActive : ""
                    }`} onClick={() => {setActive(category); setActiveProject(null) ; setVistaIndex(0);
                    }}>
                        {category === "all"
                            ? "Todas"
                            : category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                ))}
            </div>

        {/* Tarjetas */}
            <div className={`${styles.proyectoHexagonoGrid} ${usarGridActivo ? styles.gridProyectoActivo : ""}`}>  
            {filteredTools.map((tool,index) => {
                const Icon = tool.icon;
                const VistaActual = vistaIndex === 0 ? tool.dashboard : tool.vistas?.[vistaIndex - 1]?.componente;                 
                const isCentral = tool.id === activeProject;
                               
                
                return (
                    <div key={tool.id} className={`${styles.proyectoHexagono} ${isCentral ? styles.hexagonoCentral : styles.hexagonoSecundario} ${isCentral ? styles.hexagonoCentralActivo : activeProject !== null ? styles.hexagonoSecundarioActivo : ""}`} onClick={() => {if (!tool.dashboard) return; if (activeProject === tool.id) { setActiveProject(null); setVistaIndex(0)} else { setActiveProject(tool.id); setVistaIndex(0)};}}>
                        <div className={styles.proyectoHexagonoInte}>
                            {isCentral && VistaActual ? (<VistaActual />) :
                                (<div
                                className={styles.contenidoHexagono}
                                style={{ animationDelay: `${index * 0.1}s`}}>
                                    <div className={styles.proyectoIconoHexagono}>
                                        <Icon size={`${usarGridActivo? 28 : 36}`} style={{ color: tool.color}}/>
                                    </div>
                                    <div className={`${styles.proyectoNombreHexagono} md:text-lg text-xs`}>
                                        {tool.name}
                                    </div>
                                    <div className={`${styles.proyectoDescripcionHexagono} md:text-sm text-[10px]`}>
                                        {`${usarGridActivo ? tool.description1 : tool.description}`}
                                    </div>
                                </div>
                                )
                            }
                            {isCentral && (<Arrows onPrevious={() => {setVistaIndex(prev => prev - 1)}} onNext={() => {setVistaIndex(prev => prev + 1)}} showPrevious={vistaIndex > 0} showNext={vistaIndex < (tool.vistas?.length ?? 0)}/>)}
                        </div>
                    </div>
                    );
                })}         
            </div>
        </>
    );
}