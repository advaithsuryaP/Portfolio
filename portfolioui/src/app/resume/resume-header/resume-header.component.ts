import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.css']
})
export class ResumeHeaderComponent implements OnInit {
  isDarkMode: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }

}
