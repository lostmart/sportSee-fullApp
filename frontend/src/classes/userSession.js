import formatDate from '../services/dateFormat.js'

/** Class representing user's activity */
class UserSession {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {array} sessions - an array of objects. Each object has (day->string, kilogram->number, calories->number)
	 */
	constructor({ day, kilogram, calories, sessionLength }) {
		this.day = formatDate(day)
		this.kilogram = kilogram ?? null
		this.calories = calories ?? null
		this.sessionLength = sessionLength ?? null
	}
}

export default UserSession
