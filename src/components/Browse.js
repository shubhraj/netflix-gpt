import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {

  //custom hook to fetch movies data
  useNowPlayingMovies();
  return (
    
    <div>
        <Header/>
    </div>
  )
}

export default Browse