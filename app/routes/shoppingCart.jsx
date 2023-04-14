import { useEffect, useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import stylesShoppingCart from "~/styles/shoppingCart.css";

export function links() {
	return [
		{
			rel: "stylesheet",
			href: stylesShoppingCart,
		},
	];
}

export function meta() {
	return {
		title: " GuitarLA - Carrito de Compras",
		description:
			"Venta de guitarras, música, blog y tienda de guitarras",
	};
}

const shoppingCart = () => {
	const [total, setTotal] = useState(0);
	const { cart, updatedAmount, deleteGuitarra } =
		useOutletContext();

	useEffect(() => {
		const totalCalculation = cart.reduce(
			(total, product) => total + product.cantidad * product.precio,
			0
		);
		setTotal(totalCalculation);
	}, [cart]);

	return (
		<ClientOnly fallback={"cargando..."}>
			{() => (
				<main className="container ">
					<h1 className="heading">Carrito de Compras</h1>
					<div className="content">
						<div className="cart">
							<h2>Artículos</h2>
							{cart?.length === 0
								? "Carrito Vacio"
								: cart?.map((product) => (
										<div
											key={product.id}
											className="product"
										>
											<div>
												<img
													src={product.imagen}
													alt={`imagen del producto ${product.nombre} `}
												/>
											</div>
											<div>
												<p className="name">{product.nombre}</p>
												<p>Cantidad:</p>
												<select
													className="select"
													value={product.cantidad}
													onChange={(e) =>
														updatedAmount({
															id: product.id,
															cantidad: e.target.value,
														})
													}
												>
													<option value="1">1</option>
													<option value="2">2</option>
													<option value="3">3</option>
													<option value="4">4</option>
													<option value="5">5</option>
												</select>
												<p className="price">
													$<span>{product.precio}</span>
												</p>
												<p className="subtotal">
													Subtotal: $
													<span>
														{product.cantidad * product.precio}
													</span>
												</p>
											</div>
											<button
												type="button"
												className="btn-delete"
												onClick={() => deleteGuitarra(product.id)}
											>
												X
											</button>
										</div>
								  ))}
						</div>
						<aside className="summary">
							<h3>Resumen del pedido</h3>
							<p>Total a pagar: ${total} </p>
						</aside>
					</div>
				</main>
			)}
		</ClientOnly>
	);
};

export default shoppingCart;
