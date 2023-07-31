import { EditorPost } from '../components/EditorPost'
import { FullContainer } from '../components/FullContainer'
import { MainContainer } from '../components/MainContainer'
import { MyAccount } from '../components/MyAccount'
import { NavegationColumn } from '../components/NavegationColumn'
import { NavegationColumnMobile } from '../components/NavegationColumnMobile'
import { PostsContainer } from '../components/Posts/PostsContainer'
import { Title } from '../components/Title'

export const CreatePost = () => {
	return (
		<FullContainer>
			<NavegationColumn />
			<NavegationColumnMobile />
			<MainContainer>
				<MyAccount />
				<Title>Crea tu post aquí</Title>
				<PostsContainer>
					<EditorPost />
				</PostsContainer>
			</MainContainer>
		</FullContainer>
	)
}
