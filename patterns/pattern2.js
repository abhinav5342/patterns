function pattern2(n)
{
    for (let row =1; row<=n; row++)
    {
        let str ="";
        for(let col=1; col<=row; col++)
        {
            str+="*";
        }
        console.log(str);
    }
}

pattern2(5);
// pattern2(2);
// pattern2(12);