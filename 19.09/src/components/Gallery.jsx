import React from 'react'
import { PhotoCard } from './PhotoCard'
import {useSelector} from 'react-redux'
import MyLoader from "./MyLoader"
export function Gallery() {
  const photosDisplay = useSelector(state=>state.photo.photosDisplay)
  const loading = useSelector(state=>state.photo.loading)
  const error = useSelector(state=>state.photo.error)
  return (
    <div className='gallery'>
      {error ? (
        <p>{error}</p>
      ) : loading ? (
        <MyLoader/>
      ) : (
        <>{photosDisplay.map(photo=>(<PhotoCard  key={photo.id} {...photo}/>))}</>
      )
      }
    </div>
  )
}
