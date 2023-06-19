import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDyW77823MSajkNaSQ6fw9-u8JtbPD_D-E",
	authDomain: "fir-testing-53e54.firebaseapp.com",
	projectId: "fir-testing-53e54",
	storageBucket: "fir-testing-53e54.appspot.com",
	messagingSenderId: "530300578305",
	appId: "1:530300578305:web:594a5b6b3f79a5ad17ee00",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
