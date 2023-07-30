import { useState } from "react"

export const useActive = () => {
	const [active, setActive] = useState()

	return { active, setActive }
}