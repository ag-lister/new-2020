import React from 'react';
import {movies} from "./movies";
import MoviePreview from "./movie-preview";
import MovieDetails from "./movie-details";
import './App.css';

const movieStyles = {backgroundColor: 'LightSkyBlue'}

function App() {

  const [movie, setMovie] = React.useState(null);


  return (
    <div style={movieStyles}>
      <h1>Movie Information</h1>
      {
        movies.map((movie) => {

          return ( 
            <MoviePreview
              key={movie.title} 
              movie={movie}
              onClickFunction={setMovie}
            />
          )

        })

      }
    {
      movie ?
        <MovieDetails 
        movie={movie}
        onClickFunction={setMovie}/>
        :
        <p>Choose a movie</p>
    }
    
    </div>
  );
}

export default App;
