"use client";
import styles from './Header.module.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header(){
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    return (
        <header className={`${styles.header} w-full fixed top-0 z-[1000]`}>
             <nav className="flex justify-between items-center max-w-[1400px]
              mx-auto px-3 py-5 select-none">
                <Link href="/" className="flex items-center relative no-underline">
                    <div className="w-[45px] h-[45px] relative mr-[15px]">
                        <div className={styles.logowp}>
                        
                        </div>

                    </div>
                    <span className="flex flex-wrap tracking-widest text-2xl font-black">
                        <span className={`${styles.work}`}>WORK</span>
                        <span className={`${styles.profile}`}>PROFILE</span>
                    </span>
                </Link>

                {/* Menú desktop */}
                <ul className="hidden md:flex items-center list-none">
                    <li className="">
                        <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}>Inicio</Link>
                    </li>
                    <li className="">
                        <Link href="/curriculum" className={`${styles.navLink} ${isActive("/curriculum") ? styles.navLinkActive : ""}`}>Resumen</Link>
                    </li>
                    <li className="">
                        <a href="/proyectos" className={`${styles.navLink} ${isActive("/proyectos") ? styles.navLinkActive : ""}`}>Proyectos</a>
                    </li>
                    <li className="">
                        <Link href="/arsenal" className={`${styles.navLink} ${isActive("/arsenal") ? styles.navLinkActive : ""}`}>Herramientas</Link>
                    </li>
                    <li className="">
                        <a href="/contacto" className={`${styles.navLink} ${isActive("/contacto") ? styles.navLinkActive : ""}`}>Contacto</a>
                    </li>
                </ul>

                    {/* Sandwivch / cruz */}
                    <div className="flex flex-col md:hidden cursor-pointer mr-5 select-none" onClick={()=>setIsOpen(!isOpen)}>
                        <span className={`${styles.menuToggleSpan} ${isOpen ? styles.menuToggleSpanActive1 : ""}`} ></span>
                        <span className={`${styles.menuToggleSpan} ${isOpen ? styles.menuToggleSpanActive2 : ""}`} ></span>
                        <span className={`${styles.menuToggleSpan} ${isOpen ? styles.menuToggleSpanActive3 : ""}`}></span>
                    </div>
                </nav>

                {/* Menú móvil */}
                <div className={`md:hidden fixed top-21 w-full bg-black z-40 transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <ul className={`flex gap-10 flex-col items-center list-none py-10`} onClick={()=> setIsOpen(!isOpen)}>
                        <li className="">
                            <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}>Inicio</Link>
                        </li>
                        <li className="">
                            <Link href="/curriculum" className={`${styles.navLink} ${isActive("/curriculum") ? styles.navLinkActive : ""}`}>Resumen</Link>
                        </li>
                        <li className="">
                            <a href="/proyectos" className={`${styles.navLink} ${isActive("/proyectos") ? styles.navLinkActive : ""}`}>Proyectos</a>
                        </li>
                        <li className="">
                            <Link href="/arsenal" className={`${styles.navLink} ${isActive("/arsenal") ? styles.navLinkActive : ""}`}>Herramientas</Link>
                        </li>
                        <li className="">
                            <a href="/contacto" className={`${styles.navLink} ${isActive("/contacto") ? styles.navLinkActive : ""}`}>Contacto</a>
                        </li>
                    </ul>
                </div>
        </header>
    )
}