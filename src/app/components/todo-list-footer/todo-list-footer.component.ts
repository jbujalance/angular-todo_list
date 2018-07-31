import { Component, OnInit, Input } from '@angular/core';
import { TodoTask } from '../../model/todo-task';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent implements OnInit {

  @Input()
  todos: TodoTask[];

  constructor() { }

  ngOnInit() {
  }

}
