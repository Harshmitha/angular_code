var obj={}
str="Hello World"
for(var x = 0, length = str.length; x < length; x++)
{
    var l=str.charAt(x)
    obj[l]=(isNaN(obj[l])?1:obj[l]+1);
}
console.log(obj);
