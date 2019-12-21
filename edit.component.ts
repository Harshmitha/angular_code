import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  reg: FormGroup;
data1:string
user1:string
user2:string
user3:string
user4:string
user5:string
  constructor(private router:Router) {
    this.reg = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      mobile: new FormControl(''),
      gender: new FormControl(''),
    })
   }

  ngOnInit() {
    let data1 = JSON.parse(localStorage.getItem("userDetails"))
    console.log(data1)
    this.user1=data1.Name
    this.user2=data1.Email
    this.user3=data1.Password
    this.user4=data1.Mobile
    this.user5=data1.Gender


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
    this.router.navigateByUrl("crud")
  }
  update(){
    this.router.navigateByUrl("crud")
  }
}


