import { useContext, useEffect } from 'react'
import { MainContext } from '../context/FullContext'
import { useNavigate } from 'react-router-dom'
import { CiudadContent } from './Content/CiudadContent'

export const Ciudad = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})

	return <CiudadContent />
}
