import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListsService } from 'src/app/services/list/lists.service';

@Component({
  selector: 'app-edit-list-name',
  templateUrl: './edit-list-name.component.html',
  styleUrls: ['./edit-list-name.component.css']
})
export class EditListNameComponent implements OnInit {

  constructor(private router:Router,private list:ListsService,private aroute:ActivatedRoute) { }
  listName:string =''
  ngOnInit(): void {
    this.listName = this.list.getListTitle(this.aroute.snapshot.params.listId)
  }
  goBack(){
    this.router.navigate(["/home"])
  }
  editListName(){
    this.list.editList(this.listName,this.aroute.snapshot.params.listId)
    this.router.navigate(["/home"])
  }
}
