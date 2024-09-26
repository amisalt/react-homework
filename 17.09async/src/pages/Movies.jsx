import React from 'react'
import {useSelector} from 'react-redux'
import { MovieCard } from '../components/MovieCard'
import MyLoader from "../components/UI/MyLoader"
export function Movies() {
  const movies = useSelector(state=>state.movie.movies)
  const  loading = useSelector(state=>state.movie.loading)
  const error = useSelector(state=>state.movie.error)
  return (
    <div className='page'>
      {
        !error ? 
          loading ? (
            <MyLoader/>
          ):(
            <>{movies.map(mov=>(<MovieCard {...mov} key={mov.imdbID}/>))}</>
          )
        : (
          <h3>{error}</h3>
        )
      }
      
    </div>
  )
}
