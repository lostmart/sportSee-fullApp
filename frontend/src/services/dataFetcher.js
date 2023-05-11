import axios from 'axios'
import UserModel from '../classes/userModel'
import UserActivity from '../classes/userActivity'

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
		}
	} catch (err) {
		console.log(err)
	}
}

export default fetchData
