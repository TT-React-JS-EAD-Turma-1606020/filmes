import { useEffect, useState } from 'react';
import { getMoviesApi } from '../../api/movie';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import './styles.css';

export function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  const [year, setYear] = useState('2010')
  const [page, setPage] = useState(1)

  const clearFilters = () => {
    setSearch('')
    setYear('')
  }

  const getMovies = async (movie, movieYear, batatta) => {
    const data = await getMoviesApi(movie, movieYear, batatta)

    if (data?.Search) {
      setMovies(data.Search)
    } else {
      alert(`Não foi possível encontrar o filme ${movie}`)
      clearFilters()
    }
  }

  const handleClickSearch = () => {
    getMovies(search, year, 1)
    setPage(1)
  }

  const handleClickClear = () => {
    clearFilters()
    setPage(1)
    getMovies()
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePrevPage = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    getMovies(search, year, page)
  }, [page])

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
              <Card poster={movie.Poster} title={movie.Title} year={movie.Year} id={movie.imdbID} />
            )
          })}
        </div>
      </section>

      <div className='footer'>
        <Button text='Anterior' secondary onClick={handlePrevPage} />


        <strong>{page}</strong>

        <Button text='Próximo' secondary onClick={handleNextPage} />
      </div>
    </div>
  );
}
