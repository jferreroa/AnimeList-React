import React, { useEffect, useState } from 'react'
import { Filtrado } from './Filtrado'
import { Lista } from './Lista'

export const Contenedor = () => {
    const [formatoContenedor, setFormatoContenedor] = useState<string | undefined>(undefined)
    const [generoContenedor, setGeneroContenedor] = useState<string | undefined>(undefined)
    const [popularityContenedor, setPopularityContenedor] = useState<number>(0)


    useEffect(() => {
        if(popularityContenedor) {
            console.log(popularityContenedor)
        }
    },[popularityContenedor])

    return (
        <div className="container">
            <h1 className="titulo">ANILIST</h1>
            <Filtrado changeFormato={setFormatoContenedor} changeGenero={setGeneroContenedor} changePopularity={setPopularityContenedor}/>
            <Lista format={formatoContenedor} genre ={generoContenedor} popularity={popularityContenedor}/>
        </div>
    )
}
