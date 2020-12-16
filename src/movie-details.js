import React from 'react';

const MovieDetails = (props) => {

    const{movie, onClickFunction} = props;
  
    return(
      <div id="selectedMovie">
            <p>Title: {movie.title}</p>
            <p>Rating: {movie.rating}</p>
            <p>Director: {movie.director}</p>
            <p>Release Year: {movie.releaseYear}</p>
            <p>Description: {movie.description}</p>
            <p>Genres: {movie.categories.join(', ')}</p>
            <img src={movie.posterUrl} height="300" alt={movie.title}></img>
            <br></br>
            <button onClick={() => {onClickFunction(null)}}><p>Clear movie choice</p></button>
      </div>
       
    )
  
  
  };

export default MovieDetails;