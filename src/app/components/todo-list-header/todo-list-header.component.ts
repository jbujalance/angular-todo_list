import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoTask } from '../../model/todo-task';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: TodoTask = new TodoTask();
  
  @Output()
  add: EventEmitter<TodoTask> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new TodoTask();
  }

}
