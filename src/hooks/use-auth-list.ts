import { useState, useEffect, useContext } from 'react';
import firebase from 'firebase';
import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
	const localStorageAuthUser = localStorage.getItem('authUser');
	const initialUser = localStorageAuthUser ? JSON.parse(localStorageAuthUser) as firebase.User : null

	const [user, setUser] = useState<firebase.User | null>(initialUser);

	const { firebase } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = firebase?.auth().onAuthStateChanged((authUser) => {
			if (authUser) {
				localStorage.setItem('authUser', JSON.stringify(authUser));
				setUser(authUser);
			} else {
				localStorage.removeItem('authUser');
				setUser(null);
			}
		});

		return () => listener && listener();
	}, []);

	return user;
}
