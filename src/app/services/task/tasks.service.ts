import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/shared/Task';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  myTasks: Task[] = [
    { _id: "31ad0259-609a-458f-b519-38b19ca6d3f8", _listId: "49f0d4ff-760b-4d04-99a4-1810c97037f1", title: 'This rask belongs to frist list', completed: false },
    { _id: "cc8b2a8c-dc7d-4222-924f-2fe20ec668bf", _listId: "49f0d4ff-760b-4d04-99a4-1810c97037f1", title: 'This rask belongs to frist list second task lzkncjkzdc zkjcbkjdckjdzbckj', completed: false },
    { _id: "00bc560e-173d-41f9-909e-1a90a28554d6", _listId: "ae9dab30-b5b9-40ad-8391-9a29606f697b", title: 'This task belongs to second lkist', completed: false },
    { _id: "524fae26-1459-4563-a00b-573e9f3be082", _listId: "d10c3d24-48b4-47ee-92d7-e9b9cf229374", title: 'This task belongs to third list', completed: false },
  ];
  myTaskSubject = new BehaviorSubject<Task[]>(this.myTasks)
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
  }

  toogleCompletion(id:string){
    for(let item of this.myTasks){
      if(item._id===id){
        item.completed = !item.completed;
        break;
      }
    }
  }
}
