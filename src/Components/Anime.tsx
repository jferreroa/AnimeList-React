import React, { FC, useState } from 'react'
import {InfoModal} from "./InfoModal"
type animeProps = {
  titleNative: string,
  titleEnglish: string,
  episodes: number,
  siteUrl: string,
  coverImage: {
    large: string,
  },
  popularity: number,
  format:string
}
export const Anime: FC<animeProps> = ({ titleNative, titleEnglish, episodes, siteUrl, coverImage, popularity, format }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <div onClick={() => {setShow(true)}}>
        <img src={coverImage.large} alt={"imgcover"} className="image"></img>
      </div>
      {titleEnglish}
      {!titleEnglish && titleNative}
      <InfoModal visibility={show} changeVisibility={setShow} titleEn={titleEnglish} titleNat={titleNative} format ={format} popularity={popularity} coverImg={coverImage} episodes={episodes}></InfoModal>
    </div>
  )
}
