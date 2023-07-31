import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { POSTS } from '../context/FullContext'
import { NavegationColumn } from '../components/NavegationColumn'
import { NavegationColumnMobile } from '../components/NavegationColumnMobile'
import { MainContainer } from '../components/MainContainer'
import { MyAccount } from '../components/MyAccount'
import { Title } from '../components/Title'
import { PostsContainer } from '../components/Posts/PostsContainer'

export const Post = () => {
	const navigate = useNavigate()

	const idPost = Number(window.location.pathname.split('/')[2]) ?? null

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
			<MainContainer >
				<MyAccount />
				<Title>{POSTS[idPost]?.title}</Title>
				<PostsContainer>
					
				</PostsContainer>
			</MainContainer>
		</>
	)
}
