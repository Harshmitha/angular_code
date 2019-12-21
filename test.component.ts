import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
public followers;
  constructor(public http: HttpClient, public route:ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/mosh-hamedani/followers').subscribe(data => {
      this.followers =  data;
    });
    this.route.params.subscribe(data=>{
      console.log(data);
    })
  }

}
