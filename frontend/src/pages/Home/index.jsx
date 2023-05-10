import Header from '../../components/Header'

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
			<div>
				<Header userInfos={userData.userInfos} />
				<div>
					<Card
						itemsInfos={`${userData.keyData.calorieCount.toLocaleString()}Kcal`}
						values="Calories"
						icon={energy}
					/>
					<Card
						itemsInfos={`${userData.keyData.proteinCount}g`}
						values="Proteines"
						icon={chicken}
					/>
					<Card
						itemsInfos={`${userData.keyData.carbohydrateCount}g`}
						values="Glucides"
						icon={apple}
					/>
					<Card
						itemsInfos={`${userData.keyData.lipidCount}g`}
						values="Lipides"
						icon={cheeseburger}
					/>
				</div>
			</div>
		)
}

export default Home
