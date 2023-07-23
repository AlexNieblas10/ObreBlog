import { useContext, useEffect } from 'react'
import { NavegationColumnMobile } from '../components/MobileNavegation/NavegationColumnMobile'
import { NavegationColumn } from '../components/NavegationColumn/NavegationColumn'
import { MainContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

export const Principal = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})

	return (
		<main>
			<NavegationColumn />
			<NavegationColumnMobile />
		</main>
	)
}
