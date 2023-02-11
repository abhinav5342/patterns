function patterns4(n){

    for (let row=1;row<=n;row++)
    {
        let space=n-row;
        let str="";
        for (let j=1;j<=space;j++)
        {
         str+=" ";
        }
        let star=row;
        for(let col=1;col<=star;col++)
        {
            str+="*";
        }
        console.log(str);
    }
}
    
// patterns4(2);pppp
patterns4(5);