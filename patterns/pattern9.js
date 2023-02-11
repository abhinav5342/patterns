function upperTriangle(n){
    for(let row=1; row<=n; row++)
    {
      let str="";
      for(let col=1;col<=row;col++){
        str+="*";
      }
      console.log(str);
    }
}

function lowerTriangle(n){
    for(let row=1;row<=n;row++){
        let str="";
        for(let col=row+1;col<=n;col++){
            str+="*";
        }
        console.log(str);
    }
}

function pattern9(n){
    upperTriangle(n);
    lowerTriangle(n);
}
pattern9(5);