import styles from './index.module.css'
import { PropTypes } from 'prop-types'

const Card = ({ itemsInfos, values, icon }) => {
	return (
		<article className={styles.card}>
			<div className={styles.imgCont}>
				<img src={icon} alt="calories" />
			</div>
			<div className={styles.textCont}>
				<h2>{itemsInfos}</h2>

				<span>{values}</span>
			</div>
		</article>
	)
}

Card.propTypes = {
	itemsInfos: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	values: PropTypes.string,
	icon: PropTypes.string,
}

export default Card
