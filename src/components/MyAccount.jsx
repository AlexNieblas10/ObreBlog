import { LinkTo } from './LinkTo'
import { useContext } from 'react'
import { MainContext } from '../context/context'


export const MyAccount = () => {
const {activeAccount, setActiveAccount} = useContext(MainContext)

	return (
		<section className="flex flex-col items-end absolute top-0 right-0 overflow-hidden box-border">
			<button
				className="list-none w-10 pointer-events-auto"
				onClick={() => {
					setActiveAccount(!activeAccount)
				}}
			>
				<img src="/src/assets/account_icon.png " />
			</button>
			<aside
				className={`${
					activeAccount && 'translate-x-px'
				} list-none flex flex-col items-center transition-all px-4 gap-2 text-black translate-x-32 `}
			>
				<LinkTo link={"/micuenta"}>Mi cuenta</LinkTo>
				<LinkTo>Mis post</LinkTo>
				<LinkTo>Salir</LinkTo>
			</aside>
		</section>
	)
}
