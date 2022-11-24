import { useEffect, useState } from 'react';
import { getMoviesApi } from './api/movie';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Input } from './components/Input';

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('')

  const clearFilters = () => {
    setSearch('')
    setYear('')
  }

  const getMovies = async (movie, movieYear) => {
    const data = await getMoviesApi(movie, movieYear)

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
          <Input
            name='search'
            label='Busca'
            placeholder='Nome do filme'
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
            }}
          />

          <Input
            label='Ano'
            name='year'
            value={year}
            placeholder='Ano do filme'
            onChange={(event) => {
              setYear(event.target.value)
            }}
          />

          <Button onClick={handleClickSearch} text='Buscar' />

          <Button onClick={handleClickClear} text='Limpar filtros' secondary />
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
