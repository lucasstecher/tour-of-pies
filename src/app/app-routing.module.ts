import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiesComponent } from './pies/pies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PieDetailComponent } from './pie-detail/pie-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'pies', component: PiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
