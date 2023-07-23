import { OPCIONES } from '../../utils/OPCIONES_USUARIO.JS'

export const FormularioInicioSesion = ({ setOpcion }) => {
	return (
		<article className="formContainer">
			<h1 className="title">Iniciar sesion</h1>
			<form className="form" action="">
				<input
					className="formItem"
					type="text"
					placeholder="Nombre o correo electronico"
				/>
				<input className="formItem" type="password" placeholder="Contraseña" />
				<div className="buttonsOptionsContainer">
					<button className="button mainOption">Iniciar sesión</button>
					<button
						className="button changeLogin"
						onClick={() => {
							setOpcion(OPCIONES.REGISTRARSE)
						}}
					>
						Si desea <strong>registrarse</strong> haga click aquí
					</button>
				</div>
			</form>
		</article>
	)
}
