//  var arr=[1,2,3,4,2]
//  arr.splice(1,-1);
//  console.log(arr);
var arr=[1,2,3,4,2]
     
var temp=[]
var j=0
for(var i=0;i<arr.length;i++)
{
    if(arr[i] !== 2)
    {
    temp[j]=arr[i]
    j++
    }

}
console.log(temp)

