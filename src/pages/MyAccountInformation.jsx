import { useContext, useEffect } from 'react'
import { MainContainer } from '../components/MainContainer'
import { MyAccount } from '../components/MyAccount'
import { NavegationColumn } from '../components/NavegationColumn'
import { NavegationColumnMobile } from '../components/NavegationColumnMobile'
import { FullContainer } from '../components/FullContainer'
import { Title } from '../components/Title'
import { MainContext } from '../context/FullContext'
import { useNavigate } from 'react-router-dom'
import { PostsContainer } from '../components/Posts/PostsContainer'
import { MyAccountInformationContent } from './Content/MyAccountInformationContent'

export const MyAccountInformation = () => {
	const navigate = useNavigate()
	const { loggedUser } = useContext(MainContext)
	useEffect(() => {
		if (!loggedUser) {
			navigate('/connect')
		}
	})

	return (
		<>
			<FullContainer>
				<NavegationColumn />
				<NavegationColumnMobile />
				<MainContainer>
					<MyAccount />
					<Title>Información de mi cuenta</Title>
					<PostsContainer>
						<MyAccountInformationContent />
					</PostsContainer>
				</MainContainer>
			</FullContainer>
		</>
	)
}
