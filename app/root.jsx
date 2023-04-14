import { useState, useEffect } from "react";
import {
	Meta,
	Links,
	Outlet,
	Scripts,
	LiveReload,
	useCatch,
	Link,
} from "@remix-run/react";

import styles from "~/styles/index.css";
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
	return {
		charset: "utf8",
		title: "Curso-React/Remix-Tienda de Guitarras",
		viewport: "width=device-width,initial-scale=1",
	};
}

export function links() {
	return [
		{
			//Reset styles
			rel: "stylesheet",
			href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css",
		},
		{
			//Font
			rel: "preconnect",
			href: "https://fonts.googleapis.com",
		},
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
			crossOrigin: "true",
		},
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap",
		},
		{
			//Estilos
			rel: "stylesheet",
			href: styles,
		},
	];
}

export default function App() {
	const cartLocalStorage =
		typeof window !== "undefined"
			? JSON.parse(localStorage.getItem("cart")) ?? []
			: null;
	const [cart, setCart] = useState(cartLocalStorage);
	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const agregateCart = (guitarra) => {
		if (
			cart.some((guitarraState) => guitarraState.id === guitarra.id)
		) {
			const cartUpdated = cart.map((guitarraState) => {
				if (guitarraState.id === guitarra.id) {
					guitarraState.cantidad = guitarra.cantidad;
				}
				return guitarraState;
			});
			setCart(cartUpdated);
		} else {
			setCart([...cart, guitarra]);
		}
	};

	const updatedAmount = (guitarra) => {
		const cartUpdated = cart.map((guitarraState) => {
			if (guitarraState.id === guitarra.id) {
				guitarraState.cantidad = guitarra.cantidad;
			}
			return guitarraState;
		});
		setCart(cartUpdated);
	};
	const deleteGuitarra = (id) => {
		const cartUpdated = cart.filter(
			(guitarraState) => guitarraState.id !== id
		);
		setCart(cartUpdated);
	};

	return (
		<>
			<Document>
				<Outlet
					context={{
						agregateCart,
						cart,
						updatedAmount,
						deleteGuitarra,
					}}
				/>
			</Document>
		</>
	);
}

function Document({ children }) {
	return (
		<html lang="es">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				{children}
				<Footer />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

// Manejo de errores

export function CatchBoundary() {
	const error = useCatch();
	return (
		<Document>
			<p className="error">
				{error.status} {error.statusText}
			</p>
			<div className="error-links">
				<Link
					className="error-link"
					to="/"
				>
					Regresar a la página principal
				</Link>
			</div>
		</Document>
	);
}

export function ErrorBoundary({ error }) {
	return (
		<Document>
			<p className="error">
				{error.status} {error.statusText}
			</p>
			<div className="error-links">
				<Link
					className="error-link"
					to="/"
				>
					Regresar a la página principal
				</Link>
			</div>
		</Document>
	);
}
