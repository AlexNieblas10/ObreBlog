import { useContext, useState } from "react"
import { OPCIONES } from "../../utils/OPCIONES_USUARIO.d.js"
import { MainContext } from "../../context/FullContext"
import { Loading } from "../Loading.jsx"

export const FormularioInicioSesion = ({ setOpcion }) => {
	const { setLoggetUser, serverUrl } = useContext(MainContext)
	const [response, setResponse] = useState("")
	const [loader, setLoader] = useState(false)

	const validateUser = (e) => {
		e.preventDefault()
		setLoader(true)
		setResponse("")

		fetch(
			`${serverUrl}Username?identification=${e.target[0].value}&password=${e.target[1].value}`
		)
			.then((response) => {
				if (response.status === 400) {
					setResponse("El usuario o contraseña que ingresaste no existe")
					setLoader(false)
				} else {
					response.json().then((data) => {
						localStorage.setItem("idUser", data.ID)
						localStorage.setItem("imageUser", data.Image)
						localStorage.setItem("wasConnected", true)
						localStorage.setItem("user", data.Username)
						setLoggetUser(true)
					})
				}
			})
			.catch((err) => {
				console.error(err)
				setResponse(
					"Parece que hay un error con el servidor, intentalo mas tarde"
				)
			})
	}

	return (
		<article className="w-full h-[80%] flex flex-col justify-center items-center gap-5">
			<h1 className="text-4xl">Iniciar sesion</h1>
			<form
				className="w-[60%] flex flex-col gap-3"
				onSubmit={(e) => validateUser(e)}
			>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="text"
					placeholder="Nombre o correo electronico"
				/>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="password"
					placeholder="Contraseña"
				/>
				<p className="text-red-700">{response}</p>

				{loader && <Loading />}

				<div className="flex flex-col items-center gap-4 mt-6">
					<button className="h-14 w-[70%] text-white bg-[#57b846] rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-[#333333]">
						Iniciar sesión
					</button>
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
