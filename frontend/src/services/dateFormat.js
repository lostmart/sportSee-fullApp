/**
 *
 * @param {number} day
 * @returns {string} // a formatted text in the format of a string with only one letter
 */
export default function formatDate(day) {
	let formattedDate = null
	switch (day) {
		case 1:
			formattedDate = 'L'
			break
		case 2:
			formattedDate = 'M'
			break
		case 3:
			formattedDate = 'M'
			break
		case 4:
			formattedDate = 'J'
			break
		case 5:
			formattedDate = 'V'
			break
		case 6:
			formattedDate = 'S'
			break
		case 7:
			formattedDate = 'D'
			break
		default:
			formattedDate = day
	}
	return formattedDate
}
