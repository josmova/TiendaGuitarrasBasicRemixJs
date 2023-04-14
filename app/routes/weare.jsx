import imgWeare from "../../public/img/nosotros.jpg";
import stylesWeare from "~/styles/weare.css";

export function meta() {
	return {
		title: "GuitarLA - Sobre Nosotros",
		description: "Venta de guitarras, blog de música",
	};
}

export function links() {
	return [
		{
			rel: "stylesheet",
			href: stylesWeare,
		},
		{
			rel: "preload",
			href: imgWeare,
			as: "image",
		},
	];
}

const weare = () => {
	return (
		<main className="container weare">
			<h2 className="heading">Nosotros</h2>
			<div className="content">
				<img
					src={imgWeare}
					alt="imagen sobre nosotros"
				/>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dignissimos architecto deleniti ipsum esse minima
						quisquam natus aut unde commodi suscipit autem
						consectetur harum, ut error obcaecati veniam assumenda
						accusantium. Numquam! quisquam natus aut unde commodi
						suscipit autem consectetur harum, ut error obcaecati
						veniam assumenda accusantium. Numquam!suscipit autem
						consectetur harum, ut error obcaecati veniam assumenda
						accusantium. Numquam!
					</p>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Delectus, eaque nisi? Veniam omnis vero iusto
						maiores aperiam eius. Blanditiis non sed nemo vero natus
						iste hic. Quibusdam, optio ab molestias est quo
						consectetur distinctio voluptatibus.Blanditiis non sed
						nemo vero natus iste hic. Quibusdam, optio ab molestias
						est quo consectetur distinctio voluptatibus.
					</p>
				</div>
			</div>
		</main>
	);
};

export default weare;
