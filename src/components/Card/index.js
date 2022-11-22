import './styles.css'

export const Card = ({ poster, title, year }) => {

  return (
    <div className="card-container">
      <img className="card-poster" src={poster} alt="poster" />

      <span className="card-title">{title}</span>

      <span className="card-year">Ano: {year}</span>
    </div>
  )
}