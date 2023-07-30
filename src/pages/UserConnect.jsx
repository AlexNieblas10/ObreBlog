import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { OPCIONES } from '../utils/OPCIONES_USUARIO'
import { UserIniciarSesion } from '../components/connect/UserIniciarSesion'
import { UserRegistrarse } from '../components/connect/UserRegistrarse'
import { MainContext } from '../context/context'

export const UserConnect = () => {
	const [opcion, setOpcion] = useState(OPCIONES.REGISTRARSE)
	const { loggedUser } = useContext(MainContext)

	const navigate = useNavigate()

	useEffect(() => {
		if (loggedUser) {
			navigate('/')
		}
	})

	return (
		<main className="w-full h-screen grid place-items-center text-center">
			{opcion === OPCIONES.INICIAR_SESION ? (
				<UserIniciarSesion setOpcion={setOpcion} />
			) : (
				<UserRegistrarse setOpcion={setOpcion} />
			)}
		</main>
	)
}
