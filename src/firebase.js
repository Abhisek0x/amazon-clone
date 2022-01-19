import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyDzw0lOcJZxYDl8Qeh-G1t7I3qDEtsjt3s",
	authDomain: "clone-884b3.firebaseapp.com",
	projectId: "clone-884b3",
	storageBucket: "clone-884b3.appspot.com",
	messagingSenderId: "408949160946",
	appId: "1:408949160946:web:d8b3529dacb3fef63cc96b",
	measurementId: "G-Q7JR6CMGFL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
