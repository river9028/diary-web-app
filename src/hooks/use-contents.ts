import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext } from '../context/firebase';
import { Diary } from '../types/type';

export default function useContents(target: string, start: Date, end: Date, tags: string[]) {
	const [content, setContent] = useState<Diary[]>([]);
	const { firebase } = useContext(FirebaseContext);

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

		const converter = <T>() => ({
			toFirestore: (data: Partial<T>) => data,
			fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) => snap.data() as T
		})


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
			// firebase
			//   ?.firestore()
			//   .collection(target)
			//   .where('date', '>=', start)
			//   .where('date', '<=', end)
			//   .orderBy('date')
			//   .withConverter({
			//     toFirestore(data: Diary): firebase.firestore.DocumentData {
			//       return data;
			//     },
			//     fromFirestore(
			//       snapshot: firebase.firestore.QueryDocumentSnapshot,
			//       options: firebase.firestore.SnapshotOptions,
			//     ): Diary {
			//       const data = snapshot.data(options);
			//       return { ...data, date: data.date.toDate() } as Diary;
			//     },
			//   })

			?.onSnapshot((snapshot) => {
				try {
					const allContent = snapshot.docs.map((contentObj) => ({
						...(contentObj.data() as Diary),
						// ...contentObj.data(),
						date: contentObj.data().date.toDate(),
						id: contentObj.id,
					}));

					// console.log(allContent);
					setContent(allContent.reverse());
				} catch (error) {
					// eslint-disable-next-line no-console
					console.log(error.message);
				}
			});
	}, [start, end, tags]);

	return { [target]: content };
}
