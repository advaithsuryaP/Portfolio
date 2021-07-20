import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Chapter } from 'src/app/raahf/models/learning/library.model';
import { ChapterEditComponent } from './chapter-edit/chapter-edit.component';

@Component({
  selector: 'app-learning-edit',
  templateUrl: './learning-edit.component.html',
  styleUrls: ['./learning-edit.component.css']
})
export class LearningEditComponent implements OnInit {
  isPanelOpen = true;
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
  get values() { return (<FormArray>this.bookForm.get('chapters')).value; }

  /*
  * This function opens the ChapterEditComponent in a modal
  * The values filled in the modal gets added to the chapters Array
  */
  openChapterAddModal(event: MouseEvent): void {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ChapterEditComponent); 
    dialogRef.afterClosed().subscribe((result) => {
      if(result instanceof FormGroup) (<FormArray>this.bookForm.get('chapters')).push(result)
    });
  }

  /*
  * This function opens the ChapterEditComponent in a modal with pre-filled values
  * The FormArray 'chapters' is then updated with the new value  
  */
  openChapterEditModal(event: MouseEvent, control: AbstractControl, elemIndex: number) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ChapterEditComponent, {
      data: control.value
    });
    dialogRef.afterClosed().subscribe((result) => {
      const newChapterArr: Chapter[] = [];
      if(result instanceof FormGroup) {
        this.values.forEach((element: Chapter, index: number) => {
          if(index === elemIndex) newChapterArr.push(result.value);
          else newChapterArr.push(element);
        }); 
      }
      this.bookForm.get('chapters')?.patchValue(newChapterArr);
    });
  }

  /*
  * This function opens the ChapterDetailComponent in a modal
  * The data is passed to the modal for display
  */
  openChapterDetailModal(chapter: Chapter): void {
    // const dialogRef = this.dialog.open(ChapterDetailComponent, {
    //   data: chapter
    // });
  }

  /*
  * This function is called to delete the FormGroup Element from the 'chapters' FormArray using the index 
  */
  deleteChapter(index: number): void {
    (<FormArray>this.bookForm.get('chapters')).removeAt(index);
  }

  /*
  * This function submits the whole form and adds the book to the library
  */
  addBookToLibrary() {
    console.log(this.bookForm.value);
  }

  /*
  * Yet to figure out the functionality
  */
  refresh(event: MouseEvent) {
    event.stopPropagation();
  }

}
