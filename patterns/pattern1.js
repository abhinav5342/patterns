function pattern1(n)
{
    for (let row=1; row <=n; row++)
    {
        // console.log(" ");
        let str = " ";
        for (let col=1; col<=n; col++)
        {
             str +="*";
        }
        console.log(str);
    }
}


pattern1(4);
// pattern1(3);