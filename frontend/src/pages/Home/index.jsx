import Header from '../../components/Header'

import styles from './index.module.css'

import { useState, useEffect } from 'react'
import fetchData from '../../services/dataFetcher'
import Card from '../../components/Cards'
import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import apple from '../../assets/apple.svg'

const Home = () => {
	const bringUserData = async () => {
		userData = await fetchData('http://localhost:3000/user/12')
		setUserData(userData)
		console.log(userData)
	}

	let [userData, setUserData] = useState(null)

	useEffect(() => {
		bringUserData()
	}, [])
	if (userData)
		return (
			<div className={styles.home}>
				<Header userInfos={userData.userInfos} />
				<div className={styles.cardsContainer}>
					<Card
						itemsInfos={`${userData.keyData.calorieCount.toLocaleString()}Kcal`}
						values="Calories"
						icon={energy}
						bgClr="#FBEAEA"
					/>
					<Card
						itemsInfos={`${userData.keyData.proteinCount}g`}
						values="Proteines"
						icon={chicken}
						bgClr="#E9F4FB"
					/>
					<Card
						itemsInfos={`${userData.keyData.carbohydrateCount}g`}
						values="Glucides"
						icon={apple}
						bgClr="#FBF6E5"
					/>
					<Card
						itemsInfos={`${userData.keyData.lipidCount}g`}
						values="Lipides"
						icon={cheeseburger}
						bgClr="#FBEAEF"
					/>
				</div>
			</div>
		)
}

export default Home
