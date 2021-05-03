export interface Diary {
	id?: string;
	date: Date;
	title: string;
	contents: string;
	tags: string[];
	image: string | null;
	file: string | null;
}
