import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { formatDate } from "~/utils/helpers";

export function meta({ data }) {
	if (!data) {
		return {
			title: "GuitarLA - Post no encontrada",
			descripcion: `Guitarras, venta de guitarras, guitarra no encontrada `,
		};
	}
	return {
		title: `GuitarLA - ${data.data[0].attributes.titulo}`,
		descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo} `,
	};
}

export async function loader({ params }) {
	const { postUrl } = params;
	const post = await getPost(postUrl);
	if (post.data.length === 0) {
		throw new Response("", {
			status: 404,
			statusText: "No se encontro post",
		});
	}
	return post;
}

const Post = () => {
	const post = useLoaderData();
	const { titulo, contenido, imagen, publishedAt } =
		post?.data[0]?.attributes;
	return (
		<article className="post mt-3">
			<img
				className="image"
				src={imagen?.data?.attributes?.url}
				alt={`imagen del post ${titulo}`}
			/>
			<div className="content">
				<h3>{titulo}</h3>
				<p className="date">{formatDate(publishedAt)}</p>
				<p className="text">{contenido}</p>
			</div>
		</article>
	);
};

export default Post;
