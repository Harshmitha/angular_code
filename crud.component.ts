import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public res=JSON.parse(localStorage.getItem("userDetails"))

  constructor() { }

  ngOnInit() {
  }
delete(){
 let res=JSON.parse(localStorage.getItem("userDetails"))
  this.res=""
}
}
