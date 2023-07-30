import { MainContainer } from '../../components/MainContainer'
import { NavegationColumnMobile } from '../../components/NavegationColumnMobile'
import { MyAccount } from '../../components/MyAccount'
import { NavegationColumn } from '../../components/NavegationColumn'
import { Title } from '../../components/Title'
import { FullContainer } from '../../components/FullContainer'

export const PrincipalContent = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Bienvenido a ObrePost</Title>
			</MainContainer>
		</FullContainer>
	)
}
