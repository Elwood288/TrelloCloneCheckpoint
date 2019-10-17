import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/ITodo'

@Component({
  selector: 'app-listof-todo-items',
  templateUrl: './listof-todo-items.component.html',
  styleUrls: ['./listof-todo-items.component.scss']
})
export class ListofTodoItemsComponent implements OnInit {
  @Input() todos: ITodo[];
  constructor() {}

  ngOnInit() {}

}
