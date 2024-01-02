import { useContext, useState } from "react"
import { MainContext } from "../context/FullContext"
import { Loading } from "./Loading"

export const AddComment = ({ idPost }) => {
	let idUser = localStorage.getItem("idUser")
	const { serverUrl } = useContext(MainContext)
	const [comentario, setComentario] = useState("")
	const [info, setInfo] = useState(false)
	const [loader, setLoader] = useState(false)

	function mandarComentario(e) {
		e.preventDefault()
		setLoader(true)
		let data = { comentario, idPost, idUser }
		if (comentario.length > 0) {
			let dataFetch = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}

			fetch(`${serverUrl}Comentar`, dataFetch)
				.then((response) => response.text())
				.then((data) => {
					setLoader(false)
					setInfo(data)
				})
		} else {
			setLoader(false)
			setInfo("El comentario debe tener mas de 1 letra")
		}

	}

	function capturarComentario(e) {
		setComentario(e.target.value)
	}

	return (
		<>
			<form
				className="flex gap-3 w-full justify-center items-center p-4"
				onSubmit={(e) => mandarComentario(e)}
				onChange={(e) => capturarComentario(e)}
			>
				{loader ? (
					<Loading />
				) : (
					<>
						<h2 className="w-1/4 text-center">Añade un comentario: </h2>
						<input
							className="bg-slate-100 outline-none w-1/2 p-2 rounded-lg"
							type="text"
						/>
						<button className="w-1/4 transition-[background-color]  cursor-pointer text-white bg-[#57b846] rounded-2xl duration-400 hover:bg-[#333333]">
							Mandar
						</button>
					</>
				)}
			</form>

			{info && <h2 className="text-center text-2xl font-normal">{info}</h2>}
		</>
	)
}
