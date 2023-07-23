import "../../css/navegation_column.css";
import { ItemCategory } from "./ItemCategory";

export const NavegationColumn = () => {
	return (
		<aside className="navegation_column">
			<figure className="logo_container">
				<img className="logo" src="/src/assets/ObreBlog-logo.png" alt="" />
			</figure>

			<ul className="category_list">
				<ItemCategory link={"/recientes"}>Recientes</ItemCategory>
				<ItemCategory link={"/ciudad"}>Ciudad</ItemCategory>
				<ItemCategory link={"/tecnologia"}>Tecnologia</ItemCategory>
				<ItemCategory link={"/videojuegos"}>Videojuegos</ItemCategory>
				<ItemCategory link={"/deportes"}>Deportes</ItemCategory>
				<ItemCategory link={"/social"}>Social</ItemCategory>
			</ul>

			<footer className="footer">
				<h3 className="footer_title">Coopera con el proyecto</h3>

				<ul className="footer_list">
					<li className="item">
						<a href="" className="item_anchor">
							<img
								className="item_logo"
								src="/src/assets/github_icon.png"
								alt=""
							/>
							GitHub
						</a>
					</li>
					<li className="item">
						<a href="" className="item_anchor">
							<img
								className="item_logo"
								src="/src/assets/mail_icon.png"
								alt=""
							/>
							Mail
						</a>
					</li>
				</ul>
			</footer>
		</aside>
	);
};
