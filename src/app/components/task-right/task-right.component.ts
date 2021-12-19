import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/list/lists.service';
import { TasksService } from 'src/app/services/task/tasks.service';
import { List } from 'src/app/shared/List';
import { Task } from 'src/app/shared/Task';

@Component({
  selector: 'app-task-right',
  templateUrl: './task-right.component.html',
  styleUrls: ['./task-right.component.css']
})
export class TaskRightComponent implements OnInit,OnChanges {

  constructor(private task:TasksService,private list:ListsService,private router:Router) { }
  myTasks:Task[] = []
  listName:string =''
  myLists:List[] = []
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
      console.log(this.listId)
      if(this.listId !== null){
        this.myTasks = this.task.getTasks(this.listId)
        this.myLists = this.list.getList()
        this.listName = this.myLists.filter(item=>{return item._id === this.listId})[0].title
      } 
  }
  ngOnInit(): void {
    
  }
  @Input() listId:string|number|null = null


  addTask(){
    this.router.navigate(["/addTask"])
  }
}
