import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/shared/models/todoItem';
import { TodoItemService } from 'src/app/services/todo-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private todoItemService:TodoItemService) { }
  todoItems:TodoItem[];

  ngOnInit() {

    this.todoItemService.getAll()
    .subscribe(todoItemsSub => {
      this.todoItems = todoItemsSub;
  });
  }

}
