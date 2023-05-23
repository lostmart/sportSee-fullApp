import { Jelly } from '@uiball/loaders'
import { PropTypes } from 'prop-types'

const divStyles = {
	display: 'flex',
	background: '#80808010',
	alignItems: 'center',
	justifyContent: 'center',
	width: '100%',
}

const LoadingComp = ({ nameOfClass }) => {
	return (
		<div style={divStyles} className={nameOfClass}>
			<Jelly size={45} color="#E60000" />
		</div>
	)
}

LoadingComp.propTypes = {
	nameOfClass: PropTypes.string,
}

export default LoadingComp
