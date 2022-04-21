import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { KomponenComponent } from './komponen/komponen.component';
import { KomponenzComponent } from './komponenz/komponenz.component';
import { ListpublisherComponent } from './master/listpublisher/listpublisher.component';

const routes: Routes = [
  {path:"beranda", component:HomeComponent},
  {path:"aboutus", component:AboutComponent},
  {path:"komponen", component:KomponenComponent},
  {path:"publisher", component:ListpublisherComponent},
  {path:"editpublisher/:id", component:KomponenComponent},
  {path:"komponenz", component:KomponenzComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
