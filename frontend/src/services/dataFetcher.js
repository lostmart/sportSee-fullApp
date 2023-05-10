import axios from 'axios'
import UserModel from '../classes/userModel'

/**
 * @async
 * @param {string} url
 * @returns an object based on the UserModel class, with the following params (id->string, userInfos->object, todayScore->object, keyData->object)
 */
const fetchData = async (url) => {
	try {
		const res = await axios.get(url)
		const userData = new UserModel(res.data.data)
		return userData
	} catch (err) {
		console.log(err)
	}
}

export default fetchData
