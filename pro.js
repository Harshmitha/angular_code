function human(a,b,c){
  this.value1=a;
  this.value2=b;
  this.value3=c;
}
human.prototype.value3="key";
var newhuman=new human("fn","ln","age")
newhuman__proto__value4="things";