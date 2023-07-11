import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { PaginationsComponent } from 'src/app/components/paginations/paginations.component';

@NgModule({
  declarations: [MainComponent, TableComponent, PaginationsComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule { }
