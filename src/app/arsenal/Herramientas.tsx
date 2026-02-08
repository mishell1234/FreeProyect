'use client'

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {Tool, Filter} from "@/src/types/arsenal";
import { arsenalTools } from "@/src/data/arsenal.tools";
import styles from "./arsenal.module.css";


export default function HerramientasGrid() {

    const searchParams = useSearchParams();
    const initialFilter = (searchParams.get("filter") as Filter) || "all";
    const [active, setActive] = useState<Filter>(initialFilter);
    const categories: Filter[] = ["all", "econometria", "finanzas", "desarrollo"];

    const filteredTools : Tool[] =
        active === "all"
            ? arsenalTools
            : arsenalTools.filter((tool)=> tool.categories.includes(active));
    
    return(
        <>
            {/*Pestañas filtro*/}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                    <div 
                    key={category} 
                    data-category={category}
                    className={`${styles.pestaniaArsenal} 
                    ${active === category ? styles.pestaniaArsenalActive : ""
                    }`} onClick={() => setActive(category)}>
                        {category === "all"
                            ? "Todas"
                            : category.charAt(0).toUpperCase() + category.slice(1)}
                    </div>
                ))}
            </div>

        {/* Tarjetas */}
            <div className={styles.arsenalHexagonoGrid}>  
            {filteredTools.map((tool,index) => {
                const Icon = tool.icon;
                return (
                    <div className={`${styles.arsenalHexagono} md:w-[240px] w-[190px] md:h-[300px] h-[270px]`}>
                        <div className={styles.arsenalHexagonoInte}>
                            <div key={tool.id}
                            className={styles.contenidoHexagono}
                            style={{ animationDelay: `${index * 0.1}s`}}>
                                <div className={styles.arsenalIconoHexagono}>
                                    <Icon size={32} style={{ color: tool.color}}/>
                                </div>
                                <div className={styles.arsenalNombreHexagono}>
                                    {tool.name}
                                </div>
                                <div className={`${styles.arsenalDescripcionHexagono} md:text-sm text-xs`}>
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