export class hello{
    x;
    y;
    constructor(a,b){
this.x=a;
this.y=b;
    }
    display(){
        console.log(this.x ,this.y);
    }
}
var day=new hello(1,2);
day.display();

