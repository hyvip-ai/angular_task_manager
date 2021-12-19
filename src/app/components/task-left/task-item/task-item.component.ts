import { Component, Input, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/list/lists.service';
import { TasksService } from 'src/app/services/task/tasks.service';
import { List } from 'src/app/shared/List';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor(private list:ListsService) { }

  ngOnInit(): void {
  }
  @Input() List:List={_id:'',title:''}
  chnageTaskView(id:string){
    this.list.changeListId(id)
  }
}
