import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDocument } from "react-firebase-hooks/firestore";
import { firestoreApp } from "@calcohol/shared";
import { doc } from "firebase/firestore";

export const DrinkPage = () => {
    const router = useRouter();
    const [drinkUId, setDrinkUId] = useState(" ");

    useEffect(() => {
        if (!router.query.drinkId || Array.isArray(router.query.drinkId)) return;
        setDrinkUId(router.query.drinkId);
    }, [router]);

    const [snapshot, loading, error] = useDocument(
        doc(firestoreApp, `drinks`, drinkUId), {}
    );
    return (
        <>
            {!loading && !error && snapshot && (
                <div>{snapshot.data()?.name}</div>
            )}
        </>
    );
};

export default DrinkPage;