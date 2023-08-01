import { MainContainer } from '../../components/MainContainer'
import { Title } from '../../components/Title'
import { NavegationColumnMobile } from '../../components/NavegationColumnMobile'
import { MyAccount } from '../../components/MyAccount'
import { NavegationColumn } from '../../components/NavegationColumn'
import { Post } from '../../components/Posts/Post'
import { PostsContainer } from '../../components/Posts/PostsContainer'
import { POSTS } from '../../utils/POSTS.d.js'
import { CATEGORIES } from '../../utils/CATEGORIES.d.js'
import { FullContainer } from '../../components/FullContainer'

export const CiudadContent = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Noticias de la ciudad</Title>
				<PostsContainer>
					{POSTS.map((post) => {
						if (post.categories.includes(CATEGORIES.CIUDAD)) {
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
