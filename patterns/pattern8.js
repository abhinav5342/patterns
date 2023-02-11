function upperTriangle(n){

    for(let row=1;row<=n;row++){
    
        let space=n-row;
    
        let str="";
      
        for(j=1;j<=space;j++)
        {
            str+=" ";
        }
        let star=2*row-1;
    
        for(let col=1;col<=star;col++)
        {
            str+="*"
        }
        console.log(str);
    }
}

function lowerTriangle(n)
{
    for(let row=1;row<=n;row++)
    {
        let space=row;
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

function pattern8(n){
    upperTriangle(n);
    lowerTriangle(n);
}

pattern8(5);