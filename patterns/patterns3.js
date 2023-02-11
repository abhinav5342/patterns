function pattern3(n){

    for(let row=1;row<=n;row++)
    {
        let str="";
        for(let col=row;col<=n;col++)
        {
            str+="*";
        }
        console.log(str);
    }
}
pattern3(5);
// pattern3(6);
