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
import { LearningLibraryComponent } from './raahf/raahf-learning/learning-library/learning-library.component';
import { LearningGeographyComponent } from './raahf/raahf-learning/learning-geography/learning-geography.component';
import { LearningHistoryComponent } from './raahf/raahf-learning/learning-history/learning-history.component';
import { LibraryEditComponent } from './raahf/raahf-learning/learning-library/library-edit/library-edit.component';
import { LibraryListComponent } from './raahf/raahf-learning/learning-library/library-list/library-list.component';
import { ChapterEditComponent } from './raahf/raahf-learning/learning-library/chapter-edit/chapter-edit.component';
import { ChapterDetailComponent } from './raahf/raahf-learning/learning-library/chapter-detail/chapter-detail.component';



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
    LearningLibraryComponent,
    LearningGeographyComponent,
    LearningHistoryComponent,
    LibraryEditComponent,
    LibraryListComponent,
    ChapterEditComponent,
    ChapterDetailComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RaahfRoutingModule
  ]
})
export class RaahfModule { }
