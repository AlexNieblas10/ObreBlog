import { useContext, useEffect } from 'react'
import { MainContext } from '../context/context'
import { useNavigate } from 'react-router-dom'
import { DeportesContent } from './Content/DeportesContent'

export const Deportes = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()
	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})
	return <DeportesContent />
}
