//print * in decending

var str;
for(var i=1;i<=5;i++)
{
    str = " ";
    for(var j=5;j>=i;j--)
    {
        str += "*" + " ";
       
    }
    console.log(str);
}