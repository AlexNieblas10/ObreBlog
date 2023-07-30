import { FormularioInicioSesion } from './FormularioInicioSesion'

export const UserIniciarSesion = ({ setOpcion }) => {
	return (
		<section className="md:w-1/2 w-full h-[80%]">
			<FormularioInicioSesion setOpcion={setOpcion} />
		</section>
	)
}
