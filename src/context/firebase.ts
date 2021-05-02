import { createContext } from 'react';
import Firebase from 'firebase/app';

export const FirebaseContext = createContext<{ firebase: Firebase.app.App | null }>({ firebase: null });
