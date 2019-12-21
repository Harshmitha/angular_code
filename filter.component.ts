import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public fname=["Jill","Eve","Adam"]
  public lname=["Smith","Jackson","Johnson"]
  public point=["50","99","41"]
  public a=['a','b','c','d','a','b','c','d','a','b','c','d']
   num=2.0000001
  
fn=this.fname.sort();
ln=this.lname.sort();
pt=this.point.sort();


  constructor() { }

  ngOnInit() {
  }

}
