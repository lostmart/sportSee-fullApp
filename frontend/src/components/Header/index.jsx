import styles from './index.module.css'
import { PropTypes } from 'prop-types'

const Header = ({ userInfos }) => {
	return (
		<div className={styles.header + ' header'}>
			<h2>
				Bonjour <span>{userInfos.firstName}</span>
			</h2>
			<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	)
}

Header.propTypes = {
	userInfos: PropTypes.object,
}

Header.defaultProps = {
	userInfos: '',
}

export default Header
