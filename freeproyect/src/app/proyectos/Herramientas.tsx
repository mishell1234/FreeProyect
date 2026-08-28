'use client'

export const dynamic = 'force-dynamic';

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {ProjectTool, ProjectFilter} from "@/src/types/projects";
import { projectTools } from "@/src/data/project.tools";
import styles from "./proyectos.module.css";


export default function HerramientasGridProyecto() {

    const searchParams = useSearchParams();
    const initialFilter = (searchParams.get("filter") as ProjectFilter) || "all";
    const [active, setActive] = useState<ProjectFilter>(initialFilter);
    const categories: ProjectFilter[] = ["all", "econometria", "finanzas", "desarrollo"];

    const filteredTools : ProjectTool[] =
        active === "all"
            ? projectTools
            : projectTools.filter((tool)=> tool.categories.includes(active));
    
    return(
        <>
            {/*Pestañas filtro*/}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                    <div 
                    key={category} 
                    data-category={category}
                    className={`${styles.pestaniaProyecto} Poyecto
                    ${active === category ? styles.pestaniaPoyectoActive : ""
                    }`} onClick={() => setActive(category)}>
                        {category === "all"
                            ? "Todas"
                            : category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                ))}
            </div>

        {/* Tarjetas */}
            <div className={styles.proyectoHexagonoGrid}>  
            {filteredTools.map((tool,index) => {
                const Icon = tool.icon;
                return (
                    <div className={`${styles.proyectoHexagono} md:w-[240px] w-[190px] md:h-[300px] h-[270px]`}>
                        <div className={styles.proyectoHexagonoInte}>
                            <div key={tool.id}
                            className={styles.contenidoHexagono}
                            style={{ animationDelay: `${index * 0.1}s`}}>
                                <div className={styles.proyectoIconoHexagono}>
                                    <Icon size={32} style={{ color: tool.color}}/>
                                </div>
                                <div className={styles.proyectoNombreHexagono}>
                                    {tool.name}
                                </div>
                                <div className={`${styles.proyectoDescripcionHexagono} md:text-sm text-xs`}>
                                    {tool.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })}         
            </div>
        </>
    );
}