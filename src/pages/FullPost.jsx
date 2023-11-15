import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavegationColumn } from "../components/NavegationColumn"
import { NavegationColumnMobile } from "../components/NavegationColumnMobile"
import { MainContainer } from "../components/MainContainer"
import { MyAccount } from "../components/MyAccount"
import { Title } from "../components/Title"
import { Loading } from "../components/Loading"
import { Comments } from "../components/Comments"
import { MainContext } from "../context/FullContext"
/* import { Comments } from '../components/Comments.jsx' */

export const Post = () => {
	const navigate = useNavigate()
	let [dataPost, setDataPost] = useState(null)
	let [loader, setLoader] = useState(true)

	let titlePost = window.location.pathname.split("/")[2] ?? null

	const {serverUrl} = useContext(MainContext)

	useEffect(() => {
		if (dataPost === null) {
			fetch(`${serverUrl}Post/${titlePost}`)
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
					<div className="w-full h-screen grid place-items-center">
						<Loading />
					</div>
				)}
				{dataPost && (
					<>
						<Title>{dataPost?.Title}</Title>
						<section className="md:flex flex-col">
							<aside className="flex-col flex md:flex-row justify-center items-center gap-10 p-10">
								<div className="w-[95vw] md:w-[30vw] h-[40vh]">
									<img
										className="w-full h-full object-cover"
										src={dataPost?.Image}
										alt=""
									/>
								</div>
								<div
									dangerouslySetInnerHTML={{ __html: dataPost?.Content }}
									className="text-black bg-slate-100 md:w-[30vw] w-[95vw] h-[60vh] overflow-scroll grid text-2xl place-items-center"
								></div>
							</aside>

							<Comments idPost={dataPost.ID}/>
						</section>
					</>
				)}
			</MainContainer>
		</>
	)
}
