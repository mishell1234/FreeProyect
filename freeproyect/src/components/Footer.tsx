import  Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={`${styles.footer} pt-10 pb-5 px-5 border-t relative border-[#3a3a3a]`}>
            <div className='mx-auto mb-[40px] grid grid-cols-1 md:grid-cols-[2fr_1fr] md:text-left text-center gap-[40px] max-w-[1200px]'>
                <div className='flex flex-col gap-[20px]'>
                    <div className='flex items-center mb-[15px]'>
                        <div className="w-[45px] h-[45px] relative mr-[15px]">
                            <div className="flex w-full h-full relative items-center justify-center">
                                <div className="absolute"></div> {/* aquí va la animación del logo, CSS */}
                            </div>
                        </div>
                        <span className="flex flex-wrap tracking-widest text-2xl font-black">
                            <span className={`${styles.work}`}>WORK</span>
                            <span className={`${styles.profile}`}>PROFILE</span>
                        </span>
                    </div>
                    <p className={styles.footerDescription}>
                        “Economista y desarrollador de software. Transformando datos en soluciones.”
                    </p>
                    <div className='flex gap-[15px]'>
                        <Link href="https://www.linkedin.com/in/mishell-anthony-solis-marquez-824399230/" className={styles.socialIcon} rel='nofollow' target='_blank'>in</Link>
                        <a href="https://wa.me/51984266136?text=Hola%20Mishell!,%20quiero%20contactarte" className={styles.socialIcon} rel='nofollow' target='_blank'>wa</a>
                    </div>
                </div>

                <div className=''>
                    <h4 className={styles.footerSectionTi}>Servicios</h4>
                    <div className='flex flex-col gap-5'>
                        <Link href="/proyectos" className={styles.footerLinks}>Desarrollador Web</Link>
                        <Link href="/proyectos" className={styles.footerLinks}>Desarrollador de Aplicaciones</Link>
                        <Link href="/proyectos" className={styles.footerLinks}>Análisis Económico</Link>
                        <Link href="/proyectos" className={styles.footerLinks}>Análisis Financiero</Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 md:flex-row md:gap-0 md:flex md:text-left text-center pt-[30px] border-t border-[#3a3a3a] justify-between items-center max-w-[1200px] mx-auto'>
                <div className={styles.footerBottom}>
                    © 2026 WORK PROFILE. Todos los derechos reservados.
                </div>
                <div className={styles.footerCredits}>
                    Diseño original: <a className={styles.footerCreditsA} href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a> 
                </div>
            </div>            
        </footer>
    )
}