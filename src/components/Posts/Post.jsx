import { Link } from 'react-router-dom'
import { newDescription } from '../../utils/newdescription.d.js'
import { useContext } from 'react'
import { MainContext } from '../../context/FullContext'

export const Post = ({
	id,
	imgURL,
	description,
	autor = 'Default',
	category,
	title,
}) => {
	const shortDescription = newDescription(description)
	const { setActiveAccount } = useContext(MainContext)

	return (
		<Link
			className="md:w-[400px] duration-300 w-full transition-transform hover:scale-105"
			to={`/post/${id}`}
		>
			<article
				onClick={() => setActiveAccount(false)}
				className="w-full flex flex-col items-center bg-stone-200 rounded-2xl text-slate-700"
			>
				<div className="w-full h-60">
					<img
						src={imgURL}
						alt="img post"
						className="w-full h-full rounded-t-2xl object-cover"
					/>
				</div>
				<div className="p-5 grid place-items-center gap-5 h-52 w-full">
					<h2 className="text-center text-2xl wrapText leading-6 font-semibold">
						{title}
					</h2>
					<p className="w-full font-light leading-4 break-words overflow-hidden">
						{shortDescription}
					</p>
					<ul className="w-full flex justify-between">
						<li className="font-medium">Por:{autor}</li>
						<Link
							to={`/${category.toLowerCase()}`}
							className="transition-[color,_transform] duration-300 hover:text-red-400  hover:scale-[1.2]"
						>
							{category}
						</Link>
					</ul>
				</div>
			</article>
		</Link>
	)
}
