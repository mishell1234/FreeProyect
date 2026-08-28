export const dynamic = 'force-dynamic';

import  styles  from'./proyectos.module.css';
import HerramientasGridProyecto from './Herramientas';

export default function ProyectoPage(){
    return(
        <section className={styles.seccionProyecto}>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center mb-[80px]'>
                    <h2 className={`${styles.tituloProyecto} md:text-5xl text-3xl`}>Proyectos de investigación Económica y Desarrollo de Software</h2>
                    <p className={`${styles.subtituloProyecto} md:text-lg text-base`}>Una colección de proyectos donde combino mi formación en economía con el desarrollo de software, la estadística y la econometría para transformar datos en análisis y soluciones aplicadas.</p>
                </div>
                
                <HerramientasGridProyecto/>
                
            </div>
        </section>
    )
}