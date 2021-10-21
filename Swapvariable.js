let a=10;
let b=20;

let temp=a;
a=b;
b=temp;

console.log(a,b);

//  es6 concept

let p=100;
let q=200;

[p,q]=[q,p];

console.log(p,q);

// withous third variable

let r=50;
let s=60;

r=r+s;
s=r-s;
r=r-s;


console.log(r,s);