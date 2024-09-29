import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPhotos} from '../app/photoReducer'
export function SearchBar() {
  const dispatch = useDispatch()
  const [albumID, setAlbumID] = useState(1)
  const [numberPerPage, setNumberPerPage] = useState(50)
  const [page, setPage] = useState(1)
  function search(){
    dispatch(getPhotos({albumID, page, number:numberPerPage}))
  }
  useEffect(()=>{
    search()
  }, [])
  useEffect(()=>{
    search()
  }, [numberPerPage, page])
  return (
    <nav>
      <section>
      <p>
        <span>Album Id:</span>
        <input type="number" min={1} max={100} value={albumID} onChange={(e)=>setAlbumID(Number(e.target.value))}/>
      </p>
      <p>
        <span>Number per page:</span>
        <select value={numberPerPage} onChange={(e)=>setNumberPerPage(Number(e.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
      </p>
      </section>
      <section>
        <p>
          <button disabled={page === 1} onClick={()=>setPage(page-1)}>Prev Page</button>
          <span>{page}</span>
          <button disabled={page === 50/numberPerPage} onClick={()=>setPage(page+1)}>Next Page</button>
        </p>
      </section>
      <button onClick={search}>Search for photos</button>
    </nav>
  )
}
