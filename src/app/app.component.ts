import { Component, OnInit } from '@angular/core';
import { ListsService } from './services/list/lists.service';
import { TasksService } from './services/task/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'task-manager';
  constructor(private list:ListsService,private task:TasksService){}
  ngOnInit(): void {
    if (localStorage.getItem('lists')) {
      this.list.setDeafultTasks(localStorage.getItem('lists')!)
    } else {
      localStorage.setItem('lists', JSON.stringify([]));
    }
    if (localStorage.getItem('tasks')) {
      this.task.setDeafultTasks(localStorage.getItem('tasks')!)
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }
}
