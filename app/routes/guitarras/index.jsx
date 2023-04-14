import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListGuitarras from "~/components/list-guitarras";

export function meta() {
	return {
		title: "GuitarLA - Tienda de Guitarras",
		description: "GuitarLA - Nuesta colección de Guitarras",
	};
}

export async function loader() {
	const guitarras = await getGuitarras();
	return guitarras?.data;
}

const Store = () => {
	const guitarras = useLoaderData();

	return <ListGuitarras guitarras={guitarras} />;
};

export default Store;
