import { useEffect, useState } from "react"
import { getMovieDetailsApi } from "../../api/movie"
import { Image } from "../../components/Image"
import './styles.css'

export const Details = () => {
  const [id, setId] = useState()
  const [details, setDetails] = useState()

  const getMovieDetails = async () => {
    const data = await getMovieDetailsApi(id)

    if (data.Title) {
      setDetails(data)
    }
  }

  useEffect(() => {
    if (id) {
      getMovieDetails()
    } else {
      // eslint-disable-next-line no-restricted-globals
      const arr = location.pathname.split('/')

      setId(arr[2])
    }
  }, [id])

  if (!details) {
    return (
      <div className="loading-container" >
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <section className="details-container">
        <div className="main-container">
          <Image className='poster' alt='poster' src={details.Poster} />

          <div className="infos-container">
            <h2 className="title">{details.Title}</h2>

            <ul className="infos">
              <li>Lançamento: {details.Released}</li>

              <li>Gênero: {details.Genre}</li>

              <li>Atores: {details.Actors}</li>

              <li>Pontuação IMDB: {details.imdbRating} - {details.imdbVotes}</li>
            </ul>
          </div>
        </div>

        <div className="plot">
          {details.Plot}
        </div>
      </section>
    </div>
  )
}