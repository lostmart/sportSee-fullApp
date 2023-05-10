/** Class representing user's activity */
class UserSession {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {array} sessions - an array of objects. Each object has (day->string, kilogram->number, calories->number)
	 */
	constructor({ day, kilograms, calories, sessionLength }) {
		this.day = day
		// ...
	}
}

export default UserSession
