import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context/FullContext'
import { VideojuegosContent } from './Content/VideojuegosContent'

export const Videojuegos = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()
	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})
	return <VideojuegosContent />
}
