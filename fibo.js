fib = (n) => {
    if(n<=1)
        return n;
    else
        return fib(n-1) + fib(n-2);
}
// console.log(fib(12));

shift = (array,direct,n) => {
    let array2 = [...array];
    for(var i=n; i<array.length+n; i++){
        if(direct=="right"){
            array[i%array.length]=array2[i-n];
        } else {
            array[i-n]=array2[i%array.length];
        }
    }
    return array;
}
console.log(shift(['john', 'jane', 'sarah', 'alex'], 'left', 2));
console.log(shift([1, 2, 3, 4, 5 ], 'right', 3));

vowels = (text) => {
    let count = 0;
    for(var i=0; i<text.length; i++){
        if(text[i]=='a'||text[i]=='e'||text[i]=='i'||text[i]=='o'||text[i]=='u')
            count+=1;
    }
    return count;
}
// console.log(vowels("my pyx"));

disvis = (x,y,k) => {
    let num = [];
    for( var i=x; i<=y; i++){
        if(i%k==0)
            num.push(i);
    }
    return num;
}
console.log(disvis(6,100,5));

console.log("hahi");
console.log("hahi huha");

