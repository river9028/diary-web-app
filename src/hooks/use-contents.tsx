import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext } from '../context/firebase';
import { Diary } from '../types/type';

export default function useContents(target: string, start: Date, end: Date, tags: string[]) {
  const [content, setContent] = useState<Diary[]>([]);
  const { firebase } = useContext(FirebaseContext);

  const fn = (
    callback: () => firebase.firestore.Query<firebase.firestore.DocumentData> | undefined,
    tags: string[],
  ) => {
    if (tags.length !== 0) {
      return callback()?.where('tags', 'array-contains-any', [...tags]);
    }
    return callback();
  };

  useEffect(() => {
    const isTagsEmpty = (
      callback: () => firebase.firestore.Query<firebase.firestore.DocumentData> | undefined,
      tags: string[],
    ) => {
      if (tags.length !== 0) {
        return callback()?.where('tags', 'array-contains-any', [...tags]);
      }
      return callback();
    };

    isTagsEmpty(
      () =>
        firebase
          ?.firestore()
          .collection(target)
          .where('date', '>=', start)
          .where('date', '<=', end)
          .orderBy('date'),
      tags,
    )
      ?.get()
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
        // eslint-disable-next-line no-console
        console.log(error.message);
      });
  }, [start, end, tags]);

  return { [target]: content };
}
