import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public categoryId: any,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    private service: CategoriesService) {
  }

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.service.getById(this.categoryId).then(data => {
      this.category = data;
    });
  }

  edit() {
    this.service.update(this.categoryId, this.category).then(data => {
      this.dialogRef.close(this.category);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
