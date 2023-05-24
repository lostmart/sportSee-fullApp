/**
 *
 * @param {string} word
 * @returns {string} // a word that starts with a capital letter
 */
export default function capitalizeFirstLetter(word) {
	// Check if the input is empty or not a string
	if (!word || typeof word !== 'string') {
		return ''
	}

	// Capitalize the first letter and return the modified word
	return word.charAt(0).toUpperCase() + word.slice(1)
}
