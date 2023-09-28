export function newDescription(oldDescription) {
	let newDescription

	oldDescription = oldDescription.replace("<p>", "")
	oldDescription = oldDescription.replace("</p>", "")
	if (oldDescription.length > 140) {
		newDescription = `${oldDescription.substr(0, 140)}...`
		return newDescription
	}

	newDescription = `${oldDescription}...`

	return newDescription
}
