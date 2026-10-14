import styles from './proyectos.module.css'

export default function TipoDeCambioDashboard() {
    return (
        <div>
            <div className= {`${styles.tituloProyectoActivo} text-center md:text-2xl text-lg font-bold uppercase tracking-[2px] mb-[15px]`}>
            Dashboard del tipo de cambio
            </div>
            <div className={`${styles.contedorTc} mx-8`}>
                <p className= {`${styles.proyectoDescripcionHexagono } text-sm md:text-base indent-8`}>
                    Este proyecto crea un sistema completo para analizar y manejar información sobre el tipo de cambio nominal USD/PEN. La estructura de datos se basa en una serie de datos históricos obtenidos de las estadísticas oficiales del Banco Central de Reserva del Perú (BCRP), el cual proporciona datos diarios y herramientas para conectarse con otras aplicaciones (Banco Central de Reserva del Perú [BCRP], s. f. ).Esta serie histórica es fundamental para el análisis, ya que permite observar cómo han cambiado con el tiempo los valores de compra y venta, sus fluctuaciones y sus principales características estadísticas.
                    <br/>
                    <br/>La información del pasado se actualiza con un sistema programado que añade datos recientes. Para esto, se integró con la API REST de Decolecta, que ofrece un servicio para consultar el tipo de cambio SUNAT por fecha, y que puede dar información sobre el precio de compra, el precio de venta, las monedas de referencia y la fecha de esa información (Decolecta, s. f. ). La comunicación entre la aplicación y el servicio externo se maneja a través de solicitudes HTTP, procesamiento de respuestas y modificación de los datos para que se integren adecuadamente en la estructura del proyecto.
                    <br/>
                    <br/>Desde el punto de vista de desarrollo de software, el sistema fue creado utilizando Next. js y TypeScript, empleando componentes de React para hacer una interfaz interactiva, y separando la parte que muestra los datos, la lógica de consulta y el procesamiento de información. Los datos se guardan usando Supabase y PostgreSQL, lo que facilita el almacenamiento, la consulta y la organización de la serie temporal para análisis futuros. También se creó una ruta API dentro de Next. js que funciona como un intermediario entre el proveedor de datos externo y la base de datos, lo que ayuda a desacoplar la interfaz de usuario del proceso de obtención de datos.
                    <br/>
                    <br/>La dificultad del proyecto no solo está en mostrar el tipo de cambio, sino en formar un proceso completo de datos: obtener información histórica, limpiar y normalizar los registros, organizar variables temporales, almacenar datos de manera continua, integrar con una API externa, automatizar actualizaciones y presentar el análisis a través de un panel interactivo. Esta estructura convierte una serie estadística en un sistema de información que se enfoca en el análisis económico, integrando herramientas de desarrollo web, gestión de bases de datos, estadística básica y análisis de series temporales.
                </p>
            </div>
        </div>
    )
}