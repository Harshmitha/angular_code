import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insertarray',
  templateUrl: './insertarray.component.html',
  styleUrls: ['./insertarray.component.css']
})
export class InsertarrayComponent implements OnInit {
  public array=["Array","Node","JavaScript","React"]
  public arr1 = this.array.push("IOS","AWS","JAVA")
  constructor() { }

  ngOnInit() {
  }
  
  // fun()
  // {
  //   let arr=["Angular","Node","Js","React"]
  //   arr.push("IOS","AWS","Java");
  //   alert(arr)
  // }

}
