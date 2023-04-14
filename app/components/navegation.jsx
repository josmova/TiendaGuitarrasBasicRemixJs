import { Link, useLocation } from "@remix-run/react";
import iconCart from "../../public/img/carrito.png";

const Navegation = () => {
	const location = useLocation();
	return (
		<nav className="nav">
			<Link
				to="/"
				className={location.pathname === "/" ? "active" : ""}
			>
				Inicio
			</Link>
			<Link
				to="/weare"
				className={location.pathname === "/weare" ? "active" : ""}
			>
				Nosotros
			</Link>
			<Link
				to="/guitarras"
				className={
					location.pathname === "/guitarras" ? "active" : ""
				}
			>
				Tienda
			</Link>
			<Link
				to="/blog"
				className={location.pathname === "/blog" ? "active" : ""}
			>
				Blog
			</Link>
			<Link to="shoppingCart">
				<img
					src={iconCart}
					alt="carrito de compras"
				/>
			</Link>
		</nav>
	);
};

export default Navegation;
