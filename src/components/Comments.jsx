import { useEffect, useState } from 'react'

export const Comments = ({ idPost }) => {
	const [commenst, setComments] = useState(false)

	useEffect(() => {
    fetch(`http://localhost:6655/Comments/?id=${idPost}`)
		.then(response => response.json())
		.then(data => console.log(data))
  })
	return (
		<>
			{commenst && (
				<footer className="text-green-600">
					<ul>
						<li>{idPost}</li>
					</ul>
				</footer>
			)}
		</>
	)
}
