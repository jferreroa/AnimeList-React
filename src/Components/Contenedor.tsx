import React, { useEffect, useState } from 'react'
import { Filtrado } from './Filtrado'
import { Lista } from './Lista'

export const Contenedor = () => {
    const [formatoContenedor, setFormatoContenedor] = useState<string | undefined>(undefined)
    const [generoContenedor, setGeneroContenedor] = useState<string | undefined>(undefined)
    const [popularityContenedor, setPopularityContenedor] = useState<number>(0)
    const [episodesContenedor, setEpisodesContenedor] = useState<number | undefined>(undefined)


    useEffect(() => {
        if(episodesContenedor) {
            console.log(episodesContenedor)
        }
    },[episodesContenedor])

    return (
        <div className="container">
            <h1 className="titulo">ANILIST</h1>
            <Filtrado changeFormato={setFormatoContenedor} changeGenero={setGeneroContenedor} changePopularity={setPopularityContenedor} changeEpisodios={setEpisodesContenedor} />
            <Lista format={formatoContenedor} genre ={generoContenedor} popularity={popularityContenedor} episodes ={episodesContenedor}/>
        </div>
    )
}
