import styles from './curriculum.module.css';
import Particulas from './Particulas';
import { BarChart3, Coins, Code2 } from "lucide-react";
import Link from 'next/link';

export default function CurriculumPage() {
    return(
        <section className={`${styles.curriculumSection} py-30 px-5 relative` }>
            <div className={`max-w-[1200px] mx-auto text-center`}>
                <div className={`${styles.lineaCurriculum}`}>    
                </div>

                <h2 className={`${styles.cabeceraCurriculum} md:text-[56px] text-4xl`}>
                    Datos que < br/>Resuelven
                </h2>

                <p className={styles.subCabeceraCurriculum}>
                    Bachiller en economía y desarrollador de software, especializado en econometría, 
                    finanzas y desarrollo de aplicaciones web y móviles orientadas a soluciones basadas 
                    en datos.
                </p>

                <div className={`${styles.tarjetasCurriculum} grid grid-cols-1 lg:grid lg:grid-cols-3`}>
                    <div className={styles.tarjetaCurriculum}>
                        <div className={styles.tarjetaIconoCurriculum}>
                            <BarChart3 className={styles.iconoCurriculum}/>
                        </div>

                        <h3 className={`${styles.tituloCurriculum} text-2xl font-bold uppercase tracking-[2px] mb-[15px]`}>
                            Análisis Económico
                        </h3>
                        <p className={`${styles.descripcionCurriculum} text-base leading-[1.6]`}>
                            <Link href='/proyectos' className={styles.linkDescripcion}>Análisis macroeconómico</Link> aplicado, orientado a la interpretación de indicadores económicos, 
                            evaluación de escenarios y soporte analítico para decisiones estratégicas, con manejo de grandes 
                            volúmenes de datos. <Link href='/arsenal?filter=econometria' className={styles.linkDescripcion}>Ver herramientas</Link>
                        </p>
                    </div>

                    <div className={styles.tarjetaCurriculum}>
                        <div className={styles.tarjetaIconoCurriculum}>
                            <Coins className={styles.iconoCurriculum}/>
                        </div>

                        <h3 className={`${styles.tituloCurriculum} text-2xl font-bold uppercase tracking-[2px] mb-[15px]`}>
                            Análisis Financiero
                        </h3>
                        <p className={`${styles.descripcionCurriculum} text-base leading-[1.6]`}>
                            <Link href='/proyectos' className={styles.linkDescripcion}>Análisis financiero</Link> basado en datos, con dominio
                            avanzado de herramientas de inteligencia financiera para procesamiento, modelado y visualización de
                            información a gran escala. <Link href='/arsenal?filter=finanzas' className={styles.linkDescripcion}>Ver herramientas</Link>
                        </p>
                    </div>

                    <div className={styles.tarjetaCurriculum}>
                        <div className={styles.tarjetaIconoCurriculum}>
                            <Code2 className={styles.iconoCurriculum}/>
                        </div>

                        <h3 className={`${styles.tituloCurriculum} text-2xl font-bold uppercase tracking-[2px] mb-[15px]`}>
                            Desarrollo de Software
                        </h3>
                        <p className={`${styles.descripcionCurriculum} text-base leading-[1.6]`}>
                            Desarrollo de <Link href='/proyectos'className={styles.linkDescripcion}>soluciones web y automatización de procesos</Link> mediante integración de APIs, procesamiento de datos
                            y análisis de información. Experiencia en web scraping, generación de reportes automatizados, lectura de documentos,
                            y desarrollo de soluciones basadas en modelos de inteligencia artificial. <Link href='/arsenal?filter=desarrollo' className={styles.linkDescripcion}>Ver herramientas</Link>
                        </p>
                    </div>
                </div>

            <Particulas></Particulas>
            </div>
        </section>        
    )
}