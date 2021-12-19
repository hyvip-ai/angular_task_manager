import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListsService } from 'src/app/services/list/lists.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private list:ListsService,private router:Router) { }
  showModal:boolean = false
  listId:string =''
  ngOnInit(): void {
    this.list.showModalObservables.subscribe(res=>{
      this.showModal = res
    })
    this.list.listObservable.subscribe(res=>{
      this.listId = res
    })
  }
  deleteList(){
    this.list.deleteList()
  }
  editList(){
    this.router.navigate([`/editList/${this.listId}`])
  }
}
