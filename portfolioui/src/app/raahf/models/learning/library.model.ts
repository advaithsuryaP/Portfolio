export class Library {
    constructor(
        public category: 'devotion' | 'finance' | 'entrepreneurship',
        public books: Book[]
    ) {}
}

export class Book {
    constructor(
        public bookCategory: Library['category'],
        public bookTitle: string,
        public bookAuthor: string,
        public bookTimeline: number, // year ~ 2019
        public bookDescription: string,
        public bookImage: string,
        public bookStatus: string, // Completed - In Progress - Yet to start
        public chapters: Chapter[] 
    ) {}
}

export interface Chapter {
    chapterName: string;
    chapterDescription: string,
    keyPoints: string[]
}