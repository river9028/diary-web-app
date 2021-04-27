import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { Diary } from '../types/type';

export default function useContents(target: string, start: Date, end: Date) {
  const [content, setContent] = useState<Diary[]>([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      ?.firestore()
      .collection(target)
      .where('date', '>=', start)
      .where('date', '<=', end)
      .orderBy('date')
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...(contentObj.data() as Diary),
          date: contentObj.data().date.toDate(),
          id: contentObj.id,
        }));

        // console.log(allContent);
        setContent(allContent.reverse());
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [start, end]);

  return { [target]: content };
}
