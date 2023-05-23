import axios from 'axios'
import UserModel from '../classes/userModel'
import UserActivity from '../classes/userActivity'
import UserPerformance from '../classes/userPerformance'

/**
 * @async
 * @param {string} url
 * @returns an object based on the UserModel class, with the following params (id->string, userInfos->object, todayScore->object, keyData->object)
 */
const fetchData = async (url, dataType) => {
	try {
		if (dataType === 'userData') {
			const res = await axios.get(url)
			const userData = new UserModel(res.data.data)
			return userData
		} else if (dataType === 'activityData') {
			// console.log('tenemos que buscar la data de actividades !!')
			const res = await axios.get(url)
			const activityData = new UserActivity(res.data.data)
			return activityData
		} else if (dataType === 'userAvarageSessions') {
			const res = await axios.get(url)
			const userAvarageSessions = new UserActivity(res.data.data)
			//console.log(userAvarageSessions)
			return userAvarageSessions
		} else if (dataType === 'userPerformance') {
			const res = await axios.get(url)
			const userAvarageSessions = new UserPerformance(res.data.data)
			return userAvarageSessions
		}
	} catch (err) {
		return err
	}
}

export default fetchData
