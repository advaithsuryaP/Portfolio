import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaahfComponent } from './raahf/raahf.component';
import { RaahfHomeComponent } from './raahf/raahf-home/raahf-home.component';
import { RaahfGoalsComponent } from './raahf/raahf-goals/raahf-goals.component';
import { RaahfFinanceComponent } from './raahf/raahf-finance/raahf-finance.component';
import { RaahfHealthComponent } from './raahf/raahf-health/raahf-health.component';
import { RaahfLearningComponent } from './raahf/raahf-learning/raahf-learning.component';
import { RaahfSecurityComponent } from './raahf/raahf-security/raahf-security.component';
import { RaahfDashboardComponent } from './raahf/raahf-dashboard/raahf-dashboard.component';
import { LearningHomeComponent } from './raahf/raahf-learning/learning-home/learning-home.component';
import { LearningEditComponent } from './raahf/raahf-learning/learning-edit/learning-edit.component';

const routes: Routes = [
  {
    path: '', component: RaahfComponent, children: [
      { path: '', component: RaahfHomeComponent },
      { path: 'dashboard', component: RaahfDashboardComponent },
      { path: 'finance', component: RaahfFinanceComponent },
      { path: 'goals', component: RaahfGoalsComponent },
      { path: 'health', component: RaahfHealthComponent },
      { path: 'learning', component: RaahfLearningComponent, children: [
        { path: '', component: LearningHomeComponent },
        { path: 'add', component: LearningEditComponent }
      ]},
      { path: 'security', component: RaahfSecurityComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaahfRoutingModule { }
