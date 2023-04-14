import { useLoaderData } from "@remix-run/react";
import ListPosts from "~/components/list-posts";
import { getPosts } from "~/models/post.server";

export function meta() {
	return {
		title: "GuitarLA - Nuestro Blog",
		description: "GuitarLA, Blog de música y venta de guitarras",
	};
}

export async function loader() {
	const posts = await getPosts();

	return posts.data;
}

const Blog = () => {
	const posts = useLoaderData();

	return <ListPosts posts={posts} />;
};

export default Blog;
