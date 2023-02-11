function pattern5(n){
    for(let row=1;row<=n;row++)
    {
        let space=row-1;
        let str="";
        for(let j=1;j<=space;j++)
        {
            str+=" ";
        }
        let star=n-row;
        for(let col=0;col<=star;col++){
            str+="*";
        }
        console.log(str);
    }
}

pattern5(6);