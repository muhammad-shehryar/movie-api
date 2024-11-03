import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, addFavorite }) => {
   return (
      <div style={{ marginTop: '20px' }}>
         <h2>Search Results</h2>
         {movies.length > 0 ? (
            movies.map((movie) => (
               <MovieItem key={movie.imdbID} movie={movie} addFavorite={addFavorite} />
            ))
         ) : (
            <p>No movies found</p>
         )}
      </div>
   );
};

export default MovieList;
