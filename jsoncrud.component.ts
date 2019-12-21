import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jsoncrud',
  templateUrl: './jsoncrud.component.html',
  styleUrls: ['./jsoncrud.component.css']
})
export class JsoncrudComponent implements OnInit {
  save:FormGroup;
  public id
  public user_name
  public password
  sdata: Object;
  rid: string;

  constructor(private http:HttpClient) {
    this.save=new FormGroup({
      id:new FormControl(),
      user_name:new FormControl(),
      password:new FormControl
})
   }

  ngOnInit() {
  }
  store(val){
    let data={
      id:val.value.id,
      user_name:val.value.user_name,
      password:val.value.password
    }
    this.http.post("http://localhost:3000/posts",data).subscribe(data=>{
      console.log(data)
      
    })
  }
store1(){
  this.http.get("http://localhost:3000/posts").subscribe(data=>{
    console.log(data)
    this.sdata=data;
  })
}
store2(){
  this.http.delete("http://localhost:3000/posts"+"/"+this.rid).subscribe(data=>{
    console.log("Successfully Deleted")
    this.store1();
    
  })
}
}
