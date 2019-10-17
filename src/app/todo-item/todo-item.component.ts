import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from "../interfaces/itodo";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo;
  constructor(private TodoService: TodoService) {}

  ngOnInit() {}

  setDoing(): void {
    this.todo.isDoing = true;
  }
  setDone(): void {
    this.todo.isDone = true;
  }
  delete(): void {
    this.TodoService.delete(this.todo);
  }
  toggleEdit() {
    this.todo.isEditing = !this.todo.isEditing;
  }
}
