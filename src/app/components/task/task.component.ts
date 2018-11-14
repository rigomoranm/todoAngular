import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/shared/models/todoItem';
import { TodoItemService } from 'src/app/services/todo-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(
    private router: Router,
    private todoItemService:TodoItemService) { }

  todoItem:TodoItem;
  ngOnInit() {
    this.todoItem = new TodoItem();
  }


  guardar(): void{
    this.todoItemService.save(this.todoItem)
      .subscribe(result => {
        console.log(result);
          this.router.navigate(['/home']);    
      },
      error=>{

      });

  }
}
