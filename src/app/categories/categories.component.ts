import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { NewCategoryComponent } from './new-category/new-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any = [];

  constructor(private service: CategoriesService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().then(data => {
      this.categories = data;
    });
  }

  verTodos(item) {

  }

  crear() {
    console.log('crear');

    const dialogRef = this.dialog.open(NewCategoryComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categories.push(result);
      }

    });

  }

  editar(index, item) {
    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '250px',
      data: item.id
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categories[index] = result;
      }

    });

  }

  eliminar(index, item) {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '350px',
      data: { texto: item.nombre }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(item.id).then(data => {
          this.categories.splice(index, 1);
        });
      }
    });
  }

}
