import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }
  @Input() task:Task = {
    _id:0,
    _listId:0,
    title:"",
    completed:false
  }
  ngOnInit(): void {
  }

}
