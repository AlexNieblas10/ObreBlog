import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/FullContext.jsx"
import { AddComment } from "./AddComment.jsx"

export const Comments = ({ idPost }) => {
	const [comments, setComments] = useState(false)
	const { serverUrl } = useContext(MainContext)

	useEffect(() => {
		fetch(`${serverUrl}Comments?id=${idPost}`)
			.then((response) => response.json())
			.then((data) => setComments(data))
	}, [])
	return (
		<footer className="flex text-black flex-col mb-8">
			{comments && (
				<ul className="flex flex-col gap-5 items-center">
					{comments.map((comment) => {
						return (
							<li key={comment} className="lg:flex flex-row w-full items-center justify-center p-3 border-4 max-w-[800px]">
								<aside className="flex w-1/4 items-center gap-2">
									<img className="w-14 rounded-full" src={comment.Image} />
									<h1>{comment.Username}</h1>
								</aside>

								<p className="w-3/4 text-center">{comment.Comment}</p>
							</li>
						)
					})}
				</ul>
			)}

			<AddComment idPost={idPost} />
		</footer>
	)
}
