import React from 'react';

const MovieItem = ({ movie, addFavorite }) => {
   return (
      <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
         <img src={movie.Poster} alt={movie.Title} style={{ width: '100px' }} />
         <h4>{movie.Title}</h4>
         <p><strong>Year:</strong> {movie.Year}</p>
         <button onClick={() => addFavorite(movie)}>Add to Favorites</button>
      </div>
   );
};

export default MovieItem;
