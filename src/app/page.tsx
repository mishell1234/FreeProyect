'use client';
import "@/src/app/globals.css";
import { useState } from "react";
import { easeIn, easeInOut, motion } from "framer-motion";
import { GraduationCap , Briefcase , Users, Download } from 'lucide-react';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
      <section className="seccionInicio">
        <div className="text-center mb-[80px]">
            <h2 className="tituloInicio md:text-5xl text-2xl">Mi Perfil</h2>            
            <p className="subtituloInicio md:text-lg text-sm">Economista y desarrollador de software con enfoque analítico,
              orientado a datos y automatización de procesos. <a className="linkInicio md:text-sm text-xs" href="/MishellSolis_cv.pdf" download="MishellSolis_cv.pdf" rel="nofollow" target="_blank">Descargar curriculum</a></p>
        </div>

        <div className={`gridInicio ${activeCard !== null ? "active" : ""}`}>
            
            <motion.div 
              layout 
              transition={{ type: "tween",stiffness: 100 ,damping:100 ,duration: 0.2, ease:"easeInOut"}}
              className={`cardInicio ${activeCard === 1 ? "active" : ""}`} 
              onClick={() => setActiveCard( activeCard === 1 ? null : 1) }>
                <div className={`${activeCard === 1 ? "descripcionDetalleActivo" : ""}`}>
                  <div className={`${activeCard === 1 ? "contenedorIconActive" : ""}`}>
                    <div className="iconInicio">🚀</div>
                  </div>

                  <div className="">                
                    <div className="etiquetaInicio">SOBRE MI</div>
                    <p className={`descripcionInicio ${activeCard === 1 ? "active" : ""}`}>Nací en Lima, Perú, en 1994. Actualmente vivo en Pueblo Libre y me apasiona el análisis estadístico aplicado
                    y el desarrollo de software.</p>
                    <p className={`descripcionInicioDetalle ${activeCard === 1 ? "active" : ""}`}>Nací en Lima, Perú, en 1994. Actualmente vivo en Pueblo Libre y me apasiona el análisis estadístico aplicado
                    y el desarrollo de software como herramientas para entender problemas reales y
                    construir soluciones útiles.<br/>
                    Me considero una persona curiosa, analítica y comprometida con aprender continuamente.<br/>
                    Disfruto  de trabajar con datos, optimizar procesos y transformar información en decisiones claras.<br/>
                    Por otro lado, me gustan los videojuegos, salir a manejar bicicleta, el cine y la música, actividades que me ayudan a mantener el equilibrio y la creatividad en 
                    mi día a día.
                    </p>
                  </div>
                </div>
            </motion.div>
            
            <motion.div 
              layout
              transition={{ type: "tween",stiffness: 100 ,damping:100 ,duration: 0.2, ease:"easeInOut"}}
              className={`cardInicio ${activeCard === 2 ? "active" : ""}`} 
              onClick={() => setActiveCard( activeCard === 2 ? null : 2) }>
                <div className={`${activeCard === 2 ? "descripcionDetalleActivo" : ""}`}>
                  <div className={`${activeCard === 2 ? "contenedorIconActive" : ""}`}>
                    <div className="iconInicio"><GraduationCap size={50}/></div>
                  </div>

                  <div className="">                  
                    <div className="etiquetaInicio">Mi Formación Academica</div>
                    <p className={`descripcionInicio ${activeCard === 2 ? "active" : ""}`}>Bachiller en Economía por la Universidad Nacional Mayor de San Marcos, con enfoque en análisis de datos y actualmente estudiante técnico de desarrollo de software.</p>
                    <p className={`descripcionInicioDetalle ${activeCard === 2 ? "active" : ""}`}>Bachiller en Economía por la Universidad Nacional Mayor de San Marcos, con enfoque en análisis de datos.<br/>
                    Actualmente me encuentro cursando la carrera técnica de Desarrollo de Software en ISIL (Instituto San Ignacio de Loyola), además de haber llevado diversos cursos complementarios en Coursera relacionados con procesos, análisis de datos e inteligencia artificial.<br/>
                    He complementado mi formación con estudios técnicos y cursos especializados, entre ellos el curso de Power BI (nivel intermedio) y el curso de Excel Avanzado con Macros en VBA, ambos realizados en InfoPUCP (Pontificia Universidad Católica del Perú).<br/>
                    Mi enfoque profesional combina el análisis económico con el uso de herramientas tecnológicas para transformar datos en información útil para la toma de decisiones.
                    </p>
                  </div>
                </div>
            </motion.div>
            
            <motion.div 
              layout
              transition={{ type: "tween",stiffness: 100 ,damping:100 ,duration: 0.2, ease:"easeInOut"}}
              className={`cardInicio ${activeCard === 3 ? "active" : ""}`} 
              onClick={() => setActiveCard( activeCard === 3 ? null : 3) }>
                <div className={`${activeCard === 3 ? "descripcionDetalleActivo" : ""}`}>
                  <div className={`${activeCard === 3 ? "contenedorIconActive" : ""}`}>
                    <div className="iconInicio"><Briefcase size={50}/></div>
                  </div>

                  <div className="">
                    <div className="etiquetaInicio">Mi Experiencia</div>
                    <p className={`descripcionInicio ${activeCard === 3 ? "active" : ""}`}>Elaboré estados financieros, balances y análisis de proyectos usando TIR, VAN e indicadores estratégicos. Automaticé la recolección y procesamiento de datos con Node.js, Puppeteer, Python y Power BI. Desarrollé scripts con IA para detección facial y lectura masiva de PDFs.</p>
                    <p className={`descripcionInicioDetalle ${activeCard === 3 ? "active" : ""}`}>Durante mi tiempo en Inmobiliaria y Constructora OHF S.A.C. (Abril 2024 – Junio 2024), trabajé como economista y analista de proyectos empresariales, elaborando estados financieros, balances y puntos de equilibrio para evaluar proyectos. Participé en el desarrollo de planes
                    de negocio aplicando el modelo Canvas y automatizando la recolección y análisis de información mediante Node.js y Puppeteer, optimizando la obtención de datos relevantes. También realicé análisis financieros con TIR, VAN e indicadores estratégicos para apoyar la toma de decisiones.<br/>
                    En Grupo Deltron S.A. como Auxiliar de Cobranzas (Agosto 2024 – Marzo 2025), gestioné el registro de abonos de clientes, conciliaciones bancarias y pagos de documentos, aplicando notas de crédito y compensaciones. Automatizé reportes de gestión de cobranzas usando VBA en Excel y propuse mejoras tecnológicas con JavaScript y HTML,
                    agilizando procesos internos. Además, trabajé con plataformas digitales y sistemas internos como Oracle, asegurando precisión en el registro y control financiero de la empresa. <br/>
                    Posteriormente, fui trasladado al área de Calidad (Abril 2025 – Septiembre 2025) debido a mi desempeño destacado, donde continué automatizando reportes y procesos con Power BI y Python. Desarrollé scripts para detección facial con cámaras de seguridad y para la lectura masiva de PDFs, clasificando automáticamente cientos de archivos. 
                    Implementé dashboards integrales que facilitaron la toma de decisiones basada en datos y realicé análisis de irregularidades en asignación de créditos, ayudando a prevenir riesgos financieros y optimizando la gestión empresarial. <br/>
                    </p>
                  </div>
                </div>
            </motion.div>
            
            <motion.div 
              layout
              transition={{ type: "tween",stiffness: 100 ,damping:100 ,duration: 0.2, ease:"easeInOut"}}              className={`cardInicio ${activeCard === 4 ? "active" : ""}`} 
              onClick={() => setActiveCard( activeCard === 4 ? null : 4) }>
                <div className={`${activeCard === 4 ? "descripcionDetalleActivo" : ""}`}>
                  <div className={`${activeCard === 4 ? "contenedorIconActive" : ""}`}>
                    <div className="iconInicio"><Users size={50}/></div>
                  </div>

                  <div className="">
                    <div className="etiquetaInicio">Mis Habilidades Blandas</div>
                    <p className={`descripcionInicio ${activeCard === 4 ? "active" : ""}`}>Puntual, responsable y resiliente, con pensamiento analítico, comunicación clara, proactividad y adaptabilidad para resolver problemas y trabajar en equipo.</p>
                    <p className={`descripcionInicioDetalle ${activeCard === 4 ? "active" : ""}`}>Soy puntual, responsable y resiliente, siempre cumpliendo con los plazos y enfrentando desafíos con actitud positiva. Me comunico de manera clara y colaboro eficazmente en equipos multidisciplinarios. Tengo pensamiento analítico y atención al detalle, aplicando soluciones 
                      eficientes a problemas complejos. Además, soy proactivo y adaptable, aprendiendo rápidamente nuevas tecnologías y metodologías.</p>
                  </div>
                </div>
            </motion.div>

            <div className="descargaInicio">
               
            </div>

        </div>
      </section>
    </>
  );
}
