import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { GraphInfoComponent } from './dashboard/graph-info/graph-info.component';
import { InvoiceInfoComponent } from './dashboard/invoice-info/invoice-info.component';
import { SetupComponent } from './setup/setup.component';

const routes: Routes = [
  // { path:'./', component: AppComponent},
  { path: '',loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path:'search', component: SetupComponent},
  { path:'report', component: GraphInfoComponent},
  { path:'setup', component: InvoiceInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
