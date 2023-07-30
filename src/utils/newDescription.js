export function newDescription(oldDescription) {
	let newDescription

	if (oldDescription.length > 140) {
		newDescription = `${oldDescription.substr(0, 140)}...`
		return newDescription
	}

	newDescription = `${oldDescription}...`

	return newDescription
}
