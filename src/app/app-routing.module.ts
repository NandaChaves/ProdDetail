import path from 'path';
import { ProdListComponent } from './component/prod-list/prod-list.component';
import { ProdDetailComponent } from './component/prod-detail/prod-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: ProdListComponent},
  {path:'list/:id', component: ProdDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
