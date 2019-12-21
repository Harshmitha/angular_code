import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public a:string;
  public b=[]

  constructor(private action:SerService) { }

  ngOnInit() {
    this.a=this.action.sermethod();
    this.b=this.action.gamesArray;
  }

}
