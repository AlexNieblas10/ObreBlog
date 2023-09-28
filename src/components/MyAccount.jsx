import { LinkTo } from './LinkTo'
import { useContext } from 'react'
import { MainContext } from '../context/FullContext'
import accountIcon from '../assets/account_icon.png'

export const MyAccount = () => {
	const { activeAccount, setActiveAccount, imageUrl } = useContext(MainContext)

	const logOut = () => {
		localStorage.clear()
		window.location.reload()
	}

	return (
		<>
			<section className="flex flex-col items-end absolute top-0 right-0 box-border overflow-hidden">
				<button
					className="list-none w-14 h-14 pointer-events-auto"
					onClick={() => {
						setActiveAccount(!activeAccount)
					}}
				>
					<img
						className="w-full h-full object-cover p-1 rounded-full"
						src={imageUrl ? imageUrl : accountIcon}
					/>
				</button>
				<aside
					className={`${
						activeAccount && 'translate-x-px'
					} bg-white list-none flex flex-col items-center transition-all p-4 gap-2 text-black translate-x-36 `}
				>
					<LinkTo link={'/crearpost'}>Crear post</LinkTo>

					<LinkTo link={'/micuenta'}>Mi cuenta</LinkTo>
					<LinkTo>Mis post</LinkTo>
					<button
						onClick={logOut}
						className="w-max text-2xl transition-[color,_transform] duration-300 hover:text-red-400  hover:scale-[1.2]"
					>
						Salir
					</button>
				</aside>
			</section>
		</>
	)
}
