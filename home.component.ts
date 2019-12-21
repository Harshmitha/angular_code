import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  button {
    color:red;
  }`]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
tobenches(){
  alert("Welcome to Page");
  this.router.navigateByUrl("page");
}

}

