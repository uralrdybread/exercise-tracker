
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    imports: [MatButtonModule, MatIconModule, 
            MatFormFieldModule, MatIconModule,
            FlexLayoutModule,    FormsModule,
            MatDatepickerModule, MatNativeDateModule,
            MatCheckboxModule,     ReactiveFormsModule,
            MatSidenavModule,     MatToolbarModule,
            MatListModule,      MatTabsModule,
            MatPaginatorModule,  MatCardModule,
            MatSelectModule,    MatProgressSpinnerModule],
    exports: [MatButtonModule, MatIconModule, 
            MatFormFieldModule, MatInputModule,
            FlexLayoutModule,    FormsModule,
            MatDatepickerModule, MatNativeDateModule,
            MatCheckboxModule,   ReactiveFormsModule,
            MatSidenavModule,   MatToolbarModule,
            MatListModule,      MatTabsModule,
            MatPaginatorModule,  MatCardModule,
            MatSelectModule,    MatProgressSpinnerModule]
})

export class MaterialModule {}