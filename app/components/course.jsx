const Course = ({ curso }) => {
	const { titulo, contenido, publishedAt, imagen } = curso;

	return (
		<section className="course">
			<style jsx="true">{`
				.course {
					background-image: linear-gradient(
							to right,
							rgb(0 0 0 / 0.65),
							rgb(0 0 0 / 0.7)
						),
						url(${imagen.data.attributes.url});
				}
			`}</style>
			<div className="container course-grid">
				<div className="content">
					<h2 className="heading">{titulo}</h2>
					<p className="text">{contenido}</p>
				</div>
			</div>
		</section>
	);
};

export default Course;
