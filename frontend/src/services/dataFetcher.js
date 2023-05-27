import axios from 'axios'
import UserModel from '../classes/userModel'
import UserActivity from '../classes/userActivity'
import UserPerformance from '../classes/userPerformance'
import offLineData from '../offLineData/data.json'

export const API_MODE = false

/**
 * @async
 * @param {string} url
 * @param {string} userId
 * @returns an object based on the UserModel class, with the following params (id->string, userInfos->object, todayScore->object, keyData->object)
 */
const fetchData = async (url, dataType, userId) => {
	if (API_MODE) {
		/*  API DATA   */
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
				const userPerformance = new UserPerformance(res.data.data)
				return userPerformance
			}
		} catch (err) {
			return err
		}
	} else {
		/*  MOCK DATA   */
		try {
			if (dataType === 'userData') {
				const rawData = offLineData.USER_MAIN_DATA.find(
					(user) => user.id === Number(userId)
				)
				const userData = new UserModel(rawData)
				return userData
			} else if (dataType === 'activityData') {
				const rawData = offLineData.USER_ACTIVITY.find(
					(user) => user.userId === Number(userId)
				)
				const activityData = new UserActivity(rawData)
				return activityData
			} else if (dataType === 'userAvarageSessions') {
				const rawData = offLineData.USER_AVERAGE_SESSIONS.find(
					(user) => user.userId === Number(userId)
				)
				const userAvarageSessions = new UserActivity(rawData)
				return userAvarageSessions
			} else if (dataType === 'userPerformance') {
				const rawData = offLineData.USER_PERFORMANCE.find(
					(user) => user.userId === Number(userId)
				)
				const userPerformance = new UserPerformance(rawData)
				return userPerformance
			}
		} catch (err) {
			return err
		}
	}
}

export default fetchData
