import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'references', loadChildren: () => import('./references/references.module').then(m => m.ReferencesModule) },
  { path: 'raahf', loadChildren: () => import('./raahf/raahf.module').then(m => m.RaahfModule) },
  { path: '', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
