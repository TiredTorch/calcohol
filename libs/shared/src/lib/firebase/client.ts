import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const clientCredentials = {
	apiKey: `AIzaSyBEikBkcAZH5gtYIzAY4VL3Xp0s0KOhyec`,
	authDomain: `calcohol-3d5ef.firebaseapp.com`,
	projectId: `calcohol-3d5ef`,
	storageBucket: `calcohol-3d5ef.appspot.com`,
	messagingSenderId: `289727078536`,
	appId: `:289727078536:web:bad345589c72ed89a23f3d`,
	measurementId: `G-Z5QJQNPPGX`
};

export const firebaseApp = initializeApp(clientCredentials);
export const firestoreApp = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);