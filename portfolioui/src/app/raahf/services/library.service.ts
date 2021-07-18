import { Injectable } from '@angular/core';
import { Book, Library } from '../models/learning/library.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  books: Book[] = [{
    bookCategory: 'devotion', 
    bookTitle: 'Bhagad Gita', 
    bookAuthor: 'Ved Vyas', 
    bookTimeline: 1500, 
    bookDescription: 'The sacred script', 
    bookImage: '', 
    bookStatus: 'In progress',
    chapters: [
      {chapterName: 'Introduction', chapterDescription: 'Temporary Description', keyPoints: ['Key Point 1', 'Key Point 2']}
    ]
  }];

  library: Library[] = [
    {category: 'devotion', books: this.books}
  ];

}
