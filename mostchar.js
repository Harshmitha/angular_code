var array=['h', 'e', 'l', 'l', 'o', 'w', 'o','r', 'l', 'd'];
var a = 1;
var b = 0;
var item;
for (var i=0; i<array.length; i++)
{
        for (var j=i; j<array.length; j++)
        {
                if (array[i] == array[j])
                 b++;
                if (a<b)
                {
                  a=b; 
                  item = array[i];
                }
        }
        b=0;
}
console.log(item+" ( " +a +" times ) ") ;
