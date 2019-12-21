import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  loginForm:FormGroup

  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
      
    })
  }
  


  ngOnInit() {
  }
  login(data){
    let data1 = JSON.parse(localStorage.getItem("userDetails"))
    let em = data1.Email;
    let ps = data1.Password;
    if(em == data.value.email && ps == data.value.password){
      alert("Login Successfully");
    }else{
      alert("Please check email and password")
    }

}
}