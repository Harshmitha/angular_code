// var str = 'hellow world';
// var chars = str.split("");
var chars = ['h', 'e', 'l', 'l', 'o', 'w', 'o','r', 'l', 'd'];
var letter_count = {};
for(var i = 0;i < chars.length;i++)
{
    if(letter_count[chars[i]] == undefined)
    letter_count[chars[i]] =0;
    letter_count[chars[i]]++;
}
for(var i in letter_count)
{
     console.log(i + ' = ' + letter_count[i]);
}


