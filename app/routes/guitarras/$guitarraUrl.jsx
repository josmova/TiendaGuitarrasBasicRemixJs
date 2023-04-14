import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
	const { guitarraUrl } = params;
	const guitarra = await getGuitarra(guitarraUrl);
	if (guitarra.data.length === 0) {
		throw new Response("", {
			status: 404,
			statusText: "Guitarra no encontrada",
		});
	}

	return guitarra;
}

export function meta({ data }) {
	if (!data) {
		return {
			title: "GuitarLA - Guitarra no encontrada",
			descripcion: `Guitarras, venta de guitarras, guitarra no encontrada `,
		};
	}
	return {
		title: `GuitarLA - ${data.data[0].attributes.nombre}`,
		descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre} `,
	};
}

const Guitarra = () => {
	const { agregateCart } = useOutletContext();

	const [amount, setAmount] = useState(0);
	const guitarra = useLoaderData();
	const { nombre, descripcion, imagen, precio } =
		guitarra.data[0].attributes;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (amount < 1) {
			alert("Debe ingresar una cantidad valida");
			return;
		}
		const selectionGuitarra = {
			id: guitarra.data[0].id,
			imagen: imagen.data.attributes.url,
			nombre: nombre,
			precio: precio,
			cantidad: amount,
		};
		agregateCart(selectionGuitarra);
	};

	return (
		<div className="guitarra">
			<img
				className="image"
				src={imagen.data.attributes.url}
				alt={`imagen de la guitarra ${nombre}`}
			/>
			<div className="content">
				<h3>{nombre}</h3>
				<p className="text">{descripcion}</p>
				<p className="price">{precio}</p>

				<form
					onSubmit={handleSubmit}
					className="form"
				>
					<label htmlFor="amount">Cantidad:</label>
					<select
						onChange={(e) => setAmount(parseInt(e.target.value))}
						id="amount"
					>
						<option value="0">-- Seleccione --</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
					<input
						type="submit"
						value="Agregar al carrito"
					/>
				</form>
			</div>
		</div>
	);
};

export default Guitarra;
