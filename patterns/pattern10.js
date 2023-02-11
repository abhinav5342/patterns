function upper(n){
    for(let row=1;row<=(n-1)/2;row++)
    {
        let str="";
        let leftstar=row;
        for(let i=1;i<=leftstar;i++)
        {
            str+="*";
        }
        let space=n-2*row;
        for(let j=1;j<=space;j++)
        {
            str+=" ";
        }
        let rightstar=row;
        for(let k=1;k<=rightstar;k++){
            str+="*";
        }
        console.log(str);
    }
}
function middle(n){
    let str="";
    for(let i=1;i<=n;i++){
        str+="*";
    }
    console.log(str);
}
function lower(n){
    for(let row=1;row<=(n-1)/2;row++)
    {
       let str="";
       let leftstar=((n-1)/2)-row+1;
       for(let i=1;i<=leftstar;i++)
       {
          str+="*";
       }
       let space = 2*row-1;
       for(let i=1;i<=space;i++)
       {
            str+=" ";
       }
       let rightstar=((n-1)/2)-row+1;
       for(let i=1;i<=rightstar;i++)
       {
          str+="*";
       }
       console.log(str);
    }
}
function pattern10(n){
    upper(n);
    middle(n);
    lower(n);
}

// pattern10(7);
// pattern10(9);
pattern10(5);

// pattern10(3);
