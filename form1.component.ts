import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
reg: FormGroup;
  constructor(private router:Router) {
    this.reg = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      mobile: new FormControl(''),
      gender: new FormControl(''),
    })
   }
login(){
  this.router.navigateByUrl("login1")
}
update(){
  this.router.navigateByUrl("crud")
}
  ngOnInit() {
  }
  submit(data){
    console.log("value",data.value);
    let UserData = {
      Name: data.value.name,
      Email: data.value.email,
      Password: data.value.password,
      Mobile: data.value.mobile,
      Gender: data.value.gender
    }
    localStorage.setItem("userDetails",JSON.stringify(UserData ))
    this.router.navigateByUrl("login")
  }
}
