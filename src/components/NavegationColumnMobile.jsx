import { useContext } from 'react'
import { LinkTo } from './LinkTo'
import { MyAccount } from './MyAccount'
import { MainContext } from '../context/context'

export const NavegationColumnMobile = () => {
	const {activeNavegation, setActiveNavegation} = useContext(MainContext)

	return (
		<aside className="md:hidden flex-col flex box-border">
			<img
				className="w-10 h-10"
				onClick={() => {
					setActiveNavegation(!activeNavegation)
				}}
				src="/src/assets/hamburguer_menu.png"
				alt="Icono del menu movil"
			/>

			<MyAccount />

			<ul
				className={`
					${
						activeNavegation && '-translate-x-px'
					} bg-white absolute top-10 w-[80%] h-[calc(100vh-40px)] flex flex-col justify-center items-center box-border gap-8 -translate-x-full transition-all`}
			>
				<LinkTo link={'/recientes'}>Recientes</LinkTo>
				<LinkTo link={'/ciudad'}>Ciudad</LinkTo>
				<LinkTo link={'/tecnologia'}>Tecnologia</LinkTo>
				<LinkTo link={'/videojuegos'}>Videojuegos</LinkTo>
				<LinkTo link={'/deportes'}>Deportes</LinkTo>
				<LinkTo link={'/social'}>Social</LinkTo>
			</ul>
		</aside>
	)
}
