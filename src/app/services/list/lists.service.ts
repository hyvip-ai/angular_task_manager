import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from 'src/app/shared/List';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class ListsService {
  listId = new BehaviorSubject<string>('')
  listObservable = this.listId.asObservable()
  myList: List[] = [
    // { _id: "49f0d4ff-760b-4d04-99a4-1810c97037f1", title: 'List Item 1' },
    // { _id: "ae9dab30-b5b9-40ad-8391-9a29606f697b", title: 'List Item 2' },
    // { _id: "d10c3d24-48b4-47ee-92d7-e9b9cf229374", title: 'List Item 3' },
 
  ];
  constructor() {}
  getList(): List[] {
    return this.myList;
  }
  addToList(item: string): void {
    this.myList.push({ _id: uuid(), title: item });
  }
  deleteList(index: number): void {
    this.myList.splice(index, 1);
  }
  changeListId(id:string){
      this.listId.next(id)
  }
}
