import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { doc, DocumentReference } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Drink, firestoreApp } from "@calcohol/shared";

const DrinkPageContainer = dynamic(() =>
    import("@calcohol/calcoholapp").then((module) => module.DrinkPageContainer));

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

    if (loading) {
        return <>Loading</>;
    }

    return (
        <>
            {!loading && !error && data && (
                <DrinkPageContainer data={data} />
            )}
        </>
    );
};

export default DrinkPage;