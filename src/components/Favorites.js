import React from 'react';

const Favorites = ({ favorites }) => {
   return (
      <div style={{ marginTop: '20px' }}>
         <h2>Favorites</h2>
         {favorites.length > 0 ? (
            favorites.map((movie) => (
               <div key={movie.imdbID} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                  <h4>{movie.Title} ({movie.Year})</h4>
               </div>
            ))
         ) : (
            <p>No favorite movies added</p>
         )}
      </div>
   );
};

export default Favorites;
