import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import { imageUrl } from '../../constants/constants'

function RowPost(props) {

  const [movies, setMovies] = useState([]);

 useEffect(() => {
   axios.get(props.url)
          .then((response) => {
            console.log(response.data);
            setMovies(response.data.results)
          })
          
 }, [])


  return (
    <div className='row'>
        <h2 className="title">
            { props.title }
        </h2>
        <div className="posters">

          { movies.map((obj) =>
            <img className= { props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.poster_path}`} alt="posters" />

          ) }
           
        </div>

        
    </div>
  )
}

export default RowPost