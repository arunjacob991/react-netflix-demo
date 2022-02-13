import React, { useEffect, useState } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'

import axios from '../../axios'
import './Banner.css'


function Banner() {

const [movie, setMovie] = useState()

const [isLoading, setLoading ] = useState(true);

 useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
          .then((response) => {
            console.log(response.data);
            setMovie(response.data.results[7])
            setLoading(false)
          })
 }, [])

 function renderHtml(){
   return <div className='banner'
   style={{backgroundImage: `url(${movie ? imageUrl+movie.poster_path : ""})`}}>
  <div className="content">
      <h1 className="title">{ movie ? movie.title ? movie.title: "No Name...hihihi" : ""}</h1>
      <div className="banner_buttons">
          <button className="button">
              Play
            </button>
          <button className="button">My List</button>
      </div>


      <p className="description">
          { movie ? movie.overview : ""}
      </p>
  </div>
</div>
 }

 function showLoading(){
   return <h1>Loading....</h1>
 }
  return
    
    if (isLoading) {
      return <showLoading />;
    }
    return <renderHtml />;
  }


export default Banner