import { Component, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/list/lists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private list:ListsService) { }
  listId:number|string|null = null;
  ngOnInit(): void {
    this.list.listObservable.subscribe(res=>{
      this.listId = res
    })
  }

}
