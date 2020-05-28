import React, { useState, useEffect } from 'react'
import Pregunta from './Components/Pregunta/Pregunta'
import Formulario from './Components/Formulario/Formulario'
import ListaGastos from './Components/Gastos/ListaGastos'
import ControlGastos from './Components/Control/ControlGastos'

function App() {
	const [presupuesto, guardarPresupuesto] = useState(0)
	const [restante, guardarRestante] = useState(0)
	const [mostrar, setMostrar] = useState(true)
	const [gastos, setGastos] = useState([])
	const [gasto, setGasto] = useState({})
	const [crearGasto, setCrearGasto] = useState(false)

	// actualiza el restante
	useEffect(() => {
		if (crearGasto) {
      setGastos([...gastos, gasto])
      guardarRestante( restante - gasto.valor)
			setCrearGasto(false)
		}
	}, [gasto, gastos, crearGasto, restante])

	return (
		<div className='container'>
			<header>
				<h1>Gasto Semanal</h1>
				<div className='contenido-principal contenido'>
					{mostrar ? (
						<Pregunta
							guardarPresupuesto={guardarPresupuesto}
							guardarRestante={guardarRestante}
							setMostrar={setMostrar}
						/>
					) : (
						<div className='row'>
							<div className='one-half column'>
								<Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
							</div>
							<div className='one-half column'>
								<ListaGastos gastos={gastos} />
								<ControlGastos presupuesto={presupuesto} restante={restante} />
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
