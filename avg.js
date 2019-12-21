var student=[['aa',76],['bb',65],['cc',77],['dd',88],['ee',65]]
var avg=0;
for(var i=0;i<student.length;i++)
{
    avg+=student[i][1];
    var average=(avg/student.length)
}
console.log("average grade:" +average);
if(average<=60){
console.log("Grade c")
}else if(average<=70){
    console.log("Grade B")
}else if(average<=80){
    console.log("Grade A")
}else if(average<=100){
    console.log("Grade S")
}



