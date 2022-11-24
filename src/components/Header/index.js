import { Image } from '../Image'
import './styles.css'

export const Header = () => {
  return (
    <header className="header">

      <span className='title'>React Movies</span>

      <Image onClick={() => console.log('Clicou na imagem da HEADER')} className='logo' alt='logo' src='https://www.kindpng.com/picc/m/91-915199_movies-with-people-png-movie-clipart-png-transparent.png' />
    </header>
  )
}