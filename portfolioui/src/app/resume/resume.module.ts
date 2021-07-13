import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';

import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './resume/home/home.component';
import { AboutComponent } from './resume/about/about.component';
import { SkillsComponent } from './resume/skills/skills.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { ResumeHeaderComponent } from './resume-header/resume-header.component';
import { CertificationsComponent } from './resume/certifications/certifications.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    ResumeHeaderComponent,
    CertificationsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ResumeRoutingModule,
  ]
})
export class ResumeModule { }
