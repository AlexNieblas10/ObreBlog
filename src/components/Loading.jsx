import { PostsContainer } from "./Posts/PostsContainer"

export const Loading = () => {
	return (
		<PostsContainer>
			<h1 className="text-black text-3xl">Cargando </h1>
			<div className="animate-spin w-14 h-14 rounded-full bg-gradient-to-t from-green-400 to-white p-1">
				<div className=" rounded-full w-full h-full bg-white"></div>
			</div>
		</PostsContainer>
	)
}
