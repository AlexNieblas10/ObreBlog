import { Link } from "react-router-dom"
import { useContext } from "react"
import { MainContext } from "../../context/FullContext"

export const Post = ({
	imgURL,
	description,
	autor = "Default",
	category,
	title,
}) => {
	const { setActiveAccount } = useContext(MainContext)
	let titleUrl = title.replaceAll(" ", "-")

	let oldCategory = (category.split(''))
	oldCategory.shift()
	oldCategory = oldCategory.join("")

	category = (category[0].toUpperCase() + oldCategory)

	return (
		<article
			onClick={() => setActiveAccount(false)}
			className="md:w-[400px] md:h-[450px] w-full flex flex-col items-center bg-stone-200 rounded-2xl text-slate-700 duration-300 transition-transform hover:scale-105"
		>
			<Link className="w-full h-60" to={`/post/${titleUrl}`}>
				<img
					src={imgURL}
					alt="img post"
					className="w-full h-full rounded-t-2xl object-cover"
				/>
			</Link>
			<div className="p-5 grid place-items-center gap-5 h-52 w-full">
				<h2 className="text-center text-2xl wrapText leading-6 font-semibold">
					{title}
				</h2>
				<div className="w-full font-light h-16 leading-4 break-words overflow-hidden" dangerouslySetInnerHTML={{ __html: description }}>
				</div>
				<ul className="w-full flex justify-between">
					<li className="font-medium">{autor}</li>


					<li className="font-medium ">{ category}</li>

				</ul>
			</div>
		</article>
	)
}
