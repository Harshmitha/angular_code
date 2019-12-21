import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public employeeData = [
    {
      "userId" : "18",
      "name" : {
        "firstName" : "Aaa",
        "lastName" : "Bbb"
      },
      "jobTitleName":"web",
      "phoneNum":4533744
    },
    {
      "userId" : "19",
    "name" : {
      "firstName" : "Daa",
      "lastName" : "Cbb"
    },
    "jobTitleName":"web",
    "phoneNum":4533744
  },
  {"userId" : "19",
  "name" : {
    "firstName" : "Daa",
    "lastName" : "Cbb"
  },
  "jobTitleName":"web",
  "phoneNum":4533744
}
  ]

  constructor() { }

  ngOnInit() {
  }

}
