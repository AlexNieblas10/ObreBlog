import { FormularioRegistro } from './FormularioRegistro'

export const UserRegistrarse = ({ setOpcion }) => {
	return (
		<section className="md:w-1/2 w-full h-[80%]">
			<FormularioRegistro setOpcion={setOpcion} />
		</section>
	)
}
