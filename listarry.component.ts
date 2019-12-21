import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listarry',
  templateUrl: './listarry.component.html',
  styleUrls: ['./listarry.component.css']
})
export class ListarryComponent implements OnInit {
// public array=["Array","Node","JavaScript","React"]
  constructor() { }

  ngOnInit() {
  }
   myFunction() {
    var d = new Date();
    d.setFullYear(2020);
    alert(d)
  }
}
