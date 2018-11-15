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
import { CategoriesComponent } from './categories/categories.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { NewCategoryComponent } from './categories/new-category/new-category.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LayoutComponent,
    HomeComponent,
    TaskComponent,
    CategoriesComponent,
    EditCategoryComponent,
    NewCategoryComponent,
    ConfirmDeleteComponent
  ],
  entryComponents: [
    EditCategoryComponent,
    NewCategoryComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
