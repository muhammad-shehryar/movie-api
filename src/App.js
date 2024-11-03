import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';

const App = () => {
   const [query, setQuery] = useState('');
   const [movies, setMovies] = useState([]);
   const [favorites, setFavorites] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const API_KEY = 'c98f1a56'; // Replace with your OMDb API key

   const searchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
         const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
         if (response.data.Response === "True") {
            setMovies(response.data.Search);
         } else {
            setError("No movies found");
         }
      } catch (error) {
         setError("API error, please try again later.");
      } finally {
         setLoading(false);
      }
   };

   const addFavorite = (movie) => {
      setFavorites((prevFavorites) => {
         if (!prevFavorites.find((fav) => fav.imdbID === movie.imdbID)) {
            return [...prevFavorites, movie];
         }
         return prevFavorites;
      });
   };

   const handleSearch = (e) => {
      e.preventDefault();
      if (query) searchMovies();
   };

   return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
         <h1>Movie Search App</h1>
         <form onSubmit={handleSearch}>
            <input
               type="text"
               placeholder="Search for a movie..."
               value={query}
               onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
         </form>
         {loading && <p>Loading...</p>}
         {error && <p style={{ color: 'red' }}>{error}</p>}
         <MovieList movies={movies} addFavorite={addFavorite} />
         <Favorites favorites={favorites} />
      </div>
   );
};

export default App;
