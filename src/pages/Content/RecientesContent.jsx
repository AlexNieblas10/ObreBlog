import { MainContainer } from '../../components/MainContainer'
import { NavegationColumnMobile } from '../../components/NavegationColumnMobile'
import { MyAccount } from '../../components/MyAccount'
import { NavegationColumn } from '../../components/NavegationColumn'
import { Post } from '../../components/Posts/Post'
import { PostsContainer } from '../../components/Posts/PostsContainer'
import { Title } from '../../components/Title'
import { POSTS } from '../../utils/POSTS'
import { FullContainer } from '../../components/FullContainer'

export const RecientesContent = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Noticias recientes</Title>
				<PostsContainer>
					{POSTS.map((post) => (
						<Post
							id={post.id}
							key={post.id}
							title={post.title}
							imgURL={post.img}
							description={post.content}
							autor={post.author}
							category={post.categories}
						/>
					))}
				</PostsContainer>
			</MainContainer>
		</FullContainer>
	)
}
