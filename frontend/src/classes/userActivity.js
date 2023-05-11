import UserSession from './userSession'

/** Class representing user's activity */
class UserActivity {
	/**
	 * Create a userModel
	 * @param {number} id - user's id
	 * @param {Array.<UserSession>} sessions - an array of UserSession. Each object has (day->string, kilogram->number, calories->number)
	 */
	constructor({ userId, sessions }) {
		this.userId = userId ?? null
		this.sessions = (sessions ?? []).map((session) => new UserSession(session))
	}
}

export default UserActivity
