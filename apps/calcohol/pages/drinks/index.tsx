import { collection, CollectionReference, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DrinksPageContainer } from "@calcohol/calcoholapp";
import { Drink, firestoreApp } from "@calcohol/shared";

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