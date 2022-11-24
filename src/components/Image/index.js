export const Image = ({ src, alt, className, onClick }) => {
  return (
    <img src={src} alt={alt} className={className} onClick={onClick} />
  )
}