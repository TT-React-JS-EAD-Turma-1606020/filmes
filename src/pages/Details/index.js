import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getMovieDetailsApi } from "../../api/movie"
import { Button } from "../../components/Button"
import { Image } from "../../components/Image"
import './styles.css'

export const Details = () => {
  const [details, setDetails] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  const getMovieDetails = async () => {
    const data = await getMovieDetailsApi(id)

    if (data.Title) {
      setDetails(data)
    }
  }
  const handleBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

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

            <Button text='Voltar para a listagem' secondary onClick={handleBack} />
          </div>
        </div>

        <div className="plot">
          {details.Plot}
        </div>
      </section>
    </div>
  )
}