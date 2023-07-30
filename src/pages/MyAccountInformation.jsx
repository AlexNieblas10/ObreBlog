import { MainContainer } from '../components/MainContainer'
import { MyAccount } from '../components/MyAccount'
import { NavegationColumn } from '../components/NavegationColumn'
import { NavegationColumnMobile } from '../components/NavegationColumnMobile'
import { FullContainer } from '../components/FullContainer'
import { Title } from '../components/Title'

export const MyAccountInformation = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Información de mi cuenta</Title>
			</MainContainer>
		</FullContainer>
	)
}
