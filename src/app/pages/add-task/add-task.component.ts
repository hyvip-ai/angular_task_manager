import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/task/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private aroute:ActivatedRoute,private router:Router,private task:TasksService) { }
  taskTitle:string=''
  listId:string=''
  ngOnInit(): void {
   this.listId = this.aroute.snapshot.params.listID
  }
  goBack(){
    this.router.navigate(["/home"])
  }
  addTask(){
    console.log(this.taskTitle)
    this.task.addTask(this.taskTitle,this.listId)
    this.router.navigate(["/home"])
  }
}
