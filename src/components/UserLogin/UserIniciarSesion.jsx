import { FormularioInicioSesion } from './FormularioInicioSesion'

export const UserIniciarSesion = ({ setOpcion }) => {
	return (
		<section className="loginOption">
			<FormularioInicioSesion setOpcion={setOpcion} />
		</section>
	)
}
