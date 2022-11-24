import { Image } from '../Image'
import './styles.css'

export const Card = ({ poster, title, year }) => {

  return (
    <div className="card-container">
      <Image className="card-poster" src={poster} alt="poster" onClick={() => console.log('Clicou na imagem do CARD')} />

      <span className="card-title">{title}</span>

      <span className="card-year">Ano: {year}</span>
    </div>
  )
}