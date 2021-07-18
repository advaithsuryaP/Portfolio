import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chapter-edit',
  templateUrl: './chapter-edit.component.html',
  styleUrls: ['./chapter-edit.component.css']
})
export class ChapterEditComponent implements OnInit {
  chapterForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<ChapterEditComponent>) { }

  ngOnInit(): void {
    this.chapterForm = new FormGroup({
      chapterName: new FormControl('Chapter 1', [Validators.required]),
      chapterDescription: new FormControl('null'),
      keyPoints: new FormControl('null')
    });
  }

  addChapter() {
    this.dialogRef.close(this.chapterForm);
  }

}
