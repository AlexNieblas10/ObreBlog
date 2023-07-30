import { MainContainer } from '../../components/MainContainer'
import { NavegationColumnMobile } from '../../components/NavegationColumnMobile'
import { MyAccount } from '../../components/MyAccount'
import { NavegationColumn } from '../../components/NavegationColumn'
import { Post } from '../../components/Posts/Post'
import { PostsContainer } from '../../components/Posts/PostsContainer'
import { Title } from '../../components/Title'
import { CATEGORIES } from '../../utils/CATEGORIES'
import { POSTS } from '../../utils/POSTS'
import { FullContainer } from '../../components/FullContainer'

export const VideojuegosContent = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Post de videojuegos</Title>
				<PostsContainer>
					{POSTS.map((post) => {
						if (post.categories.includes(CATEGORIES.VIDEOJUEGOS)) {
							return (
								<Post
									id={post.id}
									key={post.id}
									title={post.title}
									imgURL={post.img}
									description={post.content}
									autor={post.author}
									category={post.categories}
								/>
							)
						}
					})}
				</PostsContainer>
			</MainContainer>
		</FullContainer>
	)
}
