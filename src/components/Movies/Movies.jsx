import React from "react";
import Movie from "./Movie/Movie";

function Movies(props) {
  const { films } = props;

  return (
    <div className="movies">
      {films.map(film => (
        <Movie key={film.imdbID} {...film}/>
      ))}
    </div>
  );
}

export default Movies;
