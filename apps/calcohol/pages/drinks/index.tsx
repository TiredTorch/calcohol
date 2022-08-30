import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { DrinksPageContainer } from "@calcohol/calcoholapp";
import { Drink, firestoreApp } from "@calcohol/shared";

export const DrinksPage = () => {
	const [data, loading, error] = useCollection(collection(firestoreApp, "drinks"), {});

	return (
		<>
			{!loading && !error && (
				<DrinksPageContainer
					data={data.docs.map((item) => ({
						...item.data(),
						uid: item.id
					}) as Drink)}
				/>
			)
			}
		</>
	);
};

export default DrinksPage;