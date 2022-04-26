import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { KomponenComponent } from './komponen/komponen.component';
import { KomponenzComponent } from './komponenz/komponenz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListpublisherComponent } from './master/listpublisher/listpublisher.component';
import { HttpClientModule } from '@angular/common/http';
import { ListauthorComponent } from './listauthor/listauthor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    KomponenComponent,
    KomponenzComponent,
    ListpublisherComponent,
    ListauthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
