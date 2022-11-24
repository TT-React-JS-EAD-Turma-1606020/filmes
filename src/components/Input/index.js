import './styles.css'

export const Input = ({ label, name, ...rest }) => {

  return (
    <div className="input-container">
      <label htmlFor={name} className='input-label' >{label}</label>

      <input
        name={name}
        className='input'
        {...rest}
      />
    </div>
  )
}