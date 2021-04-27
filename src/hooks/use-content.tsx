import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext } from '../context/firebase';
import { Diary } from '../types/type';

export default function useContent(docId: string) {
  const [content, setContent] = useState<Diary>();
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      ?.firestore()
      .doc(`diary/${docId}`)
      .get()
      .then((snapshot) => {
        console.log(snapshot.data());

        const currentDate = snapshot.data() as firebase.firestore.DocumentData;
        setContent({
          ...(currentDate as Diary),
          date: currentDate.date.toDate(),
          id: docId,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { diary: content };
}
