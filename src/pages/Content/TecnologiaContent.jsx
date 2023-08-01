import { MainContainer } from '../../components/MainContainer'
import { NavegationColumnMobile } from '../../components/NavegationColumnMobile'
import { MyAccount } from '../../components/MyAccount'
import { NavegationColumn } from '../../components/NavegationColumn'
import { Post } from '../../components/Posts/Post'
import { PostsContainer } from '../../components/Posts/PostsContainer'
import { Title } from '../../components/Title'
import { CATEGORIES } from '../../utils/CATEGORIES.d.js'
import { FullContainer } from '../../components/FullContainer'
import { POSTS } from '../../utils/POSTS.d.js'

export const TecnologiaContent = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Posts de tecnología</Title>
				<PostsContainer>
					{POSTS.map((post) => {
						if (post.categories.includes(CATEGORIES.TECNOLOGIA)) {
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
