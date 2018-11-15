import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  category: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<NewCategoryComponent>,
    private service: CategoriesService) { }

  ngOnInit() {
  }

  guardar() {
    this.service.add(this.category).then(data => {
      this.dialogRef.close(data);
    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
