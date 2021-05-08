import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext } from '../context/firebase';
import { Diary } from '../types/type';

export default function useContent(docId: string) {
  const [content, setContent] = useState<Diary>();
  const { firebase } = useContext(FirebaseContext);

  const remove = (editedDiary: Diary) => {
    const { image } = editedDiary;

    if (image) {
      firebase?.storage().refFromURL(image).delete();
    }

    firebase?.firestore().doc(`diary/${docId}`).delete();
  };

  const update = (eidtedDiary: Diary) => {
    const { title, contents, tags, file, image } = eidtedDiary;
    firebase?.firestore().doc(`diary/${docId}`).update({
      title,
      contents,
      tags,
      file,
      image,
    });
  };

  useEffect(() => {
    firebase
      ?.firestore()
      .doc(`diary/${docId}`)
      .get()
      .then((snapshot) => {
        const currentDate = snapshot.data() as firebase.firestore.DocumentData;
        setContent({
          ...(currentDate as Diary),
          date: currentDate.date.toDate(),
          id: docId,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  }, []);

  return { diary: content, remove, update };
}
