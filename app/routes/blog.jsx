import { Outlet } from "@remix-run/react";
import stylesBlog from "~/styles/blog.css";

export function links() {
	return [
		{
			rel: "stylesheet",
			href: stylesBlog,
		},
	];
}

const Blog = () => {
	return (
		<main className="container">
			<Outlet />
		</main>
	);
};

export default Blog;
