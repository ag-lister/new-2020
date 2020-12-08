import React from 'react';

const MoviePreview = (props) =>{

    const{movie, onClickFunction} = props;
  
    return(
  
        <button key={movie.title} onClick={() => {onClickFunction(movie)}}>
          <p>{movie.title}</p>
          <p>{movie.rating}</p>
          <p>{movie.releaseYear}</p>
          <img src={movie.posterUrl} alt={movie.title} height="250"></img>
        </button>
  
    )
  };

export default MoviePreview;