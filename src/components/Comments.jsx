import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/FullContext.jsx"
import { AddComment } from "./AddComment.jsx"
import { Comment } from "./Comment.jsx"

export const Comments = ({ idPost }) => {
	const [comments, setComments] = useState(false)
	const { serverUrl, loggedUser } = useContext(MainContext)

	useEffect(() => {
		fetch(`${serverUrl}Comments?id=${idPost}`)
			.then((response) => response.json())
			.then((data) => setComments(data))
	}, [])
	return (
		<>
			<footer className="flex text-black flex-col mb-8 p-4">
				{comments && (
					<ul className="flex flex-col gap-10 items-center">
						{comments.map((comment) => {
							return (
								<Comment key={comment.Comment} comment={comment} />
							)
						})}
					</ul>
				)}

				{loggedUser
					? <AddComment idPost={idPost} />
					: <h2 className=" mt-4 text-red-500 text-center text-xl">Para poder comentar necesitas registrarte o iniciar sesión</h2>}
			</footer>
		</>
	)
}
