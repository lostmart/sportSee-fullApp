import styles from './index.module.css'

const Header = () => {
	return (
		<div className={styles.header}>
			<h2>
				Bonjour <span>Thomas</span>
			</h2>
			<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	)
}

export default Header
