import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('https://www.omdbapi.com/?apikey=3295fc54&s=Avengers')
      .then(res => res.json())
      .then(data => {
        setMovies(data.Search)
      })
  }, [])

  return (
    <div>
      <Header />

      <nav>


        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={movie.imdbID}>{movie.Title}</li>
            )
          })}
        </ul>
      </nav>

    </div>
  );
}

export default App;
