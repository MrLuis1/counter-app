import { PropTypes } from "prop-types";

const getTarea = () => {
  return 'Valor de la función';
}

export const NameApp = ({ title, subtitle }) => {
  // if( !title ) throw new Error('No se recibio valor de la prop Title')

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
    </>
  )
}


NameApp.defaultProps = {
  title: 'No hay titulo personalizado',
  subtitle: 'No hay subtitulo personalizado'
}

NameApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}