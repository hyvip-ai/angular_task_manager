import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/list/lists.service';
import { List } from 'src/app/shared/List';

@Component({
  selector: 'app-task-left',
  templateUrl: './task-left.component.html',
  styleUrls: ['./task-left.component.css']
})
export class TaskLeftComponent implements OnInit {
  myLists:List[] = []
  constructor(private listService:ListsService,private router:Router) { }

  ngOnInit(): void {
   this.myLists = this.listService.getList()
  }
  addList(){
    this.router.navigate(["/addList"]);
  }
}
