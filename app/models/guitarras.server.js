export async function getGuitarras() {
	const response = await fetch(
		`${process.env.API_URL}/guitarras?populate=imagen`
	);
	return await response.json();
}

export async function getGuitarra(url) {
	const response = await fetch(
		`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
	);
	return await response.json();
}
