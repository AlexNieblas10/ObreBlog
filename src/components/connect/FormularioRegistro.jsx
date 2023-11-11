import { useEffect, useState } from "react"
import { OPCIONES } from "../../utils/OPCIONES_USUARIO.d.js"
import { caracteres } from "../../utils/caracteres.js"
export const FormularioRegistro = ({ setOpcion }) => {
	const [contraseña, setContraseña] = useState(false)
	const [confirmarContraseña, setConfirmarContrasela] = useState(false)
	const [caracter, setCaracter] = useState(false)
	const [mismaContraseña, setMismaContraseña] = useState(false)
	const [user, setUser] = useState(false)
	const [correo, setCorreo] = useState(false)
	const [mensaje, setMensaje] = useState(false)

	useEffect(() => {
		if (contraseña !== false) {
			if (contraseña === confirmarContraseña && contraseña?.length > 14) {
				setMismaContraseña(true)
			} else {
				setMismaContraseña(false)
			}

			let checkCaracteres = caracteres
				.map((caracter) => {
					return contraseña.includes(caracter)
				})
				.some((info) => info === true)

			checkCaracteres ? setCaracter(true) : setCaracter(false)
		}
	}, [contraseña, confirmarContraseña])

	function registrarse(e) {
		e.preventDefault()

		if (
			contraseña?.length > 14 &&
			caracter &&
			mismaContraseña &&
			user &&
			correo
		) {
			let data = {
				user: user,
				correo: correo,
				password: contraseña,
			}

			let dataFetch = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}

			fetch("https://obreblogback-dev-fgrr.3.us-1.fl0.io/Register", dataFetch)
				.then((data) => data.text())
				.then((info) => setMensaje(info))
		}
	}

	function validarContraseñas(e) {
		if (e.target.id === "CONTRASEÑA") {
			setContraseña(e.target.value)
		} else if (e.target.id === "VALIDARCONTRASEÑA") {
			setConfirmarContrasela(e.target.value)
		} else if (e.target.id === "USUARIO") {
			setUser(e.target.value)
		} else if (e.target.id === "CORREO") {
			setCorreo(e.target.value)
		}
	}

	return (
		<article className="w-full h-[80%] flex flex-col justify-center items-center gap-5">
			<h1 className="text-4xl">Registrate</h1>
			<form
				onSubmit={(e) => registrarse(e)}
				onChange={(e) => validarContraseñas(e)}
				className="lg:w-[60%] flex flex-col gap-3"
			>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="text"
					id="USUARIO"
					required={true}
					placeholder="Nombre de usuario"
				/>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="email"
					id="CORREO"
					required={true}
					placeholder="Correo electronico"
				/>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="password"
					id="CONTRASEÑA"
					required={true}
					placeholder="Contraseña"
				/>
				<input
					className="h-5 p-4 text-lg border-b-2 border-green-200 outline-none"
					type="password"
					id="VALIDARCONTRASEÑA"
					required={true}
					placeholder="Repite tu contraseña"
				/>

				<ul>
					<li
						className={
							contraseña?.length > 14 ? "text-green-600" : "text-red-600"
						}
					>
						Contraseña de 14 caracteres
					</li>
					<li className={caracter ? "text-green-600" : "text-red-600"}>
						Minimo un caracter especial
					</li>
					<li className={mismaContraseña ? "text-green-600" : "text-red-600"}>
						Las contraseñas coinciden
					</li>
				</ul>

				{mensaje && <h2 className="text-orange-400">{mensaje}</h2>}

				<div className="flex flex-col items-center gap-4 mt-6">
					<button className="h-14 w-[70%] text-white bg-[#57b846] rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-[#333333]">
						Registrarme
					</button>
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
