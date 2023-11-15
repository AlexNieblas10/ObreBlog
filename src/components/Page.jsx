import { useNavigate } from "react-router-dom"
import { CATEGORIES } from "../utils/CATEGORIES.d"
import { FullContainer } from "./FullContainer"
import { MainContainer } from "./MainContainer"
import { MyAccount } from "./MyAccount"
import { NavegationColumn } from "./NavegationColumn"
import { NavegationColumnMobile } from "./NavegationColumnMobile"
import { Title } from "./Title"
import { useContext, useEffect, useState } from "react"
import { PostsContainer } from "./Posts/PostsContainer"
import { LinkTo } from "./LinkTo"
import { Post } from "./Posts/Post"
import { Loading } from "./Loading"
import { MainContext } from "../context/FullContext"

export const Page = () => {
	const [loading, setLoading] = useState(true)
	const [posts, setPosts] = useState(null)

	const category = window.location.pathname.split("/")[2]
	const isValid = CATEGORIES.findIndex(
		(name) => name.toLocaleLowerCase() === category.toLocaleLowerCase()
	)

	const {serverUrl} = useContext(MainContext)

	const navigate = useNavigate()
	useEffect(() => {
		if (isValid < 0) {
			navigate("/notfound")
		}
	})

	useEffect(() => {
		setPosts(null)
		setLoading(true)
		fetch(
			`${serverUrl}Posts/${CATEGORIES[isValid]}`
		)
			.then((response) => response.json())
			.then((data) => {
				setPosts(data)
				setLoading(false)
			})
	}, [isValid])

	return (
		<>
			{isValid >= 0 && (
				<FullContainer>
					<NavegationColumn />
					<NavegationColumnMobile />
					<MainContainer>
						<MyAccount />
						<Title>{CATEGORIES[isValid]}</Title>

						{loading && (
							<div className="w-full heightLoading grid place-items-center">
								<Loading />
							</div>
						)}
						{posts?.Data && (
							<PostsContainer>
								<h1 className="text-black text-3xl wrapText text-center">
									{posts.Data} pero puedes crear uno en
									<LinkTo link={"/crearpost"}> Crear post</LinkTo>
								</h1>
							</PostsContainer>
						)}

						{posts?.realPosts && (
							<PostsContainer>
								{posts.realPosts.map((post) => {
									return (
										<Post
											id={post.ID}
											key={post.ID}
											title={post.Title}
											imgURL={post.Image}
											description={post.Content}
											autor={post.username}
											category={category}
										/>
									)
								})}
							</PostsContainer>
						)}
					</MainContainer>
				</FullContainer>
			)}
		</>
	)
}
