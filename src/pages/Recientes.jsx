import { MainContext } from '../context/FullContext'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { RecientesContent } from './Content/RecientesContent'

export function Recientes() {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})
	return (
		<RecientesContent />
	)
}
