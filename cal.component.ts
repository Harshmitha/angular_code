import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
fun11(a1,a2,a5){
  var c,d;
  var a3;
  switch(a5)
  {
    case'+': c = parseInt(a1);
              d = parseInt(a2);
    a3 = c+d;alert("the value is "+a3);
    break;
    case '-': a3 = a1-a2;alert("the value is "+a3);
    break;
    case '*': a3 = a1*a2;alert("the value is "+a3);
    break;
    case '/': a3 = a1/a2;alert("the value is "+a3);
    break;
  }
}
}
