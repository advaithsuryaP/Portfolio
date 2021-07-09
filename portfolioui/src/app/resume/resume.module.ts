import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './resume/home/home.component';
import { AboutComponent } from './resume/about/about.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { CertificationsComponent } from './resume/certifications/certifications.component';


@NgModule({
  declarations: [
    ResumeComponent,
    ResumeHeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificationsComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule, 
  ]
})
export class ResumeModule { }
