import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from 'src/app/shared/List';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  listId = new BehaviorSubject<number | string | null>(0)
  listObservable = this.listId.asObservable()
  myList: List[] = [
    { _id: 0, title: 'List Item 1' },
    { _id: 1, title: 'List Item 2' },
    { _id: 2, title: 'List Item 3' },
 
  ];
  constructor() {}
  getList(): List[] {
    return this.myList;
  }
  addToList(item: string): void {
    this.myList.push({ _id: this.myList.length, title: item });
  }
  deleteList(index: number): void {
    this.myList.splice(index, 1);
  }
  changeListId(id:number|string){
      this.listId.next(id)
  }
}
