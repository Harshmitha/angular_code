interface employee 
{
    ename:string;
    eno:number;
}
    interface work extends employee
    {
        eaddress:string;
    }
var obj:work={
        ename:"harsh",
        eaddress:"gulb",
        eno:24
    }
    console.log(obj);