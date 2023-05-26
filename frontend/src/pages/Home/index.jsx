import { useParams, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

// utils
import styles from './index.module.css'
import fetchData from '../../services/dataFetcher'

// assets
import energy from '../../assets/energy.svg'
import chicken from '../../assets/chicken.svg'
import cheeseburger from '../../assets/cheeseburger.svg'
import apple from '../../assets/apple.svg'

// components
import Header from '../../components/Header'
import Card from '../../components/Cards'
import BarChartComp from '../../components/BarChart'
import CardinalAreaChart from '../../components/CardinalAreaChart'
import RadarChartComp from '../../components/RadarChart'
import RadialBarChartComp from '../../components/RadialBar'
import LoadingComp from '../../components/LoadingComp'
import ErrorPage from '../../components/Error'

const Home = () => {
	let [hasError, setError] = useState(null)

	let [userData, setUserData] = useState(null)
	let [activityData, setactivityData] = useState(null)
	let [userAvarageSessions, setAvarageSessions] = useState(null)
	let [userPerformance, setUserPerformance] = useState(null)

	/*  user ID */
	const params = useParams()
	const userId = params.userId

	const bringUserData = async () => {
		const resUserData = await fetchData(
			`http://localhost:3000/user/${userId}`,
			'userData',
			userId
		)
		resUserData.message
			? setError({ status: true, msg: resUserData.message })
			: setError(null)
		setUserData(resUserData)
	}

	const bringActivityData = async () => {
		const resActivityData = await fetchData(
			`http://localhost:3000/user/${userId}/activity`,
			'activityData',
			userId
		)
		setactivityData(resActivityData)
	}

	const bringUserAvarageSessions = async () => {
		const resUserAvarageSessions = await fetchData(
			`http://localhost:3000/user/${userId}/average-sessions`,
			'userAvarageSessions',
			userId
		)
		setAvarageSessions(resUserAvarageSessions)
		// console.log(resUserAvarageSessions)
	}

	const bringUserPerformance = async () => {
		const resUserPerformance = await fetchData(
			`http://localhost:3000/user/${userId}/performance`,
			'userPerformance',
			userId
		)
		setUserPerformance(resUserPerformance)
		// console.log(userPerformance)
	}

	useEffect(() => {
		bringUserData()
		bringActivityData()
		bringUserAvarageSessions()
		bringUserPerformance()
	}, [userId])

	/*   error handling   */
	if (userData && userData.message === 'Request failed with status code 404') {
		// console.clear()
		return <Navigate to="/12"></Navigate>
	}
	if (hasError) return <ErrorPage msg={hasError.msg} />
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
