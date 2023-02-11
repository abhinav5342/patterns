function pattern7(n){
    for(let row=1;row<=n;row++)
    {
        let space=row-1;
        let str="";
        for(j=1;j<=space;j++)
        {
            str+=" ";
        }
        let star=2*(n-space)-1;
        
        for(let col=1;col<=star;col++)
        {
            str+="*";
        } 
        console.log(str);
    }
}
pattern7(5);