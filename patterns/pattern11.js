function pattern11(n){
    for(let row=1;row<=n;row++)
    {
        let str="";
        let space=n-row;
        for(let i=1;i<=space;i++){
            str+=" ";
        }
        let counter=1;
        for(let j=1;j<=row;j++){
            str+=counter;
            counter++;
        }
        let counter2=row-1;
        for(let i=1;i<=row-1;i++){
            str+=counter2;
            counter2--
        }
        console.log(str);
    }
}
pattern11(6);