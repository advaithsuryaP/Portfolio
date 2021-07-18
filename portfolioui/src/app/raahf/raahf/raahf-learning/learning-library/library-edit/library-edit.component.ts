import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ChapterEditComponent } from '../chapter-edit/chapter-edit.component';

@Component({
  selector: 'app-library-edit',
  templateUrl: './library-edit.component.html',
  styleUrls: ['./library-edit.component.css']
})
export class LibraryEditComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.bookForm = this.fb.group({
      bookCategory: [null, [Validators.required]],
      bookTitle: [null, [Validators.required]],
      bookAuthor: [null, [Validators.required]],
      bookTimeline: [null, [Validators.required]],
      bookDescription: [null],
      bookImage: [null],
      chapters: new FormArray([])
    });
  }

  get chapters() { return (<FormArray>this.bookForm.get('chapters')).controls; }

  openChapterModal(): void {
    const dialogRef = this.dialog.open(ChapterEditComponent);
    dialogRef.afterClosed().subscribe((result) => {
      if(result instanceof FormGroup) {
        (<FormArray>this.bookForm.get('chapters')).push(result)
      }
    });
  }

  deleteChapter(chapter: any): void {
    const index = this.chapters.indexOf(chapter);
    console.log(index);
    (<FormArray>this.bookForm.get('chapters')).removeAt(index);
  }

  addBookToLibrary() {}

  refresh() {}

}
