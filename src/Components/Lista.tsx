import { gql, useQuery } from '@apollo/client'
import React, { FC, useEffect, useState } from 'react'

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
            format: string
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
    format:string | undefined,
    genre:string | undefined
}



export const Lista:FC<ListaInputs> = ({format,genre}) => {
    const [pagina, setPagina] = useState<number>(1)
    const [genero, setGenero] = useState<string | undefined>(undefined)
    const [formato, setFormato] = useState<string | undefined>(undefined)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, loading, error, refetch } = useQuery<tipo_ResultadoQuery>(GET_PAGE, {
        variables: {
            page: pagina,
            genreIn: genero,
            formatIn: formato,
            episodes : undefined

        },
    })

    useEffect(() => {
        if (format) {
            setFormato(format)
        }
    },[format])

    useEffect(() => {
        if(genre) {
            setGenero(genre)
        }
    },[genre])

    return (
        <div className="listaComponent">
            <div className="lista">
                {data && data.Page.media.map((elem, index: number) => (<div className="anime" key={index}>
                    <div>
                        <img src={elem.coverImage.large} alt="img" className="image"></img>
                    </div>
                    {elem.title.english}
                    {!elem.title.english && elem.title.native}
                    {"  - " + elem.format}
                </div>))}

            </div>
            <div className="botones">
                {pagina > 1 && <button onClick={() => { setPagina(pagina - 1) }}>Prev</button>}
                {pagina < data?.Page.pageInfo.total! && <button onClick={() => { setPagina(pagina + 1) }}>Next</button>}
                {"    PAGINA Nº " + pagina + " de " + data?.Page.pageInfo.total} 
            </div>
        </div>
    )
}
