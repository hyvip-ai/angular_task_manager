import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/list/lists.service';
import { TasksService } from 'src/app/services/task/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private list: ListsService,private task:TasksService) {}
  listId: string = '';
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
    this.list.listObservable.subscribe((res) => {
      console.log('List Id changing');
      this.listId = res;
    });
  }
}
