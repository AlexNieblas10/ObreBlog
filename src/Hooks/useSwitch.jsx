import { useState } from 'react'

export const useSwitch = () => {
	const [active, setActive] = useState(false)

	return { active, setActive }
}
