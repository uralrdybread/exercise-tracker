
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


@NgModule({
    imports: [MatButtonModule, MatIconModule, 
            MatFormFieldModule, MatIconModule,
            FlexLayoutModule,    FormsModule,
            MatDatepickerModule, MatNativeDateModule,
            MatCheckboxModule,     ReactiveFormsModule,
            MatSidenavModule,     MatToolbarModule,
            MatListModule,      MatTabsModule,
                MatPaginatorModule],
    exports: [MatButtonModule, MatIconModule, 
            MatFormFieldModule, MatInputModule,
            FlexLayoutModule,    FormsModule,
            MatDatepickerModule, MatNativeDateModule,
            MatCheckboxModule,   ReactiveFormsModule,
            MatSidenavModule,   MatToolbarModule,
            MatListModule,      MatTabsModule,
                MatPaginatorModule]
})

export class MaterialModule {}