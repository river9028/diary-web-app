export interface Diary {
	id?: string;
	date: Date; // Daete.now()로 date를 설정해주는게 좋을 듯 하다. 타입은 number
	title: string;
	contents: string;
	tags: string[];
	image: string | null;
	file: string | null;
}
