import Header from '../../components/Header'

import styles from './index.module.css'

import { useState, useEffect } from 'react'
import fetchData from '../../services/dataFetcher'
import Card from '../../components/Cards'
import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import apple from '../../assets/apple.svg'
import BarChartComp from '../../components/BarChart'
import LineChartComp from '../../components/LineChart'
import RadarChartComp from '../../components/RadarChart'
import RadialBarChartComp from '../../components/RadialBar'

const Home = () => {
	let [userData, setUserData] = useState(null)
	let [activityData, setactivityData] = useState(null)

	const bringUserData = async () => {
		userData = await fetchData('http://localhost:3000/user/12', 'userData')
		activityData = await fetchData(
			'http://localhost:3000/user/12/activity',
			'activityData'
		)
		setUserData(userData)
		setactivityData(activityData)
		console.dir(userData)
	}

	useEffect(() => {
		bringUserData()
	}, [])
	if (userData)
		return (
			<div className={styles.home}>
				<div className="pageContainer">
					<Header userInfos={userData.userInfos} />
					<BarChartComp
						chartData={activityData.sessions}
						className={styles.barChart}
					/>
					<div className="cardsContainer">
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
					<LineChartComp />
					<RadarChartComp />
					<RadialBarChartComp userInfos={userData.todayScore} />
				</div>
			</div>
		)
}

export default Home
