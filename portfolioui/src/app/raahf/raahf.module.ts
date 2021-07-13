import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { RaahfRoutingModule } from './raahf-routing.module';

import { RaahfComponent } from './raahf/raahf.component';
import { RaahfHomeComponent } from './raahf/raahf-home/raahf-home.component';
import { RaahfGoalsComponent } from './raahf/raahf-goals/raahf-goals.component';
import { RaahfSidebarComponent } from './raahf-sidebar/raahf-sidebar.component';
import { RaahfFinanceComponent } from './raahf/raahf-finance/raahf-finance.component';
import { RaahfHealthComponent } from './raahf/raahf-health/raahf-health.component';
import { RaahfLearningComponent } from './raahf/raahf-learning/raahf-learning.component';
import { RaahfSecurityComponent } from './raahf/raahf-security/raahf-security.component';
import { RaahfDashboardComponent } from './raahf/raahf-dashboard/raahf-dashboard.component';



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

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RaahfRoutingModule
  ]
})
export class RaahfModule { }
