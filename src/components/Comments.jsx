import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/FullContext.jsx"
import { Loading } from "./Loading.jsx"

export const Comments = ({ idPost }) => {
	const [comments, setComments] = useState(false)
	const [comentario, setComentario] = useState("")
	const [loader, setLoader] = useState(false)
	const [info, setInfo] = useState(false)

	let idUser = localStorage.getItem("idUser")
	const { serverUrl } = useContext(MainContext)

	function mandarComentario(e) {
		e.preventDefault()
		setLoader(true)
		let data = { comentario, idPost, idUser }

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
	}

	function capturarComentario(e) {
		setComentario(e.target.value)
	}

	useEffect(() => {
		/*
		.then(response => response.json())
		.then(data => console.log(data)) 
		let comentariosFiltrados = commentsMocks.filter(
			(comment) => comment.idPost === 1
		)
		 setComments(comentariosFiltrados) */
	}, [])
	return (
		<>
			<footer className="flex text-black flex-col mb-8">
				{comments && (
					<ul>
						{comments.map((comment) => {
							let commentOfComment = comments.filter(
								(comentario) => comentario.commentOfComment === comment.id
							)

							if (comment.commentOfComment <= 0) {
								return (
									<li key={comment.id}>
										<h3>{comment.comentario}</h3>
										{commentOfComment && (
											<ul className="ml-10">
												{commentOfComment.map((comentarioDeComentario) => {
													return (
														<li key={comentarioDeComentario.id}>
															{comentarioDeComentario.comentario}
														</li>
													)
												})}
											</ul>
										)}
									</li>
								)
							}
						})}
					</ul>
				)}
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
				{info && <h2 className="text-center text-2xl">{info}</h2>}
			</footer>
		</>
	)
}
