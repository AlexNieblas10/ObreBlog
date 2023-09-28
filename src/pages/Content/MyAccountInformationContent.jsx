import { useEffect, useState } from "react"
import { Loading } from "../../components/Loading"
import UploadImage from "../../components/UploadImage"

export const MyAccountInformationContent = () => {
	const [loading, setLoading] = useState(true)
	const [repeatNewPassword, setRepeatNewPassword] = useState("")
	const [error, setError] = useState("")
	const [currentPassword, setCurrentPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [passwordLength, setPasswordLength] = useState(false)
	const [activeChange, setActiveChange] = useState(false)
	const [samePassword, setSamePassword] = useState(false)
	const [lengthPassword, setLengthPassword] = useState(false)
	const [characterPassword, setCharacterPassword] = useState(false)
	const [isRepeatNewPassword, setIsRepeatNewPassword] = useState(false)
	const [userData, setUserData] = useState(null)
	const userAccount = localStorage.getItem("user")

	useEffect(() => {
		const QUERY = fetch(
			`https://obrechatback-2xgd-dev.fl0.io/User?username=${userAccount}`
		)

		QUERY.then((response) => {
			if (response.status === 400) {
				return response.json().then((data) => console.log(data))
			}
			response.json().then((data) => {
				let { Password, Email, Username } = data
				setPasswordLength(Password.length)

				setUserData({ Username: Username, Email: Email })
				setLoading(false)
			})
		})
		QUERY.catch(() => {
			setError("Ha ocurrido un error en el servidor, intentalo mas tarde")
			setLoading(false)
		})
	}, [userAccount])

	useEffect(() => {
		if (currentPassword.length === passwordLength) {
			const QUERY = fetch(`http://localhost:6655/User?username=${userAccount}`)
			QUERY.then((response) => {
				if (response.status === 400) {
					return response.json().then((data) => console.log(data))
				}
				response.json().then((data) => {
					currentPassword === data.Password
						? setSamePassword(true)
						: setSamePassword(false)
				})
			})
		}
	}, [currentPassword, userAccount, passwordLength])

	useEffect(() => {
		const caracteres = [
			"!",
			'"',
			"#",
			"$",
			"%",
			"&",
			"'",
			"(",
			")",
			"*",
			"+",
			",",
			"-",
			".",
			"/",
			":",
			";",
			"<",
			"=",
			">",
			"?",
			"@",
			"[",
			'"',
			"]",
			"^",
			"_",
			"{",
			"|",
			"}",
			"~",
		]

		let checkCaracteres = caracteres
			.map((caracter) => {
				return newPassword.includes(caracter)
			})
			.some((info) => info === true)

		checkCaracteres ? setCharacterPassword(true) : setCharacterPassword(false)

		newPassword.length >= 14
			? setLengthPassword(true)
			: setLengthPassword(false)

		repeatNewPassword === newPassword && newPassword.length >= 14
			? setIsRepeatNewPassword(true)
			: setIsRepeatNewPassword(false)
	}, [newPassword, repeatNewPassword])

	const handleChangePassword = () => {
		setActiveChange(!activeChange)
	}

	const setPasswords = (e) => {
		if (e.target.id === "NEW") {
			setNewPassword(e.target.value)
		}

		if (e.target.id === "CURRENT") {
			setCurrentPassword(e.target.value)
		}

		if (e.target.id === "REPEAT") {
			setRepeatNewPassword(e.target.value)
		}
	}

	return (
		<>
			{loading && <Loading />}
			{!userData && !loading && (
				<h1 className="text-black text-5xl text-center ">{error}</h1>
			)}
			{userData && (
				<section className="text-black flex flex-col gap-10 w-[500px]">
					<aside className="flex flex-col gap-4 items-center">
						<div className="flex w-full justify-center">
							<p className="w-1/2 text-xl text-center">Username: </p>
							<p className="w-1/2 text-center">{userData?.Username}</p>
						</div>
						<div className="flex w-full justify-center">
							<p className="w-1/2 text-xl text-center">Correo: </p>
							<p className="w-1/2 text-center">{userData?.Email}</p>
						</div>
						<div className="flex flex-col gap-4 w-full">
							<article className="flex justify-center w-full">
								<p className="w-1/2 text-xl text-center">Contraseña: </p>
								<p className="w-1/2 text-center">**************</p>
							</article>

							<div
								className={`${
									activeChange ? "max-md:h-[240px] h-[195px]" : "h-0"
								} transition-all duration-300 overflow-hidden flex flex-col gap-2 `}
							>
								<form
									onChange={setPasswords}
									className="flex gap-10 flex-col items-center"
								>
									<div className="flex max-md:flex-col w-full">
										<input
											type="password"
											id="CURRENT"
											placeholder="Contraseña actual"
											className="outline-none text-center w-full"
										/>
										<input
											type="password"
											id="NEW"
											placeholder="Contraseña nueva"
											className="outline-none text-center w-full"
										/>
										<input
											type="password"
											id="REPEAT"
											placeholder="Repite la contraseña"
											className="outline-none text-center w-full"
										/>
									</div>

									<button className="w-1/2 transition-[background-color]  cursor-pointer text-white bg-[#57b846] rounded-2xl duration-400 hover:bg-[#333333]">
										Cambiar
									</button>
								</form>
								<article className="flex flex-col items-center">
									<p
										className={`${
											samePassword ? "text-green-600" : "text-red-600"
										} transition-colors duration-300`}
									>
										Ingresa la contraseña actual
									</p>
									<p
										className={`${
											lengthPassword ? "text-green-600" : "text-red-600"
										} transition-colors duration-300`}
									>
										Tu nueva contraseña debe tener mas de 14 letras
									</p>
									<p
										className={`${
											characterPassword ? "text-green-600" : "text-red-600"
										} transition-colors duration-300`}
									>
										Tu nueva contraseña debe tener una letra especial
									</p>
									<p
										className={`${
											isRepeatNewPassword ? "text-green-600" : "text-red-600"
										} transition-colors duration-300`}
									>
										Tu nueva contraseña debe coincidir
									</p>
								</article>
							</div>
						</div>
					</aside>
					<div className="flex justify-center">
						<button
							onClick={handleChangePassword}
							className={`${
								activeChange ? "w-9 h-9" : "w-1/2"
							} bg-[#d3d3d33a] rounded-full`}
						>
							{activeChange ? "❌" : "Cambiar Contraseña"}
						</button>
					</div>
					<UploadImage />
				</section>
			)}
		</>
	)
}
