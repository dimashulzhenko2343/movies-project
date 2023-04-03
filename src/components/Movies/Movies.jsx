import React from "react";
import Movie from "./Movie/Movie";

function Movies(props) {
  const { films = [] } = props;

  return (
    <div className="movies">
      {films.length ? films.map(film => (
        <Movie key={film.imdbID} {...film}/>
      )) : <h4>Nothing found</h4>}
    </div>
  );
}

export default Movies;
