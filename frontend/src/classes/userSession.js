/** Class representing user's activity */
class UserSession {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {array} sessions - an array of objects. Each object has (day->string, kilogram->number, calories->number)
	 */
	constructor({ day, kilogram, calories, sessionLength }) {
		switch (day) {
			case 1:
				this.day = 'L'
				break
			case 2:
				this.day = 'M'
				break
			case 3:
				this.day = 'M'
				break
			case 4:
				this.day = 'J'
				break
			case 5:
				this.day = 'V'
				break
			case 6:
				this.day = 'S'
				break
			case 7:
				this.day = 'D'
				break
			default:
				this.day = day
		}

		this.kilogram = kilogram ?? null
		this.calories = calories ?? null
		this.sessionLength = sessionLength ?? null
	}
}

export default UserSession
