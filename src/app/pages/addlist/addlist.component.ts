import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/list/lists.service';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  constructor(private listService:ListsService,private router:Router) { }
  listName:string = ''
  ngOnInit(): void {
  }
  goBack(){
    this.router.navigate(["/home"])
  }
  addList(){
    this.listService.addToList(this.listName)
    this.router.navigate(['/home'])
  }

}
