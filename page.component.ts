import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'harsh',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  bulbOff = true;
  bulbOn = false;
  constructor() { }

  ngOnInit() {
  }
  on(){
    this.bulbOn = true;
    this.bulbOff = false;
  }
  off(){
    this.bulbOn = false;
    this.bulbOff = true;
  }

}
