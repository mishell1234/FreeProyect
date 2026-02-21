export const dynamic = 'force-dynamic';

import  styles  from'./arsenal.module.css';
import HerramientasGrid from './Herramientas';

export default function ArsenalPage(){
    return(
        <section className={styles.arsenalSeccion}>
            <div className='max-w-[1200px] mx-auto'>
                <div className='text-center mb-[80px]'>
                    <h2 className={`${styles.tituloArsenal} md:text-5xl text-3xl`}>Herramientas y Tecnología</h2>
                    <p className={`${styles.subtituloArsenal} md:text-lg text-base`}>Herramientas que utilizo para el análisis econométrico y financiero, así como para el
                         desarrollo de aplicaciones web y móviles orientadas a datos y automatización.</p>
                </div>
                
                <HerramientasGrid/>
                
            </div>
        </section>
    )
}