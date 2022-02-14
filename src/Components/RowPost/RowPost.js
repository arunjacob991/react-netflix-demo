import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { API_KEY, imageUrl } from '../../constants/constants'

function RowPost() {

  const [movies, setMovies] = useState([]);

 useEffect(() => {
   axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
          .then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
          })
          
 }, [])


  return (
    <div className='row'>
        <h2 className="title">
            Title
        </h2>
        <div className="posters">

          { movies.map((obj) =>
            <img className='poster' src={`${imageUrl + obj.poster_path}`} alt="posters" />

          ) }
           
        </div>

        
    </div>
  )
}

export default RowPost