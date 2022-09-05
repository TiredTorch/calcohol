import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { doc, DocumentReference } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { DrinkPageContainer } from "@calcohol/calcoholapp";
import { Drink, firestoreApp } from "@calcohol/shared";

export const DrinkPage = () => {
    const router = useRouter();
    const [drinkUId, setDrinkUId] = useState(" ");

    useEffect(() => {
        if (!router.query.drinkId || Array.isArray(router.query.drinkId)) return;
        setDrinkUId(router.query.drinkId);
    }, [router]);

    const [data, loading, error] = useDocumentData(
        (doc(firestoreApp, `drinks`, drinkUId) as DocumentReference<Drink>), {}
    );
    return (
        <>
            {!loading && !error && data && (
                <DrinkPageContainer data={data} />
            )}
        </>
    );
};

export default DrinkPage;