import { Outlet, useOutletContext } from "@remix-run/react";
import styleGuitarras from "~/styles/guitarras.css";

export function links() {
	return [
		{
			rel: "stylesheet",
			href: styleGuitarras,
		},
	];
}

const Store = () => {
	return (
		<main className="container">
			<Outlet context={useOutletContext()} />
		</main>
	);
};

export default Store;
