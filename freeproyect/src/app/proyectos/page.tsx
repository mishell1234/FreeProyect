import styles from './proyectos.module.css'

export default function Proyectos() {
    return(
        <section className= {styles.seccionProyectos}>
            <div className="text-center mb-[80px]">
                <h2 className={`${styles.tituloProyectos} md:text-5xl text-2xl`}>Proximamente</h2>            
                <p className= {`${styles.subtituloProyectos} md:text-lg text-sm>`}>Proyectos orientados al análisis economicos,
                    financiero y tambien desarrollo de softwar
                </p>
            </div>
        </section>
    )
}