import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/task/tasks.service';
import { Task } from 'src/app/shared/Task';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
  }
  @Input() task:Task ={
    _id:0,
    _listId:0,
    title:"",
    completed:false
  }
  toogleCompletion(){
    console.log(this.task._id)
    this.taskService.toogleCompletion(this.task._id)
  }
}
