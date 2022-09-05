import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clientCredentials = {
	apiKey: process.env["NX_API_KEY"],
	authDomain: process.env["NX_AUTH_DOMAIN"],
	projectId: process.env["NX_PROJECT_ID"],
	storageBucket: process.env["NX_STORAGE_BUCKET"],
	messagingSenderId: process.env["NX_MESSAGING_SENDER_ID"],
	appId: process.env["NX_APP_ID"],
	measurementId: process.env["NX_MEASUREMENT_ID"]
};

export const firebaseApp = initializeApp(clientCredentials);
export const firestoreApp = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);