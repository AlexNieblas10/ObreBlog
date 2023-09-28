import { MainContainer } from "../../components/MainContainer"
import { NavegationColumnMobile } from "../../components/NavegationColumnMobile"
import { MyAccount } from "../../components/MyAccount"
import { NavegationColumn } from "../../components/NavegationColumn"
import { Post } from "../../components/Posts/Post"
import { PostsContainer } from "../../components/Posts/PostsContainer"
import { Title } from "../../components/Title"

import { FullContainer } from "../../components/FullContainer"
import { useEffect, useState } from "react"
import { LinkTo } from "../../components/LinkTo"

export const VideojuegosContent = () => {
	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState(null)

	useEffect(() => {
		fetch("http://localhost:6655/Posts/Videojuegos")
			.then((response) => response.json())
			.then((data) => {
				setPosts(data)
				setLoading(false)
			})
	}, [])

	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Videojuegos</Title>
				<PostsContainer>
				{
						loading && (
							<h1 className="text-5xl text-black">Cargando...</h1>
						)
					}
					{posts?.Data && (
						<PostsContainer>
							<h1 className="text-black text-3xl">
								{posts.Data} pero puedes crear uno en{" "}
								<LinkTo>Crear post</LinkTo>
							</h1>
						</PostsContainer>
					)}
					{posts?.posts && (
						<PostsContainer>
							{posts.posts.map((post) => {
								return (
									<Post
										id={post.ID}
										key={post.ID}
										title={post.Title}
										imgURL={post.Image}
										description={post.Content}
										autor="yo"
										category="Videojuegos"
									/>
								)
							})}
						</PostsContainer>
					)}
				</PostsContainer>
			</MainContainer>
		</FullContainer>
	)
}
