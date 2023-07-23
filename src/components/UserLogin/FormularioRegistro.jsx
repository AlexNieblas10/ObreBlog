import { OPCIONES } from '../../utils/OPCIONES_USUARIO.JS'

export const FormularioRegistro = ({ setOpcion }) => {
	return (
		<article className="formContainer">
			<h1 className="title">Registrate</h1>
			<form action="" className="form">
				<input className="formItem" type="text" placeholder="Nombre completo" />
				<input
					className="formItem"
					type="text"
					placeholder="Nombre de usuario"
				/>
				<input
					className="formItem"
					type="email"
					placeholder="Correo electronico"
				/>
				<input className="formItem" type="password" placeholder="Contraseña" />
				<input
					className="formItem"
					type="password"
					placeholder="Repite tu contraseña"
				/>
				<div className="buttonsOptionsContainer">
					<button className="button mainOption">Registrarme</button>
					<button
						className="button changeLogin"
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
