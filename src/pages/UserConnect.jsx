import { useState } from 'react'
import { OPCIONES } from '../utils/OPCIONES_USUARIO'
import { UserIniciarSesion } from '../components/UserLogin/UserIniciarSesion'
import { UserRegistrarse } from '../components/UserLogin/UserRegistrarse'
import "../css/user_login.css"

export const UserConnect = () => {
	const [opcion, setOpcion] = useState(OPCIONES.REGISTRARSE)

	return (
		<main className='loginOptionsContainer'>
			{opcion === OPCIONES.INICIAR_SESION ? <UserIniciarSesion setOpcion={setOpcion} />: <UserRegistrarse setOpcion={setOpcion}/>}
		</main>
	)
}
