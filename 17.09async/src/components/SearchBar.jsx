import React, { useState } from 'react'
import MyInput from "./UI/MyInput"
import MyButton from "./UI/MyButton"
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getMovies } from '../app/reducers/movieReducer'
export function SearchBar() {
    const dispatch = useDispatch()
    const totalPages = useSelector(state=>state.movie.totalPages)
    const [search, setSearch] = useState("")
    const [page,setPage] = useState(1)
    const [route, setRoute] = useState('/movies')
    function prevPage(){
        if(page>1 && search){
            setPage(page-1)
            dispatch(getMovies({page:page-1, search}))
        }
    }
    function nextPage(){
        if(page<totalPages && search){
            console.log(111);
            
            setPage(page+1)
            dispatch(getMovies({page:page+1, search}))
        }
    }
    function handleSearch(){
        setPage(1)
        dispatch(getMovies({page, search}))
    }
    return (
        <header>
            <nav>
                <Link to="/movies" className='link' onClick={()=>setRoute('/movies')}>Movies</Link>
                <Link to="/users" className='link' onClick={()=>setRoute('/users')}>Users</Link>
            </nav>
            {route === '/movies' && (<div className='searchbar'>
                <section>
                    <MyInput type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />
                    <MyButton onClick={handleSearch}>Search</MyButton>
                </section>
                <section>
                    <MyButton onClick={prevPage}>Prev Page</MyButton>
                    <MyButton>{page}</MyButton>
                    <MyButton onClick={nextPage}>Next Page</MyButton>
                </section>
            </div>)}
        </header>
        
    )
}
