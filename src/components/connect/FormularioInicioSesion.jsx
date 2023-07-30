import { useContext } from 'react'
import { OPCIONES } from '../../utils/OPCIONES_USUARIO.JS'
import { MainContext } from '../../context/context'

export const FormularioInicioSesion = ({ setOpcion }) => {
	const { setLoggetUser } = useContext(MainContext)

	return (
		<article className="w-full h-[80%] flex flex-col justify-center items-center gap-5">
			<h1 className="text-4xl">Iniciar sesion</h1>
			<form
				className="w-[60%] flex flex-col gap-3"
				onSubmit={(e) => {
					e.preventDefault()
					setLoggetUser(true)
				}}
			>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="text"
					placeholder="Nombre o correo electronico"
				/>
				<input className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none" type="password" placeholder="Contraseña" />
				<div className="flex flex-col items-center gap-4 mt-6">
					<button className="h-14 w-[70%] text-white bg-[#57b846] rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-[#333333]">Iniciar sesión</button>
					<button
						className="p-3 rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-slate-100 changeLogin"
						onClick={() => {
							setOpcion(OPCIONES.REGISTRARSE)
						}}
					>
						Si usted aún no tiene cuenta puede <strong>registrarse</strong>
					</button>
				</div>
			</form>
		</article>
	)
}
