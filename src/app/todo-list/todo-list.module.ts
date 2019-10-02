import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    CommonsModule
  ]
})
export class TodoListModule { }
