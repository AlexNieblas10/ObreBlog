import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { POSTS } from '../utils/POSTS.d.js'
import { NavegationColumn } from '../components/NavegationColumn'
import { NavegationColumnMobile } from '../components/NavegationColumnMobile'
import { MainContainer } from '../components/MainContainer'
import { MyAccount } from '../components/MyAccount'
import { Title } from '../components/Title'
import { PostsContainer } from '../components/Posts/PostsContainer'
import { Comments } from '../components/Comments.jsx'

export const Post = () => {
	const navigate = useNavigate()

	const idPost = Number(window.location.pathname.split('/')[2]) ?? null
	const indexPost = POSTS.findIndex((post) => post.id === idPost)

	useEffect(() => {
		const isValidPost = POSTS.some((post) => post.id === idPost)
		if (!isValidPost) {
			navigate('/notfound')
		}
	})

	return (
		<>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>{POSTS[indexPost]?.title}</Title>
				<PostsContainer>
					<article className="w-70% flex flex-col  items-center">
						<header className="w-full h-1/4 flex flex-col items-center mb-36">
							<img className="w-[30%]" src={POSTS[indexPost]?.img} alt="" />
							<p className="text-black">{POSTS[indexPost]?.content}</p>
						</header>
						<Comments idPost={idPost} />
					</article>
				</PostsContainer>
			</MainContainer>
		</>
	)
}
