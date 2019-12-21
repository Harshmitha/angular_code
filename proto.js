function works(a1,a2)
{
    this.FN=a1;
    this.LN=a2;
}
var x=new works("harsh","walia");
works.prototype.age="23";
works.prototype.place="gul";
console.log(x.place,x.age);