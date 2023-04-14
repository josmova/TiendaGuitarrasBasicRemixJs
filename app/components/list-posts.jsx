import Post from "./post";
const ListPosts = ({ posts }) => {
	return (
		<>
			<h2 className="heading">blog</h2>
			<div className="blog">
				{posts.map((post) => (
					<Post
						key={post?.id}
						post={post?.attributes}
					/>
				))}
			</div>
		</>
	);
};

export default ListPosts;
