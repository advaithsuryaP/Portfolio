import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {} from '@angular/material/toolbar';

import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { CertificationsComponent } from './resume/certifications/certifications.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { AboutComponent } from './resume/about/about.component';


@NgModule({
  declarations: [
    ResumeComponent,
    ResumeHeaderComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CertificationsComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule, 
  ]
})
export class ResumeModule { }
