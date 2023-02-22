import './App.css';
import MovieCard from './MovieCard';
import Logo from './logo.svg'
import { useEffect } from 'react';
import { useState } from 'react';

//8472085e

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=8472085e';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return(
    <div className="app">
      <h1>CauaFlix</h1>
      
      <div className="search">
        <input placeholder='Procure por filmes' onChange={(e) => setSearchTerm(e.target.value)}></input>
        <img src={Logo} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
