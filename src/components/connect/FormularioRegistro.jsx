import { OPCIONES } from '../../utils/OPCIONES_USUARIO.JS'

export const FormularioRegistro = ({ setOpcion }) => {
	return (
		<article className="w-full h-[80%] flex flex-col justify-center items-center gap-5">
			<h1 className="text-4xl">Registrate</h1>
			<form action="" className="lg:w-[60%] flex flex-col gap-3">
				<input className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none" type="text" placeholder="Nombre completo" />
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="text"
					placeholder="Nombre de usuario"
				/>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="email"
					placeholder="Correo electronico"
				/>
				<input className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none" type="password" placeholder="Contraseña" />
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="password"
					placeholder="Repite tu contraseña"
				/>
				<div className="flex flex-col items-center gap-4 mt-6">
					<button className="h-14 w-[70%] text-white bg-[#57b846] rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-[#333333]">Registrarme</button>
					<button
						className="p-3 rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-slate-100"
						onClick={() => {
							setOpcion(OPCIONES.INICIAR_SESION)
						}}
					>
						Si ya tiene cuenta puede <strong>Iniciar sesion</strong>
					</button>
				</div>
			</form>
		</article>
	)
}
