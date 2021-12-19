import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { ListsService } from "src/app/services/list/lists.service";
import { TasksService } from "src/app/services/task/tasks.service";
import { List } from "src/app/shared/List";
import { Task } from "src/app/shared/Task";

@Component({
  selector: "app-task-right",
  templateUrl: "./task-right.component.html",
  styleUrls: ["./task-right.component.css"],
})
export class TaskRightComponent implements OnInit, OnChanges {
  constructor(
    private task: TasksService,
    private list: ListsService,
    private router: Router
  ) {}
  myTasks: Task[] = [];
  listName: string = "";
  myLists: List[] = [];
  searchData: string = "";
  filteredTasks: Task[] = [];
  ngOnChanges(): void {
    if (this.listId) {
      this.task.myTaskObservables.subscribe((res) => {
        this.myTasks = res;
        this.myTasks = this.myTasks.filter((item) => {
          return item._listId === this.listId;
        });
        this.filteredTasks = [...this.myTasks]
        this.list.myListObservble.subscribe((res) => {
          if (this.listId) {
            this.myLists = [...res];
            this.listName = this.myLists.filter((item) => {
              return item._id === this.listId;
            })[0]?.title;
          }
        });
      });
    }
  }
  ngOnInit(): void {}
  @Input() listId: string = "";

  addTask() {
    this.router.navigate([`/${this.listId}/addTask`]);
  }
  filterTasks() {
    this.filteredTasks = this.myTasks.filter((item) => {
      return item.title.toLowerCase().includes(this.searchData.toLowerCase());
    });
  }
  showModal() {
    this.list.togglModal();
  }
}
