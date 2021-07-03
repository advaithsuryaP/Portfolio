import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ReferencesRoutingModule } from './references-routing.module';

import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableComponent } from './references/tables/mat-table/mat-table.component';

import { FormsComponent } from './references/forms/forms.component';
import { TablesComponent } from './references/tables/tables.component';
import { ReferencesComponent } from './references/references.component';
import { TypographyComponent } from './references/typography/typography.component';
import { ReferencesHeaderComponent } from './references-header/references-header.component';
import { TableFeaturesComponent } from './references/tables/table-features/table-features.component';


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
    MatCardModule,
    MatSortModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRippleModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    ReferencesRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ReferencesModule { }
