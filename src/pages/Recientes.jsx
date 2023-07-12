import BlogContainer from "../components/Blog/BlogContainer";
import { NavegationColumn } from "../components/NavegationColumn/NavegationColumn";
import { NavegationColumnMobile } from "../components/MobileNavegation/NavegationColumnMobile";
import { MyAccount } from "../components/MyAccount/MyAccount";
import { BlogTitle } from "../components/Blog/BlogTitle";
import { PostsContainer } from "../components/Posts/PostsContainer";
import { Post } from "../components/Posts/Post";

export function Recientes() {
	return (
		<main className="main_container">
			<NavegationColumn />
			<NavegationColumnMobile />
			<BlogContainer>
				<MyAccount />
				<BlogTitle>Noticias recientes</BlogTitle>
				<PostsContainer>
					<Post
						title="Se encuentran 3 muertos en colonia Urbi villa"
						imgURL="https://images.pexels.com/photos/923681/pexels-photo-923681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						description="El dia 3 de julio del 2024 se encuentran a 3 personas que habian desaparecido desde el 1 de julio del mismo año"
						autor="Alex Nieblas"
						category={["Policial", "Ciudad"]}
					/>
				</PostsContainer>
			</BlogContainer>
		</main>
	);
}
