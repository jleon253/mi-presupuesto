import React, {Fragment} from 'react'
import {revisarPresupuesto} from '../../Helper'

import PropTypes from 'prop-types'

const ControlGastos = ({ presupuesto, restante }) => {
	return (
		<Fragment>
			<div className='row'>
				<div className='one-half column'>
					<div className='alert alert-primary'>Presupuesto: ${presupuesto}</div>
				</div>
				<div className='one-half column'>
					<div className={revisarPresupuesto(presupuesto, restante)}>Restante: ${restante}</div>
				</div>
			</div>
		</Fragment>
	)
}

ControlGastos.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}

export default ControlGastos
