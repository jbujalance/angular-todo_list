import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoTask } from '../../model/todo-task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: TodoTask[];

  @Output()
  remove: EventEmitter<TodoTask> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<TodoTask> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleTodoComplete(todo: TodoTask) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: TodoTask) {
    this.remove.emit(todo);
  }

}
