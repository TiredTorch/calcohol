import dynamic from "next/dynamic";
import { collection, CollectionReference, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Drink, firestoreApp } from "@calcohol/shared";

const DrinksPageContainer = dynamic(() =>
	import("@calcohol/calcoholapp").then((module) => module.DrinksPageContainer));

export const DrinksPage = () => {
	const [data, loading, error] = useCollectionData(query(collection(firestoreApp, "drinks") as CollectionReference<Drink>), {});

	return (
		<>
			{!loading && !error && (
				<DrinksPageContainer
					data={data}
				/>
			)
			}
		</>
	);
};

export default DrinksPage;