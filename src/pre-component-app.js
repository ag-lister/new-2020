import React from 'react';
import {movies} from "./movies"


function App() {

  const [movie, setMovie] = React.useState(null);

  return (
    <div>
      <h1>Movie Information</h1>
      {movies.map((movie) => {

        

        return ( 
        <>
          <div key={movie.title}>
            <button id={movie.title} onClick={() => {setMovie(movie)}}>
            <p>{movie.title}</p>
            <p>{movie.rating}</p>
            <p>{movie.releaseYear}</p>
            <img src={movie.posterUrl} alt={movie.title} height="250"></img>
            </button>
          </div>
        </>
        )
      })}
    {
      movie ?
        <div id="selectedMovie">
          <p>Title: {movie.title}</p>
          <p>Rating: {movie.rating}</p>
          <p>Director: {movie.director}</p>
          <p>Release Year: {movie.releaseYear}</p>
          <p>Description: {movie.description}</p>
          <p>Genres: {movie.categories.join(', ')}</p>
          <img src={movie.posterUrl} height="300" alt={movie.title}></img>
        </div>
        :
        <div id="selectedMovie">
          <p>Choose a movie</p>
        </div>
      

    }
    
    </div>
  );
}

export default App;
