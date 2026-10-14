export function calcularMedia(valores: number[]): number {
    if (valores.length === 0) return NaN;

    const suma = valores.reduce(
        (total, valor) => total + valor,
        0
    );

    return suma/valores.length;
}

export function calcularPercentil(
    valores:number[],
    percentil: number
): number {

    if (valores.length === 0) return NaN;

    const ordenados = [...valores].sort(

        (a,b) => a - b
    );

    const posicion = (ordenados.length - 1) * percentil;
    const inferior = Math.floor(posicion);
    const superior = Math.ceil(posicion);
    
    if (inferior === superior) {
        return ordenados[inferior];
    }
    const peso = posicion - inferior;

    return(
        ordenados[inferior] + (ordenados[superior] - ordenados[inferior]) * peso
    );
}

export function calcularMediana(
    valores: number[]
): number {

    return calcularPercentil(valores, 0.5)
}

export function calcularVarianza(
    valores: number[]
): number{
    if(valores.length < 2) return NaN;

    const media = calcularMedia(valores);

    const sumaCuadrados = valores.reduce(
        (total, valor) => total + Math.pow(valor - media, 2),
        0
    );

    return sumaCuadrados / (valores.length - 1);
}

export function calcularDesviacionEstandar(
    valores: number[]
): number {

    const varianza = calcularVarianza(valores);
    return Math.sqrt(varianza)

}

export function calcularEstadisticas(
    valores: number[]
){
    if(valores.length === 0) {
        return{
            n: 0,       
            minimo: NaN,
            q1: NaN,
            mediana: NaN,
            media: NaN,
            q3: NaN,
            maximo: NaN,
            varianza: NaN,
            desviacionEstandar: NaN
        };
    }
    
    const ordenados = [...valores].sort(
    (a,b)=> a- b
    );
    return {
        n: valores.length,
        minimo : ordenados[0],
        q1: calcularPercentil(
            ordenados,
            0.25
        ),
        mediana: calcularMediana(
            ordenados
        ),
        media: calcularMedia(
            valores
        ),
        q3: calcularPercentil(
            ordenados,
            0.75
        ),
        maximo: ordenados[ordenados.length - 1],

        varianza: calcularVarianza(
            valores
        ),

        desviacionEstandar:
            calcularDesviacionEstandar(
                valores
            )
    };
}

