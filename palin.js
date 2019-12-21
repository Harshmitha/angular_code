var str="hello world madam is calling u you with Racecar"
var arr=str.split(" ")
var final;
var temp=0;
for(var i=0;i<arr.length;i++)
{
    if(arr[i])
    {
        var str=arr[i].toString()
        var rev=""
        for(var j=str.length-1;j>=0;j--)
        {
            rev=rev+str[j]
        }
        if(rev==str)
        {
            if(temp<str.length){
                temp=str.length;
                final=str;
            
            }
        }

    }
}
    console.log(final);