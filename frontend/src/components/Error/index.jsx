import meditate from '../../assets/meditate.gif'
import styles from './index.module.css'
import { PropTypes } from 'prop-types'

const ErrorPage = ({ msg }) => {
	return (
		<div className={styles.container}>
			<h2>Hum, ceci est embarrassant ...</h2>
			<div style={{ height: '339px' }}>
				<img src={meditate} alt={msg} />
			</div>
			<p>
				Nous semblons rencontrer une erreur de réseau. Veuillez cliquer ici pour
				recharger la page et réessayer...
			</p>
			<button
				onClick={() => {
					window.location.reload()
				}}>
				Reload
			</button>
			<pre>{msg}</pre>
		</div>
	)
}

ErrorPage.propTypes = {
	msg: PropTypes.string,
}

export default ErrorPage
