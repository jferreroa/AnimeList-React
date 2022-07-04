import React, { useEffect, useState } from 'react'
import { Filtrado } from './Filtrado'
import { Lista } from './Lista'

export const Contenedor = () => {
    const [formatoContenedor, setFormatoContenedor] = useState<string | undefined>(undefined)
    const [generoContenedor, setGeneroContenedor] = useState<string | undefined>(undefined)


    useEffect(() => {
        if(formatoContenedor) {
            console.log(formatoContenedor)
        }
    },[formatoContenedor])

    return (
        <div className="container">
            <h1 className="titulo">ANILIST</h1>
            <Filtrado changeFormato={setFormatoContenedor} changeGenero={setGeneroContenedor}/>
            <Lista format={formatoContenedor} genre ={generoContenedor}/>
        </div>
    )
}
