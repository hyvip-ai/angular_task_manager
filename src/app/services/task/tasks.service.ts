import { Injectable } from '@angular/core';
import { Task } from 'src/app/shared/Task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  myTasks: Task[] = [
    { _id: 0, _listId: 0, title: 'This rask belongs to frist list', completed: false },
    { _id: 3, _listId: 0, title: 'This rask belongs to frist list', completed: false },
    { _id: 1, _listId: 1, title: 'This task belongs to second lkist', completed: false },
    { _id: 2, _listId: 2, title: 'This task belongs to third list', completed: false },
  ];
  constructor() {}
  addTask(item:Task){
    this.myTasks.push(item)
  }
  deleteTask(id:number){
    let index = 0
    for(let i=0;i<this.myTasks.length;i++){
      if(this.myTasks[i]._id === id){
        index = i;
        break;
      }
    }
    this.myTasks.splice(index,1);
  }
  getTasks(listId:string|number){
    const myFilteredTasks = this.myTasks.filter(item=>{return item._listId === listId}) 
    return myFilteredTasks
  }
  toogleCompletion(id:number|string){
    for(let item of this.myTasks){
      if(item._id===id){
        item.completed = !item.completed;
        break;
      }
    }
  }
}
