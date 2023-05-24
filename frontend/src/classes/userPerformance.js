import capitalizeFirstLetter from '../services/makeCapital.js'

/** Class representing user's performance */
class UserPerformance {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {object} kind - an object with the following properties (6 properties each one is a string)
	 * @param {array} data - array  of objects with these properties (value->number, kind->number)
	 */
	constructor({ userId, kind, data }) {
		this.id = userId ?? null
		// get only the values of the kind object
		this.kind = Object.values(kind)
		this.data = data ?? null
		// for each object in the array 'data' asign the property kind of it to the correspondent kind of the this.kind
		this.data.forEach((obj, indx) => {
			obj.kind = capitalizeFirstLetter(this.kind[indx])
		})
	}
}

export default UserPerformance
