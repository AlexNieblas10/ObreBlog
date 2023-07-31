import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../context/FullContext'
import { SocialContent } from './Content/SocialContent'

export const Social = () => {
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()
	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})
	return <SocialContent />
}
