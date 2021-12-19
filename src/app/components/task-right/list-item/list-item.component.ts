import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/task/tasks.service';
import { Task } from 'src/app/shared/Task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private taskService:TasksService,private router:Router) { }

  ngOnInit(): void {
  }
  @Input() task:Task ={
    _id:'',
    _listId:'',
    title:"",
    completed:false
  }
  toogleCompletion(){
    console.log(this.task._id)
    this.taskService.toogleCompletion(this.task._id)
  }
  deleteTask(){
    console.log(this.task._id)
    this.taskService.deleteTask(this.task._id)
  }
  editTask(){
    this.router.navigate([`/editTask/${this.task._id}`])
  }
}
