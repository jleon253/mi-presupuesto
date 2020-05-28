import React, { Fragment, useState } from 'react'
import Error from '../Error/Error'

import PropTypes from 'prop-types'

const Pregunta = ({guardarPresupuesto, guardarRestante, setMostrar}) => {
	const [cantidad, guardarCantidad] = useState(0)
	const [error, guardarError] = useState(false)

	const definirPresupuesto = (e) => {
		guardarCantidad(parseInt(e.target.value))
	}

	const agregarPresupuesto = (e) => {
		e.preventDefault()
		if (cantidad < 1 || isNaN(cantidad)) {
			guardarError(true)
			return
		}
    guardarError(false)
    guardarPresupuesto(cantidad)
    guardarRestante(cantidad)
    setMostrar(false)
	}

	return (
		<Fragment>
			<h2>Coloca tu presupuesto</h2>
			<form onSubmit={agregarPresupuesto}>
				{error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
				<input
					type='number'
					className='u-full-width'
					placeholder='500000'
					onChange={definirPresupuesto}
				/>
				<button type='submit' className='button-primary u-full-width'>
					Definir presupuesto
				</button>
			</form>
		</Fragment>
	)
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  setMostrar: PropTypes.func.isRequired
}

export default Pregunta
