import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './references/forms/forms.component';
import { ReferencesComponent } from './references/references.component';
import { TablesComponent } from './references/tables/tables.component';
import { TypographyComponent } from './references/typography/typography.component';

const routes: Routes = [
  { path: '', component: ReferencesComponent, children: [
    { path: 'forms', component: FormsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'tables', component: TablesComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferencesRoutingModule { }
