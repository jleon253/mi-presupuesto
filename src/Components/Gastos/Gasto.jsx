import React from 'react'

import PropTypes from 'prop-types'

const Gasto = ({ gasto }) => {
	return (
		<li>
			<p>
				{gasto.nombre}
				<span className='gasto'>{gasto.valor}</span>
			</p>
		</li>
	)
}

Gasto.propTypes = {
  gasto: PropTypes.object.isRequired
}

export default Gasto
