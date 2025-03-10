import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  imports : [CommonModule,FormsModule],
  templateUrl: './header.component.html',
})


export class HeaderComponent {
  
  value = "";
  todos :Todo[] = []
  updatedValue = ""

  handleAddTodo(e:Event) {
    this.value = (e.target as HTMLInputElement).value;
  }
  handleDisplayTodo(){
    if(!this.value){
      alert("Add Todo First")
      return
    }
    this.todos.push({todo : this.value ,id : Math.ceil(Math.random()*30) , edit : false })
    this.value = ""
  }

  handleDeleteTodo(id : number){
     let index = this.todos.findIndex((todo)=> todo.id === id)
     if(index !== -1){
       this.todos.splice(index,1)
     }
  }
  handleEditTodo(index:number){
      this.todos[index].edit = true
  }
  handleUpdateValue(event : Event){
    this.updatedValue = (event.target as HTMLInputElement).value;
  }
  handleUpdateTodo(index:number){
    if(!this.updatedValue) return
      this.todos.splice(index,1,{todo : this.updatedValue , id : index, edit : false})
  }
}
