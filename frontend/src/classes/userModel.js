/** Class representing user's data */
class UserModel {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {object} userInfos - an object with the followinf properties (firstName->string, lastName->string, age->number)
	 * @param {number} todayScore - a float number
	 * @param {object} keyData - an object with the following properties (calorieCount->number, proteinCount->number, carbohydrateCount->number, lipidCount->number)
	 */
	constructor({ id, userInfos, todayScore, keyData }) {
		this.id = id ?? null
		this.userInfos = userInfos ?? null
		this.todayScore = todayScore ?? null
		this.keyData = keyData ?? null
	}
}

export default UserModel
