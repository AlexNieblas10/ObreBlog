import { useContext } from 'react'
import { LinkTo } from './LinkTo'
import { MainContext } from '../context/FullContext'
import hamburguerMenu from '../assets/hamburguer_menu.png'

export const NavegationColumnMobile = () => {
	const { activeNavegation, setActiveNavegation } = useContext(MainContext)

	return (
		<aside className="md:hidden flex-col flex  box-border fixed z-10 h-14 justify-center">
			<img
				className="w-10 h-10"
				onClick={() => {
					setActiveNavegation(!activeNavegation)
				}}
				src={hamburguerMenu}
				alt="Icono del menu movil"
			/>


			<div className={`
					${activeNavegation && '-translate-x-px'
				} fixed z-10  bg-white shadow-2xl  top-14 w-full h-[calc(100vh-20px)] flex flex-col justify-center items-center box-border -translate-x-full transition-all`}>
				<ul
					className='flex flex-col z-10 gap-8'
				>
					<LinkTo link={'/posts/ciudad'}>Ciudad</LinkTo>
					<LinkTo link={'/posts/tecnologia'}>Tecnologia</LinkTo>
					<LinkTo link={'/posts/videojuegos'}>Videojuegos</LinkTo>
					<LinkTo link={'/posts/deportes'}>Deportes</LinkTo>
					<LinkTo link={'/posts/social'}>Social</LinkTo>
				</ul>
			</div>

		</aside>
	)
}
