import { useParams, Navigate } from 'react-router-dom'

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
import CardinalAreaChart from '../../components/CardinalAreaChart'
import RadarChartComp from '../../components/RadarChart'
import RadialBarChartComp from '../../components/RadialBar'
import LoadingComp from '../../components/LoadingComp'

const Home = () => {
	let [userData, setUserData] = useState(null)
	let [activityData, setactivityData] = useState(null)
	let [userAvarageSessions, setAvarageSessions] = useState(null)
	let [userPerformance, setUserPerformance] = useState(null)

	// let [userId, setUserId] = useState('12')

	/*  user ID */
	const params = useParams()
	const userId = params.userId

	const bringUserData = async () => {
		const resUserData = await fetchData(
			`http://localhost:3000/user/${userId}`,
			'userData'
		)
		console.log(resUserData)
		setUserData(resUserData)
	}

	const bringActivityData = async () => {
		const resActivityData = await fetchData(
			`http://localhost:3000/user/${userId}/activity`,
			'activityData'
		)
		setactivityData(resActivityData)
	}

	const bringUserAvarageSessions = async () => {
		const resUserAvarageSessions = await fetchData(
			`http://localhost:3000/user/${userId}/average-sessions`,
			'userAvarageSessions'
		)
		setAvarageSessions(resUserAvarageSessions)
		// console.log(resUserAvarageSessions)
	}

	const bringUserPerformance = async () => {
		const resUserPerformance = await fetchData(
			`http://localhost:3000/user/${userId}/performance`,
			'userPerformance'
		)
		setUserPerformance(resUserPerformance)
		// console.log(userPerformance)
	}

	// USER_PERFORMANCE

	useEffect(() => {
		bringUserData()
		bringActivityData()
		bringUserAvarageSessions()
		bringUserPerformance()
	}, [userId])

	if (userData && userData.message === 'Request failed with status code 404') {
		return (
			<div>
				<h1>No se encuentra este usuario</h1>
				<p>
					Este usuario si que existe ! <Navigate to="/12"></Navigate>
				</p>
			</div>
		)
	}
	return userData ? (
		<div className={styles.home}>
			<div className="pageContainer">
				<Header userInfos={userData.userInfos} />

				{activityData ? (
					<BarChartComp
						chartData={activityData.sessions}
						className={styles.barChart}
					/>
				) : (
					<LoadingComp nameOfClass="barChart" />
				)}

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
				{userAvarageSessions ? (
					<CardinalAreaChart userAvarageSessions={userAvarageSessions} />
				) : (
					<LoadingComp nameOfClass="lineChart" />
				)}

				{userPerformance ? (
					<RadarChartComp userPerformance={userPerformance} />
				) : (
					<LoadingComp nameOfClass="radarChart" />
				)}

				<RadialBarChartComp userInfos={userData.todayScore} />
			</div>
		</div>
	) : (
		<p className={styles.loading}>loading ... </p>
	)
}

export default Home
