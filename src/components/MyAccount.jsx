import { LinkTo } from "./LinkTo"
import { useContext } from "react"
import { MainContext } from "../context/FullContext"
import accountIcon from "../assets/account_icon.png"

export const MyAccount = () => {
	const { activeAccount, setActiveAccount } = useContext(MainContext)
	let imageUrl = localStorage.getItem("imageUser")

	const logOut = () => {
		localStorage.clear()
		window.location.reload()
	}

	return (
		<div className="sticky z-10 top-0 right-0">
			<section className="flex flex-col items-end top-0 right-0 box-border absolute overflow-hidden">
				<button
					className="list-none w-14 h-14 pointer-events-auto"
					onClick={() => {
						setActiveAccount(!activeAccount)
					}}
				>
					<img
						className="w-full h-full object-cover p-1 rounded-full"
						src={imageUrl === null ? accountIcon : imageUrl}
					/>
				</button>


				<aside
					className={`${activeAccount && "translate-x-px"
						} bg-white list-none rounded-l-md mt-1 flex flex-col items-center transition-all p-4 gap-2 text-black translate-x-36 `}
				>
					<LinkTo link={"/crearpost"}>Crear post</LinkTo>

					<LinkTo link={"/micuenta"}>Mi cuenta</LinkTo>
					<LinkTo>Mis post</LinkTo>
					<button
						onClick={logOut}
						className="w-max text-2xl transition-[color,_transform] duration-300 hover:text-red-400  hover:scale-[1.2]"
					>
						Salir
					</button>
				</aside>
			</section>
		</div>

	)
}
