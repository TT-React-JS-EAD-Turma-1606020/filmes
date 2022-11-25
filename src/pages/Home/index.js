import { useEffect, useState } from 'react';
import { getMoviesApi } from '../../api/movie';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import './styles.css';

export function Home() {
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
