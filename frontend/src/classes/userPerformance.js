/** Class representing user's performance */
class UserPerformance {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {object} kind - an object with the following properties (6 properties each one is a string)
	 * @param {array} data - array  of objects with these properties (value->number, kind->number)
	 */
	constructor({ id, kind, data }) {
		this.id = id ?? null
		this.kind = kind ?? null
		this.data = data ?? null
	}
}

export default UserPerformance
