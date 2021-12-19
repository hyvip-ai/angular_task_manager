import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/task/tasks.service';

@Component({
  selector: 'app-edittask-name',
  templateUrl: './edittask-name.component.html',
  styleUrls: ['./edittask-name.component.css']
})
export class EdittaskNameComponent implements OnInit {

  constructor(private router:Router,private aroute:ActivatedRoute,private task:TasksService) { }

  ngOnInit(): void {
    this.newTaskName = this.task.getTaskTitle(this.aroute.snapshot.params.taskId);
    console.log(this.newTaskName)
  }
  goBack(){
    this.router.navigate(["/home"])
  }
  newTaskName:string =''
  
  saveEdit(){
    this.task.editTask(this.newTaskName,this.aroute.snapshot.params.taskId)
    this.router.navigate(["/home"])
  }

}
