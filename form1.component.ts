import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  loginForm: FormGroup
  constructor(private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit() {
  }
  login(data) {
    let data1 = JSON.parse(localStorage.getItem("userDetails"))
    //console.log("1", data.value)
    let em = data1.Email;
    let ps = data1.Password;
    if (em == data.value.email && ps == data.value.password) {
      alert("Welcome   "+em);
    }else {
      alert("Please check email and password");
    }
  }

}
