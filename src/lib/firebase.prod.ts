import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
// import { seedDatabase } from '../seed';

// we need to somow seed the database

// we need a config here
const config = {
	apiKey: 'AIzaSyBbA7U2FudE7AGl4cUFw1BrkRdKGQmqORQ',
	authDomain: 'diary-web-app.firebaseapp.com',
	projectId: 'diary-web-app',
	storageBucket: 'diary-web-app.appspot.com',
	messagingSenderId: '552978950000',
	appId: '1:552978950000:web:a7f2b091e70ea937b091b5',
	measurementId: 'G-TEG27Z2S2G',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
