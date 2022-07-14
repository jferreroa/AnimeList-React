import { gql, useQuery } from '@apollo/client'
import styled from '@emotion/styled'
import React, { FC, useEffect, useState } from 'react'
import { Anime } from './Anime'

import { FormularioButton } from './Filtrado'
type tipo_ResultadoQuery = {
    Page: {
        pageInfo: { total: number };
        media: Array<{
            title: { english: string, native: string }
            episodes: number
            siteUrl: string
            coverImage: {
                large: string
            }
            genres: Array<string>
            format: string,
            popularity: number
        }>
    }
}

const GET_PAGE = gql`
query($page: Int, $genreIn: [String], $formatIn: [MediaFormat], $episodes: Int, $popularityGreater: Int)  {
        Page(page: $page) {
            pageInfo {
                total
            }
            media(genre_in: $genreIn, format_in: $formatIn, episodes: $episodes, popularity_greater: $popularityGreater) {
                title {
                    english
                    native
                }
                episodes
                siteUrl
                coverImage {
                    large
                }
                genres
                format
                popularity
            }
        }
    }
`


type ListaInputs = {
    format: string | undefined,
    genre: string | undefined,
    popularity: number,
    episodes: number | undefined,
}


type Characters = {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color:string,
    eye_color: string,
    birth_year: string,
    gender: string,

}



export const Lista: FC<ListaInputs> = ({ format, genre, popularity, episodes }) => {
    const [pagina, setPagina] = useState<number>(1)
    const [genero, setGenero] = useState<string | undefined>(undefined)
    const [formato, setFormato] = useState<string | undefined>(undefined)
    const [popularidad, setPopularidad] = useState<number | undefined>(undefined)
    const [episodios, setEpisodios] = useState<number | undefined>(undefined)
    const [arraySw, setArraySW] = useState<Characters[] | undefined>(undefined)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, loading, error, refetch } = useQuery<tipo_ResultadoQuery>(GET_PAGE, {
        variables: {
            page: pagina,        
            genreIn: genero,
            formatIn: formato,
            episodes: episodios,
            popularityGreater: popularidad

        },
    })

    useEffect(() => {
        if (format) {
            setFormato(format)
        }
    }, [format])

    useEffect(() => {
        if (genre) {
            setGenero(genre)
        }
    }, [genre])

    useEffect(() => {
        if (popularity) {
            setPopularidad(popularity)
        }
    }, [popularity])

    useEffect(() => {
        if (episodes) {
            setEpisodios(episodes)
        }
    }, [episodes])

    //api rest
    useEffect(() => {
        console.log("obeteniendo datos")
        const people = ""
        fetch(`https://swapi.dev/api/people${people}/`)
            .then(res => res.json())
            .then(res => {
                setArraySW(res.results)
            })
    }, [])

    useEffect(() => {
        if (arraySw) {
            console.log(arraySw)
        }
    }, [arraySw])


    return (
        <div className="listaComponent">
            <div className="lista">
                {data && data.Page.media.map((elem, index: number) => (
                    <div className="anime" key={elem.siteUrl}>
                        <Anime titleNative={elem.title.english}
                            titleEnglish={elem.title.native}
                            episodes={elem.episodes}
                            siteUrl={elem.siteUrl}
                            coverImage={elem.coverImage}
                            popularity={elem.popularity}
                            format={elem.format}
                        ></Anime>
                        {/*<div>
                            <img src={elem.coverImage.large} alt="img" className="image"></img>
                        </div>
                        {elem.title.english}
                        {!elem.title.english && elem.title.native}
                        {"  - " + elem.format}*/}
                    </div>
                ))}

            </div>
            <div className="botones">
                {pagina > 1 && <FormularioButton onClick={() => { setPagina(pagina - 1) }}>Prev</FormularioButton>}
                {pagina < data?.Page.pageInfo.total! && <FormularioButton onClick={() => { setPagina(pagina + 1) }}>Next</FormularioButton>}

            </div>
            <div className='paginado'>
                {"    PAGINA Nº " + pagina + " de " + data?.Page.pageInfo.total}
            </div>
            <DivSW className="starW">
                {arraySw?.map((elem: Characters, index:number) => (<DivChar className ="personaje-sw" key={index}>
                   <h1>{elem.name}</h1>
                   <h2>{elem.gender + ", " + elem.height + "cm"}</h2>
                   <div>{elem.birth_year + "  -  " + elem.hair_color + " " + elem.mass + "kg"}</div>
                </DivChar>))}
            </DivSW>
        </div>
    )
}


const DivSW = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const DivChar =  styled.div`
    border-radius: 5px;
    justify-content:center;
    width: 40%;
    margin: 10px;
    color: #ff002b;
    border: 2px solid pink;
    padding: 10px;
`

