import { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Header } from './components/Header';

// TODO: Fazer botão dinâmico
function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('')

  const clearFilters = () => {
    setSearch('')
    setYear('')
  }

  const getMovies = async (movie, movieYear) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=3295fc54&s=${movie || 'Hulk'}&y=${movieYear || ''}`)

    const data = await response.json()

    if (data?.Search) {
      setMovies(data.Search)
    } else {
      alert(`Não foi possível encontrar o filme ${movie}`)
      clearFilters()
    }
  }

  const handleClickSearch = () => {
    getMovies(search, year)
  }

  const handleClickClear = () => {
    clearFilters()
    getMovies()
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <Header />

      <section>
        <div className='search-container'>
          <div className='inputContainer'>
            <label htmlFor="search">Busca</label>

            <input
              name='search'
              value={search}
              onChange={(event) => {
                setSearch(event.target.value)
              }}
            />
          </div>

          <div className='inputContainer'>
            <label htmlFor="year">Ano</label>
            <input
              name='year'
              value={year}
              onChange={(event) => {
                setYear(event.target.value)
              }}
            />
          </div>


          {/* <button onClick={handleClickSearch}>Buscar</button> */}

          <Button onClick={handleClickSearch} text='Buscar' />

          <Button onClick={handleClickClear} text='Limpar filtros' />

        </div>

        <div className='container'>
          {movies.map((movie, index) => {
            return (
              <Card poster={movie.Poster} title={movie.Title} year={movie.Year} />
            )
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
