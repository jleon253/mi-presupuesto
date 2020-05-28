import React, { useState } from 'react'
import Error from '../Error/Error'
import shortid from 'shortid'

import PropTypes from 'prop-types'

const Formulario = ({ setGasto, setCrearGasto }) => {
	const [nombre, setNombre] = useState('')
	const [valor, setValor] = useState(0)
	const [error, setError] = useState(false)

	const agregarGasto = (e) => {
		e.preventDefault()
		if (valor < 1 || isNaN(valor) || nombre.trim() === '') {
			setError(true)
			return
		}
		setError(false)
		const gasto = {
			nombre,
			valor,
			id: shortid.generate(),
		}
    setGasto(gasto)
    setCrearGasto(true)
    setNombre('')
    setValor(0)
	}

	return (
		<form onSubmit={agregarGasto}>
			<h2>Agrega tus gastos aquí:</h2>
			{error ? <Error mensaje='Revisa los valores ingresados' /> : null}
			<div className='campo'>
				<label>Nombre gasto:</label>
				<input
					type='text'
					className='u-full-width'
					placeholder='Almuerzo'
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
			</div>
			<div className='campo'>
				<label>Valor gasto:</label>
				<input
					type='number'
					className='u-full-width'
					placeholder='10000'
					value={valor}
					onChange={(e) => setValor(e.target.value)}
				/>
			</div>
			<button type='submit' className='button-primary u-full-width'>
				Agregar gasto
			</button>
		</form>
	)
}

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario
