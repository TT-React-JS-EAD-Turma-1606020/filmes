import { useNavigate } from 'react-router-dom'
import { Image } from '../Image'
import './styles.css'

export const Card = ({ poster, title, year, id }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/filme/${id}`)
  }

  return (
    <div className="card-container" onClick={handleNavigate}>
      <Image className="card-poster" src={poster} alt="poster" onClick={() => console.log('Clicou na imagem do CARD')} />

      <span className="card-title">{title}</span>

      <span className="card-year">Ano: {year}</span>
    </div>
  )
}