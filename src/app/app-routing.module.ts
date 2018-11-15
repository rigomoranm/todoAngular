import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { TaskComponent } from './components/task/task.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  ///Este se agrega para que cuando no tenga nada mande a login
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'task',
        component: TaskComponent
      },
      {
        path: 'categories',
        component: CategoriesComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
