import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceInfoComponent } from './invoice-info/invoice-info.component';

const routes: Routes = [
  { path: '',redirectTo:'dashboard',pathMatch:'full'},
  { path:'dashboard', component: InvoiceInfoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
