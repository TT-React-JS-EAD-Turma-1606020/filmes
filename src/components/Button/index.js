import './styles.css'

export const Button = ({ onClick, text, secondary }) => {
  return (
    <button className={`button ${secondary ? 'button-secondary' : 'button-primary'}`} onClick={onClick}>
      {text}
    </button>
  )
}