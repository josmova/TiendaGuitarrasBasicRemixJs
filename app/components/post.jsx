import { Link } from "@remix-run/react";
import { formatDate } from "~/utils/helpers";

const Post = ({ post }) => {
	const { titulo, contenido, imagen, url, publishedAt } = post;

	return (
		<article className="post">
			<img
				className="imagen"
				src={imagen.data.attributes.url}
				alt={`imgen blog ${titulo}`}
			/>
			<div className="content">
				<h3>{titulo}</h3>
				<p className="date">{formatDate(publishedAt)}</p>
				<p className="summary">{contenido}</p>
				<Link
					className="link"
					to={`/blog/${url}`}
				>
					Leer más...
				</Link>
			</div>
		</article>
	);
};

export default Post;
