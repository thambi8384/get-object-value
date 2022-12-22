let a=parseInt(prompt("enter the number"));
let b;
for(i=1;a!=0;i++){
    b=a%10;
    a=Math.floor(a/10);

    console.log(b);
}  

