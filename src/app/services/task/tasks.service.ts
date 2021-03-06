import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/shared/Task';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  myTasks: Task[] = [

  ];
  myTaskSubject = new BehaviorSubject<Task[]>([...this.myTasks])
  myTaskObservables = this.myTaskSubject.asObservable()
  constructor() {}
  addTask(title:string,listId:string){
    const task:Task = {
      _id:uuid(),
      title:title,
      _listId:listId,
      completed:false
    }
    this.myTasks.push(task)
    this.myTaskSubject.next(this.myTasks)
    localStorage.setItem('tasks',JSON.stringify(this.myTaskSubject.value))
  }
  deleteTask(id:string){
    let index = 0
    for(let i=0;i<this.myTasks.length;i++){
      console.log(this.myTasks[i])
      if(this.myTasks[i]._id == id){
        index = i;
        break;
      }
    }
    console.log(index)
    this.myTasks.splice(index,1);
    this.myTaskSubject.next(this.myTasks)
    localStorage.setItem('tasks',JSON.stringify(this.myTaskSubject.value))

  }

  toogleCompletion(id:string){
    console.log(id)
    for(let item of this.myTasks){
      if(item._id===id){
        item.completed = !item.completed;
        break;
      }
    }
    this.myTaskSubject.next(this.myTasks)
    localStorage.setItem('tasks',JSON.stringify(this.myTaskSubject.value))
  }
  setDeafultTasks(data:string){
    this.myTasks = [...JSON.parse(data)]
    this.myTaskSubject.next([...JSON.parse(data)])
  }
  editTask(newTask:string,id:string){
    for(let item of this.myTasks){
      if(item._id === id){
        item.title = newTask
        break
      }
    }
    this.myTaskSubject.next(this.myTasks)
    localStorage.setItem('tasks',JSON.stringify(this.myTaskSubject.value))

  }
  getTaskTitle(id:string){
    let title:string =''
    console.log(this.myTaskSubject.value  )
    for(let item of this.myTaskSubject.value){
      if(item._id === id){
        console.log("inside if")
        title = item.title
        break
      }
    }
    return title
  }
  deleteTasksForaList(listId:string){
    this.myTasks = this.myTasks.filter(item=>{return item._listId!==listId});
    this.myTaskSubject.next(this.myTasks)
    localStorage.setItem('tasks',JSON.stringify(this.myTaskSubject.value))

  }
}
