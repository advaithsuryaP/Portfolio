import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { RaahfRoutingModule } from './raahf-routing.module';
import { MaterialModule } from '../material/material.module';

import { RaahfComponent } from './raahf/raahf.component';
import { RaahfHomeComponent } from './raahf/raahf-home/raahf-home.component';
import { RaahfGoalsComponent } from './raahf/raahf-goals/raahf-goals.component';
import { RaahfSidebarComponent } from './raahf-sidebar/raahf-sidebar.component';
import { RaahfFinanceComponent } from './raahf/raahf-finance/raahf-finance.component';
import { RaahfHealthComponent } from './raahf/raahf-health/raahf-health.component';
import { RaahfLearningComponent } from './raahf/raahf-learning/raahf-learning.component';
import { RaahfSecurityComponent } from './raahf/raahf-security/raahf-security.component';
import { RaahfDashboardComponent } from './raahf/raahf-dashboard/raahf-dashboard.component';
import { ChapterEditComponent } from './raahf/raahf-learning/learning-edit/chapter-edit/chapter-edit.component';
import { LearningHeaderComponent } from './raahf/raahf-learning/learning-header/learning-header.component';
import { LearningHomeComponent } from './raahf/raahf-learning/learning-home/learning-home.component';
import { LearningEditComponent } from './raahf/raahf-learning/learning-edit/learning-edit.component';

@NgModule({
  declarations: [
    RaahfComponent,
    RaahfHomeComponent,
    RaahfGoalsComponent,
    RaahfHealthComponent,
    RaahfFinanceComponent,
    RaahfSidebarComponent,
    RaahfSecurityComponent,
    RaahfLearningComponent,
    RaahfDashboardComponent,
    ChapterEditComponent,
    LearningHeaderComponent,
    LearningHomeComponent,
    LearningEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RaahfRoutingModule
  ]
})
export class RaahfModule { }
