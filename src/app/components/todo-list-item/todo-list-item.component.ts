import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoTask } from '../../model/todo-task';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input()
  todo: TodoTask;

  @Output()
  remove: EventEmitter<TodoTask> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoTask> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleTodoComplete(todo: TodoTask) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: TodoTask) {
    this.remove.emit(todo);
  }

}
