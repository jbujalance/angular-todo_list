import { TodoTask } from './todo-task';

describe('TodoTask', () => {
  it('should create an instance', () => {
    expect(new TodoTask()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new TodoTask({
      id: 5,
      title: 'hello',
      complete: true
    });
    expect(todo.id).toEqual(5);
    expect(todo.title).toEqual('hello');
    expect(todo.completed).toEqual(false);
  });
});
