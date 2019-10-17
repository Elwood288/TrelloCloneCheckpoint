import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofTodoItemsComponent } from './listof-todo-items.component';

describe('ListofTodoItemsComponent', () => {
  let component: ListofTodoItemsComponent;
  let fixture: ComponentFixture<ListofTodoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofTodoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
