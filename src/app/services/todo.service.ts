import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {}
    todoList: ITodo [] = [
        {id: 1, title: "something", isDoing: false, isDone: false, isEditing: false},
        {id: 2, title: "something else", isDoing: false, isDone: false, isEditing: false},
        {id: 3, title: "another thing", isDoing: false, isDone: false, isEditing: false},      
    ];

    getAll(): ITodo[] {
      return this.todoList;
    }
  
    getDone(): ITodo[] {
      return this.todoList.filter(todo => todo.isDone);
    }
  
    getDoing(): ITodo[] {
      return this.todoList.filter(todo => todo.isDoing && !todo.isDone);
    }
  
    getTodo(): ITodo[] {
      return this.todoList.filter(todo => !todo.isDoing && !todo.isDone);
    }
  
    add(title: string): void {
      const newId =
        this.todoList
          .map(x => x.id)
          .reduce((prev, curr) => (prev < curr ? curr : prev)) + 1;
  
      this.todoList.push({
        id: newId,
        title: title,
        isDoing: false,
        isDone: false,
        isEditing: false
      });
    }
  
    delete(todo: ITodo): void {
      var index = this.todoList.findIndex(todo => todo === todo);
      this.todoList.splice(index, 1);
    }
   }

