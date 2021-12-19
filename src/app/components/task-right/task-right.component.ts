import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-right',
  templateUrl: './task-right.component.html',
  styleUrls: ['./task-right.component.css']
})
export class TaskRightComponent implements OnInit,OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
      console.log(this.listId)
  }
  ngOnInit(): void {
  }
  @Input() listId:string|number|null = null

}
