import { Link } from "@remix-run/react";
import logo from "../../public/img/logo.svg";
import Navegation from "~/components/navegation";

const Header = () => {
	return (
		<header className="header">
			<div className="container header--bar">
				<Link
					to="/"
					className="header__link"
				>
					<img
						src={logo}
						alt="Logo"
						className="logo"
					/>
				</Link>

				<Navegation />
			</div>
		</header>
	);
};

export default Header;
