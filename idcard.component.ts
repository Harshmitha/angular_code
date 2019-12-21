import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {
  rand=Math.floor(Math.random()*(999999-100000))+100000;

  constructor() { }

  ngOnInit() {
  }
  submit(){
    alert(this.rand)
  }

}
