import React from "react";
import PropTypes from 'prop-types'

export const FirstApp = ({ name, subtitle }) => {
  
  return (
    <>
      <h1>Hola soy {name}</h1>
      <p>{subtitle}</p>
   
    </>
  )
};


FirstApp.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
FirstApp.defaultProps = {
  name: 'Santos',
  subtitle: "Subtitulo"
}