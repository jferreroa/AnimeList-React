import React, { FC, useEffect, useState } from 'react'
import Select from 'react-select'
import styled from '@emotion/styled'

type FiltradoInputs = {
  changeFormato: (formato: string | undefined) => void,
  changeGenero: (genero: string | undefined) => void,
  changePopularity: (popularity: number) => void,
  changeEpisodios:(episodios: number|undefined) => void;
}



const FORMAT = [
  { value: 'TV', label: 'TV' },
  { value: 'MOVIE', label: 'MOVIE' },
  { value: 'OVA', label: 'OVA' }
]

const GENRE = [
  { value: 'Action', label: 'Action' },
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Romance', label: 'Romance' },
  { value: 'Supernatural', label: 'Supernatural' },
  { value: 'Sci-Fi', label: 'Sci-Fi' },
  { value: 'Drama', label: 'Drama' },
  { value: 'Ecchi', label: 'Ecchi' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Mecha', label: 'Mecha' },
  { value: 'Horror', label: 'Horror' },

]





export const Filtrado: FC<FiltradoInputs> = ({ changeFormato, changeGenero, changePopularity, changeEpisodios }) => {
  const [formato, setFormato] = useState<string | undefined>(undefined)
  const [genero, setGenero] = useState<string | undefined>(undefined)
  const [popularity, setPopularity] = useState<number>(0)
  const [episodes, setEpisodes] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (formato) {
      changeFormato(formato)
    }
  }, [changeFormato, formato])


  useEffect(() => {
    if (genero) {
      changeGenero(genero)
    }
  }, [changeGenero, genero])


  const onDropChangeFormato = (value: any) => {
    setFormato(value.value)
  }
  const onDropChangeGenero = (value: any) => {
    setGenero(value.value)
  }


  return (
    <div className="formulario" id={"sw"}>
      <Select options={FORMAT} onChange={onDropChangeFormato} />
      <Select options={GENRE} onChange={onDropChangeGenero} />
      <div className="input-popularidad">
        <FormularioInput type="text" placeholder="POPULARIDAD MAYOR A: " onChange={(e) => setPopularity(Number(e.target.value))}></FormularioInput>
        <FormularioButton onClick={() => { 
          //FALTA ESTILIZAR
          changePopularity(popularity)
        }}>GO</FormularioButton>
      </div>
      <div className = 'input-episodios'>
        <FormularioInput type="text" placeholder="EPISODIOS: " onChange={(e) => setEpisodes(Number(e.target.value))}></FormularioInput>
        <FormularioButton onClick={() => {
          changeEpisodios(episodes)
        }}>GO</FormularioButton>
      </div>

    </div>
  )
}


const FormularioInput =  styled.input `
  background-color: white;
  color:black;
  border-radius: 5px;
  width: 95%;
  height: 30px;
  margin: 0px;
  text-align: center;
`

const FormularioButton = styled.button`
  background-color: white;
  color:black;
  height: 38px;
  border-radius: 5px;
  width: 87px;
  &:hover{
    cursor: pointer;
  }
`