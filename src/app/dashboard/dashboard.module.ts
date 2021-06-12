import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InvoiceInfoComponent } from './invoice-info/invoice-info.component';
import { GraphInfoComponent } from './graph-info/graph-info.component';


@NgModule({
  declarations: [
    InvoiceInfoComponent,
    GraphInfoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
