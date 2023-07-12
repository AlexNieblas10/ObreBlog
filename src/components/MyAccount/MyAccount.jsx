/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { ItemAccount } from "./ItemAccount";

export const MyAccount = () => {
	const [accounActive, setAccountActive] = useState(false);
	return (
		<>
			<nav className="account">
				<li className="item_account">
					<img
						onClick={() => setAccountActive(!accounActive)}
						className="logo_account"
						src="/src/assets/account_icon.png"
						alt=""
					/>
				</li>
			</nav>

			<section
				className="my_account"
				style={
					accounActive
						? {
								transform: "translateX(0px)",
								animation: ".5s myAccount",
						  }
						: {
								transform: "translateX(300px)",
						  }
				}
			>
				<ul className="my_account_container">
					<ItemAccount link={"/micuenta"}>Mi cuenta</ItemAccount>
					<ItemAccount link={"/misposts"}>Mis posts</ItemAccount>
					<ItemAccount link={"/salir"}>Salir</ItemAccount>
					<ItemAccount link={"/configuracion"}>Configuracion</ItemAccount>
				</ul>
			</section>
		</>
	);
};
