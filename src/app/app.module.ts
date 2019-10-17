import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListofTodoItemsComponent } from './listof-todo-items/listof-todo-items.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    ListofTodoItemsComponent,
    ConfirmationModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule, 
    FormsModule
    
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
