import React, { FC, useEffect, useState } from 'react'
import Select from 'react-select'


type FiltradoInputs ={
    changeFormato: (formato: string | undefined) => void,
    changeGenero: (genero: string | undefined) => void
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





export const Filtrado:FC<FiltradoInputs> = ({changeFormato, changeGenero}) => {
  const [formato, setFormato] = useState<string | undefined>(undefined)
  const [genero, setGenero] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (formato) {
      changeFormato(formato)
    }
  }, [changeFormato, formato])


  useEffect(() => {
    if(genero) {
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
    <div className="formulario">
      <Select options={FORMAT} onChange={onDropChangeFormato} />
      <Select options={GENRE} onChange={onDropChangeGenero} />

    </div>
  )
}
