class User {
	constructor({ id, userInfos, todayScore, keyData }) {
		this.id = id ?? null
		this.userInfos = userInfos ?? null
		this.todayScore = todayScore ?? null
		this.keyData = keyData ?? null
	}
}

export default User
