// var char=function(str)
// {
//     for(var i=0;i<str.length;i++)
//     {
//         for(var j=i+1;j<=str.length;j++)
//         {
//             if(str[i]==str[j]){
//                 return true;
                

//             }
//         }
//     }
    
//                 return false;
// }
// console.log(char("hellooo"))
var char="a";
var str="helooooaabbc"
var count=0;
for(i=0;i<str.length;i++)
{
    if(char==str[i]){
    count++;
    }
}
   if(count>=2)
   {
       console.log("true");

       //str1=str.replace(/a/g, '');
       var str1=str.replace("helooooaabbc","heloooobbc");
       console.log(str1);
   }
   else{
    console.log("false");
   }