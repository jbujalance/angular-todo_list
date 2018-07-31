import { Injectable } from '@angular/core';
import { TodoTask } from '../model/todo-task';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;
  todoTasks: TodoTask[] = [];

  constructor() { }

  addTodo(pNewTask: TodoTask): TodoDataService {
    if (!pNewTask.id) {
      pNewTask.id = ++this.lastId;
    }
    this.todoTasks.push(pNewTask);
    return this;
  }

  deleteTodoById(pId: number): TodoDataService {
    this.todoTasks = this.todoTasks.filter(task => task.id != pId);
    return this;
  }

  updateTodoById(pId: number, pValues: Object = {}): TodoTask {
    let todoToUpdate = this.getTodoById(pId);
    if (!todoToUpdate) {
      return null;
    }
    Object.assign(todoToUpdate, pValues);
    return todoToUpdate;
  }

  getAllTodos(): TodoTask[] {
    return this.todoTasks;
  }

  getTodoById(pId: number): TodoTask {
    return this.todoTasks.filter(task => task.id === pId).pop();
  }

  toggleTodoComplete(pTodo: TodoTask): TodoTask {
    return this.updateTodoById(pTodo.id, {
      completed: !pTodo.completed
    });
  }
}
