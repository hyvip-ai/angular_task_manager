import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from 'src/app/shared/List';
import { v4 as uuid } from 'uuid';
import { TasksService } from '../task/tasks.service';
@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private task:TasksService){}
  listId = new BehaviorSubject<string>('');
  listObservable = this.listId.asObservable();
  showModal = new BehaviorSubject<boolean>(false);
  showModalObservables = this.showModal.asObservable();
  myList: List[] = [];
  myListSubject = new BehaviorSubject<List[]>([...this.myList]);
  myListObservble = this.myListSubject.asObservable();
  addToList(item: string): void {
    this.myList.push({ _id: uuid(), title: item });
    this.myListSubject.next(this.myList);
    localStorage.setItem('lists', JSON.stringify(this.myListSubject.value));
  }
  deleteList(): void {
    this.showModal.next(false);
    this.task.deleteTasksForaList(this.listId.value)
    for (let i = 0; i < this.myListSubject.value.length; i++) {
      if (this.myListSubject.value[i]._id === this.listId.value) {
        this.listId.next('');
        let arr = this.myListSubject.value;
        arr.splice(i, 1);
        console.log(arr);
        this.myListSubject.next(arr);
        break;
      }
    }

    localStorage.setItem('lists', JSON.stringify(this.myListSubject.value));
  }
  changeListId(id: string) {
    this.listId.next(id);
  }
  togglModal() {
    this.showModal.next(!this.showModal.value);
  }
  setDeafultTasks(data: string) {
    this.myList = [...JSON.parse(data)]
    this.myListSubject.next([...JSON.parse(data)]);
  }
  editList(listName:string,id:string){
    for(let item of this.myList){
      if(item._id === id){
        item.title = listName
      }
    }
    this.myListSubject.next(this.myList)
    localStorage.setItem('lists', JSON.stringify(this.myListSubject.value));
  }
  getListTitle(id:string){
    let title:string =''
    console.log(this.myListSubject.value  )
    for(let item of this.myListSubject.value){
      if(item._id === id){
        console.log("inside if")
        title = item.title
        break
      }
    }
    return title
  }
}
