import { useContext, useEffect } from 'react'
import { MainContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import { PrincipalContent } from './Content/PrincipalContent'

export const Principal = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})

	return <PrincipalContent />
}
