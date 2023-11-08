import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavegationColumn } from "../components/NavegationColumn"
import { NavegationColumnMobile } from "../components/NavegationColumnMobile"
import { MainContainer } from "../components/MainContainer"
import { MyAccount } from "../components/MyAccount"
import { Title } from "../components/Title"
import { PostsContainer } from "../components/Posts/PostsContainer"
import { Loading } from "../components/Loading"
/* import { Comments } from '../components/Comments.jsx' */

export const Post = () => {
	const navigate = useNavigate()
	let [dataPost, setDataPost] = useState(null)
	let [loader, setLoader] = useState(true)

	let titlePost = window.location.pathname.split("/")[2] ?? null

	useEffect(() => {
		if (dataPost === null) {
			fetch(`https://obreblogback-dev-fgrr.3.us-1.fl0.io/Post/${titlePost}`)
				.then((response) => response.json())
				.then((data) => {
					if (data.error) {
						return navigate("/notfound")
					}
					setDataPost(data.data)
					setLoader(false)
				})
		}
	})

	return (
		<>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />

				{loader && (
					<Loading />
				)}
				{dataPost && (
					<>
						<Title>{dataPost?.Title}</Title>

						<PostsContainer>
							<header className="w-full h-1/4 flex flex-col items-center mb-36">
								<img className="w-[30%]" src={dataPost?.Image} alt="" />
								<div
									dangerouslySetInnerHTML={{ __html: dataPost?.Content }}
									className="text-black"
								></div>
							</header>
						</PostsContainer>
					</>
				)}
			</MainContainer>
		</>
	)
}
