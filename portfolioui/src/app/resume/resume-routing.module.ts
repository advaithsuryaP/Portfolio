import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './resume/about/about.component';
import { CertificationsComponent } from './resume/certifications/certifications.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { ProjectsComponent } from './resume/projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './resume/skills/skills.component';

const routes: Routes = [
  { path: '', component: ResumeComponent, children: [
    { path: 'about', component: AboutComponent },
    { path: 'education', component: EducationComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'certifications', component: CertificationsComponent },
    { path: 'projects', component: ProjectsComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
