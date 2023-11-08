import { useContext } from 'react'
import { LinkTo } from './LinkTo'
import { MyAccount } from './MyAccount'
import { MainContext } from '../context/FullContext'
import hamburguerMenu from '../assets/hamburguer_menu.png'

export const NavegationColumnMobile = () => {
	const {activeNavegation, setActiveNavegation} = useContext(MainContext)

	return (
		<aside className="md:hidden flex-col flex box-border">
			<img
				className="w-10 h-10"
				onClick={() => {
					setActiveNavegation(!activeNavegation)
				}}
				src={hamburguerMenu}
				alt="Icono del menu movil"
			/>

			<MyAccount />

			<ul
				className={`
					${
						activeNavegation && '-translate-x-px'
					} z-10 bg-white shadow-2xl absolute top-10 w-[80%] h-[calc(100vh-40px)] flex flex-col justify-center items-center box-border gap-8 -translate-x-full transition-all`}
			>
				<LinkTo link={'/posts/ciudad'}>Ciudad</LinkTo>
				<LinkTo link={'/posts/tecnologia'}>Tecnologia</LinkTo>
				<LinkTo link={'/posts/videojuegos'}>Videojuegos</LinkTo>
				<LinkTo link={'/posts/deportes'}>Deportes</LinkTo>
				<LinkTo link={'/posts/social'}>Social</LinkTo>
			</ul>
		</aside>
	)
}
