import { MainContainer } from '../components/MainContainer'
import { Title } from '../components/Title'
import { NavegationColumnMobile } from '../components/NavegationColumnMobile'
import { MyAccount } from '../components/MyAccount'
import { NavegationColumn } from '../components/NavegationColumn'
import "../globalStyles.css"

export const NotFound = () => {
	return (
		<main className="full_container">
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>No se ha podido encontrar este post, lo sentimos</Title>
			</MainContainer>
		</main>
	)
}
