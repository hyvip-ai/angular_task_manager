import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/list/lists.service';
import { List } from 'src/app/shared/List';

@Component({
  selector: 'app-task-left',
  templateUrl: './task-left.component.html',
  styleUrls: ['./task-left.component.css'],
})
export class TaskLeftComponent implements OnInit {
  myLists: List[] = [];
  filteredList: List[] = [];
  filterData: string = '';
  constructor(private listService: ListsService, private router: Router) {}

  ngOnInit(): void {
   this.listService.myListObservble.subscribe(res=>{
     this.myLists = [...res]
    this.filteredList = [...this.myLists];

   })
  }
  addList() {
    this.router.navigate(['/addList']);
  }
  filterList() {
    this.filteredList = this.myLists.filter((item) => {
      return item.title.toLowerCase().includes(this.filterData.toLowerCase());
    });
    console.log(this.filteredList);
  }
}
