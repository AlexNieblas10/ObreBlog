import { useState } from "react";
import { ItemCategory } from "../NavegationColumn/ItemCategory";
import "../../css/navegation_column_mobile.css";
import { MyAccount } from "../MyAccount/MyAccount";

export const NavegationColumnMobile = () => {
	const [list, setList] = useState(false);

	return (
		<aside className="navegation_container">
			<img
				className="icon"
				onClick={() => {
					setList(!list);
				}}
				src="/src/assets/hamburguer_menu.png"
				alt=""
			/>

			<MyAccount />

			{list && (
				<ul className="category_list_mobile">
					<ItemCategory link={"/recientes"}>Recientes</ItemCategory>
					<ItemCategory link={"/ciudad"}>Ciudad</ItemCategory>
					<ItemCategory link={"/tecnologia"}>Tecnologia</ItemCategory>
					<ItemCategory link={"/videojuegos"}>Videojuegos</ItemCategory>
					<ItemCategory link={"/deportes"}>Deportes</ItemCategory>
					<ItemCategory link={"/social"}>Social</ItemCategory>
				</ul>
			)}
		</aside>
	);
};
