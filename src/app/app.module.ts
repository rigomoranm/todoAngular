import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule, NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LayoutComponent,
    HomeComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
