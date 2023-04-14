import { Link } from "@remix-run/react";
const Guitarra = ({ guitarra }) => {
	const { nombre, descripcion, precio, imagen, url } = guitarra;
	return (
		<div className="guitarra">
			<img
				src={imagen.data.attributes.formats.medium.url}
				alt={`Imagen de la guitarra ${nombre}`}
				className="imageGuitarra"
			/>
			<div className="content">
				<h3>{nombre}</h3>
				<p className="description">{descripcion}</p>
				<p className="price">${precio}</p>
				<Link
					className="link"
					to={`/guitarras/${url}`}
				>
					Ver Producto
				</Link>
			</div>
		</div>
	);
};

export default Guitarra;
