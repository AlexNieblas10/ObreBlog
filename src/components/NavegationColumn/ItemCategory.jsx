import { Link } from "react-router-dom";

export const ItemCategory = ({ children, link }) => {
	return (
		<li className="category">
			<Link className="link_category" to={link}>{children}</Link>
		</li>
	);
};
