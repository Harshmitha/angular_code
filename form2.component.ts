import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  reg: FormGroup;

  constructor(private router: Router) {
    this.reg = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      mobile: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),

    })
   }
   login(){
     this.router.navigateByUrl("form1");
   }

  ngOnInit() {
  }
save(data){
  console.log("value",data.value);
  let UserData = {
      Name: data.value.name,
      Email: data.value.email,  
      Password: data.value.password,
     Mobile: data.value.mobile,
      Address: data.value.address,
      Gender: data.value.gender,
  }
  localStorage.setItem("userDetails",JSON.stringify(UserData))
}
}
