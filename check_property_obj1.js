// program to check if the object consists of
//  given property n return true
// method 1 by using typeof

var work={FN:"harsh",LN:"walia",Age:"23"}
if("undefined" === typeof(work["FN"])){
    console.log(false)
}else{
    console.log(true)
}