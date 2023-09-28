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
				<Title>Bienvenido a ObreChat</Title>
				<div className="w-full min-h-[calc(80vh-40px)] md:min-h-[80vh] flex flex-col justify-center items-center p-8 ">
					<h2 className="text-black text-center text-2xl">
						Bienvenido a ObreChat un sitio donde puedes expresarte y conocer a
						personas con gustos similares a los tuyos. Espero que te diviertas
						😁
					</h2>
				</div>
			</MainContainer>
		</FullContainer>
	)
}
