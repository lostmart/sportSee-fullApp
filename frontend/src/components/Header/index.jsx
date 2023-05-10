import styles from './index.module.css'
import { PropTypes } from 'prop-types'

const Header = ({ userInfos }) => {
	return (
		<div className={styles.header}>
			<h2>
				Bonjour <span>{userInfos.firstName}</span>
			</h2>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	)
}

Header.propTypes = {
	userInfos: PropTypes.object,
}

export default Header
