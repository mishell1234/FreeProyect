'use client'
import styles from './contacto.module.css';
import React, { useState } from 'react';
import { Map, Mail, Smartphone } from 'lucide-react';

export default function ContactoPage(){
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                subject: formData.get("subject"),
                message: formData.get("message")
            }),
            headers: {
                "Content-Type" : "application/json",
            }
        });

        setLoading(false);

        if (res.ok){
            alert("Mensaje enviado correctamente");
            e.currentTarget.reset();
        }else{
            alert("Error al enviar mensaje");
        }
    };

    return(
        <section className={styles.contactoSeccion}>
            <div className={styles.contactoCabecera}>
                <h2 className={`${styles.contactoTitulo} text-3xl md:text-5xl`}>Datos que Conectan</h2>
                <p className={styles.contactoSubtitulo}>¿Quieres transformar tu idea en realidad? ¡Contácta!</p>
            </div>

            <div className='grid grid-cols-1 md:grid md:grid-cols-2 max-w-[1200px] mx-auto gap-[60px] items-start'>
                <div className={styles.infoContacto}>
                    <a href="" className={`${styles.infoItem} ${styles.linkContacto}`}>
                        <div className={styles.iconoLocacionContacto}>
                            <Map size={30}/>
                        </div>
                        <div>
                            <h4 className={styles.textoContacto}>Ubicación</h4>
                            <p className={styles.parrafoContacto}>Pueblo Libre, Lima - Perú 15084</p>
                        </div>
                    </a>

                    <a href="" className={`${styles.infoItem} ${styles.linkContacto}`}>
                        <div className={styles.iconoLocacionContacto}>
                            <Mail size={30}/>
                        </div>
                        <div>
                            <h4 className={styles.textoContacto}>Email</h4>
                            <p className={styles.parrafoContacto}>michsolmar@gmail.com</p>
                        </div>
                    </a>

                    <a href="" className={`${styles.infoItem} ${styles.linkContacto}`}>
                        <div className={styles.iconoLocacionContacto}>
                            <Smartphone size={30}/>
                        </div>
                        <div>
                            <h4 className={styles.textoContacto}>Celular</h4>
                            <p className={styles.parrafoContacto}>(+51) 984 266 136</p>
                        </div>
                    </a>
                </div>

                <form onSubmit={handleSubmit} className={styles.formularioContacto}>
                    <div className='mb-6'>
                        <label htmlFor="name" className={styles.etiquetaFormulario}>Nombre</label>
                        <input type="text" id="name" name="name" className={styles.inputContacto} required/>
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="email" className={styles.etiquetaFormulario}>Email</label>
                        <input type="email" id="email" name="email" className={styles.inputContacto} required />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="subject" className={styles.etiquetaFormulario}>Asunto</label>
                        <input type="text" id="subject" name="subject" className={styles.inputContacto} required />
                    </div>

                    <div className='mb-6'>
                        <label htmlFor="message" className={styles.etiquetaFormulario}>Mensaje</label>
                        <textarea id="message" name="message" className={styles.textareaContacto} required></textarea>
                    </div>

                    <button className={styles.botonContacto} disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
                </form>
                
            </div>
        </section>
    )
}