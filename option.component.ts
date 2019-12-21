import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  data=[ 
    {question:"Where is mahanandi located in india?", option:["Tamilnadu","Karnataka","AndhraPradesh","Telangana"]},
    {question:"What is your dream destination?",option:["Paris","Disneyland","Kashmir","Singapore"]},
    {question:"What is marsh gas?",option:["Methane","Ethane","Sulphide","Sulphate"]},
    {question:"India's largest city by population?",option:["Delhi","Mumbai","Chennai","Pune"]},
    {question:"Which state is known as India's spice garden?",option:["Kerala","Karnataka","Assam","Andhrapradesh"]},
    {question:"which is your favorite sport?",option:["Cricket","Soccer","Hockey","Badminton"]}
   ]
     len=0
     array=[]
     sum=6
     rem=0
  constructor() { }

  ngOnInit() {
  }
  submit(){
    alert("Total no. of questions are 6 \n" + "Attempted questions are "+ this.len +"\n"+"Remaining questions are "+ this.rem)
  }
  harsh(val){
    console.log(val)
    this.array.push(val)
    this.len=this.array.length
    this.rem=this.sum-this.len;
  }


}
