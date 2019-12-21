import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-multhree',
  templateUrl: './multhree.component.html',
  styleUrls: ['./multhree.component.css']
})
export class MulthreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
fun()
{
  for(var i=0;i<=20;i++)
  {
    if(i%3==0)
    alert(i)

  }


   


}
}
