import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context/context'
import { TecnologiaContent } from './Content/TecnologiaContent'

export const Tecnologia = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()
	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})
	return (
		<TecnologiaContent />
	)
}
