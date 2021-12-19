import { Component, Input, OnInit } from '@angular/core';
import { ListsService } from 'src/app/services/list/lists.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private list:ListsService) { }
  showModal:boolean = false
  ngOnInit(): void {
    this.list.showModalObservables.subscribe(res=>{
      this.showModal = res
    })
  }
  deleteList(){
    this.list.deleteList()
  }
  
}
