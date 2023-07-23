import { FormularioRegistro } from './FormularioRegistro'

export const UserRegistrarse = ({ setOpcion }) => {
	return (
		<section className="loginOption">
			<FormularioRegistro setOpcion={setOpcion} />
		</section>
	)
}
