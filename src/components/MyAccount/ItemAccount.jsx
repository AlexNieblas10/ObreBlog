import { Link } from "react-router-dom";

export const ItemAccount = ({ children, link }) => {
	return (
		<li>
			<Link className="item_my_account" to={link}>{children}</Link>
		</li>
	);
};

