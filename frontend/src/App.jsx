import './App.css'
import { useState, useEffect } from 'react'
import UserModel from './classes/userModel'
import axios from 'axios'

function App() {
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:3000/user/12')

			console.log(result.data.data)
			const userData = new UserModel(result.data.data)
			setData(userData)
		}

		fetchData()
	}, [])

	if (data) {
		return (
			<ul>
				<li>{data.id}</li>
				<li>Name: {data.userInfos.firstName}</li>
				<li>Last Name: {data.userInfos.lastName}</li>
				<li>Score: {data.todayScore}</li>
			</ul>
		)
	}
}

export default App
