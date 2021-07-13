import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ReferencesRoutingModule } from './references-routing.module';

import { FormsComponent } from './references/forms/forms.component';
import { TablesComponent } from './references/tables/tables.component';
import { ReferencesComponent } from './references/references.component';
import { TypographyComponent } from './references/typography/typography.component';
import { ReferencesHeaderComponent } from './references-header/references-header.component';
import { TableFeaturesComponent } from './references/tables/table-features/table-features.component';
import { MaterialModule } from '../material/material.module';
import { MatTableComponent } from './references/tables/mat-table/mat-table.component';


@NgModule({
  declarations: [
    FormsComponent,
    TablesComponent,
    MatTableComponent,
    ReferencesComponent,
    TypographyComponent,
    ReferencesHeaderComponent,
    TableFeaturesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ReferencesRoutingModule,
  ]
})
export class ReferencesModule { }
