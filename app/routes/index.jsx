import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/post.server";
import { getCurso } from "~/models/course.server";
import stylesGuitarrasIndex from "~/styles/guitarras.css";
import stylesPostsIndex from "~/styles/blog.css";
import stylesCourseIndex from "~/styles/course.css";
import ListGuitarras from "~/components/list-guitarras";
import ListPosts from "~/components/list-posts";
import Course from "~/components/course";

export function meta() {}
export function links() {
	return [
		{
			rel: "stylesheet",
			href: stylesGuitarrasIndex,
		},
		{
			rel: "stylesheet",
			href: stylesPostsIndex,
		},
		{
			rel: "stylesheet",
			href: stylesCourseIndex,
		},
	];
}
export async function loader() {
	const [guitarras, posts, curso] = await Promise.all([
		getGuitarras(),
		getPosts(),
		getCurso(),
	]);
	return {
		guitarras: guitarras.data,
		posts: posts.data,
		curso: curso.data,
	};
}

const Index = () => {
	const { guitarras, posts, curso } = useLoaderData();

	return (
		<>
			<main className="container">
				<ListGuitarras guitarras={guitarras} />
			</main>
			<Course curso={curso.attributes} />
			<section className="container">
				<ListPosts posts={posts} />
			</section>
		</>
	);
};

export default Index;
